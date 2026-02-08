<script setup lang="ts">
import { computed } from 'vue'

/**
 * Lightweight syntax highlighter. Vue-style colors (One Dark–inspired).
 * Tokenizes TS/JS and HTML; safe for v-text (no v-html).
 */

export type CodeLanguage = 'ts' | 'vue' | 'html'

interface Token {
  type: 'keyword' | 'string' | 'comment' | 'number' | 'tag' | 'attr' | 'punctuation' | 'default'
  text: string
}

function tokenize(code: string | undefined, lang: CodeLanguage): Token[] {
  const s: string = code ?? ''
  const tokens: Token[] = []
  let i = 0
  const len = s.length

  while (i < len) {
    // Block comment
    if (s.slice(i, i + 2) === '/*') {
      const end = s.indexOf('*/', i + 2)
      const endIdx = end === -1 ? len : end + 2
      tokens.push({ type: 'comment', text: s.slice(i, endIdx) })
      i = endIdx
      continue
    }
    // Line comment
    if (s.slice(i, i + 2) === '//') {
      const nl = s.indexOf('\n', i + 2)
      const endIdx = nl === -1 ? len : nl
      tokens.push({ type: 'comment', text: s.slice(i, endIdx) })
      i = endIdx
      continue
    }
    // Template literal
    if (s[i] === '`') {
      let j = i + 1
      while (j < len && s[j] !== '`') {
        if (s[j] === '\\') j++
        j++
      }
      tokens.push({ type: 'string', text: s.slice(i, j + 1) })
      i = j + 1
      continue
    }
    // Double-quoted string
    if (s[i] === '"') {
      let j = i + 1
      while (j < len && s[j] !== '"') {
        if (s[j] === '\\') j++
        j++
      }
      tokens.push({ type: 'string', text: s.slice(i, j + 1) })
      i = j + 1
      continue
    }
    // Single-quoted string
    if (s[i] === "'") {
      let j = i + 1
      while (j < len && s[j] !== "'") {
        if (s[j] === '\\') j++
        j++
      }
      tokens.push({ type: 'string', text: s.slice(i, j + 1) })
      i = j + 1
      continue
    }
    // HTML tag (for vue/html)
    if ((lang === 'vue' || lang === 'html') && s[i] === '<' && /^<\/?[\w-]/.test(s.slice(i))) {
      const close = s[i + 1] === '/'
      let j = i + (close ? 2 : 1)
      while (j < len && /[\w-]/.test(s[j] ?? '')) j++
      tokens.push({ type: 'tag', text: s.slice(i, j) })
      i = j
      continue
    }
    // Keyword (TS/JS)
    const kwMatch = s.slice(i).match(/^\b(const|let|var|function|return|import|from|export|default|ref|computed|watch|onMounted|onUpdated|onUnmounted|defineProps|defineExpose|true|false|type|interface)\b/)
    if (kwMatch) {
      tokens.push({ type: 'keyword', text: kwMatch[0] })
      i += kwMatch[0].length
      continue
    }
    // Number
    const numMatch = s.slice(i).match(/^\d+\.?\d*/)
    if (numMatch) {
      tokens.push({ type: 'number', text: numMatch[0] })
      i += numMatch[0].length
      continue
    }
    // Default: one char (preserve structure)
    tokens.push({ type: 'default', text: s[i] ?? '' })
    i++
  }
  return tokens
}

const props = withDefaults(
  defineProps<{
    code: string
    language?: CodeLanguage
    label?: string
  }>(),
  { language: 'ts', label: 'Source code' }
)

const lang = computed((): CodeLanguage => props.language ?? 'ts')
const tokens = computed(() => tokenize(props.code ?? '', lang.value))
</script>

<template>
  <div class="code-block">
    <div class="code-block__header">
      <span class="code-block__label">{{ props.label ?? 'Source code' }}</span>
      <span class="code-block__lang">{{ lang }}</span>
    </div>
    <pre class="code-block__pre"><code class="code-block__code"><span
      v-for="(t, i) in tokens"
      :key="i"
      :class="['code-block__token', `code-block__token--${t.type}`]"
    >{{ t.text }}</span></code></pre>
  </div>
</template>

<style scoped>
.code-block {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--code-bg);
}

.code-block__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid var(--border);
  font-size: 0.75rem;
}

.code-block__label {
  font-weight: 500;
  color: var(--text-muted);
}

.code-block__lang {
  color: var(--text-subtle);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.code-block__pre {
  margin: 0;
  padding: var(--gap);
  overflow-x: auto;
  font-size: 0.8125rem;
  line-height: 1.6;
}

.code-block__code {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
  display: block;
  white-space: pre;
}

.code-block__token--keyword { color: #c678dd; }
.code-block__token--string { color: #98c379; }
.code-block__token--comment { color: #5c6370; font-style: italic; }
.code-block__token--number { color: #d19a66; }
.code-block__token--tag { color: #e06c75; }
.code-block__token--attr { color: #d19a66; }
.code-block__token--punctuation { color: #abb2bf; }
.code-block__token--default { color: #abb2bf; }
</style>
