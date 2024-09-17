const Temperatura = () => {
    const celsiusParaFahrenheit = (c) => {
        return (c * 9 / 5) + 32;
    };

    const fahrenheitParaCelsius = (f) => {
        return (f - 32) * 5 / 9;
    };

    const kelvin = (k) => {
        const celsius = k - 273.15;
        const fahrenehit = celsiusParaFahrenheit(celsius);
        return { celsius, fahrenehit };
    };
    const resultadoCelsiusParaFahrenheit = celsiusParaFahrenheit(25);
    const resultadoFahrenheitParaCelsius = fahrenheitParaCelsius(77);
    const resultadoKelvin = kelvin(298);

    return (
        <div>
            <p>Celsius para Fahrenheit: {resultadoCelsiusParaFahrenheit} °F</p>
            <p>Fahrenheit para Celsius: {resultadoFahrenheitParaCelsius} °C</p>
            <p>Kelvin para Celsius: {resultadoKelvin.celsius} °C</p>
            <p>Kelvin para Fahrenheit: {resultadoKelvin.fahrenheit} °F</p>
        </div>
    );
};

export default Temperatura;