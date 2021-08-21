import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'container': {
    'minHeight': [{ 'unit': 'vh', 'value': 100 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }],
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'main': {
    'padding': [{ 'unit': 'rem', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'flex': '1',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'footer': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'footer img': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'footer a': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'title a': {
    'color': '#0070f3',
    'textDecoration': 'none'
  },
  'title a:hover': {
    'textDecoration': 'underline'
  },
  'title a:focus': {
    'textDecoration': 'underline'
  },
  'title a:active': {
    'textDecoration': 'underline'
  },
  'title': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'fontSize': [{ 'unit': 'rem', 'value': 4 }]
  },
  'title': {
    'textAlign': 'center'
  },
  'description': {
    'textAlign': 'center'
  },
  'description': {
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'code': {
    'background': '#fafafa',
    'borderRadius': '5px',
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.1 }],
    'fontFamily': 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace'
  },
  'grid': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'flexWrap': 'wrap',
    'maxWidth': [{ 'unit': 'px', 'value': 800 }],
    'marginTop': [{ 'unit': 'rem', 'value': 3 }],
    '<w600': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'flexDirection': 'column'
    }
  },
  'card': {
    'margin': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }],
    'flexBasis': '45%',
    'padding': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 1.5 }],
    'textAlign': 'left',
    'color': 'inherit',
    'textDecoration': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'borderRadius': '10px',
    'transition': 'color 0.15s ease, border-color 0.15s ease'
  },
  'card:hover': {
    'color': '#0070f3',
    'borderColor': '#0070f3'
  },
  'card:focus': {
    'color': '#0070f3',
    'borderColor': '#0070f3'
  },
  'card:active': {
    'color': '#0070f3',
    'borderColor': '#0070f3'
  },
  'card h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'card p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'logo': {
    'height': [{ 'unit': 'em', 'value': 1 }]
  }
});
