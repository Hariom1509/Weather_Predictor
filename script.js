window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
		window.weatherWidgetConfig.push({
			selector:".weatherForecastWidget",
			apiKey:"PUBLIC_WIDGET_KEY",
			location:null,
			unitGroup:"metric"
		});
		(function() {
		var d = document, s = d.createElement('script');
		s.src = 'https://www.visualcrossing.com/widgets/forecast/weather-forecast-widget-d3.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
		})();
