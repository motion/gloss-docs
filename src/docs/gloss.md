---
title: Gloss
---

# Gloss

### Decorator

```
const { decorator: style } = gloss({
  baseStyles: styles,
  themeProp: 'theme',
  tagName: 'tagName',
  isColor: color => color && !!color.rgb,
  processColor: color => color.toString(),
})
```