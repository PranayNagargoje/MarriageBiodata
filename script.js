const data = {
  en: {
    title: "Marriage Biodata",
    name: "Pranay Rajesh Nagargoje",
    personalTitle: "Personal Information",
    familyTitle: "Family Information",
    contactTitle: "Contact Details",
    galleryTitle: "Photo Gallery",

    personal: [
      "Date of Birth: 02/04/1997",
      "Birth Place: Amravati, Maharashtra",
      "Religion: Hindu",
      "Caste: Vanjari",
      "Zodiac Sign: Capricorn",
      "Height: 5 ft 8 in"
    ],

    family: [
      "Father: Late Rajesh Janrao Nagargoje",
      "Mother: Late Chhaya Rajesh Nagargoje",
      "Brother: Vivek Rajesh Nagargoje"
    ],

    contact: [
      "Address: Rajendra Nagar, Gopal Nagar, Badnera Road, Amravati",
      "Mobile: 8329956435"
    ]
  },

  mr: {
    title: "विवाह परिचय पत्र",
    name: "प्रणय राजेश नागरगोजे",
    personalTitle: "वैयक्तिक माहिती",
    familyTitle: "कौटुंबिक माहिती",
    contactTitle: "संपर्क",
    galleryTitle: "फोटो गॅलरी",

    personal: [
      "जन्म तारीख: 02/04/1997",
      "जन्म स्थळ: अमरावती, महाराष्ट्र",
      "धर्म: हिंदू",
      "जात: वंजारी",
      "राशी: मकर",
      "उंची: ५ फूट ८ इंच"
    ],

    family: [
      "वडील: कै. राजेश जानराव नागरगोजे",
      "आई: कै. छाया राजेश नागरगोजे",
      "भाऊ: विवेक राजेश नागरगोजे"
    ],

    contact: [
      "पत्ता: राजेंद्र नगर, गोपाल नगर, बडनेरा रोड, अमरावती",
      "मोबाईल: 8329956435"
    ]
  }
};

function switchLanguage() {
  const lang = document.getElementById("languageSwitcher").value;
  const d = data[lang];

  document.getElementById("title").innerText = d.title;
  document.getElementById("name").innerText = d.name;
  document.getElementById("personalTitle").innerText = d.personalTitle;
  document.getElementById("familyTitle").innerText = d.familyTitle;
  document.getElementById("contactTitle").innerText = d.contactTitle;
  document.getElementById("galleryTitle").innerText = d.galleryTitle;

  fillList("personalInfo", d.personal);
  fillList("familyInfo", d.family);
  fillList("contactInfo", d.contact);
}

function fillList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
}

switchLanguage();
