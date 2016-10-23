var React = require('react');

var About = (props) => {
    return (
        <div>
          <h1 className="text-center">About ReactWeather</h1>
          <p>This is a Weather application build on React. I build this as a example on how to use React.</p>
          <p>Here is some Tools I used:</p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
            </li>
            <li>
              <a href="http://openWeathermap.org">Open Weather App</a> - This was the API I used to get the weather. 
            </li>
          </ul>
      </div>
    );
  }


module.exports = About;
