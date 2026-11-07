import { useState, useRef } from 'react'
import { MDXEditor, type MDXEditorMethods } from '@mdxeditor/editor'
import {
  toolbarPlugin,
  KitchenSinkToolbar,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  jsxPlugin,
  frontmatterPlugin,
  markdownShortcutPlugin,
  searchPlugin,
  maxLengthPlugin,
} from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'
import './theme.css'

const PLUGINS = [
  toolbarPlugin({
    toolbarContents: () => <KitchenSinkToolbar />,
  }),
  headingsPlugin(),
  listsPlugin(),
  quotePlugin(),
  thematicBreakPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  imagePlugin(),
  tablePlugin(),
  codeBlockPlugin(),
  codeMirrorPlugin(),
  diffSourcePlugin(),
  directivesPlugin(),
  jsxPlugin(),
  frontmatterPlugin(),
  markdownShortcutPlugin(),
  searchPlugin(),
  maxLengthPlugin(),
]

const INITIAL_MARKDOWN = `# MarkdownX Editor

A full-featured Markdown / MDX editor built with \`@mdxeditor/editor\`.

All plugins are enabled:

- Headings, lists, blockquotes, thematic breaks
- Links (with link dialog)
- Images
- Tables
- Code blocks + CodeMirror language support
- Diff / source mode
- Directives (admonitions, etc.)
- JSX components
- Frontmatter
- Markdown shortcuts
- Search & replace
- Max length

Use the toolbar to format and insert content. Toggle the theme switch in the header.
`

function App() {
  const editorRef = useRef<MDXEditorMethods>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const editorClassName = `markdownx-editor ${theme === 'dark' ? 'dark-theme' : ''}`

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
	backgroundColor: theme === "dark" ? "#000" : "#fff", 
      }}
    >
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative' }}>
        <MDXEditor
          ref={editorRef}
          plugins={PLUGINS}
          markdown={INITIAL_MARKDOWN}
          autoFocus
          className={editorClassName}
        />
      </div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `1px solid ${theme === 'dark' ? '#3f3f46' : '#d1d5db'}`,
          background: theme === 'dark' ? '#18181b' : '#fff',
          color: theme === 'dark' ? '#fafafa' : '#111827',
          cursor: 'pointer',
          fontSize: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
          boxShadow: theme === 'dark' ? '0 4px 6px rgba(0,0,0,0.4)' : '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  )
}

export default App
