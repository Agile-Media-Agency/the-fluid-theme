#!/bin/bash
# Quick lint for Fluid Theme conventions
# Run: bash .claude/scripts/lint-conventions.sh [file-or-directory]
# Exit code: 0 = clean, 1 = violations found

TARGET="${1:-.}"
VIOLATIONS=0

echo "=== Fluid Theme Convention Lint ==="

# Check for physical CSS properties
PHYSICAL=$(grep -rn "margin-top\|margin-bottom\|margin-left\|margin-right\|padding-top\|padding-bottom\|padding-left\|padding-right" --include="*.css" "$TARGET" 2>/dev/null | grep -v "node_modules" | grep -v ".git" | grep -v "reset.css")
if [ -n "$PHYSICAL" ]; then
  echo ""
  echo "❌ Physical CSS properties (use logical: margin-block-start, padding-inline, etc.):"
  echo "$PHYSICAL"
  VIOLATIONS=$((VIOLATIONS + $(echo "$PHYSICAL" | wc -l)))
fi

# Check for forbidden button labels in HTML
BUTTONS=$(grep -rn '>Submit<\|>OK<\|>Yes<\|>No<\|>Confirm<\|>Click Here<' --include="*.html" "$TARGET" 2>/dev/null | grep -v "node_modules" | grep -v ".git")
if [ -n "$BUTTONS" ]; then
  echo ""
  echo "❌ Forbidden button labels (use action-specific labels):"
  echo "$BUTTONS"
  VIOLATIONS=$((VIOLATIONS + $(echo "$BUTTONS" | wc -l)))
fi

# Check for <a><button> nesting
NESTING=$(grep -rn '<a[^>]*><button\|<a[^>]*>.*<button' --include="*.html" "$TARGET" 2>/dev/null | grep -v "node_modules" | grep -v ".git")
if [ -n "$NESTING" ]; then
  echo ""
  echo "❌ Invalid <a><button> nesting:"
  echo "$NESTING"
  VIOLATIONS=$((VIOLATIONS + $(echo "$NESTING" | wc -l)))
fi

# Check for focus outline removal
FOCUS=$(grep -rn "outline: none\|outline: 0\|outline:none\|outline:0" --include="*.css" "$TARGET" 2>/dev/null | grep -v "node_modules" | grep -v ".git" | grep -v "reset.css")
if [ -n "$FOCUS" ]; then
  echo ""
  echo "❌ Focus outline removal (never remove — restyle instead):"
  echo "$FOCUS"
  VIOLATIONS=$((VIOLATIONS + $(echo "$FOCUS" | wc -l)))
fi

# Check for "Are you sure?" in UI
AREYOUSURE=$(grep -rn "Are you sure" --include="*.html" "$TARGET" 2>/dev/null | grep -v "node_modules" | grep -v ".git")
if [ -n "$AREYOUSURE" ]; then
  echo ""
  echo "❌ 'Are you sure?' in UI (use specific action description):"
  echo "$AREYOUSURE"
  VIOLATIONS=$((VIOLATIONS + $(echo "$AREYOUSURE" | wc -l)))
fi

# Check animated CSS files for reduced motion support
for f in $(grep -rln "animation:\|@keyframes" --include="*.css" "$TARGET" 2>/dev/null | grep -v "node_modules" | grep -v ".git"); do
  if ! grep -q "prefers-reduced-motion" "$f"; then
    echo ""
    echo "⚠️  Animations without prefers-reduced-motion: $f"
  fi
done

echo ""
if [ $VIOLATIONS -eq 0 ]; then
  echo "✅ No violations found"
  exit 0
else
  echo "❌ $VIOLATIONS violation(s) found"
  exit 1
fi
