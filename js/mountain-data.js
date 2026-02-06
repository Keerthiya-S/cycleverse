const mountainBikes = [

  {
    id: "trail-blazer-x",
    name: "Trail Blazer X",
    price: "₹24,999",
    image: "images/mountain1.png",
    description: "A rugged trail bike designed for beginners and enthusiasts who love off-road adventures.",
    colors: ["#111827", "#dc2626", "#16a34a"],
    specs: [
      "Frame: Alloy Steel",
      "Suspension: Front Suspension",
      "Wheel Size: 27.5 inches",
      "Brakes: Mechanical Disc",
      "Gears: 21-Speed Shimano"
    ]
  },

  {
    id: "rock-pro-29",
    name: "Rock Pro 29",
    price: "₹29,499",
    image: "images/mountain2.png",
    description: "Built for speed and control with 29-inch wheels for smooth trail riding.",
    colors: ["#0f172a", "#2563eb"],
    specs: [
      "Frame: Aluminum Alloy",
      "Suspension: Hardtail",
      "Wheel Size: 29 inches",
      "Brakes: Hydraulic Disc",
      "Gears: 24-Speed Shimano"
    ]
  },

  {
    id: "summit-beast",
    name: "Summit Beast",
    price: "₹34,999",
    image: "images/mountain3.png",
    description: "A full-suspension beast made to conquer extreme terrains and mountain trails.",
    colors: ["#020617", "#f97316"],
    specs: [
      "Frame: Aluminum Full Suspension",
      "Suspension: Front & Rear",
      "Wheel Size: 27.5 inches",
      "Brakes: Hydraulic Disc",
      "Gears: 27-Speed"
    ]
  },

  {
    id: "alpine-crusher",
    name: "Alpine Crusher",
    price: "₹27,999",
    image: "images/mountain4.png",
    description: "Lightweight yet powerful trail bike for aggressive riding styles.",
    colors: ["#1f2933", "#22c55e"],
    specs: [
      "Frame: Alloy Steel",
      "Suspension: Front Suspension",
      "Wheel Size: 27.5 inches",
      "Brakes: Mechanical Disc",
      "Gears: 21-Speed"
    ]
  },

  {
    id: "ridge-hunter",
    name: "Ridge Hunter",
    price: "₹31,499",
    image: "images/mountain5.png",
    description: "Perfect balance of durability and performance for long mountain rides.",
    colors: ["#020617", "#eab308"],
    specs: [
      "Frame: Aluminum Alloy",
      "Suspension: Hardtail",
      "Wheel Size: 29 inches",
      "Brakes: Hydraulic Disc",
      "Gears: 24-Speed"
    ]
  },

  {
    id: "storm-peak",
    name: "Storm Peak",
    price: "₹36,999",
    image: "images/mountain6.png",
    description: "Top-tier full suspension bike built for professional mountain riders.",
    colors: ["#020617", "#ef4444", "#3b82f6"],
    specs: [
      "Frame: Premium Aluminum",
      "Suspension: Dual Suspension",
      "Wheel Size: 29 inches",
      "Brakes: Hydraulic Disc",
      "Gears: 30-Speed"
    ]
  }

];
document.getElementById("buyNowBtn").addEventListener("click", () => {

  const selectedBike = {
    id: bike.id,
    name: bike.name,
    price: bike.price,
    image: "../" + bike.image,
    category: "mountain"
  };

  localStorage.setItem("selectedBike", JSON.stringify(selectedBike));

  window.location.href = "../checkout/checkout.html";
});
