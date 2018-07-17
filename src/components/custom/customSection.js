import React, { Component } from 'react'
import Editor, { composeDecorators } from 'draft-js-plugins-editor'
import { EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil, onEditorStateChange } from 'draft-js'
import { fromJS } from 'immutable';

import createEmojiPlugin from 'draft-js-emoji-plugin'
import createHashtagPlugin from 'draft-js-hashtag-plugin'
import createImagePlugin from 'draft-js-image-plugin'
import createAlignmentPlugin from 'draft-js-alignment-plugin'
import createFocusPlugin from 'draft-js-focus-plugin'
import createResizeablePlugin from 'draft-js-resizeable-plugin'
import createDndPlugin from 'draft-js-drag-n-drop-plugin'
import createLinkifyPlugin from 'draft-js-linkify-plugin'
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'
import createToolbarPlugin from 'last-draft-js-toolbar-plugin'
import createSidebarPlugin from 'last-draft-js-sidebar-plugin'
import createEmbedPlugin from 'draft-js-embed-plugin'
import createLinkPlugin from 'draft-js-link-plugin'
import {colorStyleMap} from 'draft-js-color-picker-plugin'



import 'draft-js-emoji-plugin/lib/plugin.css'
import 'draft-js-hashtag-plugin/lib/plugin.css'
import 'draft-js-alignment-plugin/lib/plugin.css'
import 'draft-js-focus-plugin/lib/plugin.css'
import 'draft-js-linkify-plugin/lib/plugin.css'
import 'draft-js-mention-plugin/lib/plugin.css'
import 'last-draft-js-toolbar-plugin/lib/plugin.css'
import 'last-draft-js-sidebar-plugin/lib/plugin.css'
import 'draft-js-embed-plugin/lib/plugin.css'
import 'draft-js-link-plugin/lib/plugin.css'




/* Emoji plugin */


const emojiPlugin = createEmojiPlugin()
const { EmojiSuggestions } = emojiPlugin

/* Hashtag plugin */


const hashtagPlugin = createHashtagPlugin()

/* Image with Alignment, dnd, focus, resize plugin */




const focusPlugin = createFocusPlugin()
const resizeablePlugin = createResizeablePlugin()
const dndPlugin = createDndPlugin()
const alignmentPlugin = createAlignmentPlugin()
const { AlignmentTool } = alignmentPlugin

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  dndPlugin.decorator
)
const imagePlugin = createImagePlugin({ decorator })

/* Linkify */


const linkifyPlugin = createLinkifyPlugin()

/* Mentions */


const mentionPlugin = createMentionPlugin();
const { MentionSuggestions } = mentionPlugin;


/* ld plugins */

/* Toolbar */


const toolbarPlugin = createToolbarPlugin()
const { Toolbar } = toolbarPlugin

/* Side Toolbar */


const sidebarPlugin = createSidebarPlugin()
const { Sidebar } = sidebarPlugin

/* Embed plugin */


const embedPlugin = createEmbedPlugin()

/* Link plugin */


const linkPlugin = createLinkPlugin()

/* Color */


/* init the plugins */
const plugins = [
  dndPlugin, focusPlugin, alignmentPlugin, resizeablePlugin, imagePlugin,
  emojiPlugin, hashtagPlugin, linkifyPlugin, mentionPlugin,
  toolbarPlugin, sidebarPlugin, embedPlugin, linkPlugin
]

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { suggestions: props.mentions || fromJS([]) }
    this.keyBindings = this.props.keyBindings || []
  }

  onChange = (editorState) => {
    this.props.onChange(editorState)
  }

  focus = () => {
    this.editor.focus()
  }

  onSearchChange = ({ value }) => {
    if (this.props.mentionSearchAsync !== undefined) {
      /* async */
      this.props.mentionSearchAsync(value)
      .then((data) => { this.setState({suggestions: fromJS(data.suggestions)}) })
    } else {
      /* static list of users */
      this.setState({
        suggestions: defaultSuggestionsFilter(value, this.props.mentions),
      })
    }
  }
  
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  }


  handleKeyCommand (command) {
    if (this.keyBindings.length) {
      const kb = this.keyBindings.find(k => k.name === command)
      if (kb) {
        kb.action()
        return true
      }
    }
    const newState = RichUtils.handleKeyCommand(this.props.editorState, command)
    if (newState) {
      this.props.onChange(newState)
      return true
    }
    return false
  }

  handleReturn (event) {
    if (!event.shiftKey) { return false }
    const newState = RichUtils.insertSoftNewline(this.props.editorState)
    this.props.onChange(newState)
    return true
  }

  render () {
    return (
      <div>
        <div className='editor'>
          <Editor
            editorState={this.props.editorState}
            // onChange={this.onChange}
            onEditorStateChange={this.onEditorStateChange}
            plugins={plugins}
            customStyleMap={colorStyleMap}
            handleKeyCommand={this.handleKeyCommand}
            handleReturn={this.handleReturn}
            ref={(element) => { this.editor = element }}
          />
          <AlignmentTool />
          <Toolbar />
          <Sidebar />
          <EmojiSuggestions />
          <MentionSuggestions
            onSearchChange={this.onSearchChange}
            suggestions={this.state.suggestions}
            onClose={() => this.setState({suggestions: fromJS([])})}
          />
        </div>
      </div>
    )
  }
}