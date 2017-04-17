var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
  var languages = ['All', 'Java', 'Javascript', 'Ruby', 'CSS', 'Python'];

  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLang ? { color: '#d0021b' } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      }, this)}
    </ul>
  )
}

SelectLanguage.PropTypes = {
  selectedLang: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: 'All'
    };

    this.updateLang = this.updateLang.bind(this);
  }

  updateLang(lang) {
    this.setState(function () {
      return {
        selectedLang: lang
      }
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLang={this.state.selectedLang}
          onSelect={this.updateLang}
        />
      </div>
    )
  }
}

module.exports = Popular;