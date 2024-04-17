document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("carbonnee")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const electricityUsage = parseFloat(
        document.getElementById("electricityUsage").value
      );
      const gasUsage = parseFloat(document.getElementById("gasUsage").value);
      const vehicleFuelUsage = parseFloat(
        document.getElementById("vehicleFuelUsage").value
      );
      const vehicleMileage = parseFloat(
        document.getElementById("vehicleMileage").value
      );
      const publicTransportUsage = parseFloat(
        document.getElementById("publicTransportUsage").value
      );

      const calculator = new CarbonFootprintCalculator(
        electricityUsage,
        gasUsage,
        vehicleFuelUsage,
        vehicleMileage,
        publicTransportUsage
      );
      const carbonFootprint = calculator.calculateCarbonFootprint();

      document.getElementById(
        "result"
      ).innerText = `Votre empreinte carbone estimée est de ${carbonFootprint.toFixed(
        2
      )} kg CO2eq.`;
    });
});
