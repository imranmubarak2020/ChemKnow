
const calculatorButton = document.getElementById("calculator-button");
const recyclingButton = document.getElementById("recycling-button");
const message = document.getElementById("message");

calculatorButton.addEventListener("click", function () {
  document.getElementById("chemtools").scrollIntoView({
    behavior: "smooth"
  });
});

recyclingButton.addEventListener("click", function () {
  document.getElementById("simulator").scrollIntoView({
    behavior: "smooth"
  });
});


// ==================================
// MOLARITY CALCULATOR
// ==================================

const molesInput = document.getElementById("moles");
const volumeInput = document.getElementById("volume");
const calculateButton = document.getElementById("calculate-button");
const result = document.getElementById("result");
const calculationBreakdown = document.getElementById("calculation-breakdown");

calculateButton.addEventListener("click", function () {
  const moles = Number(molesInput.value);
  const volume = Number(volumeInput.value);

  calculationBreakdown.innerHTML = "";

  if (molesInput.value === "" || volumeInput.value === "") {
    result.className = "error-message";
    result.textContent = "Please enter both values.";
  } else if (
    !Number.isFinite(moles) ||
    !Number.isFinite(volume) ||
    moles < 0 ||
    volume <= 0
  ) {
    result.className = "error-message";
    result.textContent =
      "Enter non-negative moles and a volume greater than zero.";
  } else {
    const molarity = moles / volume;

    result.className = "success-message";
    result.textContent = "Molarity: " + molarity.toFixed(3) + " mol/L";

    calculationBreakdown.innerHTML = `
      <h3>Calculation Breakdown</h3>

      <p><strong>Step 1: Formula</strong></p>
      <p>Molarity = Amount of solute / Volume of solution</p>

      <p><strong>Step 2: Given values</strong></p>
      <p>Amount of solute = ${moles} mol</p>
      <p>Volume of solution = ${volume} L</p>

      <p><strong>Step 3: Substitution</strong></p>
      <p>Molarity = ${moles} / ${volume}</p>

      <p><strong>Step 4: Final answer</strong></p>
      <p>${molarity.toFixed(3)} mol/L</p>
    `;
  }
});


// ==================================
// DILUTION CALCULATOR
// ==================================

const concentrationInput = document.getElementById("initial-concentration");
const initialVolumeInput = document.getElementById("initial-volume");
const finalVolumeInput = document.getElementById("final-volume");
const dilutionButton = document.getElementById("dilution-button");
const dilutionResult = document.getElementById("dilution-result");
const dilutionBreakdown = document.getElementById("dilution-breakdown");

dilutionButton.addEventListener("click", function () {
  const initialConcentration = Number(concentrationInput.value);
  const initialVolume = Number(initialVolumeInput.value);
  const finalVolume = Number(finalVolumeInput.value);

  dilutionBreakdown.innerHTML = "";

  if (
    concentrationInput.value === "" ||
    initialVolumeInput.value === "" ||
    finalVolumeInput.value === ""
  ) {
    dilutionResult.className = "error-message";
    dilutionResult.textContent = "Please enter all values.";
  } else if (
    !Number.isFinite(initialConcentration) ||
    !Number.isFinite(initialVolume) ||
    !Number.isFinite(finalVolume) ||
    initialConcentration < 0 ||
    initialVolume <= 0 ||
    finalVolume <= 0 ||
    finalVolume < initialVolume
  ) {
    dilutionResult.className = "error-message";
    dilutionResult.textContent = "Please enter valid values.";
  } else {
    const finalConcentration =
      (initialConcentration * initialVolume) / finalVolume;

    dilutionResult.className = "success-message";
    dilutionResult.textContent =
      "Final Concentration: " + finalConcentration.toFixed(3) + " mol/L";

    dilutionBreakdown.innerHTML = `
      <h3>Calculation Breakdown</h3>

      <p><strong>Step 1: Formula</strong></p>
      <p>C₁V₁ = C₂V₂</p>
      <p>C₂ = (C₁ × V₁) / V₂</p>

      <p><strong>Step 2: Given values</strong></p>
      <p>Initial concentration (C₁) = ${initialConcentration}</p>
      <p>Initial volume (V₁) = ${initialVolume}</p>
      <p>Final volume (V₂) = ${finalVolume}</p>

      <p><strong>Step 3: Substitution</strong></p>
      <p>C₂ = (${initialConcentration} × ${initialVolume}) / ${finalVolume}</p>

      <p><strong>Step 4: Final answer</strong></p>
      <p>${finalConcentration.toFixed(3)} mol/L</p>
    `;
  }
});


// ==================================
// PERCENTAGE YIELD CALCULATOR
// ==================================

const actualYieldInput = document.getElementById("actual-yield");
const theoreticalYieldInput = document.getElementById("theoretical-yield");
const yieldButton = document.getElementById("yield-button");
const yieldResult = document.getElementById("yield-result");
const yieldBreakdown = document.getElementById("yield-breakdown");

yieldButton.addEventListener("click", function () {
  const actualYield = Number(actualYieldInput.value);
  const theoreticalYield = Number(theoreticalYieldInput.value);

  yieldBreakdown.innerHTML = "";

  if (actualYieldInput.value === "" || theoreticalYieldInput.value === "") {
    yieldResult.className = "error-message";
    yieldResult.textContent = "Please fill in both fields.";
  } else if (
    !Number.isFinite(actualYield) ||
    !Number.isFinite(theoreticalYield) ||
    actualYield < 0
  ) {
    yieldResult.className = "error-message";
    yieldResult.textContent = "Please enter valid yield values.";
  } else if (theoreticalYield <= 0) {
    yieldResult.className = "error-message";
    yieldResult.textContent =
      "Theoretical yield must be greater than zero.";
  } else {
    const percentageYield = (actualYield / theoreticalYield) * 100;

    yieldResult.className = "success-message";
    yieldResult.textContent =
      "Percentage Yield: " + percentageYield.toFixed(2) + "%";

    yieldBreakdown.innerHTML = `
      <h3>Calculation Breakdown</h3>

      <p><strong>Step 1: Formula</strong></p>
      <p>Percentage Yield = (Actual Yield / Theoretical Yield) × 100</p>

      <p><strong>Step 2: Given values</strong></p>
      <p>Actual Yield = ${actualYield} g</p>
      <p>Theoretical Yield = ${theoreticalYield} g</p>

      <p><strong>Step 3: Substitution</strong></p>
      <p>Percentage Yield = (${actualYield} / ${theoreticalYield}) × 100</p>

      <p><strong>Step 4: Final answer</strong></p>
      <p>${percentageYield.toFixed(2)}%</p>
    `;
  }
});


// ==================================
// PET MATERIAL RECOVERY CALCULATOR
// ==================================

const inputMassInput = document.getElementById("input-mass");
const recoveredMassInput = document.getElementById("recovered-mass");
const recoveryButton = document.getElementById("recovery-button");
const recoveryResult = document.getElementById("recovery-result");

recoveryButton.addEventListener("click", function () {
  const inputMass = Number(inputMassInput.value);
  const recoveredMass = Number(recoveredMassInput.value);

  if (inputMassInput.value === "" || recoveredMassInput.value === "") {
    recoveryResult.className = "error-message";
    recoveryResult.textContent = "Please enter both values.";
  } else if (
    !Number.isFinite(inputMass) ||
    !Number.isFinite(recoveredMass) ||
    inputMass <= 0 ||
    recoveredMass < 0
  ) {
    recoveryResult.className = "error-message";
    recoveryResult.textContent =
      "Enter a valid initial mass greater than zero and a non-negative recovered mass.";
  } else if (recoveredMass > inputMass) {
    recoveryResult.className = "error-message";
    recoveryResult.textContent =
      "Recovered mass cannot exceed the initial PET mass.";
  } else {
    const recoveryPercentage = (recoveredMass / inputMass) * 100;

    recoveryResult.className = "success-message";
    recoveryResult.textContent =
      "Material Recovery: " + recoveryPercentage.toFixed(2) + "%";
  }
});


// ==================================
// PET RECYCLING PROCESS FLOW
// ==================================

const flowSteps = document.querySelectorAll(".flow-step");

flowSteps.forEach(function (step) {
  step.addEventListener("click", function () {
    const stageId = step.dataset.stage;
    const targetStage = document.getElementById(stageId);

    if (!targetStage) {
      return;
    }

    flowSteps.forEach(function (item) {
      item.classList.remove("active");
    });

    step.classList.add("active");

    targetStage.open = true;

    targetStage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});


// ==================================
// CHEMISTRY CURRICULUM
// ==================================

const chemistryCurriculum = {
  beginner: {
    title: "Beginner Chemistry",
    topics: [
      "Introduction to Chemistry",
      "Matter and Its Classification",
      "Elements, Compounds and Mixtures",
      "Physical and Chemical Changes",
      "Atomic Structure",
      "The Periodic Table",
      "Introduction to Chemical Bonding",
      "Introduction to Chemical Reactions"
    ]
  },

  intermediate: {
    title: "Intermediate Chemistry",
    topics: [
      "Chemical Bonding",
      "Chemical Formulae and Equations",
      "Mole Concept",
      "Stoichiometry",
      "Acids, Bases and Salts",
      "Gas Laws",
      "Chemical Energetics",
      "Chemical Equilibrium"
    ]
  },

  advanced: {
    title: "Advanced Chemistry",
    topics: [
      "Advanced Organic Chemistry",
      "Advanced Inorganic Chemistry",
      "Chemical Kinetics",
      "Electrochemistry",
      "Thermodynamics",
      "Spectroscopy",
      "Reaction Mechanisms",
      "Analytical Chemistry"
    ]
  },

  university: {
    title: "University-Level Chemistry",
    topics: [
      "General Chemistry",
      "Physical Chemistry",
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Analytical Chemistry",
      "Industrial Chemistry",
      "Polymer Chemistry",
      "Research Methods in Chemistry"
    ]
  }
};


// ==================================
// CHEMISTRY LESSONS
// ==================================

const chemistryLessons = {
  "Introduction to Chemistry": {
    title: "Introduction to Chemistry",

    introduction:
      "Chemistry is the branch of science concerned with the composition, structure, properties and transformations of matter.",

    objectives: [
      "Define chemistry.",
      "Identify the major areas of chemistry.",
      "Explain the importance of chemistry in everyday life."
    ],

    sections: [
      {
        heading: "1. What is Chemistry?",
        content:
          "Chemistry is the scientific study of matter and the changes it undergoes. It helps us understand what substances are made of, how they behave and how they interact with one another."
      },
      {
        heading: "2. Major Branches of Chemistry",
        content:
          "Organic chemistry studies most carbon-containing compounds. Inorganic chemistry studies elements and many of their compounds, including metals, minerals and salts. Some carbon-containing compounds, such as carbon dioxide and carbonates, are also studied in inorganic chemistry. Physical chemistry examines the principles governing chemical systems. Analytical chemistry identifies substances and measures their amounts. Biochemistry studies chemical processes in living organisms."
      },
      {
        heading: "3. Importance of Chemistry",
        content:
          "Chemistry contributes to medicine, agriculture, food production, environmental protection, manufacturing and energy development. It helps scientists understand materials and develop solutions to practical problems."
      }
    ]
  },

  "Matter and Its Classification": {
    title: "Matter and Its Classification",

    introduction:
      "Matter is anything that has mass and occupies space. Everything around us, including air, water, rocks and living organisms, is made up of matter.",

    objectives: [
      "Define matter.",
      "Identify the three common states of matter.",
      "Distinguish between pure substances and mixtures.",
      "Explain the differences between elements, compounds and mixtures."
    ],

    sections: [
      {
        heading: "1. What is Matter?",
        content:
          "Matter is anything that has mass and occupies space. It is made up of tiny particles such as atoms, molecules and ions. Examples include water, oxygen, iron and wood."
      },
      {
        heading: "2. States of Matter",
        content:
          "The three common states of matter are solid, liquid and gas. Solids have a definite shape and volume. Liquids have a definite volume but take the shape of their containers. Gases have neither a definite shape nor a definite volume."
      },
      {
        heading: "3. Classification of Matter",
        content:
          "Matter can be classified into pure substances and mixtures. A pure substance has a fixed composition and characteristic properties. A mixture contains two or more substances physically combined in varying proportions."
      },
      {
        heading: "4. Elements, Compounds and Mixtures",
        content:
          "An element contains only one type of atom, such as iron or oxygen. A compound consists of two or more elements chemically combined in a fixed proportion, such as water. A mixture contains substances physically combined, such as air or salt water."
      }
    ]
  },

  "Elements, Compounds and Mixtures": {
    title: "Elements, Compounds and Mixtures",

    introduction:
      "Matter can exist as elements, compounds or mixtures. Understanding the differences between them is essential to studying the composition and behaviour of substances.",

    objectives: [
      "Define elements, compounds and mixtures.",
      "Identify examples of elements and compounds.",
      "Distinguish between compounds and mixtures.",
      "Explain the differences between homogeneous and heterogeneous mixtures."
    ],

    sections: [
      {
        heading: "1. Elements",
        content:
          "An element is a pure substance that consists of only one type of atom. It cannot be broken down into simpler substances by ordinary chemical means. Examples include hydrogen, oxygen, iron and copper."
      },
      {
        heading: "2. Compounds",
        content:
          "A compound is a pure substance formed when two or more different elements combine chemically in a fixed proportion. For example, water (H₂O) contains hydrogen and oxygen chemically combined in a fixed ratio."
      },
      {
        heading: "3. Mixtures",
        content:
          "A mixture consists of two or more substances physically combined without forming a new chemical substance. The components retain their individual chemical properties and can often be separated using physical methods. Examples include air, soil and salt water."
      },
      {
        heading: "4. Types of Mixtures",
        content:
          "Homogeneous mixtures have a uniform composition throughout, such as salt dissolved in water. Heterogeneous mixtures have a non-uniform composition, such as sand mixed with water."
      },
      {
        heading: "5. Differences Between Elements, Compounds and Mixtures",
        content:
          "An element contains one type of atom. A compound contains different elements chemically combined in fixed proportions. A mixture contains two or more substances physically combined in proportions that may vary. Compounds can be separated into their constituent elements through chemical processes, while mixtures can be separated by suitable physical methods."
      }
    ]
  },

  "Physical and Chemical Changes": {
    title: "Physical and Chemical Changes",

    introduction:
      "Matter undergoes changes in different ways. Some changes affect only its physical appearance or state, while others produce entirely new substances. These are known as physical and chemical changes.",

    objectives: [
      "Define physical and chemical changes.",
      "Identify examples of physical changes.",
      "Identify examples of chemical changes.",
      "Distinguish between physical and chemical changes.",
      "Explain the meaning of reversible and irreversible changes."
    ],

    sections: [
      {
        heading: "1. Physical Changes",
        content:
          "A physical change is a change in which the physical properties of a substance, such as its shape, size or state, are altered without forming a new substance. Examples include melting ice, cutting paper and dissolving sugar in water."
      },
      {
        heading: "2. Chemical Changes",
        content:
          "A chemical change occurs when one or more substances are converted into new substances with different chemical properties. Examples include the rusting of iron, burning of wood and the reaction between an acid and a base."
      },
      {
        heading: "3. Differences Between Physical and Chemical Changes",
        content:
          "Physical changes do not produce new substances, whereas chemical changes involve the formation of new substances. Physical changes often affect appearance or state, while chemical changes alter chemical composition. However, the appearance of a substance alone is not enough to determine whether a chemical reaction has occurred."
      },
      {
        heading: "4. Signs of Chemical Changes",
        content:
          "Possible signs of a chemical change include gas production, formation of a precipitate, colour change, temperature change and light emission. These observations can suggest that a chemical reaction has occurred, but none of them alone proves that a chemical change has taken place."
      },
      {
        heading: "5. Reversible and Irreversible Changes",
        content:
          "A reversible change can be reversed to restore the original state of a substance under suitable conditions. For example, ice can melt into water and water can freeze back into ice. An irreversible change cannot easily be reversed through ordinary physical means. Burning paper is an example because it produces ash and gases."
      }
    ]
  },

  "Atomic Structure": {
    title: "Atomic Structure",

    introduction:
      "Atoms are the basic building units of ordinary matter. Understanding their structure helps explain the properties of elements, chemical bonding and chemical reactions.",

    objectives: [
      "Define an atom.",
      "Identify the three main subatomic particles.",
      "Describe the location and charges of protons, neutrons and electrons.",
      "Explain atomic number and mass number.",
      "Define isotopes and give examples."
    ],

    sections: [
      {
        heading: "1. What is an Atom?",
        content:
          "An atom is the smallest unit of an element that retains the chemical identity of that element. Atoms consist of a small, dense nucleus surrounded by electrons."
      },
      {
        heading: "2. Subatomic Particles",
        content:
          "Atoms contain three main subatomic particles: protons, neutrons and electrons. Protons have a positive charge and neutrons have no electrical charge. Both are found in the nucleus. Electrons have a negative charge and occupy regions around the nucleus."
      },
      {
        heading: "3. Atomic Number",
        content:
          "The atomic number of an element is the number of protons in the nucleus of each of its atoms. It identifies the element. In a neutral atom, the number of electrons equals the number of protons."
      },
      {
        heading: "4. Mass Number",
        content:
          "The mass number is the total number of protons and neutrons in an atom's nucleus. It is a whole number for a particular isotope. To find the number of neutrons, subtract the atomic number from the mass number."
      },
      {
        heading: "5. Isotopes",
        content:
          "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons. For example, carbon-12 and carbon-14 are isotopes of carbon. Both contain six protons, but carbon-12 has six neutrons while carbon-14 has eight."
      }
    ]
  },

  "The Periodic Table": {
    title: "The Periodic Table",

    introduction:
      "The periodic table is a systematic arrangement of chemical elements according to their atomic numbers and recurring chemical properties. It helps scientists understand and predict the behaviour of elements.",

    objectives: [
      "Define the periodic table.",
      "Explain how elements are arranged in the periodic table.",
      "Identify groups and periods.",
      "Distinguish between metals, non-metals and metalloids.",
      "Explain the importance of the periodic table."
    ],

    sections: [
      {
        heading: "1. What is the Periodic Table?",
        content:
          "The periodic table is a chart containing all recognised chemical elements arranged in order of increasing atomic number. Its arrangement reveals patterns in the physical and chemical properties of elements."
      },
      {
        heading: "2. Groups and Periods",
        content:
          "The periodic table contains 18 vertical columns called groups and 7 horizontal rows called periods. Elements in the same group often have similar chemical properties because they have similar outer-shell electron configurations."
      },
      {
        heading: "3. Metals, Non-metals and Metalloids",
        content:
          "Metals are generally good conductors of heat and electricity and are often malleable and ductile. Non-metals generally have different physical properties and are usually poor conductors. Metalloids have properties intermediate between metals and non-metals. Examples include silicon and germanium."
      },
      {
        heading: "4. Periodic Trends",
        content:
          "Periodic trends are patterns in the properties of elements across periods and down groups. Atomic radius generally decreases across a period and increases down a group. Metallic character generally decreases across a period and increases down a group. Ionisation energy generally increases across a period and decreases down a group, although there are exceptions."
      },
      {
        heading: "5. Importance of the Periodic Table",
        content:
          "The periodic table helps chemists classify elements, compare their properties, predict their chemical behaviour and understand relationships between their atomic structures. It is an essential reference tool in chemistry."
      }
    ]
  },

  "Introduction to Chemical Bonding": {
    title: "Introduction to Chemical Bonding",

    introduction:
      "Chemical bonding explains how atoms or ions combine to form substances. Understanding chemical bonds helps us explain the structures, properties and behaviour of many materials.",

    objectives: [
      "Define chemical bonding.",
      "Explain why atoms form chemical bonds.",
      "Describe ionic bonding.",
      "Describe covalent bonding.",
      "Explain metallic bonding.",
      "Distinguish between ionic, covalent and metallic bonds."
    ],

    sections: [
      {
        heading: "1. What is Chemical Bonding?",
        content:
          "Chemical bonding refers to the attractive forces that hold atoms or ions together in substances. These interactions involve the electrons of atoms, particularly their outer-shell electrons, known as valence electrons."
      },
      {
        heading: "2. Why Do Atoms Form Chemical Bonds?",
        content:
          "Atoms form chemical bonds because bonding can produce more stable arrangements with lower energy. Many introductory examples involve atoms achieving stable outer electron arrangements. However, chemical bonding is governed by energy and electrostatic interactions, not simply by a universal rule that every atom must have eight outer electrons."
      },
      {
        heading: "3. Ionic Bonding",
        content:
          "Ionic bonding involves the electrostatic attraction between oppositely charged ions. It commonly occurs when electrons are transferred from one atom to another. For example, sodium transfers an electron to chlorine, forming Na⁺ and Cl⁻ ions. Their electrostatic attraction produces ionic sodium chloride."
      },
      {
        heading: "4. Covalent Bonding",
        content:
          "Covalent bonding occurs when atoms share one or more pairs of electrons. It commonly occurs between non-metal atoms. For example, two hydrogen atoms share a pair of electrons to form a hydrogen molecule (H₂). Water (H₂O) also contains covalent bonds."
      },
      {
        heading: "5. Metallic Bonding",
        content:
          "Metallic bonding is the attraction between positive metal ions and delocalised electrons within a metal structure. These mobile electrons help explain why metals generally conduct electricity and heat. Metallic bonding also contributes to properties such as malleability and ductility."
      },
      {
        heading: "6. Comparing the Major Types of Chemical Bonds",
        content:
          "Ionic bonding involves attraction between oppositely charged ions. Covalent bonding involves the sharing of electron pairs between atoms. Metallic bonding involves attraction between positive metal ions and delocalised electrons. These different bonding arrangements help explain why substances have different physical and chemical properties."
      }
    ]
  },

  "Introduction to Chemical Reactions": {
    title: "Introduction to Chemical Reactions",

    introduction:
      "Chemical reactions are processes in which substances are transformed into new substances through the breaking and formation of chemical bonds. They are essential to understanding changes in matter and the behaviour of chemical substances.",

    objectives: [
      "Define a chemical reaction.",
      "Identify reactants and products.",
      "Explain how chemical equations represent reactions.",
      "Identify common signs of chemical reactions.",
      "Explain the law of conservation of mass.",
      "Identify common types of chemical reactions."
    ],

    sections: [
      {
        heading: "1. What is a Chemical Reaction?",
        content:
          "A chemical reaction is a process in which one or more substances are converted into new substances with different chemical compositions and properties. Chemical reactions involve the rearrangement of atoms through the breaking and formation of chemical bonds."
      },
      {
        heading: "2. Reactants and Products",
        content:
          "Reactants are the starting substances that participate in a chemical reaction. Products are the new substances formed during the reaction. For example, when hydrogen reacts with oxygen to form water, hydrogen and oxygen are the reactants while water is the product."
      },
      {
        heading: "3. Chemical Equations",
        content:
          "A chemical equation represents a chemical reaction using chemical symbols and formulae. For example, 2H₂ + O₂ → 2H₂O represents the reaction between hydrogen and oxygen to form water. The arrow indicates the direction of the reaction. A balanced equation contains equal numbers of each type of atom on both sides."
      },
      {
        heading: "4. Signs of Chemical Reactions",
        content:
          "Possible signs of chemical reactions include colour changes, gas production, formation of a precipitate, temperature changes and light emission. These observations can provide evidence of a reaction, although they must be interpreted in context."
      },
      {
        heading: "5. Law of Conservation of Mass",
        content:
          "The law of conservation of mass states that mass is conserved during an ordinary chemical reaction. Atoms are rearranged rather than created or destroyed. Therefore, in a closed system, the total mass of the reactants equals the total mass of the products."
      },
      {
        heading: "6. Common Types of Chemical Reactions",
        content:
          "Common introductory reaction types include synthesis, decomposition, single replacement, double replacement and combustion. In synthesis reactions, substances combine to form a more complex product. Decomposition reactions involve the breakdown of a compound. Replacement reactions involve the exchange of elements or ions. Combustion involves reaction with an oxidising agent, commonly oxygen."
      }
    ]
  },

  "Chemical Bonding": {
    title: "Chemical Bonding",
    introduction: "Chemical bonding explains how atoms combine to form compounds and why different substances have different physical and chemical properties. Understanding the types of chemical bonds helps us explain the structure, stability and behaviour of matter.",

    objectives: [
      "Explain why atoms form chemical bonds.",
      "Describe ionic, covalent and metallic bonding.",
      "Explain the relationship between electronegativity and bond polarity.",
      "Distinguish between intramolecular bonds and intermolecular forces.",
      "Relate bonding and structure to the physical properties of substances."
    ],

    sections: [
      {
        heading: "1. Why Do Atoms Form Chemical Bonds?",
        content: "Atoms form chemical bonds because the resulting arrangement can have a lower potential energy than the separate atoms. Bond formation involves electrostatic attractions between charged particles. Many main-group elements tend towards stable outer electron configurations, often described using the octet rule. However, the octet rule is a useful guide rather than a universal law."
      },
      {
        heading: "2. Ionic Bonding",
        content: "Ionic bonding involves the electrostatic attraction between oppositely charged ions. It commonly occurs when electrons are transferred from a metal atom to a non-metal atom. For example, sodium loses one electron to form Na⁺ while chlorine gains one electron to form Cl⁻. The attraction between these ions produces sodium chloride. In solid sodium chloride, the ions form a three-dimensional ionic lattice rather than separate NaCl molecules. Ionic compounds generally have high melting points and conduct electricity when molten or dissolved in water because their ions are mobile. They do not normally conduct electricity in the solid state because the ions are fixed in position."
      },
      {
        heading: "3. Covalent Bonding",
        content: "Covalent bonding occurs when atoms share pairs of electrons. It commonly occurs between non-metal atoms. A single covalent bond involves one shared pair of electrons, a double bond involves two shared pairs and a triple bond involves three shared pairs. Examples include H₂, O₂, N₂ and H₂O. Covalent substances may exist as discrete molecules or giant covalent structures. Simple molecular substances often have relatively low melting and boiling points, while giant covalent structures such as diamond and silicon dioxide have very high melting points."
      },
      {
        heading: "4. Electronegativity and Bond Polarity",
        content: "Electronegativity is the ability of an atom to attract shared electrons towards itself in a chemical bond. When two bonded atoms have similar electronegativities, the bonding electrons are shared relatively equally, producing a non-polar covalent bond. When their electronegativities differ, the electrons are shared unequally, producing a polar covalent bond. This creates partial charges represented by δ⁺ and δ⁻. For example, the O–H bonds in water are polar because oxygen attracts the shared electrons more strongly than hydrogen. Bond polarity does not automatically determine molecular polarity because molecular shape also matters."
      },
      {
        heading: "5. Metallic Bonding",
        content: "Metallic bonding is the electrostatic attraction between positive metal centres and delocalised valence electrons within a metallic structure. These mobile electrons help metals conduct electricity and heat. Metallic bonding also helps explain why many metals can be hammered into sheets or drawn into wires. Layers of metal atoms can slide past one another while the metallic attraction continues to hold the structure together."
      },
      {
        heading: "6. Intermolecular Forces",
        content: "Intermolecular forces are attractions between separate molecules. They are different from the covalent bonds that hold atoms together within a molecule. The major types include London dispersion forces, dipole-dipole attractions and hydrogen bonding. London dispersion forces arise from temporary and induced dipoles and occur between all atoms and molecules. Dipole-dipole attractions occur between polar molecules. Hydrogen bonding is a particularly strong type of dipole-dipole attraction that occurs when hydrogen bonded to nitrogen, oxygen or fluorine is attracted to a suitable lone pair on nitrogen, oxygen or fluorine in a neighbouring particle. These forces influence properties such as boiling point, melting point and solubility."
      },
      {
        heading: "7. How Bonding Affects Physical Properties",
        content: "The type of bonding and the structure of a substance influence its physical properties. Ionic compounds generally have high melting points and conduct electricity when molten or dissolved. Metals generally conduct heat and electricity and are malleable. Simple molecular substances often have relatively low melting and boiling points because their intermolecular forces are overcome during melting or boiling. Giant covalent structures can be extremely hard and have very high melting points because many strong covalent bonds must be broken. These are general patterns, and specific substances may behave differently."
      }
    ]
  },

  "Chemical Formulae and Equations": {
    title: "Chemical Formulae and Equations",
    introduction: "Chemical formulae and equations provide a concise language for representing substances and chemical reactions. Understanding how to write formulae and balance equations is essential for solving chemical problems and performing accurate stoichiometric calculations.",

    objectives: [
      "Explain the meaning of chemical symbols, formulae and equations.",
      "Write chemical formulae using valencies and ionic charges.",
      "Distinguish between molecular formulae and empirical formulae.",
      "Interpret the information contained in chemical equations.",
      "Balance chemical equations using the law of conservation of mass.",
      "Identify state symbols and reaction conditions in chemical equations."
    ],

    sections: [
      {
        heading: "1. Chemical Symbols and Formulae",
        content: "A chemical symbol is a one- or two-letter representation of an element. The first letter is always written in uppercase while the second, when present, is lowercase. Examples include H for hydrogen, O for oxygen, Na for sodium and Cl for chlorine. A chemical formula uses element symbols and numerical subscripts to represent the composition of a substance. For example, H₂O represents water containing two hydrogen atoms and one oxygen atom per molecule, while CO₂ represents carbon dioxide."
      },
      {
        heading: "2. Writing Chemical Formulae Using Ionic Charges",
        content: "The formula of an ionic compound must represent an electrically neutral combination of ions. The total positive charge must balance the total negative charge. For example, sodium forms Na⁺ while chloride forms Cl⁻, giving NaCl. Magnesium forms Mg²⁺ while chloride forms Cl⁻, giving MgCl₂. Calcium forms Ca²⁺ while oxide forms O²⁻, giving CaO. When a formula contains more than one polyatomic ion, brackets are used. For example, calcium hydroxide is Ca(OH)₂ because one calcium ion combines with two hydroxide ions. The subscripts represent the simplest whole-number ratio of ions."
      },
      {
        heading: "3. Molecular and Empirical Formulae",
        content: "A molecular formula shows the actual number of atoms of each element in one molecule of a substance. For example, glucose has the molecular formula C₆H₁₂O₆. An empirical formula shows the simplest whole-number ratio of atoms in a compound. The empirical formula of glucose is CH₂O. Some substances have identical molecular and empirical formulae. For example, water has H₂O for both. Ionic compounds are normally represented by formula units showing the simplest ratio of their ions rather than separate molecules."
      },
      {
        heading: "4. Understanding Chemical Equations",
        content: "A chemical equation represents a chemical reaction using symbols and formulae. Reactants are written on the left-hand side while products are written on the right-hand side. An arrow indicates the direction of the reaction. For example, 2H₂ + O₂ → 2H₂O represents the reaction between hydrogen and oxygen to form water. The numbers in front of chemical formulae are called coefficients, while the small numbers within formulae are subscripts. Coefficients indicate the relative amounts of substances participating in the reaction."
      },
      {
        heading: "5. The Law of Conservation of Mass",
        content: "The law of conservation of mass states that mass is conserved during an ordinary chemical reaction. Atoms are rearranged during a reaction but are not created or destroyed. Consequently, the number of atoms of each element must be equal on both sides of a correctly balanced chemical equation. In ionic equations, total electrical charge must also be conserved. This principle provides the scientific basis for balancing chemical equations."
      },
      {
        heading: "6. Balancing Chemical Equations",
        content: "Balancing a chemical equation involves adjusting coefficients until the number of atoms of every element is equal on both sides. Consider the unbalanced equation H₂ + O₂ → H₂O. There are two oxygen atoms on the left but only one on the right. Placing a coefficient of 2 before H₂O gives H₂ + O₂ → 2H₂O. This now contains four hydrogen atoms on the right, so a coefficient of 2 is placed before H₂. The balanced equation becomes 2H₂ + O₂ → 2H₂O. Always adjust coefficients rather than subscripts because changing a subscript changes the identity of the substance. Use the smallest whole-number coefficients when possible."
      },
      {
        heading: "7. State Symbols in Chemical Equations",
        content: "State symbols indicate the physical state of substances in a chemical equation. The symbol (s) represents a solid, (l) represents a liquid, (g) represents a gas and (aq) represents an aqueous substance, meaning it is dissolved in water. For example, 2H₂(g) + O₂(g) → 2H₂O(l) represents hydrogen gas reacting with oxygen gas to produce liquid water. State symbols provide additional information about the conditions and physical forms of reactants and products."
      },
      {
        heading: "8. Reaction Conditions and Catalysts",
        content: "Some chemical reactions require specific conditions such as heating, light, pressure or the presence of a catalyst. These conditions are often written above or below the reaction arrow. A catalyst increases the rate of a chemical reaction by providing an alternative pathway with a lower activation energy. It is not consumed overall in the reaction. For example, the industrial synthesis of ammonia uses iron as a catalyst under elevated temperature and pressure. Including reaction conditions helps communicate how a reaction is carried out."
      }
    ]
  },

  "Mole Concept": {
    title: "The Mole Concept",
    introduction: "The mole is one of the most important concepts in chemistry. It provides a way to measure the amount of a substance by connecting the microscopic world of atoms, molecules and ions with measurable quantities such as mass and volume. Understanding the mole concept is essential for chemical calculations and stoichiometry.",

    objectives: [
      "Define the mole and explain its importance in chemistry.",
      "State and apply the Avogadro constant.",
      "Calculate the molar mass of elements and compounds.",
      "Convert between mass, moles and numbers of particles.",
      "Calculate the number of atoms, molecules and formula units in a sample.",
      "Apply the mole concept to basic solution concentration calculations."
    ],

    sections: [
      {
        heading: "1. Understanding the Mole",
        content: "The mole is the SI unit of amount of substance. One mole contains exactly 6.02214076 × 10²³ specified elementary entities. These entities may be atoms, molecules, ions, electrons or other specified particles. The mole allows chemists to work with enormous numbers of microscopic particles using measurable quantities. For example, one mole of carbon atoms contains the same number of atoms as one mole of water molecules contains molecules, although their masses are different."
      },
      {
        heading: "2. The Avogadro Constant",
        content: "The Avogadro constant, represented by Nₐ, is 6.02214076 × 10²³ mol⁻¹. It represents the number of specified elementary entities in one mole of a substance. The relationship between the number of particles (N) and the amount of substance (n) is n = N/Nₐ. For example, two moles of oxygen molecules contain 2 × 6.02214076 × 10²³ molecules. Always identify the type of particle being counted because an oxygen molecule (O₂) contains two oxygen atoms."
      },
      {
        heading: "3. Molar Mass",
        content: "Molar mass is the mass of one mole of a substance. It is commonly expressed in grams per mole (g/mol). The molar mass of an element is numerically equal to its relative atomic mass when expressed in g/mol. For a compound, its molar mass is calculated by adding the contributions of all the atoms in its chemical formula. For example, water (H₂O) has a molar mass of approximately 18.0 g/mol, calculated from two hydrogen atoms and one oxygen atom. Sodium chloride (NaCl) has a molar mass of approximately 58.44 g/mol."
      },
      {
        heading: "4. Relationship Between Mass and Moles",
        content: "The mole concept connects the mass of a sample to the amount of substance it contains. The amount in moles is obtained by dividing the mass of the sample by its molar mass: n = m/M. Here, n represents the amount in moles, m represents mass in grams and M represents molar mass in grams per mole. For example, a sample containing 36.0 g of water has an amount of 36.0/18.0 = 2.00 mol. The mass must be expressed in units consistent with the molar mass."
      },
      {
        heading: "5. Calculating the Number of Particles",
        content: "The number of particles in a sample can be calculated by multiplying the amount in moles by the Avogadro constant: N = n × Nₐ. For example, one mole of water contains approximately 6.022 × 10²³ water molecules. Since each water molecule contains two hydrogen atoms and one oxygen atom, one mole of water molecules contains approximately 1.2044 × 10²⁴ hydrogen atoms and 6.022 × 10²³ oxygen atoms. The total number of atoms is therefore three times the number of water molecules."
      },
      {
        heading: "6. Moles and Chemical Formulae",
        content: "Chemical formulae show the relative numbers of atoms or ions in a substance. These ratios help chemists calculate the amount of each constituent particle. For example, one mole of H₂O contains two moles of hydrogen atoms and one mole of oxygen atoms. One mole of CO₂ contains one mole of carbon atoms and two moles of oxygen atoms. For ionic compounds such as NaCl, the formula represents a formula unit rather than a separate molecule. One mole of NaCl formula units contains one mole of sodium ions and one mole of chloride ions."
      },
      {
        heading: "7. Moles and Solution Concentration",
        content: "The mole concept is used to calculate the concentration of solutions. Molar concentration, also called amount concentration, is the amount of dissolved solute divided by the volume of the entire solution in litres. It is commonly expressed in mol/L or mol dm⁻³. For example, a solution containing 0.50 mol of sodium chloride in 1.0 L of solution has a concentration of 0.50 mol/L. Ensure that the volume is expressed in litres when using mol/L. The volume refers to the final solution volume, not simply the volume of solvent added."
      },
      {
        heading: "8. Importance of the Mole Concept in Chemistry",
        content: "The mole concept is fundamental to quantitative chemistry. It allows chemists to determine how much reactant is needed for a reaction, predict the amount of product formed and calculate solution concentrations. It is also important in industrial chemistry, laboratory preparation and analytical measurements. In the next topic, stoichiometry will apply mole relationships to balanced chemical equations to calculate the quantities of reactants and products involved in chemical reactions."
      }
    ]
  },

  "Stoichiometry": {
    title: "Stoichiometry",
    introduction: "Stoichiometry is the branch of chemistry concerned with the quantitative relationships between reactants and products in chemical reactions. It allows chemists to calculate the amounts of substances consumed and produced using balanced chemical equations. Stoichiometry is essential in laboratory experiments, industrial production and chemical process optimisation.",

    objectives: [
      "Define stoichiometry and explain its importance in chemistry.",
      "Interpret mole ratios from balanced chemical equations.",
      "Calculate the amounts of reactants and products involved in reactions.",
      "Perform mass-to-mass stoichiometric calculations.",
      "Identify limiting and excess reactants.",
      "Calculate theoretical yield and percentage yield.",
      "Apply stoichiometric principles to practical chemical processes."
    ],

    sections: [
      {
        heading: "1. Introduction to Stoichiometry",
        content: "Stoichiometry deals with the quantitative relationships between substances involved in chemical reactions. It is based on the law of conservation of mass and the balanced chemical equation. The coefficients in a balanced equation show the relative numbers of particles or amounts in moles that react and are produced. These relationships allow chemists to predict how much reactant is required or how much product can theoretically be obtained."
      },
      {
        heading: "2. Mole Ratios in Chemical Equations",
        content: "A mole ratio is the relationship between the amounts of two substances represented by their coefficients in a balanced chemical equation. Consider the equation 2H₂ + O₂ → 2H₂O. The mole ratio of hydrogen to oxygen to water is 2:1:2. This means that two moles of hydrogen react with one mole of oxygen to produce two moles of water, assuming complete reaction. The coefficients must always be taken from the balanced equation because an unbalanced equation does not provide reliable stoichiometric ratios."
      },
      {
        heading: "3. Mole-to-Mole Calculations",
        content: "Mole-to-mole calculations use the coefficients of a balanced chemical equation to determine the amount of one substance from the known amount of another. For example, according to 2H₂ + O₂ → 2H₂O, two moles of hydrogen produce two moles of water when sufficient oxygen is available. Therefore, four moles of hydrogen can theoretically produce four moles of water. The important step is to identify the substances involved and use the correct coefficient ratio."
      },
      {
        heading: "4. Mass-to-Mass Calculations",
        content: "Mass-to-mass stoichiometry connects the measured mass of a reactant to the expected mass of a product. The calculation involves three main stages: convert the known mass into moles using its molar mass, use the balanced chemical equation to determine the mole ratio, then convert the calculated product moles into mass using the product's molar mass. For example, to calculate the mass of water produced from a known mass of hydrogen, first calculate the moles of hydrogen, apply the hydrogen-to-water mole ratio and finally multiply the resulting moles of water by its molar mass. This approach is widely used in laboratory and industrial calculations."
      },
      {
        heading: "5. Limiting and Excess Reactants",
        content: "In many chemical reactions, reactants are not supplied in exact stoichiometric proportions. The limiting reactant is the substance that is consumed first and therefore determines the maximum theoretical amount of product. The excess reactant is the substance that remains after the limiting reactant has been completely consumed. To identify the limiting reactant, divide the available moles of each reactant by its coefficient in the balanced equation. The smaller result identifies the limiting reactant. The amount of product is then calculated using the limiting reactant. For example, in 2H₂ + O₂ → 2H₂O, if hydrogen is insufficient relative to oxygen, hydrogen limits the amount of water formed."
      },
      {
        heading: "6. Theoretical Yield",
        content: "Theoretical yield is the maximum amount of product predicted by stoichiometric calculations when the limiting reactant reacts completely according to the balanced equation. It is usually calculated from the limiting reactant under the assumption that the reaction proceeds as represented and that no side reactions or losses occur. The actual amount obtained in an experiment or production process may be lower because of incomplete reactions, side reactions, separation losses and other practical limitations. Theoretical yield provides a reference for evaluating the performance of a chemical reaction."
      },
      {
        heading: "7. Actual Yield and Percentage Yield",
        content: "Actual yield is the quantity of product obtained from an experiment or chemical process. Percentage yield compares the actual yield with the theoretical yield and expresses the result as a percentage. It is calculated by dividing actual yield by theoretical yield and multiplying by 100. For example, if the theoretical yield is 50 g but the experiment produces 40 g, the percentage yield is 80%. A low yield may result from incomplete reactions, competing side reactions, product loss during purification or measurement errors. A reported yield above 100% may indicate that the collected product contains impurities or moisture, or that measurements are inaccurate. It does not automatically mean the reaction produced more pure product than theoretically possible."
      },
      {
        heading: "8. Applications of Stoichiometry in Industry",
        content: "Stoichiometry is important in chemical manufacturing because it helps determine the quantities of raw materials required and the expected amount of products. It supports production planning, material balance calculations, waste reduction and process optimisation. In polymer manufacturing, stoichiometric relationships help control the proportions of reactants used in polymerisation processes. In water treatment, stoichiometric calculations help estimate the quantities of chemicals required for treatment. In industrial chemistry, these calculations contribute to efficiency, quality control and responsible use of resources."
      }
    ]
  },

  "Acids, Bases and Salts": {
    title: "Acids, Bases and Salts",
    introduction: "Acids, bases and salts are important classes of chemical substances that participate in many reactions. Their properties, reactions and applications are essential in laboratory chemistry, industrial manufacturing, environmental science and everyday life. Understanding acid-base behaviour also provides a foundation for studying pH, neutralisation and chemical equilibrium.",

    objectives: [
      "Define acids and bases using established chemical theories.",
      "Distinguish between Arrhenius and Brønsted-Lowry definitions.",
      "Identify common properties of acids and bases.",
      "Explain the meaning of strong and weak acids and bases.",
      "Describe the pH scale and calculate simple pH values.",
      "Explain neutralisation reactions and salt formation.",
      "Identify common methods of preparing salts.",
      "Describe practical applications of acids, bases and salts."
    ],

    sections: [
      {
        heading: "1. Understanding Acids and Bases",
        content: "Acids and bases are substances that exhibit characteristic chemical behaviour. An Arrhenius acid increases the concentration of hydrogen ions in aqueous solution, while an Arrhenius base increases the concentration of hydroxide ions in aqueous solution. The Brønsted-Lowry theory provides a broader definition: an acid is a proton donor while a base is a proton acceptor. For example, hydrogen chloride transfers a proton to water, forming hydronium ions and chloride ions. The reaction can be represented as HCl + H₂O → H₃O⁺ + Cl⁻."
      },
      {
        heading: "2. Properties of Acids",
        content: "Common properties of acids include a sour taste, although chemicals should never be tasted in a laboratory. Acids turn blue litmus paper red and react with certain metals to produce hydrogen gas. Many acids react with carbonates to produce salt, water and carbon dioxide. For example, hydrochloric acid reacts with calcium carbonate according to 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂. Acids also conduct electricity in aqueous solution because they produce mobile ions. Their actual behaviour depends on their chemical composition and concentration."
      },
      {
        heading: "3. Properties of Bases and Alkalis",
        content: "Bases are substances that accept protons under the Brønsted-Lowry definition. Arrhenius bases increase hydroxide ion concentration in aqueous solution. Alkalis are bases that dissolve in water to produce an alkaline solution. Common examples include sodium hydroxide, potassium hydroxide and aqueous ammonia. Alkalis turn red litmus paper blue and may feel slippery, but chemicals should never be touched to identify them. They conduct electricity in aqueous solution because they contain mobile ions. Many bases react with acids to form salts and water."
      },
      {
        heading: "4. Strong and Weak Acids and Bases",
        content: "The strength of an acid or base describes the extent to which it ionises or dissociates in water. Strong acids ionise extensively in aqueous solution, while weak acids ionise only partially. Hydrochloric acid is a common example of a strong acid, while ethanoic acid is a weak acid. Sodium hydroxide is a strong base, while aqueous ammonia is a weak base. Strength must not be confused with concentration. A concentrated acid contains a large amount of acid per unit volume, whereas a dilute acid contains a smaller amount. A weak acid can be concentrated and a strong acid can be dilute."
      },
      {
        heading: "5. The pH Scale",
        content: "The pH scale is used to express the acidity or basicity of an aqueous solution. At approximately 25°C, a solution with pH below 7 is acidic, pH 7 is neutral and pH above 7 is alkaline. The pH of an aqueous solution is defined as the negative base-ten logarithm of its hydrogen ion activity. For sufficiently dilute solutions, hydrogen ion concentration is often used as an approximation. For example, a solution with hydrogen ion concentration of 1.0 × 10⁻³ mol/L has an approximate pH of 3. The pH scale is logarithmic, so a change of one pH unit corresponds to a tenfold change in hydrogen ion activity."
      },
      {
        heading: "6. Acid-Base Indicators",
        content: "Indicators are substances that change colour depending on the acidity or basicity of their surroundings. Litmus is commonly used to distinguish acidic and alkaline solutions. Methyl orange appears red in acidic solution and yellow in alkaline solution, with an intermediate orange transition range. Phenolphthalein is colourless in acidic solution and pink in alkaline solution. Universal indicator produces a range of colours across different pH values. pH meters can provide more precise pH measurements than colour indicators when properly calibrated."
      },
      {
        heading: "7. Neutralisation Reactions",
        content: "Neutralisation occurs when an acid reacts with a base. In a typical reaction between an acid and a hydroxide base, water is formed along with a salt. For example, hydrochloric acid reacts with sodium hydroxide to produce sodium chloride and water: HCl + NaOH → NaCl + H₂O. The net ionic equation for this reaction is H⁺ + OH⁻ → H₂O. Neutralisation reactions are important in laboratory analysis, wastewater treatment and agriculture, where acidic or alkaline conditions may need to be adjusted."
      },
      {
        heading: "8. Salts and Their Preparation",
        content: "A salt is an ionic compound that contains positive ions other than hydrogen ions and negative ions other than hydroxide ions. Salts can be prepared through different reactions, including acid-base neutralisation, reactions between acids and metals and reactions between acids and carbonates. For example, hydrochloric acid reacts with magnesium to produce magnesium chloride and hydrogen gas: 2HCl + Mg → MgCl₂ + H₂. Soluble salts can often be prepared by reacting an acid with an appropriate base or carbonate, followed by filtration where necessary, concentration and crystallisation. Insoluble salts can be prepared by precipitation, where two suitable soluble salt solutions react to form an insoluble product."
      },
      {
        heading: "9. Applications of Acids, Bases and Salts",
        content: "Acids, bases and salts have many industrial and practical applications. Sulfuric acid is widely used in fertiliser manufacture and petroleum processing. Hydrochloric acid is used in industrial cleaning and metal treatment. Sodium hydroxide is important in soap production, paper manufacture and chemical processing. Calcium carbonate is used in construction materials and as an agricultural liming agent. Salts such as sodium chloride are important in food processing and chemical manufacturing. Their applications depend on their chemical properties and must be managed with appropriate safety precautions."
      },
      {
        heading: "10. Laboratory Safety",
        content: "Many acids and bases are corrosive and can cause serious chemical burns. Laboratory work should be performed with appropriate protective equipment, including safety goggles, suitable gloves and a laboratory coat. When diluting concentrated acids, always add acid slowly to water while stirring. Never add water directly to concentrated acid because the heat released can cause dangerous splashing. Chemical containers must be labelled correctly and unknown substances should never be tasted or handled without appropriate procedures."
      }
    ]
  },

  "Gas Laws": {
    title: "Gas Laws",
    introduction: "Gas laws describe how the pressure, volume, temperature and amount of a gas are related. These relationships help chemists predict how gases behave under different conditions. They are important in laboratory experiments, industrial processes, atmospheric science and chemical engineering.",

    objectives: [
      "Explain the basic properties and behaviour of gases.",
      "State and apply Boyle's law.",
      "State and apply Charles's law.",
      "Explain the pressure-temperature relationship of gases.",
      "Apply Avogadro's law to gas calculations.",
      "Use the combined gas law to solve problems.",
      "Apply the ideal gas equation in chemical calculations.",
      "Explain Dalton's law of partial pressures and deviations from ideal behaviour."
    ],

    sections: [
      {
        heading: "1. Introduction to the Behaviour of Gases",
        content: "Gases consist of particles that move continuously and randomly. Unlike solids and liquids, gases have no fixed shape or volume and expand to fill their containers. They are highly compressible because their particles are relatively far apart. The main measurable properties of a gas include pressure, volume, temperature and amount of substance. Changes in one property may affect the others, depending on which conditions are kept constant."
      },
      {
        heading: "2. Boyle's Law",
        content: "Boyle's law states that for a fixed amount of gas at constant temperature, its pressure is inversely proportional to its volume. When the volume decreases, the pressure increases, provided the temperature and amount of gas remain constant. This relationship is expressed as P₁V₁ = P₂V₂. For example, if a gas occupies 4.0 L at a pressure of 2.0 atm and is compressed to 2.0 L at constant temperature, its final pressure is 4.0 atm. Boyle's law helps explain the operation of syringes and the compression of gases."
      },
      {
        heading: "3. Charles's Law",
        content: "Charles's law states that the volume of a fixed amount of gas is directly proportional to its absolute temperature when pressure remains constant. As the temperature increases, the gas volume increases. The relationship is expressed as V₁/T₁ = V₂/T₂. Temperature must always be measured in kelvin when applying gas laws. The conversion is K = °C + 273.15. For example, a gas occupying 2.0 L at 300 K will occupy 3.0 L at 450 K if pressure and amount remain constant. This law helps explain why a balloon expands when warmed under suitable conditions."
      },
      {
        heading: "4. Pressure-Temperature Law",
        content: "The pressure-temperature relationship, commonly called Gay-Lussac's law, states that the pressure of a fixed amount of gas at constant volume is directly proportional to its absolute temperature. As the temperature increases, the pressure increases because gas particles move faster and collide more frequently and forcefully with the container walls. The relationship is expressed as P₁/T₁ = P₂/T₂. Temperature must be expressed in kelvin. This principle explains why heating a sealed rigid gas container can cause its internal pressure to rise."
      },
      {
        heading: "5. Avogadro's Law",
        content: "Avogadro's law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. It also states that the volume of a gas is directly proportional to its amount in moles when temperature and pressure are constant. The relationship is expressed as V₁/n₁ = V₂/n₂. For example, if the amount of a gas is doubled at constant temperature and pressure, its volume also doubles. This relationship is useful when comparing gaseous reactants and products in chemical reactions."
      },
      {
        heading: "6. The Combined Gas Law",
        content: "The combined gas law brings together Boyle's law, Charles's law and the pressure-temperature relationship. It describes changes in pressure, volume and absolute temperature for a fixed amount of gas. It is expressed as P₁V₁/T₁ = P₂V₂/T₂. This equation can be used when the initial and final conditions of a gas are known. The amount of gas must remain constant, all temperatures must be in kelvin and pressure units must be consistent."
      },
      {
        heading: "7. The Ideal Gas Equation",
        content: "The ideal gas equation combines the relationships between pressure, volume, temperature and amount of gas. It is written as PV = nRT, where P is pressure, V is volume, n is the amount of gas in moles, R is the universal gas constant and T is absolute temperature in kelvin. The value of R depends on the units being used. For example, R is approximately 0.08206 L atm mol⁻¹ K⁻¹ when pressure is in atmospheres and volume is in litres. In SI units, R is approximately 8.314 J mol⁻¹ K⁻¹ when pressure is in pascals and volume is in cubic metres. Always use consistent units when performing calculations."
      },
      {
        heading: "8. Dalton's Law of Partial Pressures",
        content: "Dalton's law of partial pressures states that the total pressure of a mixture of non-reacting gases is equal to the sum of the partial pressures of the individual gases. It is expressed as Ptotal = P₁ + P₂ + P₃ + ... . The partial pressure of a gas is the pressure it would exert if it alone occupied the entire volume of the mixture at the same temperature. For example, if a mixture contains two gases with partial pressures of 0.4 atm and 0.6 atm, the total pressure is 1.0 atm. This law is important in gas collection and the study of atmospheric gases."
      },
      {
        heading: "9. Kinetic Molecular Theory",
        content: "The kinetic molecular theory explains the behaviour of ideal gases in terms of the motion of their particles. It assumes that gas particles occupy negligible volume compared with the container, move continuously and randomly, experience negligible intermolecular forces and undergo perfectly elastic collisions. The average kinetic energy of gas particles is directly proportional to absolute temperature. Increasing temperature therefore increases the average kinetic energy of the particles. These assumptions provide a useful model for understanding gas pressure, temperature and volume."
      },
      {
        heading: "10. Real Gases and Deviations from Ideal Behaviour",
        content: "Real gases do not always behave exactly like ideal gases because their molecules occupy space and experience intermolecular attractions. Real gases tend to deviate more from ideal behaviour at high pressures and low temperatures. At high pressure, the volume occupied by gas particles becomes significant compared with the container volume. At low temperature, intermolecular attractions become more important because particle kinetic energy decreases. Under suitable conditions, real gases may condense into liquids. The ideal gas equation remains a useful approximation under conditions where these effects are relatively small."
      }
    ]
  },

  "Chemical Energetics": {
    title: "Chemical Energetics",
    introduction: "Chemical energetics is the study of energy changes that accompany chemical and physical processes. Chemical reactions may release or absorb energy depending on the difference between the energy of the reactants and products. Understanding these changes is important in laboratory chemistry, industrial production, fuel technology and environmental science.",

    objectives: [
      "Explain the meaning of chemical energetics and enthalpy.",
      "Distinguish between exothermic and endothermic reactions.",
      "Explain thermochemical equations and enthalpy changes.",
      "Describe calorimetry and perform simple heat calculations.",
      "Explain standard enthalpy of formation and combustion.",
      "Apply Hess's law to calculate enthalpy changes.",
      "Estimate reaction enthalpy using bond enthalpies.",
      "Explain activation energy and the role of catalysts."
    ],

    sections: [
      {
        heading: "1. Introduction to Chemical Energetics",
        content: "Chemical energetics deals with the energy absorbed or released during chemical reactions and physical changes. Energy may be transferred between a system and its surroundings as heat or work. In chemical reactions, energy changes arise mainly from the breaking of existing bonds and the formation of new bonds. Breaking bonds requires energy, while forming bonds releases energy. The overall energy change depends on the balance between these processes. Chemical energetics helps explain why some reactions release heat while others absorb it."
      },
      {
        heading: "2. Enthalpy and Enthalpy Change",
        content: "Enthalpy, represented by H, is a thermodynamic state function defined as internal energy plus pressure multiplied by volume. Enthalpy itself cannot be measured directly, but changes in enthalpy (ΔH) can be determined. At constant pressure, the enthalpy change of a system equals the heat transferred to or from it, provided pressure-volume work is the only work considered. A negative ΔH indicates an exothermic process, while a positive ΔH indicates an endothermic process. Enthalpy changes are commonly expressed in kilojoules per mole (kJ/mol)."
      },
      {
        heading: "3. Exothermic and Endothermic Reactions",
        content: "An exothermic reaction releases heat to its surroundings and has a negative enthalpy change. Combustion of fuels and many strong acid-base neutralisation reactions are examples. An endothermic reaction absorbs heat from its surroundings and has a positive enthalpy change. Thermal decomposition of calcium carbonate and photosynthesis are examples of processes requiring energy input. During an exothermic reaction, the products have lower enthalpy than the reactants. During an endothermic reaction, the products have higher enthalpy than the reactants."
      },
      {
        heading: "4. Thermochemical Equations",
        content: "A thermochemical equation is a balanced chemical equation accompanied by its enthalpy change. It provides information about both the substances involved and the energy transferred during the reaction. For example, the combustion of methane can be represented as CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), with a standard enthalpy change of approximately −890 kJ per mole of methane under standard conditions. The physical states of the reactants and products must be specified because enthalpy changes depend on the physical forms of substances. Reversing a thermochemical equation changes the sign of its enthalpy change, while multiplying the equation by a factor multiplies the enthalpy change by the same factor."
      },
      {
        heading: "5. Calorimetry and Heat Calculations",
        content: "Calorimetry is the experimental measurement of heat transferred during a physical or chemical process. A common relationship used in simple calorimetry is q = mcΔT, where q is heat transferred, m is the mass of the substance, c is its specific heat capacity and ΔT is the temperature change. The temperature change is calculated as final temperature minus initial temperature. For a reaction carried out in a calorimeter, the heat gained by the surroundings is equal in magnitude and opposite in sign to the heat transferred by the reaction, assuming negligible heat exchange with the environment. For example, if 100 g of water is heated from 25°C to 30°C and its specific heat capacity is 4.18 J g⁻¹ °C⁻¹, the heat absorbed by the water is 100 × 4.18 × 5 = 2090 J."
      },
      {
        heading: "6. Standard Enthalpy Changes",
        content: "Standard enthalpy changes are measured with all substances in their standard states at a specified temperature and a standard pressure of 1 bar. A commonly used reference temperature is 298.15 K. The standard enthalpy of formation is the enthalpy change when one mole of a substance is formed from its constituent elements in their standard states. The standard enthalpy of combustion is the enthalpy change when one mole of a substance is completely burned in oxygen under standard conditions. Standard enthalpy of neutralisation refers to the enthalpy change when an acid and a base react to form one mole of water under specified conditions. These quantities help compare chemical processes and calculate reaction enthalpies."
      },
      {
        heading: "7. Hess's Law",
        content: "Hess's law states that the total enthalpy change of a reaction is independent of the route taken, provided the initial and final states are the same. This is because enthalpy is a state function. Hess's law allows chemists to calculate enthalpy changes indirectly by combining other thermochemical equations. When equations are reversed, their enthalpy changes change sign. When equations are multiplied by a numerical factor, their enthalpy changes are multiplied by the same factor. Hess's law is useful when a reaction cannot be measured directly or when its enthalpy change is difficult to determine experimentally."
      },
      {
        heading: "8. Bond Enthalpies and Reaction Energy",
        content: "Bond enthalpy is the energy required to break one mole of a specified covalent bond in gaseous molecules. Breaking bonds is endothermic, while forming bonds is exothermic. An approximate reaction enthalpy can be estimated using the relationship: enthalpy change ≈ total energy of bonds broken − total energy of bonds formed. Average bond enthalpies are usually used in these calculations and give approximate results because the strength of a particular bond can vary depending on its molecular environment. Bond enthalpy calculations help explain the energy changes involved in chemical reactions."
      },
      {
        heading: "9. Activation Energy and Catalysts",
        content: "Activation energy is the minimum energy required for reacting particles to reach the transition state and allow a reaction to proceed. Even exothermic reactions may require an initial energy input before they begin. A catalyst increases the reaction rate by providing an alternative reaction pathway with a lower activation energy. It is not consumed overall and does not change the enthalpy difference between reactants and products. A catalyst also does not change the equilibrium constant or the equilibrium position of a reversible reaction at a fixed temperature."
      },
      {
        heading: "10. Applications of Chemical Energetics",
        content: "Chemical energetics is important in fuel selection, energy production, industrial manufacturing and environmental management. Combustion enthalpies help compare the energy released by different fuels. Calorimetry is used to determine the energy content of food and other materials. Industrial processes consider energy requirements when selecting reaction conditions and designing equipment. In chemical manufacturing, understanding enthalpy changes helps improve energy efficiency, manage heat transfer and reduce operational costs. These applications connect chemical principles with practical industrial problems."
      }
    ]
  },

  "Chemical Equilibrium": {
    title: "Chemical Equilibrium",
    introduction: "Chemical equilibrium describes the condition reached by a reversible reaction in a closed system when the forward and reverse reaction rates become equal. At equilibrium, the concentrations of reactants and products remain constant, although both reactions continue to occur. Understanding chemical equilibrium is important in chemical manufacturing, industrial optimisation and many biological and environmental processes.",

    objectives: [
      "Explain the meaning of reversible reactions and chemical equilibrium.",
      "Distinguish between dynamic equilibrium and static equilibrium.",
      "Describe the characteristics of a system at equilibrium.",
      "Write equilibrium constant expressions using Kc.",
      "Calculate equilibrium constants from concentration data.",
      "Explain Le Chatelier's principle.",
      "Predict how changes in concentration, pressure and temperature affect equilibrium.",
      "Explain the effects of catalysts on chemical equilibrium.",
      "Identify the industrial importance of chemical equilibrium."
    ],

    sections: [
      {
        heading: "1. Reversible Chemical Reactions",
        content: "A reversible reaction is a chemical reaction that can proceed in both forward and reverse directions under suitable conditions. The forward reaction converts reactants into products, while the reverse reaction converts products back into reactants. A reversible reaction is commonly represented using a double arrow (⇌). For example, nitrogen and hydrogen react to produce ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). In a closed system, the products can react to regenerate the original reactants. Many industrial and laboratory reactions involve reversible processes."
      },
      {
        heading: "2. Understanding Chemical Equilibrium",
        content: "Chemical equilibrium is established in a reversible reaction when the rate of the forward reaction becomes equal to the rate of the reverse reaction. At this point, the concentrations of reactants and products remain constant with time, provided external conditions remain unchanged. The concentrations are not necessarily equal. Equilibrium is dynamic because both forward and reverse reactions continue to occur at equal rates. Equilibrium is commonly established in a closed system where substances do not escape from the reaction mixture."
      },
      {
        heading: "3. Characteristics of Dynamic Equilibrium",
        content: "A system at chemical equilibrium has several important characteristics. The forward and reverse reaction rates are equal, the concentrations of reactants and products remain constant and macroscopic properties such as pressure and colour remain unchanged under constant conditions. The reaction does not stop at equilibrium. Instead, both directions continue at equal rates. Equilibrium can be approached from either direction, starting with reactants or with products, provided the same temperature and other conditions are maintained."
      },
      {
        heading: "4. The Equilibrium Constant, Kc",
        content: "The equilibrium constant based on concentration, represented by Kc, expresses the relationship between product and reactant concentrations at equilibrium. For a general reaction aA + bB ⇌ cC + dD, the expression is Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ). The square brackets represent equilibrium molar concentrations, while the exponents are the coefficients from the balanced chemical equation. Pure solids and pure liquids are excluded from the equilibrium constant expression because their activities are treated as constant. The value of Kc is specific to a particular reaction as written and depends on temperature."
      },
      {
        heading: "5. Interpreting the Value of Kc",
        content: "The magnitude of Kc provides information about the relative amounts of products and reactants at equilibrium. A very large Kc generally indicates that products are favoured at equilibrium. A very small Kc generally indicates that reactants are favoured. A Kc value around 1 indicates that neither side is overwhelmingly favoured. However, Kc does not tell us how quickly equilibrium is reached. Reaction rate and equilibrium position are different concepts. The equilibrium constant is also not a direct measure of reaction completion."
      },
      {
        heading: "6. Le Chatelier's Principle",
        content: "Le Chatelier's principle states that when a system at equilibrium is subjected to a change in conditions, the system responds in a direction that tends to counteract the imposed change. Changes in concentration, pressure or temperature may alter the equilibrium position. For example, adding more reactant generally causes the system to shift towards products as it responds to the disturbance. Removing a product generally encourages further product formation. The principle helps predict how reversible reactions respond when their conditions are changed."
      },
      {
        heading: "7. Effects of Concentration and Pressure",
        content: "Changing the concentration of a reactant or product can shift the equilibrium position. Adding a reactant generally favours the forward reaction, while adding a product generally favours the reverse reaction. Removing a substance tends to shift equilibrium in the direction that replaces it. For gaseous equilibria, changing pressure by changing volume can also affect equilibrium. Increasing pressure by decreasing volume favours the side with fewer moles of gaseous substances, where the total gaseous mole counts differ. Decreasing pressure by increasing volume favours the side with more gaseous moles. If both sides contain equal total gaseous mole counts, a pressure change caused by volume change does not shift the equilibrium position."
      },
      {
        heading: "8. Effect of Temperature on Equilibrium",
        content: "Temperature affects both the equilibrium position and the value of the equilibrium constant. An increase in temperature favours the endothermic direction, while a decrease in temperature favours the exothermic direction. For an exothermic forward reaction, increasing temperature favours the reverse reaction and decreases Kc. For an endothermic forward reaction, increasing temperature favours the forward reaction and increases Kc. Unlike changes in concentration or pressure, temperature changes alter the equilibrium constant."
      },
      {
        heading: "9. Catalysts and Chemical Equilibrium",
        content: "A catalyst increases the rates of both forward and reverse reactions by providing alternative reaction pathways with lower activation energies. It helps a system reach equilibrium faster but does not change the equilibrium constant or the equilibrium position at a fixed temperature. A catalyst does not increase the final equilibrium yield of a reaction. Its main advantage in a reversible process is reducing the time needed to establish equilibrium."
      },
      {
        heading: "10. Industrial Applications of Chemical Equilibrium",
        content: "Chemical equilibrium is important in several industrial manufacturing processes. In the Haber process, nitrogen reacts with hydrogen to produce ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). The reaction is exothermic, and industrial operating conditions are selected to balance equilibrium yield, reaction rate, equipment requirements and economic considerations. In the Contact process, sulfur dioxide reacts with oxygen to form sulfur trioxide: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). Understanding equilibrium helps industries select appropriate operating conditions, improve production efficiency and reduce unnecessary resource consumption."
      }
    ]
  },

  "Advanced Organic Chemistry": {
    title: "Advanced Organic Chemistry",
    introduction: "Advanced organic chemistry explores the structure, properties, reactivity and synthesis of complex carbon-containing compounds. It develops a deeper understanding of molecular structure, stereochemistry, functional group transformations and synthetic strategies used in chemical research, pharmaceuticals and industrial manufacturing.",

    objectives: [
      "Explain electronic effects in organic molecules.",
      "Analyse molecular structure and stereochemistry.",
      "Distinguish between constitutional and stereoisomers.",
      "Explain the influence of functional groups on chemical reactivity.",
      "Describe important transformations of carbonyl compounds.",
      "Explain aromaticity and the stability of aromatic compounds.",
      "Describe the role of organometallic reagents in organic synthesis.",
      "Explain regioselectivity, chemoselectivity and stereoselectivity.",
      "Apply retrosynthetic thinking to simple organic synthesis problems."
    ],

    sections: [
      {
        heading: "1. Electronic Effects in Organic Molecules",
        content: "The reactivity and stability of organic molecules are strongly influenced by the distribution of electrons within their structures. The inductive effect occurs when electronegativity differences cause electron density to shift through sigma bonds. Electron-withdrawing groups decrease electron density while electron-donating groups increase it. Resonance occurs when electrons are delocalised across a conjugated system and cannot be represented adequately by a single Lewis structure. Hyperconjugation involves interactions between sigma bonds and adjacent empty or partially occupied orbitals. These electronic effects influence acidity, basicity, molecular stability and reaction pathways."
      },
      {
        heading: "2. Molecular Structure and Conformational Analysis",
        content: "Molecular structure determines the three-dimensional arrangement of atoms and influences the physical and chemical properties of organic compounds. Rotation around single carbon-carbon bonds produces different conformations. In ethane, staggered and eclipsed conformations have different energies because of differences in torsional strain. Cyclohexane commonly adopts a chair conformation because it minimises angle and torsional strain. Substituted cyclohexanes may contain axial and equatorial substituents. Bulky substituents generally favour equatorial positions because these reduce steric interactions."
      },
      {
        heading: "3. Stereochemistry and Chirality",
        content: "Stereochemistry examines the three-dimensional arrangement of atoms in molecules. A molecule is chiral when it is not superimposable on its mirror image. A common source of chirality is a tetrahedral carbon atom attached to four different groups. Such a carbon is called a stereogenic centre. The R and S naming system is used to assign absolute configurations using the Cahn-Ingold-Prelog priority rules. Enantiomers are non-superimposable mirror-image stereoisomers, while diastereomers are stereoisomers that are not mirror images. Stereochemistry is particularly important in pharmaceuticals because different stereoisomers may interact differently with biological systems."
      },
      {
        heading: "4. Functional Groups and Organic Reactivity",
        content: "Functional groups are specific arrangements of atoms that determine characteristic chemical reactions of organic compounds. Important functional groups include alcohols, aldehydes, ketones, carboxylic acids, esters, amides, amines and nitriles. Their reactivity depends on molecular structure, electronic effects, steric factors and reaction conditions. For example, alcohols can undergo oxidation, dehydration and substitution reactions. Aldehydes and ketones contain carbonyl groups that are susceptible to nucleophilic addition. Understanding functional group behaviour helps chemists plan transformations between different classes of organic compounds."
      },
      {
        heading: "5. Advanced Chemistry of Carbonyl Compounds",
        content: "The carbonyl group consists of a carbon atom double-bonded to oxygen. The electronegativity difference between carbon and oxygen makes the carbonyl carbon electrophilic, allowing nucleophiles to attack it. Aldehydes and ketones commonly undergo nucleophilic addition reactions. Carboxylic acid derivatives, including esters, amides and acyl halides, commonly undergo nucleophilic acyl substitution. Their relative reactivity depends partly on the ability of the leaving group to depart. Carbonyl chemistry is central to the synthesis of pharmaceuticals, polymers, fragrances and many industrial organic products."
      },
      {
        heading: "6. Aromaticity and Aromatic Compounds",
        content: "Aromaticity is a special form of electronic stabilisation found in certain cyclic, planar and conjugated molecular systems. According to Hückel's rule, a monocyclic planar conjugated system is aromatic when it contains (4n + 2) pi electrons, where n is a non-negative integer. Benzene is a common example because it contains six delocalised pi electrons. Aromatic compounds often undergo electrophilic aromatic substitution rather than ordinary addition reactions because substitution can preserve the aromatic system. Important examples include nitration, sulfonation, halogenation and Friedel-Crafts reactions."
      },
      {
        heading: "7. Organometallic Reagents in Organic Synthesis",
        content: "Organometallic compounds contain at least one direct bond between a metal and a carbon atom. They are important reagents in organic synthesis because the carbon-metal bond can give carbon a nucleophilic character. Grignard reagents, represented by RMgX, react with carbonyl compounds to form new carbon-carbon bonds after appropriate work-up. Organolithium reagents are generally highly reactive and can also participate in carbon-carbon bond formation. These reagents are often sensitive to moisture and must be handled under suitable controlled conditions. Their applications include the preparation of alcohols and more complex carbon skeletons."
      },
      {
        heading: "8. Selectivity in Organic Reactions",
        content: "Selectivity describes the preference for one reaction pathway or product over competing alternatives. Chemoselectivity refers to the preference for reaction at one functional group in the presence of other reactive groups. Regioselectivity refers to the preference for forming one constitutional isomer over another when a reaction can occur at different positions. Stereoselectivity describes the preferential formation of one stereoisomer over others. These concepts are essential in organic synthesis because a successful preparation often requires control over which bonds form, which functional groups react and the three-dimensional arrangement of the products."
      },
      {
        heading: "9. Retrosynthetic Analysis",
        content: "Retrosynthetic analysis is a method of planning organic synthesis by working backwards from a target molecule towards simpler starting materials. The chemist identifies bonds that could be disconnected and considers reactions capable of forming those bonds. A disconnection is a conceptual step rather than an actual reaction. Suitable starting materials and reagents are then identified for each proposed transformation. The process may involve several stages and must consider reaction compatibility, selectivity, yield, cost and safety. Retrosynthetic analysis is widely used in pharmaceutical research and the preparation of complex organic molecules."
      },
      {
        heading: "10. Applications of Advanced Organic Chemistry",
        content: "Advanced organic chemistry plays an important role in drug discovery, polymer manufacturing, agricultural chemicals, materials science and chemical industries. Pharmaceutical chemists use structural modification and stereochemical control to develop molecules with desired biological properties. Polymer chemists use organic reactions to prepare materials with particular mechanical, thermal and chemical characteristics. Organic synthesis also supports the production of dyes, solvents, detergents and specialty chemicals. Modern approaches increasingly consider atom economy, waste reduction, safer reagents and energy-efficient reaction conditions as part of sustainable chemical manufacturing."
      }
    ]
  },

  "Advanced Inorganic Chemistry": {
    title: "Advanced Inorganic Chemistry",

    introduction: "Advanced inorganic chemistry explores the structures, bonding, properties, reactions and applications of inorganic substances. It examines the behaviour of metals, non-metals, coordination compounds, organometallic compounds and solid-state materials. These principles are important in catalysis, metallurgy, materials science, medicine and industrial chemical production.",

    objectives: [
      "Explain the scope and importance of advanced inorganic chemistry.",
      "Interpret electronic configurations and oxidation states of transition metals.",
      "Explain the structure and bonding of coordination compounds.",
      "Apply coordination compound nomenclature and oxidation-state rules.",
      "Explain crystal field theory and d-orbital splitting.",
      "Distinguish between geometrical, optical and linkage isomerism in coordination compounds.",
      "Explain the structure and reactivity of organometallic compounds.",
      "Describe bonding and electronic properties in solid-state inorganic materials.",
      "Explain the hard and soft acids and bases principle."
    ],

    sections: [

      {
        heading: "1. Introduction to Advanced Inorganic Chemistry",
        content: "Inorganic chemistry is the branch of chemistry concerned with the properties, structures and reactions of inorganic substances, including metals, non-metals, minerals, salts, coordination compounds and organometallic compounds. Advanced inorganic chemistry goes beyond basic classification and examines the relationships between electronic structure, chemical bonding, molecular geometry and reactivity. It provides the foundation for understanding catalysts, metal complexes, industrial materials and inorganic substances used in medicine and technology."
      },

      {
        heading: "2. Electronic Configurations and Oxidation States of Transition Metals",
        content: "Transition metals are elements whose atoms or ions have partially filled d subshells in at least one of their common oxidation states, according to the standard introductory definition. Their electronic configurations influence their oxidation states, magnetic behaviour, colour and chemical reactivity. Many transition metals exhibit variable oxidation states because their ns and (n−1)d electrons can participate in bonding. For example, iron commonly forms Fe²⁺ and Fe³⁺, while copper commonly forms Cu⁺ and Cu²⁺. In forming transition-metal cations, electrons are generally removed from the ns orbital before the (n−1)d orbitals. The presence of partially filled d orbitals helps explain many characteristic properties of transition-metal compounds."
      },

      {
        heading: "3. Coordination Chemistry",
        content: "Coordination chemistry deals with compounds in which a central metal atom or ion is surrounded by molecules or ions known as ligands. A ligand donates one or more pairs of electrons to the central metal through coordinate bonding. Common ligands include water (H₂O), ammonia (NH₃), chloride (Cl⁻) and cyanide (CN⁻). A ligand that attaches through one donor atom is called monodentate, while a ligand that attaches through two or more donor atoms is called polydentate. Ethylenediamine is a common bidentate ligand. Coordination number describes the number of donor atoms directly bonded to the central metal. Coordination compounds are important in biological systems, analytical chemistry, medicine and industrial catalysis."
      },

      {
        heading: "4. Nomenclature and Oxidation States of Coordination Compounds",
        content: "The nomenclature of coordination compounds follows systematic rules designed to communicate their composition and structure. In naming a coordination entity, ligand names are generally written before the central metal name, with appropriate prefixes indicating the number of each ligand. The oxidation state of the central metal is written in Roman numerals in parentheses. For example, [Co(NH₃)₆]Cl₃ is named hexaamminecobalt(III) chloride. The six ammonia ligands are neutral, while the three chloride counter-ions contribute a total charge of −3, so the cobalt oxidation state is +3. In [Fe(CN)₆]⁴⁻, each cyanide ligand carries a charge of −1. The six ligands contribute −6, giving iron an oxidation state of +2. Correct identification of ligand charges and the overall charge of the complex is essential for accurate naming."
      },

      {
        heading: "5. Crystal Field Theory and d-Orbital Splitting",
        content: "Crystal field theory explains the electronic structure of coordination compounds by considering the electrostatic interaction between a central metal ion and surrounding ligands. In an isolated gaseous metal ion, the five d orbitals have the same energy. When ligands approach the metal ion, their interactions cause the d orbitals to split into groups with different energies. In an octahedral complex, the d orbitals split into a lower-energy t₂g set and a higher-energy e_g set. The energy difference is represented by Δₒ. In a tetrahedral complex, the splitting pattern is reversed, with the e orbitals lower and the t₂ orbitals higher. The magnitude of orbital splitting depends on the metal ion, its oxidation state, the geometry and the ligands present. Strong-field ligands produce relatively large splitting, while weak-field ligands produce smaller splitting. Depending on the balance between splitting energy and electron-pairing energy, octahedral complexes may be high-spin or low-spin. Crystal field theory helps explain the colours, magnetic properties and stability of coordination compounds."
      },

      {
        heading: "6. Isomerism in Coordination Compounds",
        content: "Coordination compounds can exhibit structural and stereoisomerism. Structural isomerism occurs when compounds have different arrangements of ions or ligands despite having the same overall composition. Examples include ionisation isomerism and linkage isomerism. Linkage isomerism occurs when an ambidentate ligand attaches to a metal through different donor atoms. For example, the nitrite ion can coordinate through nitrogen or oxygen. Stereoisomerism occurs when compounds have the same bonding connections but different spatial arrangements. Geometrical isomerism includes cis and trans arrangements, as illustrated by certain square-planar and octahedral complexes. Optical isomerism occurs when coordination complexes have non-superimposable mirror-image structures. These forms of isomerism are important because different isomers may exhibit different physical, chemical and biological properties."
      },

      {
        heading: "7. Organometallic Chemistry",
        content: "Organometallic chemistry studies compounds containing at least one direct bond between a metal and a carbon atom of an organic group. Common examples include Grignard reagents, organolithium compounds and transition-metal carbonyl complexes. Organometallic compounds are important because they combine features of organic and inorganic chemistry. Their reactions include oxidative addition, reductive elimination, migratory insertion and ligand substitution. The 18-electron rule is a useful guideline for understanding the stability of many transition-metal complexes, although important exceptions exist. Organometallic catalysts are widely used in industrial processes, including hydrogenation, hydroformylation and polymer production. Their ability to facilitate bond formation makes them particularly important in modern chemical synthesis."
      },

      {
        heading: "8. Solid-State Inorganic Chemistry",
        content: "Solid-state inorganic chemistry investigates the structures and properties of solid inorganic materials. These materials may contain ionic lattices, covalent networks, metallic structures or more complex arrangements. Their properties depend on the types of particles present, the bonding forces and the arrangement of particles within the solid. Ionic solids such as sodium chloride contain oppositely charged ions arranged in an ordered crystal lattice. Giant covalent materials such as silicon dioxide contain extended networks of covalent bonds. Metallic solids contain positive metal centres and delocalised electrons. Band theory helps explain the electrical behaviour of solids by describing the arrangement of allowed electronic energy levels. Conductors have accessible electronic states that permit electrical conduction, while semiconductors have a smaller energy gap between their valence and conduction bands. Doping can modify the electrical properties of semiconductor materials."
      },

      {
        heading: "9. Hard and Soft Acids and Bases Principle",
        content: "The hard and soft acids and bases principle, commonly called HSAB theory, was developed to help explain the preferences of Lewis acids and bases for one another. Hard acids and bases generally have small sizes, high charge density and low polarizability. Soft acids and bases generally have larger sizes, lower charge density and greater polarizability. Hard acids tend to form stronger interactions with hard bases, while soft acids tend to interact more favourably with soft bases. For example, Mg²⁺ is classified as a hard acid, while Ag⁺ is classified as a relatively soft acid. Fluoride ions behave as hard bases, whereas iodide ions behave as soft bases. HSAB theory is useful for understanding complex stability, precipitation reactions, coordination chemistry and certain aspects of inorganic reaction selectivity."
      },

      {
        heading: "10. Applications of Advanced Inorganic Chemistry",
        content: "Advanced inorganic chemistry has extensive applications in modern science and industry. Coordination compounds are used in analytical testing and metal extraction. Transition-metal complexes serve as catalysts in chemical manufacturing. Organometallic compounds are important in polymerisation and the synthesis of organic chemicals. In medicine, certain metal complexes are investigated or used as therapeutic and diagnostic agents. Solid-state inorganic materials are essential in batteries, semiconductors, ceramics, sensors and construction materials. Understanding inorganic structures and reactions enables scientists to develop materials with improved performance, efficiency and sustainability."
      }

    ]
  },

  "Chemical Kinetics": {
    title: "Chemical Kinetics",

    introduction: "Chemical kinetics is the branch of physical chemistry concerned with the rates of chemical reactions, the factors that influence reaction speed and the mechanisms through which reactions occur. It helps chemists understand how quickly reactants are converted into products and how reaction conditions can be adjusted to improve efficiency. Chemical kinetics is particularly important in industrial manufacturing, pharmaceutical development, environmental chemistry and catalytic processes.",

    objectives: [
      "Define chemical kinetics and explain its importance.",
      "Explain the rate of a chemical reaction.",
      "Identify the factors that influence reaction rates.",
      "Explain collision theory and activation energy.",
      "Define rate laws, reaction order and the rate constant.",
      "Distinguish between zero-order, first-order and second-order reactions.",
      "Apply integrated rate equations to chemical calculations.",
      "Calculate the half-life of first-order reactions.",
      "Explain the Arrhenius equation and temperature dependence of reaction rates.",
      "Describe reaction mechanisms and rate-determining steps.",
      "Explain the role of catalysts in chemical kinetics."
    ],

    sections: [

      {
        heading: "1. Introduction to Chemical Kinetics",
        content: "Chemical kinetics studies how fast chemical reactions occur and the pathways through which they proceed. Some reactions, such as acid-base neutralisation between strong electrolytes, occur very rapidly, while others, such as the rusting of iron, may take a long time. Reaction rates depend on several factors, including reactant concentration, temperature, pressure for gaseous systems, surface area and the presence of catalysts. Chemical kinetics helps scientists understand these factors and control reaction conditions for practical applications."
      },

      {
        heading: "2. Rate of Chemical Reactions",
        content: "The rate of a chemical reaction describes how quickly reactants are consumed or products are formed with respect to time. It can be expressed as the change in concentration divided by the time taken for that change. For a reaction A → B, the average rate of disappearance of A is −Δ[A]/Δt, while the average rate of formation of B is Δ[B]/Δt. The negative sign is used for the disappearance of reactants because their concentrations decrease with time. Reaction rates are commonly expressed in mol L⁻¹ s⁻¹ or mol dm⁻³ s⁻¹. For a general reaction aA + bB → cC + dD, the reaction rate is defined using the stoichiometric coefficients so that the rate has the same value regardless of which substance is measured: rate = −(1/a)d[A]/dt = −(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt."
      },

      {
        heading: "3. Factors Affecting Reaction Rates",
        content: "Several factors influence the speed of chemical reactions. Concentration affects the frequency of collisions between reacting particles. Increasing reactant concentration generally increases reaction rate when the rate law indicates a positive concentration dependence. Temperature affects the kinetic energy of particles and the fraction of collisions with sufficient energy to react. Increasing temperature generally increases reaction rate. Pressure can increase reaction rates in gaseous reactions when it increases the concentration of reacting gases. Surface area is particularly important in reactions involving solids because smaller particles expose more surface for contact with other reactants. Catalysts increase reaction rates by providing alternative reaction pathways with lower activation energies. The effects of these factors depend on the reaction mechanism and conditions."
      },

      {
        heading: "4. Collision Theory and Activation Energy",
        content: "Collision theory explains chemical reactions in terms of collisions between reacting particles. For a collision to produce a reaction, the particles must collide with sufficient energy and with a suitable orientation. The minimum energy required for reacting particles to reach the transition state is called activation energy, represented by Ea. Not every collision results in a successful reaction because many collisions do not have sufficient energy or the correct orientation. Increasing temperature raises the average kinetic energy of particles and increases the proportion of collisions with energy equal to or greater than the activation energy. This generally increases the reaction rate. Collision theory provides a simplified model of reaction behaviour, particularly for elementary reactions."
      },

      {
        heading: "5. Rate Laws and Reaction Order",
        content: "A rate law is a mathematical expression that relates the rate of a reaction to the concentrations of its reactants, each raised to an experimentally determined power. For a reaction involving A and B, a general rate law may be written as rate = k[A]ᵐ[B]ⁿ, where k is the rate constant, m and n are the reaction orders with respect to A and B. The overall reaction order is the sum of the individual orders, m + n. Reaction orders must generally be determined experimentally and cannot automatically be obtained from the coefficients of the balanced overall chemical equation. For an elementary reaction step, however, the molecularity and rate expression are directly related to the molecular event represented by that step."
      },

      {
        heading: "6. Zero-Order, First-Order and Second-Order Reactions",
        content: "Reaction orders describe how the reaction rate depends on reactant concentrations. In a zero-order reaction, the rate is independent of the concentration of the reactant and is expressed as rate = k. For a first-order reaction, the rate is directly proportional to the concentration of one reactant and is expressed as rate = k[A]. For a second-order reaction involving one reactant, the rate is proportional to the square of its concentration and is expressed as rate = k[A]². For a reaction involving two different reactants, a second-order rate law may also take the form rate = k[A][B]. The units of the rate constant depend on the overall reaction order. For concentration expressed in mol L⁻¹ and time in seconds, the units are mol L⁻¹ s⁻¹ for zero-order reactions, s⁻¹ for first-order reactions and L mol⁻¹ s⁻¹ for second-order reactions."
      },

      {
        heading: "7. Integrated Rate Equations",
        content: "Integrated rate equations describe how reactant concentration changes with time for reactions of particular orders. For a zero-order reaction, the integrated rate equation is [A]ₜ = [A]₀ − kt. A plot of concentration against time gives a straight line with a slope of −k. For a first-order reaction, the equation is ln([A]ₜ) = ln([A]₀) − kt, and a plot of the natural logarithm of concentration against time gives a straight line with a slope of −k. For a second-order reaction involving one reactant, the equation is 1/[A]ₜ = 1/[A]₀ + kt, and a plot of reciprocal concentration against time gives a straight line with a slope of k. In these equations, [A]₀ is the initial concentration, [A]ₜ is the concentration at time t and k is the rate constant. These relationships allow chemists to determine reaction order and calculate concentrations at different times."
      },

      {
        heading: "8. Half-Life of Chemical Reactions",
        content: "The half-life of a reaction is the time required for the concentration of a reactant to decrease to half of its initial value. It is represented by t₁/₂. For a first-order reaction, the half-life is independent of the initial concentration and is calculated using t₁/₂ = 0.693/k. This means that a first-order reaction has a constant half-life under fixed conditions. For a zero-order reaction, the half-life is t₁/₂ = [A]₀/(2k), showing that it depends on the initial concentration. For a second-order reaction involving one reactant, the half-life is t₁/₂ = 1/(k[A]₀). Half-life calculations are important in radioactive decay, pharmaceutical stability and studies of reaction kinetics."
      },

      {
        heading: "9. The Arrhenius Equation and Temperature Dependence",
        content: "The Arrhenius equation describes the relationship between the rate constant of a reaction and absolute temperature. It is expressed as k = Ae^(−Ea/RT), where k is the rate constant, A is the frequency factor, Ea is the activation energy, R is the universal gas constant and T is absolute temperature in kelvin. The frequency factor accounts for the frequency of collisions and the likelihood of suitable molecular orientations in the simplified Arrhenius model. Taking natural logarithms gives ln k = ln A − Ea/RT. A plot of ln k against 1/T produces a straight line with a slope of −Ea/R when the Arrhenius parameters are approximately constant over the temperature range. Increasing temperature generally increases the rate constant because a greater proportion of particles can overcome the activation energy barrier. The Arrhenius equation is widely used to estimate activation energies and examine temperature effects on reaction rates."
      },

      {
        heading: "10. Reaction Mechanisms and Rate-Determining Steps",
        content: "A reaction mechanism is the sequence of elementary steps through which an overall chemical reaction occurs. An elementary step represents a single molecular event and may involve one or more reacting particles. Some reaction mechanisms involve intermediates, which are produced in one step and consumed in another. Intermediates do not appear in the overall balanced equation because they cancel when the elementary steps are added together. The slowest step in a multistep reaction is often called the rate-determining step because it can limit the overall reaction rate. However, the overall rate law must be derived or verified using the complete mechanism and appropriate kinetic principles. Experimental rate laws provide important evidence for evaluating proposed reaction mechanisms."
      },

      {
        heading: "11. Catalysis and Reaction Rates",
        content: "A catalyst is a substance that increases the rate of a chemical reaction by providing an alternative reaction pathway with a lower activation energy. A catalyst is not consumed overall during the reaction, although it may participate in intermediate reaction steps. Homogeneous catalysts exist in the same phase as the reacting substances, while heterogeneous catalysts exist in a different phase. Enzymes are biological catalysts that facilitate biochemical reactions with high specificity. Catalysts are extremely important in industrial chemistry because they can increase production rates, lower energy requirements and improve process efficiency. In reversible reactions, a catalyst accelerates both the forward and reverse reactions. It does not change the equilibrium constant or the final equilibrium position at a fixed temperature."
      },

      {
        heading: "12. Applications of Chemical Kinetics in Industry",
        content: "Chemical kinetics has extensive applications in industrial and scientific processes. In petroleum refining, catalysts help increase the rates of reactions involved in fuel production. In polymer manufacturing, reaction kinetics helps control polymerisation rates, molecular weight distribution and product quality. In pharmaceutical chemistry, kinetic studies are used to investigate drug stability, degradation and release. Environmental chemists use kinetic principles to understand pollutant decomposition and atmospheric reactions. Chemical engineers apply reaction-rate data when designing reactors, selecting operating temperatures and concentrations, estimating production rates and improving industrial efficiency. Understanding chemical kinetics therefore helps industries improve productivity, control product quality and reduce unnecessary energy consumption."
      }

    ]
  },

  "Electrochemistry": {
    title: "Electrochemistry",

    introduction: "Electrochemistry is the branch of chemistry concerned with the relationship between chemical reactions and electrical energy. It focuses on electron-transfer reactions, known as oxidation-reduction or redox reactions, and explains how chemical energy can be converted into electrical energy and vice versa. Electrochemistry is fundamental to batteries, fuel cells, electrolysis, metal extraction, electroplating and corrosion prevention. Its principles are widely applied in industrial manufacturing, energy storage and environmental technology.",

    objectives: [
      "Define electrochemistry and explain its importance.",
      "Explain oxidation and reduction using electron transfer and oxidation states.",
      "Identify oxidising and reducing agents in redox reactions.",
      "Explain the construction and operation of electrochemical cells.",
      "Distinguish between galvanic and electrolytic cells.",
      "Define electrode potential and standard electrode potential.",
      "Calculate standard cell potentials.",
      "Apply the Nernst equation to electrochemical calculations.",
      "Explain electrolysis and the discharge of ions.",
      "Apply Faraday's laws of electrolysis.",
      "Describe corrosion and methods of corrosion prevention.",
      "Explain the industrial applications of electrochemistry."
    ],

    sections: [

      {
        heading: "1. Introduction to Electrochemistry",
        content: "Electrochemistry studies chemical processes involving the transfer of electrons and the conversion between chemical and electrical energy. It is based primarily on oxidation-reduction reactions, in which one substance loses electrons while another gains them. Electrochemical systems can generate electricity from spontaneous chemical reactions or use an external electrical supply to drive non-spontaneous chemical reactions. Examples include batteries, fuel cells, electrolysis equipment and electroplating systems. Electrochemistry plays an important role in modern industrial processes and energy technologies."
      },

      {
        heading: "2. Oxidation and Reduction Reactions",
        content: "Oxidation and reduction are complementary processes that occur together in redox reactions. Oxidation involves the loss of electrons or an increase in oxidation state, while reduction involves the gain of electrons or a decrease in oxidation state. For example, when zinc reacts with copper(II) ions, zinc loses two electrons to form Zn²⁺, while Cu²⁺ gains two electrons to form copper metal. The oxidation half-equation is Zn → Zn²⁺ + 2e⁻, while the reduction half-equation is Cu²⁺ + 2e⁻ → Cu. The overall ionic equation is Zn + Cu²⁺ → Zn²⁺ + Cu. Oxidation and reduction must occur together because electrons released by the oxidised substance are accepted by the reduced substance."
      },

      {
        heading: "3. Oxidising and Reducing Agents",
        content: "An oxidising agent is a substance that causes another substance to undergo oxidation by accepting electrons. The oxidising agent itself is reduced. A reducing agent causes another substance to undergo reduction by donating electrons. The reducing agent itself is oxidised. For example, in the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, zinc is the reducing agent because it donates electrons, while copper(II) ions are the oxidising agent because they accept electrons. Identifying these agents is important in balancing redox equations and analysing electrochemical reactions."
      },

      {
        heading: "4. Electrochemical Cells",
        content: "An electrochemical cell is a system in which redox reactions are used to produce electrical energy or are driven by an external electrical source. It consists of two electrodes in contact with suitable electrolytes. Oxidation occurs at the anode, while reduction occurs at the cathode. Electrons move through the external circuit from the anode to the cathode in a galvanic cell. In many cells, a salt bridge or porous separator permits ion movement and helps maintain electrical neutrality by preventing excessive charge accumulation. The salt bridge allows the cell to continue operating by completing the internal ionic circuit while limiting direct mixing of the electrolyte solutions."
      },

      {
        heading: "5. Galvanic and Electrolytic Cells",
        content: "Galvanic cells, also known as voltaic cells, convert the chemical energy of spontaneous redox reactions into electrical energy. Their cell potential is positive under the specified conditions, and the reaction has a negative Gibbs free energy change. Oxidation occurs at the negative anode, while reduction occurs at the positive cathode. Electrolytic cells use an external electrical source to drive a non-spontaneous chemical reaction. In an electrolytic cell, the anode is positive and the cathode is negative. However, oxidation always occurs at the anode and reduction always occurs at the cathode in both types of electrochemical cells. A common example of a galvanic cell is the Daniell cell, which uses zinc and copper electrodes. Electrolysis of molten sodium chloride is an example of an electrolytic process."
      },

      {
        heading: "6. Electrode Potential and Standard Electrode Potential",
        content: "Electrode potential describes the tendency of an electrode reaction to occur in the reduction direction under specified conditions. It cannot be measured absolutely for a single electrode, so electrode potentials are measured relative to a reference electrode. The standard hydrogen electrode is assigned a standard potential of exactly 0.00 V and serves as the reference. Standard electrode potentials, represented by E°, are measured under standard conditions, commonly involving an activity of 1 for dissolved species, a pressure of 1 bar for gases and a specified temperature, usually 298.15 K. Standard reduction potentials are used to compare the tendency of different chemical species to gain electrons. A more positive standard reduction potential indicates a greater tendency for reduction relative to the reference electrode."
      },

      {
        heading: "7. Calculating Standard Cell Potential",
        content: "The standard cell potential is calculated from the standard reduction potentials of the cathode and anode. The relationship is E°cell = E°cathode − E°anode, where both electrode potentials are written as reduction potentials. For example, consider a Daniell cell involving zinc and copper. The standard reduction potential of Cu²⁺/Cu is approximately +0.34 V, while that of Zn²⁺/Zn is approximately −0.76 V. Therefore, E°cell = +0.34 − (−0.76) = +1.10 V. A positive standard cell potential indicates that the cell reaction as written is thermodynamically spontaneous under standard conditions. The relationship between standard cell potential and standard Gibbs free energy change is ΔG° = −nFE°cell, where n is the number of electrons transferred per balanced reaction, F is the Faraday constant and E°cell is the standard cell potential."
      },

      {
        heading: "8. The Nernst Equation",
        content: "The Nernst equation relates the electrode or cell potential to the activities of the chemical species involved in an electrochemical reaction. It is useful when a cell operates under non-standard conditions. The general equation is E = E° − (RT/nF)ln Q, where E is the cell potential, E° is the standard cell potential, R is the universal gas constant, T is the absolute temperature in kelvin, n is the number of electrons transferred, F is the Faraday constant and Q is the reaction quotient. At 25°C, an approximate base-ten logarithmic form is E = E° − (0.05916/n)log Q. For sufficiently dilute solutions, concentrations are often used as approximations to activities. The Nernst equation shows how changes in ion concentration, gas pressure and temperature affect electrochemical potential. When the reaction reaches equilibrium, E becomes zero and Q equals the equilibrium constant under the corresponding conditions."
      },

      {
        heading: "9. Electrolysis",
        content: "Electrolysis is the use of electrical energy to drive a non-spontaneous chemical reaction. It is carried out in an electrolytic cell containing an electrolyte and two electrodes connected to an external direct-current power source. Positive ions migrate towards the cathode, where reduction occurs, while negative ions migrate towards the anode, where oxidation occurs. The products formed depend on the ions present, the nature of the electrodes, the electrolyte concentration and the relative discharge potentials of competing species. Electrolysis of molten sodium chloride produces sodium metal at the cathode and chlorine gas at the anode. Electrolysis of aqueous solutions may produce different products because water can also participate in electrode reactions. Electrolysis is widely used in metal extraction, refining, electroplating and the production of industrial chemicals."
      },

      {
        heading: "10. Faraday's Laws of Electrolysis",
        content: "Faraday's laws describe the quantitative relationship between the electrical charge passed through an electrolyte and the amount of substance deposited or liberated during electrolysis. Faraday's first law states that the mass of a substance deposited or liberated at an electrode is directly proportional to the quantity of electricity passed through the electrolyte, provided the chemical reaction and conditions are specified. The relationship is m = MIt/(nF), where m is the mass deposited in grams, M is the molar mass in g/mol, I is current in amperes, t is time in seconds, n is the number of electrons required per ion or formula unit in the electrode reaction and F is the Faraday constant, approximately 96485 C/mol. Electrical charge is calculated using Q = It. Faraday's second law states that when the same quantity of electricity passes through different electrolytes, the amounts of substances liberated are proportional to their equivalent masses. These laws are important in calculating metal deposition, electroplating efficiency and industrial electrolytic production."
      },

      {
        heading: "11. Corrosion and Its Prevention",
        content: "Corrosion is the gradual deterioration of a metal through chemical or electrochemical reactions with its environment. Rusting of iron is a common example involving the oxidation of iron in the presence of water and oxygen. Corrosion can cause serious economic losses and structural damage in industrial equipment, pipelines, vehicles and buildings. Common methods of corrosion prevention include protective coatings, painting, galvanisation, alloying, cathodic protection and the use of corrosion inhibitors. Galvanisation involves coating iron or steel with zinc, which provides a protective barrier and can also act as a sacrificial metal. Cathodic protection reduces corrosion by making the metal being protected act as the cathode of an electrochemical system. Understanding electrochemical corrosion is important in materials selection, plant maintenance and industrial safety."
      },

      {
        heading: "12. Batteries, Fuel Cells and Energy Storage",
        content: "Batteries are electrochemical devices that convert stored chemical energy into electrical energy. Primary batteries are designed for one-time use under normal operating conditions, while secondary batteries can be recharged by driving their chemical reactions in the reverse direction using an external electrical supply. Lithium-ion batteries are widely used in electronic devices and electric vehicles because of their relatively high energy density and rechargeable nature. Fuel cells generate electricity through continuous electrochemical reactions as long as fuel and oxidant are supplied. Hydrogen fuel cells commonly combine hydrogen and oxygen to produce water, electrical energy and heat. Electrochemical energy storage is important in renewable energy systems, transportation and modern electronic technologies."
      },

      {
        heading: "13. Industrial Applications of Electrochemistry",
        content: "Electrochemistry has several important industrial applications. In aluminium production, electrolysis is used to extract aluminium from alumina dissolved in molten cryolite. Electrorefining is used to purify metals such as copper. Electroplating deposits a thin metal coating onto another material to improve corrosion resistance, appearance or surface properties. The chlor-alkali process uses electrolysis of concentrated sodium chloride solution to produce chlorine, hydrogen and sodium hydroxide. Electrochemical sensors help monitor chemical concentrations and environmental conditions. Batteries and fuel cells support energy storage and conversion. These applications demonstrate the importance of electrochemical principles in modern industrial chemistry, materials processing and sustainable technology."
      }

    ]
  },


  "Thermodynamics": {
    title: "Thermodynamics",

    introduction: "Thermodynamics is the branch of physical chemistry concerned with energy, heat, work and the transformations that occur within physical and chemical systems. It explains energy conservation, entropy, spontaneity, equilibrium and the direction of chemical processes. Thermodynamic principles are essential for understanding chemical reactions, phase transitions, energy conversion and industrial process design.",

    objectives: [
      "Define thermodynamics and explain its importance in chemistry.",
      "Distinguish between open, closed and isolated systems.",
      "Differentiate between intensive and extensive properties.",
      "Explain state functions and path functions.",
      "Apply the first law of thermodynamics to energy calculations.",
      "Explain the relationship between internal energy, heat and work.",
      "Distinguish between enthalpy and internal energy.",
      "Explain the second and third laws of thermodynamics.",
      "Define entropy and calculate simple entropy changes.",
      "Explain Gibbs free energy and predict reaction spontaneity.",
      "Establish the relationship between Gibbs free energy and chemical equilibrium.",
      "Explain phase equilibria and thermodynamic cycles.",
      "Describe industrial applications of thermodynamics."
    ],

    sections: [

      {
        heading: "1. Introduction to Thermodynamics",
        content: "Thermodynamics examines the relationships between heat, work, energy and the properties of matter. It helps chemists predict the direction of physical and chemical changes and determine whether a process can occur spontaneously under specified conditions. Thermodynamics does not directly describe how quickly a process occurs. Reaction rates are studied under chemical kinetics. The distinction is important because a reaction may be thermodynamically favourable but proceed very slowly. Thermodynamic principles are applied in chemical manufacturing, power generation, refrigeration, materials processing and energy management."
      },

      {
        heading: "2. Thermodynamic Systems and Surroundings",
        content: "A thermodynamic system is the part of the universe selected for investigation, while everything outside it is called the surroundings. A boundary separates the system from its surroundings. Systems are classified according to the exchange of matter and energy across their boundaries. An open system exchanges both matter and energy with its surroundings. A closed system exchanges energy but not matter, while an isolated system exchanges neither matter nor energy. A reaction carried out in an open beaker is generally an open system, while a sealed container can represent a closed system if its boundary permits energy transfer. An ideal thermally insulated and rigid sealed container approximates an isolated system."
      },

      {
        heading: "3. Thermodynamic Properties and State Functions",
        content: "Thermodynamic properties describe the condition of a system. These include temperature, pressure, volume, internal energy, enthalpy and entropy. Properties are classified as intensive or extensive. Intensive properties do not depend on the amount of material present, while extensive properties depend on the size of the system. Temperature and pressure are intensive properties, whereas mass, volume and internal energy are extensive properties. State functions depend only on the initial and final states of a system and not on the pathway taken between them. Examples include internal energy, enthalpy, entropy and Gibbs free energy. Heat and work are path functions because their values depend on the process through which energy is transferred."
      },

      {
        heading: "4. The First Law of Thermodynamics",
        content: "The first law of thermodynamics is based on the conservation of energy. It states that energy cannot be created or destroyed, although it can be transferred or converted from one form to another. The change in internal energy of a system is expressed as ΔU = q + w, where ΔU is the change in internal energy, q is heat transferred to the system and w is work done on the system. Under this chemistry sign convention, heat absorbed by the system is positive, heat released is negative, work done on the system is positive and work done by the system is negative. For pressure-volume work, w = −PextΔV when the external pressure is constant. During expansion, the system does work on its surroundings, while compression involves work done on the system. The first law provides the foundation for energy balance calculations in chemical and industrial processes."
      },

      {
        heading: "5. Internal Energy and Enthalpy",
        content: "Internal energy, represented by U, is the total microscopic energy contained within a system, including contributions from molecular motion and interactions. It is a state function and its absolute value cannot ordinarily be measured directly, but changes in internal energy can be determined. Enthalpy, represented by H, is defined as H = U + PV, where P is pressure and V is volume. Enthalpy is particularly useful for processes occurring at constant pressure. When only pressure-volume work is involved, the heat transferred at constant pressure equals the enthalpy change, qₚ = ΔH. The relationship between enthalpy and internal energy for a general process is ΔH = ΔU + Δ(PV). For reactions involving ideal gases under suitable conditions, the relationship may be simplified to ΔH = ΔU + Δn(g)RT, where Δn(g) is the change in the number of moles of gaseous products minus gaseous reactants. Enthalpy changes are commonly used to describe exothermic and endothermic reactions."
      },

      {
        heading: "6. The Second Law of Thermodynamics",
        content: "The second law of thermodynamics describes the direction of natural processes and the behaviour of entropy. It states that the total entropy of an isolated system cannot decrease during a spontaneous process. It increases for an irreversible spontaneous process and remains constant for an ideal reversible process. Entropy is a thermodynamic state function associated with the dispersal of energy and the number of accessible microscopic arrangements of a system. At constant temperature, the entropy change for a reversible heat transfer is expressed as dS = δqrev/T. The second law explains why heat naturally flows from a hotter body to a colder body and why no real heat engine can convert all absorbed heat into useful work while operating in a cycle."
      },

      {
        heading: "7. Entropy and Entropy Changes",
        content: "Entropy, represented by S, measures the thermodynamic dispersal of energy and is related to the number of accessible microscopic states of a system. It is commonly expressed in J mol⁻¹ K⁻¹ for molar entropy. Entropy changes depend on the initial and final states of a substance. Processes involving increased dispersal of particles and energy often produce positive entropy changes. For example, vaporisation generally increases the entropy of a substance because gas particles occupy a much larger volume and have more accessible arrangements than liquid particles. For a chemical reaction, the standard entropy change is calculated from the standard molar entropies of products minus those of reactants, each multiplied by its stoichiometric coefficient. The entropy of the universe provides the fundamental criterion for spontaneity: a process is spontaneous when the total entropy change of the system and surroundings is positive."
      },

      {
        heading: "8. The Third Law of Thermodynamics",
        content: "The third law of thermodynamics states that the entropy of a perfect crystal approaches zero as its temperature approaches absolute zero, provided the crystal has a unique ground state. This law provides a reference point for determining absolute entropies of substances. As temperature rises from absolute zero, particles gain access to additional energy states, generally increasing entropy. The third law is important in low-temperature thermodynamics, the determination of standard molar entropies and the study of materials at very low temperatures. Real crystals may possess residual entropy at absolute zero when disorder remains in their ground-state arrangements."
      },

      {
        heading: "9. Gibbs Free Energy and Spontaneity",
        content: "Gibbs free energy, represented by G, is a thermodynamic state function particularly useful for predicting the spontaneity of processes at constant temperature and pressure. It is defined as G = H − TS, where H is enthalpy, T is absolute temperature and S is entropy. The change in Gibbs free energy is expressed as ΔG = ΔH − TΔS when temperature is constant. A negative ΔG indicates that a process is thermodynamically spontaneous in the forward direction under the specified conditions. A positive ΔG indicates that the forward process is non-spontaneous, while ΔG = 0 indicates thermodynamic equilibrium. A spontaneous process does not necessarily occur rapidly because reaction rates also depend on activation energy and reaction mechanisms."
      },

      {
        heading: "10. Temperature and Reaction Spontaneity",
        content: "The spontaneity of a process can depend on the temperature because the Gibbs free energy change includes both enthalpy and entropy contributions. For a process with negative enthalpy change and positive entropy change, ΔG is negative at all positive temperatures under the stated conditions. For a process with positive enthalpy change and negative entropy change, ΔG is positive at all positive temperatures. When both ΔH and ΔS are positive, the process becomes favourable at sufficiently high temperatures. When both are negative, the process may be favourable at sufficiently low temperatures. The temperature at which ΔG becomes zero can be estimated from T = ΔH/ΔS when both quantities refer to the same conditions and appropriate units. These relationships help explain temperature-dependent chemical reactions and phase changes."
      },

      {
        heading: "11. Gibbs Free Energy and Chemical Equilibrium",
        content: "Gibbs free energy is directly related to chemical equilibrium. For a reaction at constant temperature, the Gibbs free energy change is expressed as ΔG = ΔG° + RT ln Q, where ΔG° is the standard Gibbs free energy change, R is the gas constant, T is absolute temperature and Q is the reaction quotient. At equilibrium, ΔG = 0 and Q = K, where K is the equilibrium constant. Therefore, ΔG° = −RT ln K. A negative standard Gibbs free energy change corresponds to an equilibrium constant greater than one, while a positive standard Gibbs free energy change corresponds to an equilibrium constant less than one. A reaction quotient smaller than the equilibrium constant indicates that the forward reaction is thermodynamically favoured under the specified conditions, while a reaction quotient greater than the equilibrium constant favours the reverse direction."
      },

      {
        heading: "12. Phase Equilibria and Phase Transitions",
        content: "Thermodynamics explains the conditions under which substances change between solid, liquid and gaseous states. Phase transitions include melting, freezing, vaporisation, condensation and sublimation. At phase equilibrium, the chemical potentials of the coexisting phases are equal at the specified temperature and pressure. The Gibbs phase rule for a non-reacting system is F = C − P + 2, where F is the number of degrees of freedom, C is the number of independent components and P is the number of phases in equilibrium. For a one-component system containing one phase, two intensive variables can be independently varied, usually temperature and pressure. At the triple point, three phases coexist in equilibrium for a pure substance under a unique temperature and pressure. The Clausius-Clapeyron equation describes the relationship between pressure and temperature along a phase boundary and is useful for studying vapour-pressure behaviour and phase transitions."
      },

      {
        heading: "13. Thermodynamic Cycles and Heat Engines",
        content: "A thermodynamic cycle is a sequence of processes that returns a system to its initial state. Because internal energy and other state functions depend only on the state of a system, the net change in internal energy over a complete cycle is zero. Heat engines operate in cycles and convert part of the heat absorbed from a hot reservoir into useful work while rejecting some heat to a colder reservoir. The thermal efficiency of a heat engine is the useful work output divided by the heat absorbed. The Carnot cycle represents the theoretical maximum efficiency of a heat engine operating between two thermal reservoirs. Its efficiency is η = 1 − Tc/Th, where Tc is the absolute temperature of the cold reservoir and Th is the absolute temperature of the hot reservoir. Real engines have lower efficiencies because of irreversible processes and practical limitations."
      },

      {
        heading: "14. Applications of Thermodynamics in Industry",
        content: "Thermodynamics is fundamental to industrial chemical processes and engineering design. It helps determine the heat requirements of chemical reactions, the energy needed for phase changes and the conditions under which products are thermodynamically favoured. Chemical industries use energy balances to calculate heating and cooling requirements, select operating temperatures and pressures and improve process efficiency. Thermodynamic calculations are also important in refrigeration, power generation, fuel processing, polymer manufacturing and materials production. In environmental management, thermodynamics helps evaluate energy efficiency and the feasibility of processes designed to reduce waste and resource consumption. Understanding thermodynamic principles allows industrial chemists to develop safer, more efficient and economically sustainable operations."
      }

    ]
  },

  "Spectroscopy": {
    title: "Spectroscopy",

    introduction: "Spectroscopy is the study of the interaction between electromagnetic radiation and matter. It provides analytical methods for identifying substances, investigating molecular structures and determining the composition and concentration of chemical samples. Different spectroscopic techniques examine different forms of energy interaction, including absorption, emission and scattering of radiation. Spectroscopic methods are widely used in pharmaceutical analysis, environmental monitoring, polymer characterisation, forensic science and industrial quality control.",

    objectives: [
      "Define spectroscopy and explain its importance in analytical chemistry.",
      "Explain the relationship between electromagnetic radiation, frequency and wavelength.",
      "Distinguish between absorption, emission and scattering spectroscopy.",
      "Explain the principles of ultraviolet-visible spectroscopy.",
      "Apply the Beer-Lambert law to concentration measurements.",
      "Explain the principles and applications of infrared spectroscopy.",
      "Interpret basic infrared absorption regions.",
      "Explain the principles of nuclear magnetic resonance spectroscopy.",
      "Interpret chemical shifts, integration and spin-spin splitting.",
      "Describe the principles and applications of mass spectrometry.",
      "Explain Raman spectroscopy and its relationship with molecular vibrations.",
      "Describe atomic absorption and atomic emission spectroscopy.",
      "Explain the importance of sample preparation and spectral interpretation.",
      "Identify industrial and research applications of spectroscopic techniques."
    ],

    sections: [

      {
        heading: "1. Introduction to Spectroscopy",
        content: "Spectroscopy is the study of how matter interacts with electromagnetic radiation across different wavelengths and frequencies. Depending on the technique, substances may absorb, emit or scatter radiation. The resulting spectra provide information about atomic and molecular structures, chemical composition and the physical environment of chemical species. Spectroscopic techniques are particularly valuable because many can analyse small quantities of samples with relatively high sensitivity and selectivity. Their applications include identifying unknown compounds, monitoring chemical reactions, measuring concentrations and examining the quality of industrial products."
      },

      {
        heading: "2. Electromagnetic Radiation and Its Properties",
        content: "Electromagnetic radiation consists of oscillating electric and magnetic fields that travel through space. Important properties include wavelength, frequency and energy. Wavelength (λ) is the distance between successive equivalent points on a wave, while frequency (ν) is the number of wave cycles passing a point per second. The relationship between wavelength and frequency is c = λν, where c is the speed of light in a vacuum, approximately 3.00 × 10⁸ m/s. The energy of a photon is given by E = hν = hc/λ, where h is Planck's constant. Therefore, shorter wavelengths correspond to higher frequencies and greater photon energies. The electromagnetic spectrum includes radio waves, microwaves, infrared radiation, visible light, ultraviolet radiation, X-rays and gamma rays. Different spectroscopic techniques use particular regions of this spectrum to investigate different energy transitions in matter."
      },

      {
        heading: "3. Absorption, Emission and Scattering Spectroscopy",
        content: "Spectroscopic methods are broadly classified according to how radiation interacts with matter. Absorption spectroscopy measures the radiation absorbed by a substance when it undergoes transitions between energy levels. Emission spectroscopy measures radiation released when excited atoms or molecules return to lower energy states. Scattering spectroscopy examines radiation redirected or scattered by matter. Inelastic scattering methods, such as Raman spectroscopy, involve a change in photon energy during the interaction. The energy differences involved in these interactions provide characteristic information about the chemical species being studied. The choice of method depends on the type of sample, the information required and the sensitivity needed."
      },

      {
        heading: "4. Ultraviolet-Visible Spectroscopy",
        content: "Ultraviolet-visible spectroscopy, commonly called UV-Vis spectroscopy, measures the absorption of ultraviolet and visible radiation by substances. The technique commonly examines the approximate wavelength range of 200–800 nm, although the actual range depends on the instrument and application. Absorption occurs when photons provide sufficient energy to promote electrons from lower-energy molecular orbitals to higher-energy molecular orbitals. Important electronic transitions include π to π* and n to π* transitions. Molecules containing groups that absorb UV or visible radiation are known as chromophores. The wavelength at which maximum absorption occurs is represented by λmax. UV-Vis spectroscopy is widely used to determine the concentrations of absorbing substances, study reaction kinetics and investigate the electronic properties of compounds."
      },

      {
        heading: "5. Beer-Lambert Law and Concentration Measurements",
        content: "The Beer-Lambert law describes the relationship between the absorbance of a sample and the concentration of an absorbing substance under suitable experimental conditions. It is expressed as A = εlc, where A is absorbance, ε is the molar absorptivity, l is the optical path length of the sample cell and c is the concentration of the absorbing species. Absorbance can also be expressed as A = log₁₀(I₀/I), where I₀ is the incident light intensity and I is the transmitted light intensity. The law shows that absorbance is directly proportional to concentration when the molar absorptivity and path length remain constant. For example, increasing the concentration of a suitable absorbing solution generally increases its absorbance. UV-Vis instruments use this relationship to determine unknown concentrations through calibration curves prepared from solutions of known concentrations. Deviations may occur at high concentrations, in chemically interacting solutions or when instrumental and measurement conditions are unsuitable."
      },

      {
        heading: "6. Infrared Spectroscopy",
        content: "Infrared spectroscopy is an analytical technique that investigates the vibrational behaviour of molecules through their interaction with infrared radiation. Molecules absorb infrared radiation when the radiation frequency matches a vibrational transition that produces a change in dipole moment. Common molecular vibrations include stretching and bending. Stretching involves changes in bond length, while bending involves changes in bond angles. Mid-infrared spectroscopy commonly examines the range of approximately 4000–400 cm⁻¹. The horizontal axis of an infrared spectrum is usually expressed as wavenumber in cm⁻¹, while the vertical axis may show transmittance or absorbance. Infrared spectroscopy is particularly useful for identifying functional groups and distinguishing between chemical compounds."
      },

      {
        heading: "7. Interpretation of Infrared Spectra",
        content: "Infrared spectra contain characteristic absorption regions associated with particular bonds and functional groups. O–H stretching vibrations in alcohols commonly produce broad absorption bands around 3200–3600 cm⁻¹, while carboxylic acid O–H absorption is often very broad and may extend approximately from 2500–3300 cm⁻¹. N–H stretching commonly appears around 3300–3500 cm⁻¹. C–H stretching absorptions are generally found around 2800–3100 cm⁻¹, depending on the type of carbon-hydrogen bond. Carbonyl C=O stretching commonly produces a strong absorption band around 1650–1800 cm⁻¹, with the exact position depending on the molecular environment. C–O stretching vibrations often occur in the fingerprint region. The region below approximately 1500 cm⁻¹ is known as the fingerprint region because it contains complex absorption patterns that can help distinguish individual compounds. Interpreting a complete spectrum requires consideration of several absorption bands rather than relying on one peak alone."
      },

      {
        heading: "8. Nuclear Magnetic Resonance Spectroscopy",
        content: "Nuclear magnetic resonance spectroscopy, commonly abbreviated as NMR spectroscopy, provides information about the chemical environments of certain atomic nuclei. Nuclei with non-zero nuclear spin behave like tiny magnetic moments and can interact with an external magnetic field. When exposed to an appropriate radiofrequency signal, they can undergo transitions between nuclear spin energy levels. Hydrogen-1 and carbon-13 are among the most commonly studied nuclei in organic chemistry. In proton NMR, different hydrogen environments produce signals at different chemical shifts. The chemical shift is expressed in parts per million (ppm) relative to a reference standard, commonly tetramethylsilane (TMS). NMR spectroscopy is an important method for determining molecular structures, distinguishing compounds and investigating molecular environments."
      },

      {
        heading: "9. Chemical Shifts, Integration and Spin-Spin Splitting",
        content: "The interpretation of proton NMR spectra involves several important features. Chemical shift describes the position of an NMR signal relative to a reference compound and reflects the electronic environment surrounding a nucleus. Electron-withdrawing groups generally reduce shielding and shift nearby signals downfield. Integration represents the relative area under a signal and provides information about the relative number of contributing hydrogen nuclei. Spin-spin splitting occurs when neighbouring magnetically non-equivalent nuclei interact through bonding electrons, causing signals to appear as multiplets. In simple first-order proton NMR spectra, the n + 1 rule predicts that a group of equivalent protons with n equivalent neighbouring protons may produce n + 1 signal lines. However, this rule has limitations in complex or strongly coupled systems. Combined interpretation of chemical shifts, integration and splitting patterns helps determine molecular connectivity and structural features."
      },

      {
        heading: "10. Mass Spectrometry",
        content: "Mass spectrometry is an analytical technique that identifies and characterises substances by producing ions and measuring their mass-to-charge ratios, represented by m/z. Although it is commonly taught alongside spectroscopic techniques, mass spectrometry is more precisely classified as a spectrometric method because it separates and detects ions according to their mass-to-charge ratios rather than measuring electromagnetic absorption or emission. A typical mass spectrometer contains an ion source, a mass analyser and a detector. The ion source converts sample molecules into ions, the analyser separates the ions according to their mass-to-charge ratios and the detector records their relative abundances. The resulting mass spectrum displays signals corresponding to detected ions. The molecular ion or another appropriate molecular species may provide information about molecular mass, while fragmentation patterns help reveal structural information. Common ionisation methods include electron ionisation and electrospray ionisation. Mass spectrometry is widely used in pharmaceutical research, environmental monitoring, forensic analysis, metabolomics and polymer characterisation."
      },

      {
        heading: "11. Raman Spectroscopy",
        content: "Raman spectroscopy is based on the inelastic scattering of monochromatic light, commonly produced by a laser. When light interacts with molecules, most photons undergo elastic scattering without a change in energy. A small fraction undergoes inelastic scattering, producing Raman shifts corresponding to molecular vibrational or rotational energy differences. These shifts provide information about molecular structure, chemical bonding and material composition. Raman spectroscopy complements infrared spectroscopy because the selection rules for Raman and infrared activity differ. A vibration that produces a change in molecular polarisability may be Raman-active. Raman spectroscopy is useful in pharmaceutical analysis, pigment identification, polymer characterisation, mineral analysis and the examination of materials without extensive sample preparation."
      },

      {
        heading: "12. Atomic Absorption and Atomic Emission Spectroscopy",
        content: "Atomic absorption spectroscopy and atomic emission spectroscopy are techniques used to determine the presence and concentration of elements, particularly metals. Atomic absorption spectroscopy measures the absorption of characteristic radiation by free atoms, usually produced by converting a sample into an atomic vapour. The amount of radiation absorbed can be related to the concentration of the element in the sample. Atomic emission spectroscopy measures the characteristic radiation emitted by excited atoms or ions as they return to lower-energy states. Excitation may be produced using flames, electrical discharges or plasma sources. Inductively coupled plasma optical emission spectroscopy is a widely used technique for multi-element analysis. These methods are important in environmental monitoring, water analysis, metallurgy, food testing and industrial quality control."
      },

      {
        heading: "13. Spectroscopic Instrumentation and Sample Preparation",
        content: "Spectroscopic analysis requires suitable instruments and carefully prepared samples. A typical absorption spectrometer contains a radiation source, a wavelength-selection system, a sample holder, a detector and a signal-processing system. The radiation source produces suitable electromagnetic radiation, while the monochromator or wavelength selector isolates the required wavelength range. The sample interacts with the selected radiation and the detector measures the transmitted or emitted signal. Sample preparation depends on the technique and the properties of the material being analysed. Samples may need to be dissolved, diluted, filtered or converted into a suitable physical form. In infrared spectroscopy, solid samples may be analysed using methods such as attenuated total reflectance, while suitable liquid samples can be examined using appropriate sampling accessories. Correct calibration, clean equipment, suitable blanks and consistent measurement conditions help improve analytical accuracy and reliability."
      },

      {
        heading: "14. Industrial and Research Applications of Spectroscopy",
        content: "Spectroscopic methods have extensive applications in modern industrial chemistry and scientific research. In pharmaceutical manufacturing, UV-Vis and infrared spectroscopy help identify active ingredients and monitor product quality. NMR spectroscopy provides detailed structural information about organic compounds and pharmaceutical substances. Infrared and Raman spectroscopy are valuable for identifying polymers, examining functional groups and detecting material changes during processing. Atomic spectroscopy is used to determine metal concentrations in water, soil, ores and industrial products. Mass spectrometry supports the identification of unknown compounds, impurities and complex chemical mixtures. Spectroscopic monitoring can also be incorporated into industrial process control to follow chemical reactions and assess product consistency. These applications make spectroscopy an essential part of modern analytical chemistry and industrial research."
      }

    ]
  },

  "Reaction Mechanisms": {
    title: "Reaction Mechanisms",

    introduction: "Reaction mechanisms describe the detailed sequence of elementary steps through which chemical reactions occur. They explain how chemical bonds are broken and formed, how electrons move between atoms and how intermediates and transition states develop during a reaction. Understanding reaction mechanisms helps chemists predict reaction products, explain reaction rates, control selectivity and design efficient synthetic routes. These principles are essential in organic chemistry, pharmaceutical development, polymer manufacturing and industrial chemical processes.",

    objectives: [
      "Define reaction mechanisms and explain their importance in chemistry.",
      "Distinguish between elementary steps and overall chemical reactions.",
      "Explain the roles of nucleophiles and electrophiles.",
      "Interpret curved-arrow notation in organic reaction mechanisms.",
      "Distinguish between homolytic and heterolytic bond cleavage.",
      "Explain reaction intermediates and transition states.",
      "Describe nucleophilic substitution mechanisms, including SN1 and SN2.",
      "Explain electrophilic addition reactions of alkenes.",
      "Describe elimination mechanisms, including E1 and E2.",
      "Explain electrophilic aromatic substitution.",
      "Describe nucleophilic addition and nucleophilic acyl substitution.",
      "Explain free-radical reaction mechanisms.",
      "Interpret reaction coordinate diagrams and activation energy.",
      "Explain the factors that influence reaction pathways and selectivity."
    ],

    sections: [

      {
        heading: "1. Introduction to Reaction Mechanisms",
        content: "A reaction mechanism is the step-by-step description of how a chemical reaction takes place at the molecular or ionic level. It identifies the sequence of elementary reactions through which reactants are converted into products. A mechanism explains which bonds are broken, which bonds are formed, how electrons are redistributed and whether intermediate species are produced. Two reactions may have the same overall chemical equation but proceed through different mechanisms. Reaction mechanisms are important because they help explain experimental reaction rates, predict products and determine the factors responsible for chemical selectivity. Proposed mechanisms must be consistent with experimental kinetic and structural evidence."
      },

      {
        heading: "2. Elementary Steps and Molecularity",
        content: "An elementary step is a single molecular event that occurs as part of a reaction mechanism. Unlike an overall chemical equation, an elementary step represents a specific event rather than the sum of several reaction processes. Molecularity describes the number of reacting particles involved in a single elementary step. A unimolecular step involves one reacting particle, a bimolecular step involves two reacting particles and a termolecular step involves three reacting particles. Termolecular elementary steps are relatively uncommon because simultaneous collisions involving three particles with suitable energy and orientation are unlikely. For elementary reactions, the rate law can be written directly from the molecular event represented by the step. For example, an elementary reaction A + B → products has a rate law of rate = k[A][B]. However, the rate law of an overall reaction cannot generally be determined directly from its balanced equation because the reaction may involve several elementary steps."
      },

      {
        heading: "3. Nucleophiles and Electrophiles",
        content: "Nucleophiles and electrophiles are important species in many organic reaction mechanisms. A nucleophile is an electron-rich species that donates an electron pair to form a new covalent bond. Examples include hydroxide ions (OH⁻), cyanide ions (CN⁻), ammonia (NH₃) and water (H₂O). An electrophile is an electron-deficient species that accepts an electron pair to form a covalent bond. Examples include hydrogen ions (H⁺), carbocations and the carbon atom of a polar carbonyl group. Nucleophiles may be negatively charged or neutral, while electrophiles may be positively charged or neutral. Their interaction provides the basis for many addition, substitution and other organic reactions."
      },

      {
        heading: "4. Curved-Arrow Notation and Bond Cleavage",
        content: "Curved-arrow notation is used to represent the movement of electrons during chemical reactions. A full-headed curved arrow represents the movement of an electron pair, while a single-barbed or fishhook arrow represents the movement of one electron. In ionic organic reactions, a curved arrow commonly begins at an electron-rich bond or lone pair and points towards the atom or bond receiving the electrons. Bond cleavage may occur through heterolytic or homolytic processes. Heterolytic cleavage involves the breaking of a covalent bond in such a way that both bonding electrons move to one atom, producing ions. Homolytic cleavage involves the equal division of bonding electrons, with one electron going to each atom, producing free radicals. Correct interpretation of electron movement is essential for understanding reaction mechanisms and predicting the formation of products."
      },

      {
        heading: "5. Reaction Intermediates and Transition States",
        content: "Reaction intermediates and transition states are important features of multistep reaction mechanisms. An intermediate is a chemical species formed in one elementary step and consumed in a subsequent step. Examples include carbocations, carbanions, free radicals and reaction complexes. Intermediates occupy local energy minima on a reaction coordinate diagram and may sometimes be detected or isolated. A transition state is a high-energy arrangement of atoms formed as bonds are broken and new bonds develop during an elementary step. It represents an energy maximum along the reaction pathway and cannot ordinarily be isolated as a stable chemical substance. The difference in energy between the reactant or intermediate state and the corresponding transition state determines the activation energy of that step."
      },

      {
        heading: "6. Nucleophilic Substitution: SN2 Mechanism",
        content: "The SN2 mechanism is a bimolecular nucleophilic substitution reaction that occurs in a single concerted step. The nucleophile attacks the electrophilic carbon from the side opposite to the leaving group, causing the leaving group to depart as the new bond forms. The rate depends on both the concentration of the substrate and the nucleophile, giving the rate law rate = k[RX][Nu⁻]. Because the nucleophile attacks from the opposite side, a stereogenic carbon generally undergoes inversion of configuration, known as Walden inversion. SN2 reactions are favoured by relatively unhindered substrates, strong nucleophiles and suitable polar aprotic solvents. Methyl and primary alkyl halides commonly undergo SN2 reactions more readily than highly substituted alkyl halides because steric hindrance restricts nucleophilic attack."
      },

      {
        heading: "7. Nucleophilic Substitution: SN1 Mechanism",
        content: "The SN1 mechanism is a unimolecular nucleophilic substitution reaction that generally proceeds through two or more steps. The first step involves the ionisation of the substrate to form a carbocation and a leaving group. This carbocation-forming step is often the slow, rate-determining step. The nucleophile subsequently attacks the carbocation to form the substitution product. The rate law for a typical SN1 reaction is rate = k[RX], showing that the rate depends on the substrate concentration but not directly on the nucleophile concentration. SN1 reactions are favoured when the substrate can form a relatively stable carbocation, especially tertiary carbocations, and when suitable polar protic solvents stabilise ionic species. Because the carbocation is approximately planar, nucleophilic attack may occur from either face, often producing partial or substantial racemisation at a stereogenic centre. Carbocation rearrangements may also occur when they produce more stable carbocations. SN1 reactions can compete with elimination reactions under suitable conditions."
      },

      {
        heading: "8. Electrophilic Addition Reactions",
        content: "Electrophilic addition reactions commonly occur in compounds containing carbon-carbon double bonds, such as alkenes. The electron-rich pi bond interacts with an electrophile, initiating a process in which the double bond is converted into new sigma bonds. In the addition of hydrogen bromide to an unsymmetrical alkene under ordinary ionic conditions, the reaction commonly follows Markovnikov orientation. This means that hydrogen becomes attached to the carbon that already has more hydrogen atoms, while bromine becomes attached to the other carbon through the favoured pathway. The regioselectivity can often be explained by the relative stability of carbocation intermediates formed during the reaction. Other electrophilic addition reactions include halogenation and acid-catalysed hydration of alkenes. The exact mechanism and product distribution depend on the reagent and reaction conditions."
      },

      {
        heading: "9. Elimination Reactions: E1 and E2 Mechanisms",
        content: "Elimination reactions involve the removal of atoms or groups from a molecule, commonly resulting in the formation of a carbon-carbon double bond. In the E1 mechanism, the leaving group departs first to form a carbocation, followed by the removal of a proton from a neighbouring carbon. The rate-determining ionisation step gives the rate law rate = k[RX]. E1 reactions generally favour substrates capable of forming stable carbocations and may involve rearrangements. In the E2 mechanism, the base removes a proton while the leaving group departs in a single concerted step. The rate depends on both substrate and base concentrations, giving rate = k[RX][Base]. E2 reactions generally require a sufficiently strong base. An antiperiplanar arrangement between the proton being removed and the leaving group is often favoured because it permits effective orbital alignment. Elimination reactions can compete with nucleophilic substitution depending on substrate structure, base strength, solvent and temperature."
      },

      {
        heading: "10. Electrophilic Aromatic Substitution",
        content: "Electrophilic aromatic substitution is a reaction in which an electrophile replaces a hydrogen atom or another substituent on an aromatic ring. The reaction proceeds through the formation of a resonance-stabilised intermediate commonly called a sigma complex or arenium ion. The aromatic ring initially reacts with the electrophile, temporarily losing its aromatic character. A proton is then removed from the substituted carbon, restoring the aromatic system. Important examples include nitration, sulfonation, halogenation and Friedel-Crafts alkylation and acylation. Substituents already attached to the aromatic ring influence both the rate and position of further substitution. Electron-donating groups generally activate the ring and commonly direct incoming electrophiles towards ortho and para positions, while many electron-withdrawing groups deactivate the ring and direct substitution towards the meta position. Halogens are an important exception because they deactivate the ring but generally direct substitution towards ortho and para positions."
      },

      {
        heading: "11. Nucleophilic Addition and Acyl Substitution",
        content: "Nucleophilic addition is a common reaction of aldehydes and ketones because the carbonyl bond is polarised, making the carbonyl carbon electrophilic. A nucleophile attacks the carbonyl carbon while the pi electrons of the carbon-oxygen double bond move towards oxygen, forming a tetrahedral alkoxide intermediate. Subsequent protonation may produce the addition product. Examples include the addition of hydride reagents and cyanide ions to suitable carbonyl compounds. Carboxylic acid derivatives such as esters, amides and acyl halides commonly undergo nucleophilic acyl substitution rather than simple addition. In this process, nucleophilic attack first produces a tetrahedral intermediate. The intermediate then eliminates a leaving group, restoring the carbonyl bond. The relative reactivity of carboxylic acid derivatives depends partly on the electrophilicity of the acyl carbon and the ability of the leaving group to depart."
      },

      {
        heading: "12. Free-Radical Reaction Mechanisms",
        content: "Free-radical reactions involve species containing an unpaired electron. They commonly proceed through three stages known as initiation, propagation and termination. Initiation involves the formation of radicals, often through homolytic bond cleavage caused by heat or light. Propagation involves reactions in which a radical reacts with another substance to produce a new radical, allowing the chain process to continue. Termination occurs when radicals combine or otherwise react to form species that do not continue the chain. A common example is the photochemical chlorination of methane. During initiation, chlorine molecules split under suitable light conditions to produce chlorine radicals. During propagation, a chlorine radical abstracts hydrogen from methane to produce hydrogen chloride and a methyl radical. The methyl radical then reacts with chlorine to produce chloromethane and another chlorine radical. Radical reactions are important in polymerisation, combustion, atmospheric chemistry and the degradation of materials."
      },

      {
        heading: "13. Reaction Coordinate Diagrams and Activation Energy",
        content: "Reaction coordinate diagrams illustrate the energy changes that occur as a reaction proceeds from reactants to products. The vertical axis represents the relative potential energy of the system, while the horizontal axis represents the progress of the reaction. Energy maxima correspond to transition states, while intermediate species appear at local minima between transition states. The activation energy of an elementary step is the energy difference between the starting state for that step and its transition state. For an overall exothermic reaction, the products have lower energy than the reactants, while an endothermic reaction has products with higher energy than the reactants. In a multistep reaction, the step with the largest relevant activation barrier often makes the greatest contribution to controlling the overall reaction rate. Reaction coordinate diagrams help chemists compare proposed mechanisms and understand how catalysts influence reaction pathways."
      },

      {
        heading: "14. Factors Influencing Reaction Mechanisms and Selectivity",
        content: "The mechanism followed by a chemical reaction depends on several factors, including molecular structure, electronic effects, steric hindrance, solvent, temperature, reagent concentration and catalyst properties. Electronic effects influence the stability of charged or radical intermediates, while steric hindrance affects how easily reacting species approach one another. Solvents can stabilise charged intermediates and transition states, thereby influencing competing pathways. Temperature may alter the relative importance of different reaction routes, while changes in reagent concentration can affect reaction rates and product distributions. Selectivity describes the preference for producing one product or reaction pathway over competing alternatives. Chemoselectivity concerns which functional group reacts, regioselectivity concerns the position at which a reaction occurs and stereoselectivity concerns the spatial arrangement of the products. Understanding these factors allows chemists to design reactions that favour desired products and reduce unwanted side reactions."
      },

      {
        heading: "15. Industrial and Pharmaceutical Applications of Reaction Mechanisms",
        content: "Reaction mechanisms are important in industrial manufacturing, pharmaceutical research and chemical process development. Pharmaceutical chemists use mechanistic understanding to design synthetic pathways, control stereochemistry and reduce unwanted by-products. Polymer chemists use radical and coordination mechanisms to control polymerisation reactions and influence material properties. Industrial catalysts are designed to favour specific reaction pathways, reduce activation barriers and improve production efficiency. Mechanistic studies also help identify possible side reactions, understand catalyst deactivation and optimise operating conditions. In environmental chemistry, reaction mechanisms are used to investigate atmospheric reactions, pollutant degradation and the transformation of chemical contaminants. A detailed understanding of reaction mechanisms therefore supports safer, more selective and more efficient chemical processes."
      }

    ]
  },

  "Analytical Chemistry": {
    title: "Analytical Chemistry",

    introduction: "Analytical chemistry is the branch of chemistry concerned with identifying chemical substances and determining their composition and quantities. It involves qualitative and quantitative methods used to examine chemical samples, measure concentrations, evaluate purity and investigate the properties of materials. Analytical chemistry is essential in industrial quality control, pharmaceutical manufacturing, environmental monitoring, food analysis, forensic science and scientific research.",

    objectives: [
      "Define analytical chemistry and explain its importance.",
      "Distinguish between qualitative and quantitative analysis.",
      "Explain sampling techniques and sample preparation.",
      "Differentiate between accuracy, precision, sensitivity and selectivity.",
      "Identify sources of analytical errors.",
      "Explain calibration curves and standard solutions.",
      "Describe volumetric analysis and different titration methods.",
      "Perform calculations involving acid-base titrations.",
      "Explain the principles of gravimetric analysis.",
      "Describe chromatography and its major techniques.",
      "Explain the principles of instrumental analytical methods.",
      "Apply basic statistical methods to analytical results.",
      "Explain detection limits and quantification limits.",
      "Describe analytical quality assurance and industrial applications."
    ],

    sections: [

      {
        heading: "1. Introduction to Analytical Chemistry",
        content: "Analytical chemistry focuses on determining the chemical composition of substances. It answers two fundamental questions: what substances are present in a sample and how much of each substance is present? Qualitative analysis identifies the chemical species in a sample, while quantitative analysis determines their amounts or concentrations. Analytical methods may be classified as classical methods, such as titration and gravimetric analysis, or instrumental methods, such as spectroscopy, chromatography and electrochemical analysis. These methods help scientists investigate unknown substances, monitor chemical reactions, assess product quality and ensure compliance with established standards."
      },

      {
        heading: "2. Qualitative and Quantitative Analysis",
        content: "Qualitative analysis identifies the chemical species present in a sample without necessarily determining their exact quantities. It may involve chemical tests, characteristic colour changes, precipitation reactions, flame tests and instrumental techniques. For example, adding a suitable reagent to a sample may produce a characteristic precipitate that provides evidence of a particular ion. Quantitative analysis determines how much of a particular substance is present. It commonly involves measuring mass, volume, absorbance, electrical potential or another analytical signal related to the amount of analyte. Examples include determining the concentration of hydrochloric acid through titration and measuring the concentration of a metal in water using atomic absorption spectroscopy. Both forms of analysis are important because identification alone may not establish whether a substance is present at a significant or acceptable concentration."
      },

      {
        heading: "3. Sampling and Sample Preparation",
        content: "Sampling is the process of selecting a portion of material for chemical examination. The sample collected should adequately represent the larger material being investigated. Poor sampling may produce misleading analytical results even when the laboratory procedure is performed correctly. Samples may be collected using random, systematic or stratified sampling techniques, depending on the nature of the material and the purpose of the investigation. Sample preparation may involve grinding, drying, dissolution, filtration, dilution, extraction or digestion. The appropriate procedure depends on the chemical properties of the sample and the analytical method being used. Contamination, loss of volatile substances and chemical changes during preparation must be controlled to preserve sample integrity. Proper sampling and preparation are therefore essential for reliable analytical measurements."
      },

      {
        heading: "4. Accuracy, Precision, Sensitivity and Selectivity",
        content: "Accuracy describes how closely a measured result agrees with an accepted reference value. Precision describes the agreement among repeated measurements made under specified conditions. A method may be precise but inaccurate if it produces closely grouped results that consistently differ from the true or accepted value. Sensitivity describes how strongly an analytical signal responds to changes in analyte concentration. Selectivity describes the ability of a method to determine a particular analyte in the presence of other components. These characteristics are important when choosing an analytical technique. For example, an industrial quality-control method should provide sufficiently accurate and precise results while distinguishing the substance being measured from other materials present in the sample."
      },

      {
        heading: "5. Analytical Errors and Sources of Uncertainty",
        content: "Analytical measurements are subject to errors and uncertainty. Errors are commonly classified as systematic, random and gross errors. Systematic errors produce consistent deviations from an accepted reference value and may result from incorrect instrument calibration, impurities in reagents or defective measuring equipment. Random errors arise from unpredictable variations in measurement conditions and produce differences between repeated measurements. Gross errors include major mistakes such as incorrect sample identification, improper calculations or accidental contamination. Uncertainty describes the range of values reasonably associated with a measurement. Analytical chemists reduce errors through instrument calibration, repeated measurements, suitable control samples, standard operating procedures and appropriate laboratory practices. Results should be reported with justified significant figures and appropriate units."
      },

      {
        heading: "6. Standard Solutions and Calibration Curves",
        content: "A standard solution is a solution whose concentration is accurately known. It is used in analytical procedures to determine the concentration of unknown samples or to calibrate analytical instruments. Primary standards are substances that can be obtained in sufficiently pure and stable form and used to prepare solutions of accurately known concentration. Common desirable properties include high purity, stability, suitable molar mass and a well-defined reaction stoichiometry. Calibration involves establishing the relationship between an instrument's measured response and known quantities of an analyte. A calibration curve is prepared by measuring the analytical signals of several standard solutions and plotting the signal against their known concentrations. The resulting relationship is then used to estimate the concentration of an unknown sample. A linear calibration equation may be expressed as y = mx + b, where y is the measured signal, x is analyte concentration, m is the gradient and b is the intercept. Samples should be measured within the validated calibration range."
      },

      {
        heading: "7. Volumetric Analysis and Titration",
        content: "Volumetric analysis is a quantitative analytical method based on measuring the volume of a solution required to react completely with a known quantity of another substance. Titration is a common volumetric technique in which a solution of known concentration is added gradually to a measured volume of an analyte solution until the reaction reaches its equivalence point. The equivalence point occurs when the reacting substances have combined in the exact stoichiometric proportions given by the balanced chemical equation. An indicator may be used to signal the endpoint through a colour change. Suitable instrumental methods, such as potentiometric measurements, can also identify the endpoint. Common types include acid-base titrations, redox titrations, complexometric titrations and precipitation titrations. Reliable titration requires suitable glassware, accurate volume measurements and correct identification of the endpoint."
      },

      {
        heading: "8. Acid-Base Titration Calculations",
        content: "Acid-base titration calculations use the stoichiometric relationship between an acid and a base to determine an unknown concentration. For a general balanced reaction aA + bB → products, the relationship at the equivalence point is nA/a = nB/b, where nA and nB represent the amounts of the reacting substances in moles, while a and b are their respective stoichiometric coefficients. Since n = CV, the relationship can also be expressed as CA × VA/a = CB × VB/b. For a 1:1 reaction, the coefficients are equal and the familiar relationship C1V1 = C2V2 applies. For example, hydrochloric acid reacts with sodium hydroxide according to HCl + NaOH → NaCl + H₂O. The mole ratio is 1:1. However, sulfuric acid reacts with sodium hydroxide according to H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, giving a 1:2 mole ratio. For example, 25.0 mL of 0.100 mol/L NaOH neutralises 20.0 mL of HCl. Since the reaction ratio is 1:1, the HCl concentration is (0.100 × 25.0)/20.0 = 0.125 mol/L. Always use the balanced chemical equation to establish the correct mole relationship before calculating an unknown concentration."
      },

      {
        heading: "9. Gravimetric Analysis",
        content: "Gravimetric analysis is a quantitative technique in which the amount of an analyte is determined through an accurate mass measurement. A common method involves converting the analyte into an insoluble compound of known composition. The precipitate is then separated by filtration, washed to remove impurities, dried or ignited where appropriate and weighed accurately. The mass of the precipitate is used to calculate the quantity of the original analyte through stoichiometric relationships. For example, sulfate ions can be determined by precipitating them as barium sulfate using a suitable barium reagent. The reaction is Ba²⁺ + SO₄²⁻ → BaSO₄(s). Gravimetric analysis can provide highly accurate results when precipitation is complete, the product has a known composition and contamination or material losses are carefully controlled. The technique is important in environmental analysis, mineral analysis and industrial quality control."
      },

      {
        heading: "10. Chromatography and Separation Techniques",
        content: "Chromatography is an analytical separation technique used to separate the components of a mixture based on their different interactions with a stationary phase and a mobile phase. The stationary phase remains fixed while the mobile phase moves through or over it, carrying the sample components at different rates. Substances that interact more strongly with the stationary phase generally move more slowly, while substances that interact more strongly with the mobile phase may move faster. Major techniques include paper chromatography, thin-layer chromatography, gas chromatography and high-performance liquid chromatography. Thin-layer chromatography is commonly used to monitor reaction progress and compare compounds. Gas chromatography is suitable for many volatile and thermally stable substances. High-performance liquid chromatography is widely used for pharmaceutical and chemical analysis. In thin-layer and paper chromatography, retention factor is calculated as Rf = distance travelled by the substance divided by distance travelled by the solvent front. Chromatography is important in identifying components, separating impurities and analysing complex chemical mixtures."
      },

      {
        heading: "11. Instrumental Analytical Techniques",
        content: "Instrumental analysis uses specialised equipment to measure physical or chemical properties that are related to the composition of a sample. Important techniques include UV-Visible spectroscopy, infrared spectroscopy, nuclear magnetic resonance spectroscopy, mass spectrometry, atomic absorption spectroscopy and electrochemical analysis. UV-Visible spectroscopy measures the absorption of ultraviolet and visible radiation and is frequently used for concentration measurements. Infrared spectroscopy examines molecular vibrations and helps identify functional groups. NMR provides information about the chemical environments of certain nuclei and supports molecular structure determination. Mass spectrometry separates and detects ions according to their mass-to-charge ratios. Atomic absorption spectroscopy determines the concentrations of particular elements, especially metals. Instrumental techniques often provide high sensitivity, rapid measurements and detailed chemical information, although they require suitable calibration, sample preparation and method validation."
      },

      {
        heading: "12. Electroanalytical Chemistry",
        content: "Electroanalytical chemistry uses electrical properties to investigate chemical substances and determine their concentrations. Important techniques include potentiometry, voltammetry, amperometry and conductometry. Potentiometry measures the potential difference between electrodes under conditions of negligible current and is commonly used in pH measurements with suitable electrodes. Voltammetry measures current as a function of applied potential and provides information about electroactive substances. Amperometry measures current at a controlled potential and can be used for concentration measurements. Conductometry measures the electrical conductivity of a solution, which depends on the concentration and mobility of its ions. These techniques are useful in environmental monitoring, water analysis, industrial process control and the determination of electroactive chemical species."
      },

      {
        heading: "13. Analytical Statistics and Evaluation of Results",
        content: "Statistical methods help analytical chemists evaluate measurement data and determine how reliable their results are. The arithmetic mean is calculated by dividing the sum of measured values by the number of measurements. The range is the difference between the highest and lowest observations. Standard deviation describes the spread of individual measurements around the mean, while variance is the square of the standard deviation. Relative standard deviation, commonly expressed as a percentage, is calculated by dividing the standard deviation by the mean and multiplying by 100. Statistical analysis helps assess precision, compare analytical methods and identify unusual results. Measurements should be repeated where appropriate, and questionable values should not be discarded without a valid statistical or experimental justification. Results should be interpreted in the context of measurement uncertainty and the analytical method used."
      },

      {
        heading: "14. Detection Limits, Quantification Limits and Method Validation",
        content: "The detection limit is the lowest amount or concentration of an analyte that a method can reliably distinguish from background or blank signals under specified conditions. The limit of quantification is the lowest concentration at which the analyte can be measured with acceptable accuracy and precision under the stated method conditions. These values depend on the analytical technique, instrument performance, sample matrix and measurement procedure. Method validation is the process of demonstrating that an analytical procedure is suitable for its intended purpose. Important validation characteristics include accuracy, precision, selectivity, linearity, working range, detection limit, quantification limit and robustness. Method validation is particularly important in pharmaceutical, environmental and industrial laboratories because analytical results may be used to make important decisions about product quality and regulatory compliance."
      },

      {
        heading: "15. Quality Assurance and Quality Control",
        content: "Quality assurance and quality control are essential for maintaining the reliability of analytical measurements. Quality assurance refers to the overall planned system of procedures and activities designed to ensure that analytical work meets defined quality requirements. Quality control involves operational checks and measurements used to verify that analytical results are acceptable. Common practices include using certified reference materials, calibration standards, reagent blanks, duplicate samples, control samples and documented standard operating procedures. Equipment must be maintained and calibrated at appropriate intervals, while analysts should follow validated methods and maintain accurate records. Laboratories may also adopt recognised quality management systems and competence standards such as ISO/IEC 17025. These practices improve confidence in analytical results and help ensure consistency across laboratories."
      },

      {
        heading: "16. Applications of Analytical Chemistry in Industry",
        content: "Analytical chemistry is used throughout modern industrial production. In pharmaceutical manufacturing, it helps confirm the identity, purity and concentration of active ingredients. In food industries, analytical methods are used to determine nutritional composition, detect contaminants and assess product quality. In environmental chemistry, water, air and soil samples are examined for pollutants and harmful substances. In petroleum and petrochemical industries, analytical techniques monitor fuel composition, product quality and process conditions. In polymer manufacturing, infrared spectroscopy, chromatography and thermal analysis help characterise materials and investigate product consistency. Metallurgical industries use chemical analysis to determine metal content and assess the purity of ores and refined materials. Analytical chemistry therefore supports product development, regulatory compliance, process optimisation and responsible industrial production."
      }

    ]
  },

  "General Chemistry": {
    title: "General Chemistry",

    introduction: "General chemistry at university level provides a comprehensive foundation for understanding the composition, structure, properties and transformations of matter. It integrates atomic theory, chemical bonding, stoichiometry, thermodynamics, chemical equilibrium, reaction kinetics and electrochemistry. These fundamental principles explain the behaviour of chemical substances and provide the theoretical basis for advanced studies in physical, organic, inorganic, analytical and industrial chemistry.",

    objectives: [
      "Explain the modern atomic theory and the quantum mechanical model of the atom.",
      "Describe electronic configurations and quantum numbers.",
      "Explain periodic properties and their relationship with atomic structure.",
      "Apply theories of chemical bonding to molecular structures.",
      "Explain molecular geometry using VSEPR theory and hybridisation.",
      "Perform quantitative calculations using stoichiometric relationships.",
      "Explain the kinetic molecular theory and behaviour of gases.",
      "Describe intermolecular forces and their effects on physical properties.",
      "Explain solutions, solubility and concentration relationships.",
      "Apply principles of chemical equilibrium.",
      "Explain acid-base theories and buffer systems.",
      "Apply fundamental thermodynamic relationships to chemical processes.",
      "Explain reaction kinetics and factors affecting reaction rates.",
      "Describe fundamental electrochemical principles and applications."
    ],

    sections: [

      {
        heading: "1. Modern Atomic Theory",
        content: "Modern atomic theory describes matter as being composed of atoms that contain smaller subatomic particles. An atom consists of a dense nucleus containing protons and neutrons, surrounded by electrons occupying regions of space described by atomic orbitals. The proton determines the atomic number and therefore the identity of an element. Neutrons contribute to the mass of the nucleus, while electrons determine many chemical properties and bonding behaviours. The modern model of the atom is based on quantum mechanics, which describes electrons in terms of probability distributions rather than fixed circular orbits. This model provides a more accurate explanation of atomic structure, electron behaviour and chemical properties than the earlier planetary models."
      },

      {
        heading: "2. Quantum Numbers and Electronic Configurations",
        content: "Quantum mechanics describes the allowed states of electrons using four quantum numbers. The principal quantum number (n) describes the main energy level and the approximate size of an orbital. The angular momentum quantum number (l) describes the subshell and orbital shape, with s, p, d and f subshells corresponding to l values of 0, 1, 2 and 3 respectively. The magnetic quantum number (ml) describes the orientation of an orbital, while the spin quantum number (ms) describes the electron spin, which may have a value of +1/2 or -1/2. Electronic configurations describe how electrons occupy atomic orbitals. The Aufbau principle states that electrons generally occupy lower-energy orbitals before higher-energy orbitals. The Pauli exclusion principle states that no two electrons in an atom can have the same set of four quantum numbers. Hund's rule states that electrons occupy degenerate orbitals singly with parallel spins before pairing occurs. These principles help explain atomic stability, periodic behaviour and chemical bonding."
      },

      {
        heading: "3. Periodic Properties of Elements",
        content: "The periodic table organises elements according to increasing atomic number and recurring chemical properties. These recurring patterns arise from variations in atomic structure and electron configurations. Atomic radius generally decreases across a period because increasing nuclear charge attracts electrons more strongly, while it generally increases down a group as additional electron shells are occupied. First ionisation energy generally increases across a period and decreases down a group, although exceptions occur because of subshell arrangements and electron pairing. Electronegativity generally increases across a period and decreases down a group, while metallic character generally decreases across a period and increases down a group. Electron affinity describes the energy change associated with the addition of an electron to a gaseous atom. The periodic trends provide useful guidance for predicting chemical reactivity, bonding behaviour and the formation of ions."
      },

      {
        heading: "4. Chemical Bonding and Molecular Structure",
        content: "Chemical bonding explains how atoms combine to form molecules, compounds and extended structures. Ionic bonding involves electrostatic attraction between oppositely charged ions, while covalent bonding involves the sharing of electron pairs between atoms. Metallic bonding involves attraction between positive metal centres and delocalised electrons. Lewis structures represent valence electrons and bonding arrangements. The octet rule is a useful introductory guideline for many main-group compounds, although several substances exhibit incomplete octets, expanded valence shells or odd-electron structures. Valence shell electron pair repulsion theory, commonly called VSEPR theory, predicts molecular geometry by considering repulsions between electron domains around a central atom. Molecular geometries include linear, trigonal planar, tetrahedral, trigonal pyramidal and bent arrangements. Molecular orbital theory provides a more detailed description of chemical bonding by combining atomic orbitals to form molecular orbitals. These theories help explain molecular stability, bond properties, polarity and chemical reactivity."
      },

      {
        heading: "5. Molecular Geometry, Hybridisation and Polarity",
        content: "Molecular geometry describes the three-dimensional arrangement of atoms in a molecule. Hybridisation is a model used to describe the formation of equivalent or directional orbitals through combinations of atomic orbitals on the same atom. Common introductory hybridisation descriptions include sp, sp² and sp³, associated with linear, trigonal planar and tetrahedral electron-domain arrangements respectively. For example, the carbon atoms in ethene are commonly described as sp² hybridised, while the carbon atom in methane is described as sp³ hybridised. Molecular polarity depends on both bond polarity and molecular geometry. A molecule may contain polar bonds but still be non-polar overall if its bond dipoles cancel because of molecular symmetry. Carbon dioxide is a common example because its two polar C=O bonds are arranged linearly in opposite directions. Water is polar because its bent geometry prevents the O-H bond dipoles from cancelling. Molecular geometry and polarity influence intermolecular forces, solubility, boiling points and chemical interactions."
      },

      {
        heading: "6. Chemical Stoichiometry and Quantitative Relationships",
        content: "Stoichiometry is the quantitative study of the relationships between reactants and products in chemical reactions. It is based on balanced chemical equations and the law of conservation of mass. The coefficients in a balanced equation represent the relative amounts of substances involved in a reaction in terms of particles or moles. Calculations may involve converting between mass, moles, particle numbers and solution concentrations. The limiting reactant is the substance that is consumed first and determines the maximum theoretical amount of product. A theoretical yield represents the maximum quantity predicted under the stated reaction assumptions, while actual yield is the quantity obtained experimentally. Percentage yield is calculated by dividing actual yield by theoretical yield and multiplying by 100. Stoichiometry is fundamental to laboratory preparation, material balance calculations and industrial chemical production."
      },

      {
        heading: "7. States of Matter and Kinetic Molecular Theory",
        content: "Matter commonly exists as solids, liquids and gases, each exhibiting characteristic physical behaviour. Kinetic molecular theory explains the behaviour of gases in terms of the motion and interactions of their particles. In the ideal gas model, particles move continuously and randomly, occupy negligible volume relative to the container and experience negligible intermolecular forces except during collisions. Their collisions are assumed to be perfectly elastic, and their average translational kinetic energy is proportional to absolute temperature. The ideal gas equation PV = nRT relates pressure, volume, temperature and amount of gas. Real gases deviate from ideal behaviour because their particles occupy finite volume and experience intermolecular attractions. These deviations become more significant at high pressures and low temperatures. The van der Waals equation introduces corrections for molecular volume and intermolecular attractions to provide a more realistic description of many real gases."
      },

      {
        heading: "8. Intermolecular Forces and Physical Properties",
        content: "Intermolecular forces are attractive interactions between separate molecules or particles. They are generally weaker than the covalent and ionic bonds that hold substances together, but they strongly influence physical properties. London dispersion forces arise from temporary fluctuations in electron distribution and occur in all atoms and molecules. Dipole-dipole interactions occur between molecules possessing permanent dipole moments. Hydrogen bonding is a particularly strong type of intermolecular attraction involving hydrogen covalently bonded to nitrogen, oxygen or fluorine and an appropriate lone pair on a neighbouring nitrogen, oxygen or fluorine atom. The strength and nature of intermolecular interactions influence boiling points, melting points, viscosity, surface tension and solubility. For example, hydrogen bonding contributes to the relatively high boiling point of water compared with other molecules of similar molar mass."
      },

      {
        heading: "9. Solutions, Concentration and Solubility",
        content: "A solution is a homogeneous mixture consisting of one or more solutes dissolved in a solvent. The concentration of a solution expresses the amount of solute present relative to a specified amount of solution or solvent. Common concentration units include molarity, molality, mole fraction, mass percentage and parts per million. Molarity is the number of moles of solute per litre of solution, while molality is the number of moles of solute per kilogram of solvent. Solubility describes the maximum amount of a substance that can dissolve in a specified quantity of solvent under defined temperature and pressure conditions. The dissolution process depends on solute-solvent interactions, temperature and, particularly for gases, pressure. Colligative properties depend primarily on the number of dissolved particles rather than their chemical identity. These properties include vapour-pressure lowering, boiling-point elevation, freezing-point depression and osmotic pressure."
      },

      {
        heading: "10. Chemical Equilibrium and Equilibrium Constants",
        content: "Chemical equilibrium occurs in a reversible reaction when the forward and reverse reaction rates become equal. At equilibrium, concentrations remain constant with time, although the reactions continue to occur. For a general reaction aA + bB ⇌ cC + dD, the equilibrium constant expression is Kc = [C]ᶜ[D]ᵈ/([A]ᵃ[B]ᵇ), where the concentrations represent equilibrium values. Pure solids and pure liquids are excluded from the conventional concentration equilibrium expression because their activities are treated as constant. The equilibrium constant provides information about the relative thermodynamic favourability of products and reactants at a particular temperature. Le Chatelier's principle predicts how an equilibrium system responds to changes in concentration, pressure and temperature. A catalyst changes the rates of the forward and reverse reactions but does not change the equilibrium constant or equilibrium position at a fixed temperature."
      },

      {
        heading: "11. Acid-Base Chemistry and Buffer Systems",
        content: "Acid-base chemistry examines substances that donate or accept protons or interact through electron-pair donation and acceptance. Under the Brønsted-Lowry theory, acids donate protons while bases accept protons. Under the Lewis theory, acids accept electron pairs while bases donate electron pairs. Acid and base strength depends on the extent of ionisation or proton transfer under specified conditions, while concentration describes the amount of substance present per unit volume. The pH of an aqueous solution is defined in terms of hydrogen ion activity, although concentration is commonly used as an approximation for sufficiently dilute solutions. Buffer solutions resist significant changes in pH when small amounts of acid or base are added. They commonly contain a weak acid and its conjugate base or a weak base and its conjugate acid. The Henderson-Hasselbalch equation relates buffer pH to the acid dissociation constant and the ratio of conjugate base to weak acid under suitable conditions. Buffer systems are essential in biological processes, pharmaceutical formulations, analytical chemistry and industrial chemical operations."
      },

      {
        heading: "12. Chemical Thermodynamics",
        content: "Chemical thermodynamics investigates the relationships between heat, work, internal energy, enthalpy, entropy and Gibbs free energy. The first law of thermodynamics states that energy is conserved and is expressed as ΔU = q + w under the chemistry sign convention. Enthalpy is defined as H = U + PV and is especially useful for processes occurring at constant pressure. The second law states that the total entropy of an isolated system cannot decrease during a spontaneous process. Gibbs free energy is defined as G = H - TS and its change at constant temperature and pressure helps predict spontaneity. A negative Gibbs free energy change indicates a thermodynamically favourable process in the forward direction under the specified conditions, while zero indicates equilibrium. Thermodynamic principles help explain chemical stability, energy conversion and the feasibility of industrial processes."
      },

      {
        heading: "13. Chemical Kinetics and Reaction Rates",
        content: "Chemical kinetics studies the rates of chemical reactions and the mechanisms through which they occur. Reaction rates describe changes in reactant or product concentrations with time. Rate laws relate reaction rates to experimentally determined reactant concentration powers. Reaction order describes the dependence of the reaction rate on the concentration of each reactant, while the rate constant is the proportionality constant in the rate law at a specified temperature. Factors affecting reaction rates include concentration, temperature, pressure in gaseous systems, surface area and catalysts. Collision theory explains that reacting particles must collide with sufficient energy and suitable orientation to undergo a reaction. Activation energy is the energy barrier associated with reaching the transition state. Integrated rate laws help describe concentration changes over time, while the Arrhenius equation explains the relationship between rate constants and temperature."
      },

      {
        heading: "14. Electrochemistry and Redox Processes",
        content: "Electrochemistry examines the relationship between oxidation-reduction reactions and electrical energy. Oxidation involves electron loss or an increase in oxidation state, while reduction involves electron gain or a decrease in oxidation state. Galvanic cells convert the chemical energy of spontaneous redox reactions into electrical energy, whereas electrolytic cells use electrical energy to drive non-spontaneous reactions. Oxidation occurs at the anode and reduction occurs at the cathode in both types of cells. Standard electrode potentials are measured relative to a reference electrode, commonly the standard hydrogen electrode. Standard cell potential is calculated by subtracting the standard reduction potential of the anode from that of the cathode. Electrochemical principles are important in batteries, fuel cells, electrolysis, metal extraction, electroplating and corrosion prevention."
      },

      {
        heading: "15. Nuclear Chemistry and Radioactivity",
        content: "Nuclear chemistry studies changes that occur within atomic nuclei. Unlike ordinary chemical reactions, which involve rearrangements of electrons and chemical bonds, nuclear reactions involve changes in nuclear composition and may transform one element into another. Radioactivity is the spontaneous emission of radiation from unstable atomic nuclei. The major forms of radioactive emissions include alpha particles, beta particles and gamma radiation. Alpha emission involves the release of a helium-4 nucleus, beta-minus emission involves the conversion of a neutron into a proton with the emission of an electron and an antineutrino, while gamma emission involves the release of high-energy electromagnetic radiation from an excited nucleus. Radioactive decay follows first-order kinetics and is described by N = N₀e⁻ᵏᵗ, where N₀ is the initial number of radioactive nuclei, N is the number remaining after time t and k is the decay constant. Nuclear chemistry has applications in medical diagnosis, cancer treatment, industrial radiography, archaeological dating and nuclear energy."
      },

      {
        heading: "16. Applications of General Chemistry",
        content: "General chemistry provides the fundamental scientific principles used throughout modern chemical industries and research. Atomic theory explains the structure of materials, while chemical bonding helps predict their properties. Stoichiometry supports material balances and production calculations. Thermodynamics and kinetics help determine process feasibility and operating conditions. Chemical equilibrium is important in reversible industrial reactions, while electrochemistry supports metal refining, corrosion control and energy storage. Analytical principles allow the composition and quality of products to be monitored. Knowledge of general chemistry is therefore essential for understanding advanced chemical subjects, solving practical problems and developing efficient industrial processes."
      }

    ]
  },


  "Physical Chemistry": {
    title: "Physical Chemistry",

    introduction: "Physical chemistry is the branch of chemistry that applies the principles and mathematical methods of physics to understand chemical systems. It investigates the structure and behaviour of atoms and molecules, energy transformations, chemical equilibria, reaction rates, molecular interactions and the physical properties of matter. It provides the theoretical foundation for understanding chemical reactions, thermodynamic processes, molecular spectroscopy, electrochemical systems and industrial chemical operations.",

    objectives: [
      "Explain the scope and importance of physical chemistry.",
      "Describe the principles of quantum mechanics and their applications to atomic structure.",
      "Explain atomic and molecular orbital theory.",
      "Apply the principles of molecular symmetry and molecular structure.",
      "Explain thermodynamic properties and thermodynamic potentials.",
      "Apply the laws of thermodynamics to chemical processes.",
      "Explain entropy using classical and statistical thermodynamics.",
      "Describe chemical potential and its relationship with chemical equilibrium.",
      "Explain phase equilibria and phase diagrams.",
      "Apply fundamental principles of chemical kinetics.",
      "Explain transition state theory and activation energy.",
      "Describe statistical mechanics and molecular partition functions.",
      "Explain adsorption and surface chemistry.",
      "Describe the physical principles of electrochemical systems.",
      "Explain molecular transport properties and diffusion."
    ],

    sections: [

      {
        heading: "1. Introduction to Physical Chemistry",
        content: "Physical chemistry investigates the physical principles governing chemical substances and their transformations. It connects microscopic molecular behaviour with observable macroscopic properties such as temperature, pressure, density, heat capacity and reaction rates. Major areas include quantum chemistry, thermodynamics, statistical mechanics, chemical kinetics, electrochemistry, surface chemistry and molecular spectroscopy. Unlike purely descriptive approaches to chemistry, physical chemistry relies heavily on mathematical relationships, experimental measurements and theoretical models. Its principles are important in materials science, energy research, pharmaceutical development and industrial process engineering."
      },

      {
        heading: "2. Quantum Mechanics and Atomic Structure",
        content: "Quantum mechanics provides the theoretical framework for describing particles and energy at atomic and molecular scales. Unlike classical mechanics, which describes particles using definite trajectories, quantum mechanics describes systems through wavefunctions and probability distributions. The time-independent Schrödinger equation is commonly expressed as Ĥψ = Eψ, where Ĥ represents the Hamiltonian operator, ψ is the wavefunction and E is the allowed energy eigenvalue. The wavefunction contains information about a quantum system, while its squared magnitude, |ψ|², gives the probability density of finding a particle in a particular region of space. Atomic orbitals represent allowed electron states and are described by quantum numbers. The quantisation of energy explains why atoms possess discrete electronic energy levels and why they absorb or emit particular frequencies of radiation."
      },

      {
        heading: "3. Particle Models, Atomic Orbitals and Molecular Orbitals",
        content: "Quantum models provide useful methods for understanding atomic and molecular energy levels. A particle in a one-dimensional infinite potential well, commonly called a particle in a box, has allowed energy levels given by Eₙ = n²h²/(8mL²), where n is a positive integer, h is Planck's constant, m is particle mass and L is the length of the box. This model illustrates the quantisation of energy and the dependence of energy on confinement. Atomic orbital theory describes electrons in atoms using quantum mechanical wavefunctions. Molecular orbital theory extends these principles to molecules by combining atomic orbitals to form molecular orbitals that may be bonding, antibonding or non-bonding. The electron occupancy of molecular orbitals helps explain bond order, molecular stability and magnetic behaviour. For a simple diatomic molecule, bond order is calculated as half the difference between the number of electrons in bonding orbitals and antibonding orbitals. These models provide important insights into molecular structure and chemical bonding."
      },

      {
        heading: "4. Molecular Symmetry and Molecular Structure",
        content: "Molecular symmetry examines the geometric arrangements of atoms that remain unchanged under specified symmetry operations. These operations include rotation, reflection, inversion and improper rotation. Molecular symmetry is described using symmetry elements and point groups. The classification of molecules into point groups helps scientists understand molecular properties, vibrational modes, spectroscopic selection rules and bonding interactions. Group theory provides a mathematical framework for analysing symmetry and is especially important in advanced molecular spectroscopy and quantum chemistry. Molecular structure also determines important properties such as polarity, dipole moment, vibrational behaviour and chemical reactivity. Symmetry analysis is therefore useful in interpreting molecular spectra and predicting allowed electronic and vibrational transitions."
      },

      {
        heading: "5. Classical Thermodynamics and Thermodynamic Potentials",
        content: "Classical thermodynamics investigates the relationships between heat, work, internal energy, enthalpy, entropy and other macroscopic properties of matter. Internal energy, represented by U, is the total microscopic energy of a system. Enthalpy is defined as H = U + PV and is particularly useful for processes occurring at constant pressure. The Helmholtz free energy is defined as A = U − TS and is useful for systems at constant temperature and volume. Gibbs free energy is defined as G = H − TS and is especially useful for systems at constant temperature and pressure. Each thermodynamic potential provides a convenient way to analyse different experimental conditions. Their natural variables and differential relationships allow physical chemists to derive important thermodynamic equations and predict equilibrium behaviour."
      },

      {
        heading: "6. The First and Second Laws of Thermodynamics",
        content: "The first law of thermodynamics expresses the conservation of energy. Under the chemistry sign convention, it is written as ΔU = q + w, where q is heat transferred to the system and w is work done on the system. Pressure-volume work at constant external pressure is expressed as w = −PextΔV. The second law describes the direction of spontaneous processes and states that the total entropy of an isolated system cannot decrease. For an irreversible spontaneous process, the total entropy increases, while an ideal reversible process produces no net entropy generation. For a process occurring at constant temperature and pressure, the Gibbs free energy change provides a useful spontaneity criterion. A negative ΔG indicates a thermodynamically favourable forward process under the specified conditions, while ΔG = 0 corresponds to equilibrium. These laws are fundamental to the study of energy conversion, chemical reactions and industrial thermodynamic efficiency."
      },

      {
        heading: "7. Entropy and Statistical Thermodynamics",
        content: "Entropy is a thermodynamic state function associated with the dispersal of energy and the number of accessible microscopic configurations of a system. In classical thermodynamics, the entropy change for a reversible heat transfer is defined by dS = δqrev/T. Statistical thermodynamics provides a microscopic interpretation of entropy through Boltzmann's equation, S = kB ln W, where kB is the Boltzmann constant and W is the number of accessible microstates for a macrostate under the specified constraints. A microstate describes a particular microscopic arrangement consistent with the macroscopic conditions. A macrostate is described by macroscopic properties such as temperature, pressure and volume. Systems with more accessible microstates generally have greater statistical entropy. Statistical explanations help connect molecular behaviour with experimentally measurable thermodynamic quantities and provide a deeper understanding of spontaneous processes."
      },

      {
        heading: "8. Chemical Potential and Chemical Equilibrium",
        content: "Chemical potential is a thermodynamic property that describes how the Gibbs free energy of a system changes when the amount of a particular component changes while the other relevant variables are held constant. It is represented by μ and is formally defined as the partial molar Gibbs free energy at constant temperature and pressure. For a multicomponent system, chemical potential helps determine the direction in which matter moves or chemical reactions proceed. At equilibrium, the appropriate chemical potentials satisfy the conditions for there to be no net thermodynamic driving force for the allowed changes. For a reaction, the Gibbs free energy change depends on the chemical potentials of reactants and products and their stoichiometric coefficients. Chemical potential is important in phase equilibria, solutions, electrochemistry and the study of chemical reactions under non-ideal conditions."
      },

      {
        heading: "9. Solutions, Activities and Non-Ideal Behaviour",
        content: "Physical chemistry examines the behaviour of solutions in terms of solute-solvent interactions, concentration, thermodynamic properties and molecular interactions. Ideal solutions approximately obey Raoult's law across their composition range, meaning the partial vapour pressure of each volatile component is proportional to its mole fraction and pure-component vapour pressure. Real solutions may deviate from ideal behaviour because intermolecular interactions differ from those in the pure components. Chemical activity is an effective thermodynamic quantity used to account for non-ideal behaviour. For a dissolved species, activity is commonly represented as aᵢ = γᵢcᵢ/c°, where γᵢ is an activity coefficient, cᵢ is concentration and c° is the chosen standard concentration. For suitable gas systems, fugacity provides an analogous correction to pressure. Activities and activity coefficients are important in accurate equilibrium calculations, electrochemical measurements and the study of concentrated solutions."
      },

      {
        heading: "10. Phase Equilibria and Phase Diagrams",
        content: "Phase equilibria describe the conditions under which two or more phases of a substance coexist in thermodynamic equilibrium. A phase is a physically distinct and relatively uniform region of a system. Common phases include solids, liquids and gases. The Gibbs phase rule for a non-reacting system is F = C − P + 2, where F is the number of degrees of freedom, C is the number of independent components and P is the number of phases present. Phase diagrams illustrate the relationship between temperature, pressure and the physical states of substances. Important features include melting curves, vaporisation curves, sublimation curves, triple points and critical points. The Clausius-Clapeyron equation provides an approximate relationship between vapour pressure and temperature for suitable liquid-vapour equilibrium systems. Phase diagrams are important in crystallisation, distillation, materials processing and industrial separation operations."
      },

      {
        heading: "11. Chemical Kinetics and Reaction Rate Theory",
        content: "Chemical kinetics investigates reaction rates and the molecular processes responsible for chemical transformations. Reaction rates are expressed as changes in reactant or product concentrations with time. Rate laws relate reaction rates to reactant concentrations through experimentally determined reaction orders. Integrated rate equations describe how concentrations change over time for zero-order, first-order and second-order reactions. The Arrhenius equation, k = Ae^(−Ea/RT), describes the temperature dependence of the rate constant. Transition state theory provides a more detailed description of reaction rates by considering the formation of an activated complex at the top of the reaction energy barrier. The Eyring equation is commonly expressed as k = (kBT/h)e^(−ΔG‡/RT), where kB is the Boltzmann constant, h is Planck's constant and ΔG‡ is the Gibbs free energy of activation. Reaction-rate theory helps explain molecular reaction pathways, catalyst behaviour and the influence of operating conditions on chemical processes."
      },

      {
        heading: "12. Statistical Mechanics and Molecular Partition Functions",
        content: "Statistical mechanics connects the microscopic properties of individual particles with the macroscopic thermodynamic behaviour of large collections of particles. It uses statistical distributions to describe how molecules occupy available energy states. The molecular partition function is a mathematical quantity that summarises the contribution of accessible energy levels to the statistical behaviour of a system. For a system with discrete energy levels, the partition function may be written as q = Σᵢe^(−εᵢ/kBT), where εᵢ represents an energy level and the sum extends over the accessible states, including their degeneracies where appropriate. Molecular partition functions may be separated approximately into translational, rotational, vibrational and electronic contributions for suitable models. They allow thermodynamic quantities such as internal energy, entropy and heat capacity to be calculated from molecular energy information. Statistical mechanics is important in molecular modelling, computational chemistry, reaction thermodynamics and the interpretation of experimental thermodynamic data."
      },

      {
        heading: "13. Surface Chemistry and Adsorption",
        content: "Surface chemistry studies the physical and chemical processes that occur at interfaces between different phases. Adsorption is the accumulation of atoms, ions or molecules at the surface of a material, while absorption involves penetration into the bulk of a material. Adsorption may be classified as physical adsorption, involving relatively weak intermolecular interactions, or chemisorption, involving the formation of chemical bonds between the adsorbate and surface. The Langmuir adsorption model assumes that adsorption occurs at a fixed number of equivalent surface sites, each site can hold one adsorbed molecule and there are no significant interactions between adsorbed species. Its common expression is θ = K P/(1 + KP), where θ is the fraction of surface sites occupied, K is an adsorption equilibrium constant and P is the gas pressure. Surface chemistry is important in heterogeneous catalysis, corrosion, gas separation, wastewater treatment and the design of functional materials."
      },

      {
        heading: "14. Electrochemistry and Electrochemical Thermodynamics",
        content: "Electrochemistry investigates the relationship between chemical reactions and electrical energy. It involves oxidation-reduction reactions in which electrons are transferred between chemical species. Galvanic cells convert energy from spontaneous redox reactions into electrical work, while electrolytic cells use electrical energy to drive non-spontaneous reactions. The standard Gibbs free energy change of a cell reaction is related to its standard cell potential by ΔG° = −nFE°cell, where n is the number of electrons transferred and F is the Faraday constant. The Nernst equation describes the dependence of electrode or cell potential on chemical activities and temperature. At 25°C, its common logarithmic form is E = E° − (0.05916/n)log Q. Electrochemical thermodynamics helps explain battery operation, electrode behaviour, corrosion and the energetic feasibility of electrochemical processes."
      },

      {
        heading: "15. Transport Properties and Molecular Diffusion",
        content: "Transport phenomena describe how matter, energy and momentum move through physical systems. In physical chemistry, important transport properties include diffusion, viscosity and thermal conductivity. Diffusion occurs when particles move from regions of higher concentration towards regions of lower concentration due to random molecular motion. Fick's first law describes steady-state diffusion and is expressed as J = −D(dc/dx), where J is the diffusion flux, D is the diffusion coefficient and dc/dx is the concentration gradient. The negative sign indicates that diffusion occurs down the concentration gradient. Fick's second law describes how concentration changes with time during non-steady-state diffusion. Viscosity describes a fluid's resistance to flow, while thermal conductivity describes its ability to conduct heat. These properties are important in membrane separation, heat exchangers, chemical reactors and mass-transfer operations."
      },

      {
        heading: "16. Applications of Physical Chemistry",
        content: "Physical chemistry provides the theoretical and quantitative foundation for many scientific and industrial processes. Quantum chemistry helps explain electronic structures and molecular properties. Thermodynamics determines energy requirements, reaction feasibility and phase stability. Statistical mechanics connects molecular behaviour with measurable thermodynamic quantities. Chemical kinetics supports reactor design and reaction optimisation. Electrochemistry contributes to battery development, corrosion prevention and industrial metal extraction. Surface chemistry is important in catalysis, adsorption and environmental treatment. Transport phenomena help engineers understand heat and mass transfer in industrial equipment. Physical chemistry therefore plays an essential role in materials development, energy technologies, pharmaceutical research and the efficient design of industrial chemical processes."
      }

    ]
  },


  "Organic Chemistry": {
    title: "University-Level Organic Chemistry",
    introduction: "Organic chemistry is the scientific study of carbon-containing compounds, their structures, properties, reactions and synthesis. It explains how molecular structure determines chemical behaviour and provides the foundation for pharmaceuticals, polymers, petrochemicals, materials science and many industrial processes.",
    objectives: [
      "Understand the structure, bonding and hybridisation of organic compounds.",
      "Classify organic compounds using functional groups and IUPAC nomenclature.",
      "Explain stereochemistry and molecular isomerism.",
      "Understand major organic reaction mechanisms.",
      "Study aromaticity and electrophilic aromatic substitution.",
      "Explain carbonyl chemistry and nucleophilic addition reactions.",
      "Understand oxidation, reduction and organometallic reactions.",
      "Apply organic chemistry principles to synthesis and industrial applications."
    ],
    sections: [
      {
        heading: "1. Structure and Bonding in Organic Molecules",
        content: "Organic molecules contain carbon atoms bonded to hydrogen and other elements such as oxygen, nitrogen, sulfur and halogens. Carbon forms stable covalent bonds because it has four valence electrons. Its ability to form chains, rings and multiple bonds produces an enormous variety of organic compounds. The geometry and reactivity of organic molecules depend strongly on their bonding arrangements."
      },
      {
        heading: "2. Hybridisation and Molecular Geometry",
        content: "Carbon commonly undergoes sp3, sp2 and sp hybridisation. An sp3-hybridised carbon forms four sigma bonds with approximately tetrahedral geometry and bond angles of 109.5°. An sp2-hybridised carbon forms three sigma bonds and one unhybridised p orbital, producing trigonal planar geometry with bond angles near 120°. An sp-hybridised carbon forms two sigma bonds and has linear geometry with a bond angle of 180°. Hybridisation helps explain molecular shape and bond strength."
      },
      {
        heading: "3. Functional Groups and IUPAC Nomenclature",
        content: "Functional groups are specific arrangements of atoms responsible for characteristic chemical properties and reactions. Important groups include alcohols (-OH), aldehydes (-CHO), ketones (>C=O), carboxylic acids (-COOH), esters (-COOR), amines (-NH2), amides (-CONH2), nitriles (-C≡N) and halides (-X). IUPAC nomenclature provides systematic names based on the parent structure, principal functional group, substituents and their positions."
      },
      {
        heading: "4. Constitutional Isomerism",
        content: "Constitutional isomers have the same molecular formula but different connectivity of atoms. Major forms include chain isomerism, position isomerism and functional group isomerism. For example, ethanol and dimethyl ether both have the molecular formula C2H6O but possess different functional groups and chemical properties."
      },
      {
        heading: "5. Stereochemistry and Chirality",
        content: "Stereochemistry studies the three-dimensional arrangement of atoms in molecules. A chiral molecule is not superimposable on its mirror image. A tetrahedral carbon attached to four different groups is commonly a stereogenic centre. Enantiomers are non-superimposable mirror images while diastereomers are stereoisomers that are not mirror images. The Cahn-Ingold-Prelog system assigns R and S configurations to stereogenic centres."
      },
      {
        heading: "6. Conformational Analysis",
        content: "Conformations are different spatial arrangements produced by rotation around single bonds without breaking covalent bonds. Ethane has staggered and eclipsed conformations. The staggered form is more stable because it has lower torsional strain. Cyclohexane commonly adopts a chair conformation, which minimises angle and torsional strain. Axial and equatorial positions influence the stability of substituted cyclohexanes."
      },
      {
        heading: "7. Acids, Bases and Electronic Effects",
        content: "Organic acidity and basicity depend on molecular structure and the stability of conjugate species. Inductive effects involve electron withdrawal or donation through sigma bonds. Resonance effects involve electron delocalisation through overlapping orbitals. Hyperconjugation also influences molecular stability. Electron-withdrawing groups generally increase acidity when they stabilise the conjugate base. Resonance and inductive effects are essential for predicting reaction behaviour."
      },
      {
        heading: "8. Organic Reaction Mechanisms",
        content: "A reaction mechanism describes the sequence of elementary steps through which reactants become products. Curved arrows represent the movement of electron pairs. Organic reactions commonly involve nucleophiles, which donate electron pairs, and electrophiles, which accept them. Important reaction classes include substitution, addition, elimination, rearrangement and oxidation-reduction reactions. Understanding electron movement helps explain reaction products and selectivity."
      },
      {
        heading: "9. Nucleophilic Substitution Reactions",
        content: "Nucleophilic substitution involves replacement of a leaving group by a nucleophile. In an SN2 reaction, bond formation and bond breaking occur simultaneously in one concerted step. The reaction commonly produces inversion of configuration at a stereogenic carbon. In an SN1 reaction, a carbocation intermediate forms before nucleophilic attack. Its rate-determining step depends on the concentration of the substrate. Carbocation stability and solvent conditions influence the reaction pathway."
      },
      {
        heading: "10. Elimination Reactions",
        content: "Elimination reactions remove atoms or groups from adjacent atoms to form multiple bonds. E2 reactions occur through a concerted mechanism, often requiring an anti-periplanar arrangement of the leaving group and hydrogen. E1 reactions proceed through a carbocation intermediate. Reaction conditions, substrate structure and base strength influence whether substitution or elimination is favoured. Zaitsev's rule commonly predicts formation of the more substituted alkene when other factors do not dominate."
      },
      {
        heading: "11. Alkene and Alkyne Reactions",
        content: "Alkenes and alkynes contain carbon-carbon multiple bonds and undergo addition reactions. Alkenes commonly react with hydrogen halides, halogens, water and hydrogen. Electrophilic addition frequently follows Markovnikov orientation when the mechanism involves a carbocation. Hydroboration-oxidation gives anti-Markovnikov hydration of alkenes. Alkynes undergo related addition reactions and can be selectively reduced to alkenes or fully hydrogenated to alkanes."
      },
      {
        heading: "12. Aromaticity and Electrophilic Aromatic Substitution",
        content: "Aromatic compounds are cyclic, planar and conjugated systems containing (4n + 2) pi electrons, according to Hückel's rule. Benzene is the classical example with six pi electrons. Its unusual stability arises from electron delocalisation. Electrophilic aromatic substitution preserves aromaticity after substitution and includes nitration, sulfonation, halogenation and Friedel-Crafts reactions. Existing substituents influence both the rate and position of further substitution."
      },
      {
        heading: "13. Carbonyl Chemistry",
        content: "The carbonyl group contains a carbon-oxygen double bond and occurs in aldehydes, ketones, carboxylic acids and their derivatives. The carbonyl carbon is electrophilic because oxygen attracts electron density. Nucleophiles can attack this carbon, producing addition or addition-elimination reactions. Aldehydes and ketones commonly undergo nucleophilic addition while carboxylic acid derivatives commonly undergo nucleophilic acyl substitution."
      },
      {
        heading: "14. Carboxylic Acids and Their Derivatives",
        content: "Carboxylic acids contain the -COOH functional group and can form acid derivatives such as acid chlorides, anhydrides, esters and amides. These compounds undergo nucleophilic acyl substitution. Their relative reactivity is influenced by leaving-group ability and resonance stabilisation. Esterification, hydrolysis, amidation and saponification are important transformations in laboratory and industrial chemistry."
      },
      {
        heading: "15. Oxidation, Reduction and Organometallic Chemistry",
        content: "Organic oxidation and reduction reactions involve changes in bonding to elements such as oxygen and hydrogen or changes in carbon oxidation state. Common reducing agents include lithium aluminium hydride and sodium borohydride. Oxidising agents include potassium permanganate and chromium-based reagents. Organometallic reagents such as Grignard reagents contain carbon-metal bonds and act as nucleophilic carbon sources. They are valuable for forming new carbon-carbon bonds."
      },
      {
        heading: "16. Organic Synthesis and Retrosynthetic Analysis",
        content: "Organic synthesis involves preparing target molecules through carefully selected chemical transformations. Retrosynthetic analysis works backwards from the target molecule to identify simpler starting materials. A disconnection represents a conceptual bond cleavage that suggests possible synthetic routes. Chemists consider reaction selectivity, functional-group compatibility, yield, cost, safety and environmental impact when designing a synthesis."
      },
      {
        heading: "17. Spectroscopic Identification of Organic Compounds",
        content: "Spectroscopic methods help determine molecular structure. Infrared spectroscopy identifies characteristic functional-group vibrations. Nuclear magnetic resonance spectroscopy provides information about hydrogen and carbon environments, chemical shifts and molecular connectivity. Mass spectrometry provides molecular mass and fragmentation patterns. UV-visible spectroscopy examines electronic transitions, particularly in conjugated systems. Combining these methods allows chemists to identify and verify organic structures."
      },
      {
        heading: "18. Industrial Applications of Organic Chemistry",
        content: "Organic chemistry supports the production of pharmaceuticals, plastics, synthetic fibres, dyes, detergents, fuels, solvents and agricultural chemicals. Polymerisation converts small organic molecules into large macromolecules. Petrochemical industries transform petroleum and natural gas into valuable chemical feedstocks. Modern industrial organic chemistry also focuses on catalytic efficiency, atom economy, safer solvents and sustainable synthesis."
      }
    ]
  },
  "Inorganic Chemistry": {
    title: "University-Level Inorganic Chemistry",
    introduction: "Inorganic chemistry studies the properties, structures, bonding and reactions of inorganic compounds. It covers coordination complexes, transition metals, main-group elements, organometallic compounds, solid-state materials and bioinorganic systems. These principles are essential in catalysis, metallurgy, materials science, medicine and industrial chemical production.",
    objectives: [
      "Understand the fundamental principles of inorganic bonding.",
      "Explain coordination compounds and ligand classification.",
      "Apply crystal field theory to transition metal complexes.",
      "Understand molecular orbital theory and ligand field theory.",
      "Explain the properties and reactions of transition metals.",
      "Study organometallic compounds and their industrial applications.",
      "Understand the chemistry of main-group elements.",
      "Explore bioinorganic chemistry and inorganic materials."
    ],
    sections: [
      {
        heading: "1. Introduction to Inorganic Chemistry",
        content: "Inorganic chemistry examines elements and compounds that are generally outside the traditional scope of organic chemistry. It includes ionic compounds, covalent inorganic molecules, coordination complexes, metals, minerals and solid-state materials. The subject explains periodic trends, chemical bonding, oxidation states, molecular structures and reactivity. It also provides the foundation for understanding many industrial and biological processes."
      },
      {
        heading: "2. Periodic Trends and Chemical Properties",
        content: "Periodic trends describe systematic changes in elemental properties across periods and down groups. Atomic radius generally decreases across a period and increases down a group. Ionisation energy generally increases across a period and decreases down a group. Electronegativity usually follows a similar trend to ionisation energy. These trends help explain bonding, oxidation states, metallic character and chemical reactivity."
      },
      {
        heading: "3. Chemical Bonding in Inorganic Compounds",
        content: "Inorganic compounds exhibit ionic, covalent, metallic and coordinate covalent bonding. Ionic bonding involves electrostatic attraction between oppositely charged ions. Covalent bonding involves shared electron pairs. Metallic bonding involves delocalised electrons throughout a metal lattice. Coordinate covalent bonding occurs when both electrons in a shared pair are donated by one atom or ion. Bonding models help explain the physical and chemical properties of inorganic substances."
      },
      {
        heading: "4. Coordination Chemistry",
        content: "Coordination chemistry studies compounds in which a central metal atom or ion is surrounded by ligands. Ligands donate electron pairs to the central metal through coordinate bonds. The coordination number describes the number of donor atoms directly attached to the central metal. Common coordination geometries include linear, tetrahedral, square planar and octahedral arrangements. Coordination compounds are important in catalysis, analytical chemistry and biological systems."
      },
      {
        heading: "5. Ligands and Their Classification",
        content: "Ligands are classified according to the number of donor atoms through which they bind to a metal centre. Monodentate ligands donate through one donor atom, while bidentate ligands donate through two donor atoms. Polydentate ligands contain several donor atoms. Examples include H2O, NH3, Cl-, ethylenediamine and EDTA. Chelating ligands form ring structures with metal ions and often increase complex stability through the chelate effect."
      },
      {
        heading: "6. Nomenclature and Isomerism of Coordination Compounds",
        content: "Coordination compounds are named according to established IUPAC rules. The ligand names and their alphabetical arrangement are considered before naming the central metal. The oxidation state of the metal is indicated using Roman numerals. Coordination compounds can exhibit structural isomerism and stereoisomerism. Geometrical isomerism includes cis and trans arrangements, while optical isomerism occurs when complexes form non-superimposable mirror images."
      },
      {
        heading: "7. Crystal Field Theory",
        content: "Crystal field theory describes the interaction between metal d orbitals and the electrostatic field generated by surrounding ligands. In an octahedral complex, the five d orbitals split into lower-energy t2g and higher-energy eg sets. In a tetrahedral complex, the splitting pattern is reversed. The energy difference between the orbital groups is called crystal field splitting energy. This splitting helps explain colour, magnetism and electronic configurations of transition metal complexes."
      },
      {
        heading: "8. High-Spin and Low-Spin Complexes",
        content: "The electronic arrangement of transition metal complexes depends partly on the competition between crystal field splitting energy and electron pairing energy. When splitting energy is relatively small, electrons tend to occupy higher-energy orbitals before pairing, producing high-spin complexes. When splitting energy is sufficiently large, electrons pair in lower-energy orbitals, producing low-spin complexes. Ligand strength, metal oxidation state and metal identity influence the outcome."
      },
      {
        heading: "9. Molecular Orbital Theory and Ligand Field Theory",
        content: "Molecular orbital theory explains bonding through the combination of atomic orbitals to form molecular orbitals. In coordination compounds, metal and ligand orbitals can combine to form bonding, non-bonding and antibonding orbitals. Ligand field theory extends the description of crystal field effects by considering covalent metal-ligand interactions. These approaches provide a more complete explanation of bonding, electronic structure and magnetic behaviour."
      },
      {
        heading: "10. Colour and Magnetic Properties of Coordination Complexes",
        content: "Many transition metal complexes are coloured because electrons absorb visible light during electronic transitions between energy levels. The observed colour is related to the wavelength of light absorbed. Magnetic behaviour depends on the number of unpaired electrons. Paramagnetic substances contain unpaired electrons and are attracted by a magnetic field, while diamagnetic substances have all electrons paired and are weakly repelled by a magnetic field."
      },
      {
        heading: "11. Transition Metal Chemistry",
        content: "Transition metals commonly exhibit variable oxidation states, form coordination complexes and display catalytic activity. Their partially filled d orbitals contribute to many characteristic properties. Examples include iron, cobalt, nickel, copper and chromium. Transition metals participate in redox reactions and form compounds with diverse colours and magnetic properties. Their chemistry is important in metallurgy, electrochemistry and industrial catalysis."
      },
      {
        heading: "12. Organometallic Chemistry",
        content: "Organometallic chemistry studies compounds containing at least one direct metal-carbon bond. Examples include metal carbonyls, metallocenes and alkyl-metal compounds. The 18-electron rule is a useful guideline for assessing the electronic stability of many transition metal complexes, although exceptions are common. Organometallic compounds play important roles in homogeneous catalysis, polymer production and organic synthesis."
      },
      {
        heading: "13. Catalysis by Inorganic and Organometallic Compounds",
        content: "Inorganic catalysts increase reaction rates by providing alternative reaction pathways with lower activation energies. Transition metal complexes can activate small molecules through coordination and bond weakening. Important industrial examples include the Haber-Bosch process for ammonia production and catalytic hydrogenation. Homogeneous catalysts operate in the same phase as reactants, while heterogeneous catalysts operate in a different phase. Catalyst selection affects activity, selectivity, stability and production cost."
      },
      {
        heading: "14. Main-Group Element Chemistry",
        content: "Main-group elements occupy groups 1, 2 and 13 to 18 of the periodic table. Their chemistry includes alkali metals, alkaline earth metals, boron-group elements, carbon-group elements, pnictogens, chalcogens, halogens and noble gases. Their properties are influenced by valence electron configurations, atomic size, electronegativity and oxidation states. Main-group compounds are essential in fertilizers, ceramics, glass, semiconductors and industrial chemicals."
      },
      {
        heading: "15. Bioinorganic Chemistry",
        content: "Bioinorganic chemistry investigates the roles of inorganic elements and metal ions in biological systems. Iron is essential in haemoglobin and electron-transfer proteins. Magnesium is central to chlorophyll, while zinc functions in many enzymes. Copper participates in biological oxidation-reduction reactions. Understanding metal-ion coordination and biological reactivity is important in medicine, nutrition, enzymology and the study of metalloproteins."
      },
      {
        heading: "16. Solid-State and Materials Chemistry",
        content: "Solid-state chemistry examines the structures and properties of crystalline and non-crystalline solids. Inorganic materials include ceramics, semiconductors, ionic solids, superconductors and metal oxides. Crystal lattices describe the regular arrangement of particles in crystalline substances. Defects, impurities and electronic structure influence conductivity, hardness, optical behaviour and thermal stability. These principles support the development of batteries, sensors and electronic materials."
      },
      {
        heading: "17. Inorganic Reaction Mechanisms",
        content: "Inorganic reaction mechanisms explain how inorganic compounds transform through elementary steps. Substitution reactions in coordination complexes involve replacement of one ligand by another. Mechanisms may be associative, dissociative or interchange depending on the system. Electron-transfer reactions involve changes in oxidation states and can occur through inner-sphere or outer-sphere pathways. Reaction mechanisms help explain rates, selectivity and the behaviour of metal complexes."
      },
      {
        heading: "18. Industrial Applications of Inorganic Chemistry",
        content: "Inorganic chemistry supports the production of metals, fertilizers, acids, bases, pigments, catalysts, glass and advanced materials. The extraction of iron and aluminium demonstrates the importance of inorganic reactions in metallurgy. Sulfuric acid production through the Contact process and ammonia production through the Haber-Bosch process are major industrial applications. Inorganic materials also support energy storage, water treatment, construction and electronics."
      }
    ]
  },


  "Analytical Chemistry": {
    title: "University-Level Analytical Chemistry",
    introduction: "Analytical chemistry is the branch of chemistry concerned with identifying chemical substances and determining their quantities in samples. It combines classical methods, instrumental techniques, statistical analysis and quality assurance to produce reliable chemical information. Its applications include pharmaceutical testing, environmental monitoring, food analysis, industrial quality control and clinical laboratories.",
    objectives: [
      "Understand the principles and scope of analytical chemistry.",
      "Distinguish qualitative and quantitative analysis.",
      "Apply sampling and sample preparation techniques.",
      "Evaluate accuracy, precision and measurement uncertainty.",
      "Understand calibration methods and statistical treatment of data.",
      "Apply gravimetric and volumetric analytical methods.",
      "Understand spectroscopic and chromatographic techniques.",
      "Explore electroanalytical methods and instrumental analysis.",
      "Evaluate analytical methods through validation and quality control."
    ],
    sections: [
      {
        heading: "1. Introduction to Analytical Chemistry",
        content: "Analytical chemistry provides methods for determining the identity, concentration and composition of chemical substances. Qualitative analysis identifies the components present in a sample, while quantitative analysis determines their amounts. Analytical procedures generally involve sampling, sample preparation, measurement, data processing and interpretation. The reliability of the final result depends on every stage of the analytical process."
      },
      {
        heading: "2. Classification of Analytical Methods",
        content: "Analytical methods are broadly classified as classical or instrumental. Classical methods include gravimetric analysis and volumetric titration. Instrumental methods use physical properties such as light absorption, electrical potential, conductivity and mass-to-charge ratio. Analytical methods may also be classified as qualitative, quantitative, destructive or non-destructive depending on their purpose and operation."
      },
      {
        heading: "3. Sampling and Sample Preparation",
        content: "Sampling involves collecting a representative portion of a material for analysis. A poor sampling procedure can produce misleading results even when the analytical instrument is highly accurate. Sample preparation may involve drying, grinding, filtration, dissolution, extraction, digestion and dilution. The preparation method should preserve the analyte and minimise contamination or loss."
      },
      {
        heading: "4. Accuracy, Precision and Measurement",
        content: "Accuracy describes how close a measured result is to an accepted reference value. Precision describes how closely repeated measurements agree with one another. High precision does not necessarily mean high accuracy. Analytical measurements should also consider sensitivity, selectivity, detection limits and reproducibility. Reliable analytical work requires suitable instruments and carefully controlled experimental conditions."
      },
      {
        heading: "5. Errors and Measurement Uncertainty",
        content: "Analytical errors are commonly classified as systematic, random and gross errors. Systematic errors produce consistent deviations from the true or accepted value, while random errors cause unpredictable variations. Gross errors often result from mistakes in measurement or procedure. Measurement uncertainty expresses the range of values reasonably associated with a result. Calibration, replicate measurements and careful experimental technique help reduce uncertainty."
      },
      {
        heading: "6. Statistical Treatment of Analytical Data",
        content: "Statistics helps chemists interpret repeated measurements and evaluate analytical reliability. The arithmetic mean is calculated by dividing the sum of measurements by the number of observations. The range is the difference between the highest and lowest values. Standard deviation measures the spread of data around the mean, while relative standard deviation expresses this spread as a percentage of the mean. Confidence intervals provide an estimated range for the population mean."
      },
      {
        heading: "7. Calibration and Analytical Standards",
        content: "Calibration establishes the relationship between an instrument response and known analyte concentrations. A calibration curve is commonly constructed using standard solutions of known concentration. In many methods, the response is related linearly to concentration through an equation such as y = mx + b. External calibration, standard addition and internal standard methods are used depending on sample composition and possible matrix effects. Certified reference materials support measurement traceability."
      },
      {
        heading: "8. Gravimetric Analysis",
        content: "Gravimetric analysis determines the quantity of an analyte by measuring mass. In precipitation gravimetry, the analyte is converted into a sparingly soluble compound that can be filtered, washed, dried or ignited and weighed. The precipitate should have a known composition and suitable purity. Accurate gravimetric analysis requires complete precipitation, minimal contamination and careful weighing. The analyte mass is calculated from the mass and chemical composition of the final product."
      },
      {
        heading: "9. Volumetric Analysis and Titration",
        content: "Volumetric analysis determines the concentration of an analyte by measuring the volume of a standard solution required for reaction. In a titration, the titrant is added gradually to the analyte until the equivalence point is reached. An indicator or instrumental method may identify the endpoint. For a balanced reaction aA + bB → products, the equivalence relationship is nA/a = nB/b. Accurate results depend on standardised solutions, suitable indicators and correct burette readings."
      },
      {
        heading: "10. Acid-Base and Redox Titrations",
        content: "Acid-base titrations are based on neutralisation reactions between acids and bases. Suitable indicators change colour over a pH range near the equivalence point. Redox titrations involve electron transfer between oxidising and reducing agents. Examples include permanganate and dichromate titrations. The balanced reaction determines the stoichiometric relationship used to calculate the unknown concentration."
      },
      {
        heading: "11. Complexometric and Precipitation Titrations",
        content: "Complexometric titrations determine metal-ion concentrations through the formation of stable complexes. EDTA is a widely used complexing agent because it forms complexes with many metal ions, often in a 1:1 molar ratio. Precipitation titrations involve reactions that produce sparingly soluble compounds. Silver nitrate is commonly used in argentometric determination of halide ions. Reaction conditions and indicators must be selected carefully."
      },
      {
        heading: "12. UV-Visible Spectrophotometry",
        content: "UV-visible spectrophotometry measures the absorption of ultraviolet or visible radiation by a substance. The Beer-Lambert law is expressed as A = εlc, where A is absorbance, ε is molar absorptivity, l is path length and c is concentration. Within the appropriate concentration range, absorbance is proportional to concentration. The technique is widely used for determining metal complexes, coloured compounds and substances that absorb UV radiation."
      },
      {
        heading: "13. Infrared and Atomic Spectroscopy",
        content: "Infrared spectroscopy measures the absorption of infrared radiation associated with molecular vibrations. It is useful for identifying functional groups and characterising compounds. Atomic absorption spectroscopy measures the absorption of characteristic radiation by free ground-state atoms and is widely used for metal analysis. Atomic emission spectroscopy measures radiation emitted by excited atoms or ions. These techniques provide valuable information about elemental composition."
      },
      {
        heading: "14. Chromatographic Techniques",
        content: "Chromatography separates components of a mixture through their different distributions between stationary and mobile phases. Major techniques include thin-layer chromatography, paper chromatography, gas chromatography and high-performance liquid chromatography. Retention time, retention factor and peak area provide useful analytical information. Chromatography is widely applied in pharmaceutical analysis, food testing, environmental monitoring and chemical industries."
      },
      {
        heading: "15. Electroanalytical Methods",
        content: "Electroanalytical chemistry uses electrical properties to investigate chemical systems. Potentiometry measures electrical potential under conditions of negligible current, as in pH measurement using a glass electrode. Conductometry measures electrical conductivity. Voltammetry studies current as a function of applied potential, while amperometry measures current at a controlled potential. These methods are useful for determining ion concentrations and studying redox behaviour."
      },
      {
        heading: "16. Mass Spectrometry and Hyphenated Techniques",
        content: "Mass spectrometry measures the mass-to-charge ratios of ions to provide information about molecular mass, elemental composition and fragmentation. The general process involves ionisation, ion separation and detection. Hyphenated techniques combine separation methods with powerful detectors. Examples include gas chromatography-mass spectrometry and liquid chromatography-mass spectrometry. These combinations improve identification and quantification in complex samples."
      },
      {
        heading: "17. Method Validation and Quality Assurance",
        content: "Analytical method validation establishes whether a procedure is suitable for its intended purpose. Important characteristics include accuracy, precision, selectivity, linearity, range, detection limit, quantification limit and robustness. Quality assurance covers the wider system used to maintain reliable laboratory results. Quality control includes calibration checks, blanks, replicate samples, control materials and documented procedures. Good laboratory practice supports traceability and confidence in analytical results."
      },
      {
        heading: "18. Industrial and Environmental Applications",
        content: "Analytical chemistry is essential in industrial quality control, pharmaceutical manufacturing, food safety, petroleum processing and environmental monitoring. It is used to measure contaminants in water, determine metal concentrations in ores, monitor chemical production and verify product specifications. Reliable analytical data supports regulatory compliance, process optimisation, public health protection and sustainable industrial development."
      }
    ]
  },
  "Industrial Chemistry": {
    title: "University-Level Industrial Chemistry",
    introduction: "Industrial chemistry applies chemical principles to the large-scale manufacture of useful products. It combines chemical reactions, process engineering, thermodynamics, kinetics, separation technology, quality control and industrial safety. It focuses on converting raw materials into valuable products efficiently, economically and sustainably.",
    objectives: [
      "Understand the principles and scope of industrial chemistry.",
      "Explain industrial process design and flow diagrams.",
      "Perform basic material and energy balance calculations.",
      "Understand industrial reactors and reaction engineering.",
      "Examine catalysts and industrial catalytic processes.",
      "Understand heat and mass transfer operations.",
      "Study industrial separation and purification methods.",
      "Explore major chemical manufacturing industries.",
      "Evaluate industrial safety, environmental protection and process optimisation."
    ],
    sections: [
      {
        heading: "1. Introduction to Industrial Chemistry",
        content: "Industrial chemistry studies the application of chemical science to large-scale manufacturing. It involves selecting raw materials, designing chemical processes, controlling reactions and producing materials that meet required specifications. Major sectors include petrochemicals, pharmaceuticals, fertilizers, polymers, cement, glass, food processing and water treatment. Industrial chemists aim to improve product quality, production efficiency, safety and environmental performance."
      },
      {
        heading: "2. Industrial Process Design and Development",
        content: "Industrial process design involves selecting suitable raw materials, reaction pathways, operating conditions and equipment for manufacturing. Process development commonly progresses from laboratory experiments to pilot-scale studies and eventually commercial production. Important considerations include reaction yield, selectivity, conversion, production capacity, equipment cost, energy consumption and safety. A successful process must be technically reliable and economically viable."
      },
      {
        heading: "3. Process Flow Diagrams",
        content: "Process flow diagrams represent the major equipment and material streams in an industrial production system. They show the movement of raw materials, intermediate products, utilities and final products through a process. Common equipment symbols represent reactors, pumps, heat exchangers, separators and storage vessels. More detailed piping and instrumentation diagrams show pipes, valves, instruments and control systems. These diagrams help engineers understand and operate complex processes."
      },
      {
        heading: "4. Material Balance Calculations",
        content: "Material balance is based on the conservation of mass. For a general process, Input + Generation - Output - Consumption = Accumulation. At steady state, accumulation is zero. For a non-reactive process without generation or consumption, total input equals total output. Material balances help determine raw material requirements, product quantities, waste generation and process losses. They are essential for process design and production monitoring."
      },
      {
        heading: "5. Energy Balance Calculations",
        content: "Energy balance applies the first law of thermodynamics to industrial processes. Energy entering a system, energy generated within it and energy leaving it determine the change in stored energy. Industrial energy balances account for heat, work, enthalpy changes and kinetic or potential energy where relevant. They are used to calculate heating and cooling requirements, evaluate energy efficiency and design thermal equipment."
      },
      {
        heading: "6. Industrial Chemical Reactors",
        content: "Chemical reactors provide controlled environments for industrial chemical reactions. Common reactor types include batch reactors, continuous stirred-tank reactors and plug-flow reactors. Batch reactors process a fixed quantity of material over a period of time. Continuous stirred-tank reactors maintain continuous feed and product flow with mixing. Plug-flow reactors allow reactants to move through a reactor with limited axial mixing. Reactor selection depends on reaction kinetics, heat transfer, production requirements and process conditions."
      },
      {
        heading: "7. Reaction Engineering and Process Performance",
        content: "Reaction engineering studies the relationship between chemical kinetics and reactor design. Important performance measures include conversion, selectivity, yield and space-time. Conversion measures the fraction of a reactant consumed. Selectivity compares the formation of a desired product with competing products, while yield measures the amount of desired product obtained relative to a defined theoretical or reactant basis. Temperature, pressure, concentration and residence time influence reactor performance."
      },
      {
        heading: "8. Industrial Catalysis",
        content: "Catalysts increase reaction rates by providing alternative reaction pathways with lower activation energies. They are not consumed overall in the reaction. Homogeneous catalysts operate in the same phase as reactants, while heterogeneous catalysts operate in a different phase. Important industrial examples include iron catalysts in ammonia synthesis, vanadium pentoxide in sulfuric acid production and catalytic systems in petroleum refining. Catalyst activity, selectivity, stability and resistance to poisoning are important considerations."
      },
      {
        heading: "9. Heat Transfer Operations",
        content: "Heat transfer is essential in industrial heating, cooling, evaporation, condensation and reaction control. The three main modes are conduction, convection and radiation. Heat exchangers transfer thermal energy between fluids without necessarily mixing them. Common equipment includes shell-and-tube and plate heat exchangers. Efficient heat transfer improves energy utilisation and helps maintain suitable operating temperatures."
      },
      {
        heading: "10. Mass Transfer Operations",
        content: "Mass transfer involves the movement of chemical species from one location or phase to another due to concentration differences or other driving forces. Industrial operations include absorption, stripping, extraction, distillation, drying and adsorption. Diffusion and convection contribute to mass transfer. Equipment design must consider flow patterns, interfacial area, equilibrium relationships and mass transfer coefficients."
      },
      {
        heading: "11. Industrial Separation and Purification",
        content: "Separation processes isolate desired components from mixtures or remove unwanted impurities. Distillation separates components according to differences in volatility. Filtration separates suspended solids from fluids. Crystallisation produces solid crystals from a solution or melt. Membrane processes separate substances through selective permeability. Extraction transfers components between phases, while adsorption uses the surface of a solid to capture selected substances. The choice depends on composition, product purity and operating cost."
      },
      {
        heading: "12. Petroleum Refining and Petrochemical Industries",
        content: "Petroleum refining converts crude oil into useful products through physical separation and chemical conversion. Fractional distillation separates crude oil into fractions according to boiling ranges. Conversion processes include catalytic cracking, hydrocracking, reforming and isomerisation. Petrochemical industries use petroleum and natural gas feedstocks to produce chemicals such as ethylene, propylene, benzene and other valuable intermediates used in plastics, solvents and synthetic materials."
      },
      {
        heading: "13. Fertilizer and Inorganic Chemical Manufacturing",
        content: "Industrial chemical manufacturing produces essential substances used in agriculture and other sectors. The Haber-Bosch process synthesises ammonia from nitrogen and hydrogen under elevated pressure and temperature using an iron-based catalyst. The Contact process produces sulfuric acid through catalytic oxidation of sulfur dioxide to sulfur trioxide. Fertilizer production uses ammonia, phosphates and potassium compounds to supply essential plant nutrients. Production efficiency and emissions control are major considerations."
      },
      {
        heading: "14. Polymer and Materials Manufacturing",
        content: "Industrial polymer production involves converting monomers into long-chain macromolecules through polymerisation. Addition polymerisation commonly involves unsaturated monomers, while condensation polymerisation involves reactions that may eliminate small molecules. Important industrial polymers include polyethylene, polypropylene, polyvinyl chloride and polyethylene terephthalate. Manufacturing methods influence molecular weight, structure, mechanical properties and product performance. Processing operations include extrusion, injection moulding and blow moulding."
      },
      {
        heading: "15. Industrial Quality Control and Process Monitoring",
        content: "Industrial quality control ensures that raw materials, intermediate products and finished products meet defined specifications. Analytical techniques are used to monitor composition, purity, moisture content, viscosity, density and other properties. Process monitoring uses sensors and instruments to measure variables such as temperature, pressure, flow rate and concentration. Statistical process control helps identify variations and maintain consistent production quality."
      },
      {
        heading: "16. Industrial Safety and Risk Management",
        content: "Industrial chemical operations may involve toxic, corrosive, flammable or reactive substances. Safety management identifies hazards, evaluates risks and establishes suitable control measures. Important practices include proper chemical storage, personal protective equipment, ventilation, emergency procedures, equipment inspection and process safety management. Hazard and operability studies and other risk assessment methods help identify potential process failures before accidents occur."
      },
      {
        heading: "17. Industrial Pollution Control and Waste Management",
        content: "Industrial production can generate gaseous emissions, wastewater and solid waste. Pollution control methods include gas scrubbing, filtration, wastewater treatment, adsorption and recovery of valuable materials. Wastewater treatment may involve physical, chemical and biological processes. Industrial waste management prioritises waste prevention, reduction, reuse, recycling and responsible disposal. Environmental monitoring helps industries comply with applicable standards."
      },
      {
        heading: "18. Process Optimisation and Sustainable Manufacturing",
        content: "Process optimisation improves industrial performance by balancing production rate, product quality, energy consumption, operating cost and environmental impact. Techniques include heat integration, process control, catalyst improvement, equipment modification and recovery of waste materials. Sustainable manufacturing also considers resource efficiency, safer chemicals, renewable feedstocks and circular economy principles. Industrial chemists contribute by designing processes that deliver useful products with reduced environmental burdens."
      }
    ]
  },

  "Polymer Chemistry": {
    title: "University-Level Polymer Chemistry",
    introduction: "Polymer chemistry studies the synthesis, structure, properties, processing and applications of macromolecules. Polymers are large molecules formed from repeating structural units called monomers. They are essential materials in packaging, construction, textiles, electronics, medicine and automotive manufacturing. Understanding polymer chemistry helps explain how molecular structure influences material performance, processing behaviour and recyclability.",
    objectives: [
      "Understand polymer fundamentals and classification.",
      "Distinguish natural and synthetic polymers.",
      "Explain chain-growth and step-growth polymerisation.",
      "Understand polymer molecular weight and distribution.",
      "Relate polymer structure to physical and mechanical properties.",
      "Compare thermoplastics, thermosets and elastomers.",
      "Explore polymer characterisation techniques.",
      "Understand industrial polymer processing methods.",
      "Examine polymer degradation, recycling and sustainability."
    ],
    sections: [
      {
        heading: "1. Introduction to Polymer Chemistry",
        content: "Polymers are macromolecules composed of repeating structural units linked through covalent bonds. The smaller molecules from which polymers are formed are called monomers. Polymers may contain thousands or millions of atoms depending on their molecular weight and structure. Examples include polyethylene, polypropylene, polyvinyl chloride, polyethylene terephthalate, cellulose and proteins. Their wide range of properties makes them important in modern materials science."
      },
      {
        heading: "2. Classification of Polymers",
        content: "Polymers can be classified according to their origin, structure, polymerisation mechanism and thermal behaviour. Natural polymers include cellulose, starch, proteins and natural rubber. Synthetic polymers include polyethylene, polypropylene and nylon. Based on chain architecture, polymers may be linear, branched or cross-linked. Their classification helps predict their physical properties, processing behaviour and industrial applications."
      },
      {
        heading: "3. Polymerisation Fundamentals",
        content: "Polymerisation is the chemical process through which monomers combine to form polymer chains or networks. The reaction may involve opening carbon-carbon double bonds, reacting functional groups or forming new covalent bonds through condensation reactions. Polymerisation conditions influence molecular weight, chain architecture, reaction rate and final material properties. Important variables include temperature, pressure, catalyst concentration, monomer purity and reaction time."
      },
      {
        heading: "4. Chain-Growth Polymerisation",
        content: "Chain-growth polymerisation involves the successive addition of monomer molecules to an active growing chain. It commonly proceeds through initiation, propagation and termination steps. Free-radical polymerisation is a major example, involving radical species that initiate chain growth. Other mechanisms include cationic, anionic and coordination polymerisation. Polyethylene and polystyrene are examples of polymers produced through chain-growth mechanisms."
      },
      {
        heading: "5. Step-Growth Polymerisation",
        content: "Step-growth polymerisation occurs through reactions between functional groups on monomers, oligomers and growing polymer chains. High molecular weights generally develop at high monomer conversion. Condensation polymerisation is a common form of step-growth polymerisation and may release small molecules such as water or methanol. Polyesters, polyamides and polycarbonates can be produced through step-growth processes."
      },
      {
        heading: "6. Copolymerisation",
        content: "Copolymerisation involves combining two or more different monomers to produce a copolymer. Common arrangements include random, alternating, block and graft copolymers. By controlling monomer composition and sequence, manufacturers can modify flexibility, strength, chemical resistance and thermal properties. Styrene-butadiene rubber is an important industrial copolymer used in tyres and other rubber products."
      },
      {
        heading: "7. Polymer Molecular Weight",
        content: "Polymer samples normally contain chains with different molecular weights. Number-average molecular weight (Mn) is calculated by considering the number of polymer molecules, while weight-average molecular weight (Mw) gives greater importance to heavier chains. The polydispersity index is defined as Mw/Mn. A value close to 1 indicates a narrow molecular weight distribution, while larger values indicate broader distributions. Molecular weight strongly influences viscosity, mechanical strength and processing behaviour."
      },
      {
        heading: "8. Polymer Chain Structure and Configuration",
        content: "Polymer chains may possess different structural arrangements depending on monomer connectivity and stereochemistry. Tacticity describes the relative arrangement of pendant groups along a polymer backbone. Isotactic polymers have regularly arranged substituents on the same side, syndiotactic polymers have alternating arrangements and atactic polymers have irregular arrangements. Chain branching and cross-linking also influence crystallinity, flexibility, density and mechanical performance."
      },
      {
        heading: "9. Polymer Crystallinity and Morphology",
        content: "Many polymers contain both ordered crystalline regions and disordered amorphous regions. Such materials are described as semi-crystalline polymers. Crystallinity influences density, stiffness, melting behaviour, chemical resistance and transparency. Factors affecting crystallinity include chain regularity, branching, molecular weight, cooling rate and processing conditions. Amorphous polymers generally soften over a temperature range associated with their glass transition rather than having a sharp melting point."
      },
      {
        heading: "10. Thermal Properties of Polymers",
        content: "The glass transition temperature (Tg) marks the temperature range over which amorphous regions of a polymer change from a rigid glassy state to a more flexible rubbery state. The melting temperature (Tm) represents the melting of crystalline regions in semi-crystalline polymers. These temperatures influence material selection and processing conditions. Molecular structure, intermolecular forces, molecular weight and plasticisers can affect thermal behaviour."
      },
      {
        heading: "11. Mechanical Properties of Polymers",
        content: "Polymer mechanical properties include tensile strength, elastic modulus, elongation at break, toughness, hardness and impact resistance. These properties depend on molecular weight, crystallinity, chain orientation, cross-linking and temperature. Stress-strain curves provide information about how a polymer responds to applied forces. Polymer design and processing aim to achieve suitable mechanical performance for the intended application."
      },
      {
        heading: "12. Thermoplastics, Thermosets and Elastomers",
        content: "Thermoplastics soften when heated and can generally be reshaped through repeated heating and cooling. Examples include polyethylene, polypropylene and PET. Thermosetting polymers form permanent cross-linked networks and cannot be remelted into their original shape. Examples include epoxy resins and phenolic resins. Elastomers are polymers capable of undergoing substantial reversible deformation, with natural rubber and synthetic rubbers serving as common examples."
      },
      {
        heading: "13. Polymer Characterisation Techniques",
        content: "Polymer characterisation determines chemical structure, molecular weight, thermal behaviour and physical properties. Fourier-transform infrared spectroscopy identifies characteristic chemical bonds and functional groups. Nuclear magnetic resonance spectroscopy provides information about molecular structure. Gel permeation chromatography estimates molecular weight distribution. Differential scanning calorimetry examines thermal transitions, while thermogravimetric analysis measures mass changes during controlled heating. Scanning electron microscopy examines surface morphology."
      },
      {
        heading: "14. Industrial Polymer Processing",
        content: "Polymer processing converts raw polymer materials into useful products. Extrusion forces molten polymer through a shaped opening to produce continuous products such as pipes and films. Injection moulding fills a mould cavity with molten polymer to produce shaped components. Blow moulding produces hollow products such as bottles. Compression moulding and thermoforming are also widely used. Processing conditions influence product dimensions, surface quality and mechanical performance."
      },
      {
        heading: "15. Polymer Degradation",
        content: "Polymer degradation involves changes in molecular structure and properties due to environmental or chemical influences. Thermal degradation occurs at elevated temperatures, while photodegradation results from exposure to light, particularly ultraviolet radiation. Oxidative degradation involves reactions with oxygen, while hydrolysis breaks susceptible chemical bonds through reaction with water. Degradation may reduce molecular weight, strength and durability. Stabilising additives help improve resistance to degradation."
      },
      {
        heading: "16. Polymer Recycling and Waste Management",
        content: "Polymer recycling aims to recover useful materials from plastic waste. Mechanical recycling involves sorting, washing, shredding, melting and reprocessing suitable plastics. Chemical recycling converts polymer waste into monomers, feedstocks or other chemical products through processes such as depolymerisation and pyrolysis. Energy recovery is another waste management option but does not produce recycled polymer material. Effective recycling depends on polymer identification, contamination control, collection systems and material quality."
      },
      {
        heading: "17. PET Chemistry and Industrial Applications",
        content: "Polyethylene terephthalate (PET) is a polyester produced through reactions involving terephthalic acid or dimethyl terephthalate and ethylene glycol. It is widely used in beverage bottles, food packaging, fibres and textile applications. PET has useful mechanical strength, transparency and barrier properties. Recycling involves collection, sorting, crushing, washing, drying and processing into flakes or pellets. Chemical recycling can recover chemical building blocks through suitable depolymerisation methods."
      },
      {
        heading: "18. Sustainable Polymers and Future Developments",
        content: "Sustainable polymer chemistry focuses on reducing environmental impact through improved material design, renewable feedstocks, safer production and effective end-of-life management. Biodegradable polymers such as polylactic acid have applications where suitable degradation conditions exist. Bio-based polymers are produced partly or wholly from renewable biological resources, although bio-based does not automatically mean biodegradable. Current research explores recyclable polymer architectures, chemical recycling, advanced catalysts and materials designed for circular production systems."
      }
    ]
  },

  "Research Methods in Chemistry": {
    title: "University-Level Research Methods in Chemistry",
    introduction: "Research methods in chemistry involve the systematic investigation of chemical problems through observation, experimentation, data collection and scientific analysis. They provide the foundation for developing scientific knowledge, testing hypotheses, evaluating chemical processes and communicating research findings. Effective research requires sound experimental design, reliable measurements, ethical conduct and critical interpretation of evidence.",
    objectives: [
      "Understand the fundamentals of scientific research.",
      "Develop research questions and testable hypotheses.",
      "Conduct literature reviews using reliable scientific sources.",
      "Understand experimental design and research methodology.",
      "Identify independent, dependent and controlled variables.",
      "Apply appropriate methods of data collection and analysis.",
      "Interpret experimental results using statistical methods.",
      "Understand research ethics and laboratory safety.",
      "Prepare scientific reports and communicate research findings."
    ],
    sections: [
      {
        heading: "1. Introduction to Scientific Research",
        content: "Scientific research is a systematic investigation designed to generate, verify or expand knowledge. In chemistry, research may involve studying chemical reactions, developing new materials, analysing substances or improving industrial processes. Research follows organised procedures involving problem identification, background investigation, experimental work, data analysis and interpretation. Scientific conclusions should be supported by reliable evidence rather than assumptions."
      },
      {
        heading: "2. Types of Chemical Research",
        content: "Chemical research can be classified into fundamental, applied and developmental research. Fundamental research expands scientific understanding without necessarily targeting an immediate practical application. Applied research addresses specific practical problems, while developmental research focuses on improving products, processes or technologies. Other approaches include experimental, observational, computational and theoretical research. The choice depends on the research problem and intended outcome."
      },
      {
        heading: "3. Identification of Research Problems",
        content: "A research problem identifies a specific issue or knowledge gap that requires investigation. Problems may emerge from existing scientific literature, industrial challenges, laboratory observations or unresolved theoretical questions. A good research problem should be clear, relevant, manageable and capable of investigation using suitable methods. Defining the problem carefully helps establish the direction and scope of a research project."
      },
      {
        heading: "4. Research Questions and Objectives",
        content: "Research questions translate a research problem into specific questions that an investigation seeks to answer. Research objectives describe the measurable activities required to achieve the overall research aim. Objectives commonly begin with action verbs such as determine, investigate, evaluate, compare and analyse. Well-defined objectives guide experimental design, data collection and the interpretation of findings."
      },
      {
        heading: "5. Hypothesis Development",
        content: "A hypothesis is a testable proposed explanation or prediction about a scientific problem. A research hypothesis commonly predicts a relationship or difference between variables. The null hypothesis (H0) generally states that there is no significant effect or difference, while the alternative hypothesis (H1) proposes that an effect or difference exists. Hypotheses should be testable through appropriate experiments or statistical analysis."
      },
      {
        heading: "6. Literature Review and Scientific Sources",
        content: "A literature review examines previously published research relevant to a research problem. It helps identify established knowledge, research gaps, suitable methods and areas of disagreement. Reliable sources include peer-reviewed journal articles, scientific books, conference publications and recognised technical reports. Researchers should evaluate source quality, publication dates, methodology and relevance. A good literature review synthesises findings rather than merely listing publications."
      },
      {
        heading: "7. Research Methodology and Experimental Design",
        content: "Research methodology describes the systematic procedures used to conduct an investigation. Experimental design establishes how variables, treatments, measurements and controls will be organised. A well-designed experiment should address the research objectives while minimising bias and unnecessary variation. Factors such as sample size, replication, randomisation, equipment availability and experimental conditions should be considered before beginning laboratory work."
      },
      {
        heading: "8. Variables and Experimental Controls",
        content: "An independent variable is the factor deliberately changed by the researcher. A dependent variable is the measured outcome that may respond to that change. Controlled variables are factors maintained consistently to minimise their influence on the results. For example, when investigating how temperature affects reaction rate, temperature is the independent variable, reaction rate is the dependent variable and other relevant conditions should be controlled."
      },
      {
        heading: "9. Laboratory Procedures and Data Collection",
        content: "Laboratory data collection involves obtaining observations and measurements using appropriate instruments and procedures. Primary data are collected directly by the researcher, while secondary data are obtained from existing sources. Experimental records should include sample identification, equipment used, chemical quantities, operating conditions, observations and measurement results. Proper documentation supports reproducibility, traceability and accurate interpretation."
      },
      {
        heading: "10. Measurement Quality and Experimental Reliability",
        content: "Reliable research depends on accurate measurements and suitable experimental procedures. Calibration helps establish the relationship between instrument readings and reference standards. Replicate measurements help evaluate precision and identify unexpected variations. Accuracy, precision, sensitivity, detection limits and measurement uncertainty should be considered when selecting analytical methods. Instrument maintenance and standard operating procedures help improve data quality."
      },
      {
        heading: "11. Data Processing and Statistical Analysis",
        content: "Research data must be organised and analysed to identify meaningful patterns and relationships. Descriptive statistics include the mean, median, range, variance and standard deviation. Inferential statistics help researchers evaluate hypotheses and draw conclusions about populations using sample data. Statistical methods should be selected according to the research design, data type and assumptions. Graphs and tables can help communicate trends and comparisons clearly."
      },
      {
        heading: "12. Interpretation and Discussion of Results",
        content: "Interpretation involves explaining what experimental findings mean in relation to the research objectives and existing scientific knowledge. Researchers should distinguish observed results from possible explanations. Results may support or fail to support a hypothesis, but they should not be manipulated to fit expectations. A strong discussion considers experimental limitations, possible sources of error, comparison with previous studies and the significance of the findings."
      },
      {
        heading: "13. Research Ethics and Academic Integrity",
        content: "Research ethics promotes honesty, responsibility and transparency throughout scientific investigation. Researchers must avoid fabrication, falsification and plagiarism. Data should be recorded and reported accurately, including unexpected findings. Proper acknowledgement of other researchers' contributions is essential. Ethical research also involves responsible chemical handling, appropriate waste disposal and compliance with institutional and regulatory requirements."
      },
      {
        heading: "14. Laboratory Safety and Risk Assessment",
        content: "Laboratory research involves potential hazards from chemicals, equipment, heat, pressure and biological materials. Risk assessment identifies hazards, evaluates possible consequences and determines suitable control measures. Safety practices include using appropriate personal protective equipment, consulting safety data sheets, ensuring adequate ventilation and following established procedures. Emergency arrangements and proper waste management should be established before experiments begin."
      },
      {
        heading: "15. Scientific Writing and Research Reports",
        content: "Scientific writing communicates research findings in a clear, precise and structured manner. A typical research report includes a title, abstract, introduction, literature review, methodology, results, discussion, conclusion and references. The methodology should provide enough information for another researcher to understand and potentially reproduce the work. Results should be presented accurately using appropriate tables, figures, units and statistical information."
      },
      {
        heading: "16. Referencing and Citation",
        content: "Referencing acknowledges the sources of information, methods and ideas used in scientific work. Common referencing systems include APA, Harvard and Vancouver, although institutional requirements may differ. In-text citations connect statements to their original sources, while the reference list provides full publication details. Consistent referencing supports academic integrity and allows readers to verify scientific claims."
      },
      {
        heading: "17. Scientific Presentation and Publication",
        content: "Research findings may be communicated through dissertations, journal articles, conference presentations, posters and technical reports. Effective scientific presentations organise information logically and use clear figures, tables and diagrams. Manuscripts submitted to scientific journals may undergo peer review, in which experts evaluate the quality, originality and validity of the work. Researchers should communicate limitations and avoid overstating conclusions."
      },
      {
        heading: "18. Reproducibility and Future Research",
        content: "Reproducibility refers to obtaining consistent results when an investigation is repeated using the same data, methods and analysis procedures. Replication involves conducting additional experiments to examine whether findings remain consistent under repeated or comparable conditions. Detailed documentation, transparent reporting and appropriate data management support reproducible research. Unanswered questions and limitations often provide opportunities for future investigations and scientific development."
      }
    ]
  },

};


// ==================================
// CHEMISTRY QUIZZES
// ==================================


const chemistryQuizzes = {
  "Introduction to Chemistry": [
    {
      question: "What is chemistry?",
      options: [
        "The study of living organisms",
        "The study of matter and the changes it undergoes",
        "The study of planets and stars",
        "The study of Earth's surface"
      ],
      answer: 1,
      explanation: "Chemistry is the scientific study of matter, including its composition, structure, properties and the changes it undergoes."
    },
    {
      question: "Which branch of chemistry studies carbon-containing compounds?",
      options: [
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Organic Chemistry",
        "Analytical Chemistry"
      ],
      answer: 2,
      explanation: "Organic chemistry focuses on the study of carbon-containing compounds, which are the basis of life and many synthetic materials."
    },
    {
      question: "Which branch identifies and measures substances?",
      options: [
        "Analytical Chemistry",
        "Biochemistry",
        "Organic Chemistry",
        "Physical Chemistry"
      ],
      answer: 0,
      explanation: "Analytical chemistry focuses on identifying substances and determining their composition or quantity."
    },
    {
      question: "Which branch studies chemical processes in living organisms?",
      options: [
        "Industrial Chemistry",
        "Biochemistry",
        "Inorganic Chemistry",
        "Physical Chemistry"
      ],
      answer: 1,
      explanation: "Biochemistry studies the chemical substances and processes that occur in living organisms."
    },
    {
      question: "Which of these is an application of chemistry?",
      options: [
        "Medicine",
        "Agriculture",
        "Food production",
        "All of the above"
      ],
      answer: 3,
      explanation: "Chemistry has practical applications in medicine, agriculture and food production, among many other fields."
    }
  ],

  "Matter and Its Classification": [
    {
      question: "What is matter?",
      options: [
        "Anything that produces light",
        "Anything that has mass and occupies space",
        "Anything that can move",
        "Anything that has colour"
      ],
      answer: 1,
      explanation:
        "Matter is anything that has mass and occupies space. Examples include air, water, stones and living organisms."
    },
    {
      question: "Which of these is NOT one of the three common states of matter?",
      options: [
        "Solid",
        "Liquid",
        "Gas",
        "Energy"
      ],
      answer: 3,
      explanation:
        "The three common states of matter are solid, liquid and gas. Energy is not a state of matter."
    },
    {
      question: "Which statement correctly describes a liquid?",
      options: [
        "It has a definite shape and volume",
        "It has neither a definite shape nor volume",
        "It has a definite volume but takes the shape of its container",
        "It cannot flow"
      ],
      answer: 2,
      explanation:
        "A liquid has a definite volume but no definite shape. It takes the shape of its container."
    },
    {
      question: "Which of these is an element?",
      options: [
        "Water",
        "Oxygen",
        "Salt water",
        "Air"
      ],
      answer: 1,
      explanation:
        "Oxygen is an element because it consists of only one type of atom."
    },
    {
      question: "Which of these is a mixture?",
      options: [
        "Pure water",
        "Iron",
        "Air",
        "Pure oxygen"
      ],
      answer: 2,
      explanation:
        "Air is a mixture of gases, mainly nitrogen and oxygen, together with smaller quantities of other gases."
    }
  ],
  "Elements, Compounds and Mixtures": [
    {
      question: "What is an element?",
      options: [
        "A substance made of different atoms chemically combined",
        "A pure substance containing only one type of atom",
        "A physical combination of substances",
        "A substance that can be separated by filtration"
      ],
      answer: 1,
      explanation:
        "An element is a pure substance consisting of only one type of atom. Examples include iron, oxygen and copper."
    },
    {
      question: "How are the elements in a compound combined?",
      options: [
        "Physically in any proportion",
        "Chemically in a fixed proportion",
        "Without any chemical interaction",
        "Only through filtration"
      ],
      answer: 1,
      explanation:
        "A compound forms when two or more different elements combine chemically in a fixed proportion."
    },
    {
      question: "Which of these is a homogeneous mixture?",
      options: [
        "Sand and water",
        "Oil and water",
        "Salt dissolved in water",
        "Iron filings and sulphur"
      ],
      answer: 2,
      explanation:
        "Salt dissolved in water forms a homogeneous mixture because its composition is uniform throughout, provided the salt has completely dissolved."
    },
    {
      question: "Which statement correctly describes a mixture?",
      options: [
        "Its components are always chemically combined",
        "Its components must exist in fixed proportions",
        "Its components retain their individual chemical properties",
        "It always contains only two substances"
      ],
      answer: 2,
      explanation:
        "The components of a mixture are physically combined and generally retain their individual chemical properties."
    },
    {
      question: "Which method can be used to separate sand from water?",
      options: [
        "Filtration",
        "Chemical decomposition",
        "Electrolysis",
        "Combustion"
      ],
      answer: 0,
      explanation:
        "Filtration separates insoluble sand from water. Sand remains on the filter paper as residue while water passes through as filtrate."
    }
  ],

  "Physical and Chemical Changes": [
    {
      question: "What happens during a physical change?",
      options: [
        "A new substance is always formed",
        "The chemical composition changes",
        "The physical properties change without forming a new substance",
        "The substance is completely destroyed"
      ],
      answer: 2,
      explanation:
        "A physical change affects properties such as shape, size or state without producing a new substance."
    },
    {
      question: "Which of the following is a chemical change?",
      options: [
        "Melting ice",
        "Cutting paper",
        "Dissolving sugar in water",
        "Rusting of iron"
      ],
      answer: 3,
      explanation:
        "Rusting is a chemical change because iron reacts with oxygen and moisture to form iron oxides, which are new substances."
    },
    {
      question: "Which of these is a possible sign of a chemical reaction?",
      options: [
        "Change in shape only",
        "Formation of a precipitate",
        "Breaking a solid into smaller pieces",
        "Change in size only"
      ],
      answer: 1,
      explanation:
        "The formation of a precipitate can indicate a chemical reaction because a new insoluble substance may have formed."
    },
    {
      question: "Which of these is an example of a reversible physical change?",
      options: [
        "Burning wood",
        "Rusting iron",
        "Melting and freezing water",
        "Cooking an egg"
      ],
      answer: 2,
      explanation:
        "Water can change from ice to liquid and back to ice through melting and freezing without forming a new substance."
    },
    {
      question: "Why is burning paper considered a chemical change?",
      options: [
        "It only changes the shape of paper",
        "It produces new substances such as ash and gases",
        "It can easily be reversed",
        "It only changes the size of paper"
      ],
      answer: 1,
      explanation:
        "Burning paper is a chemical change because combustion produces new substances, including ash and gases."
    }
  ],

  "Atomic Structure": [
    {
      question: "What is an atom?",
      options: [
        "The smallest unit of an element that retains its chemical identity",
        "A mixture of different elements",
        "A particle containing only neutrons",
        "A substance made up of several compounds"
      ],
      answer: 0,
      explanation:
        "An atom is the smallest unit of an element that retains the chemical identity of that element."
    },
    {
      question: "Which subatomic particle has a positive electrical charge?",
      options: [
        "Electron",
        "Neutron",
        "Proton",
        "Molecule"
      ],
      answer: 2,
      explanation:
        "A proton carries a positive electrical charge and is located in the nucleus of an atom."
    },
    {
      question: "What does the atomic number of an element represent?",
      options: [
        "The number of neutrons",
        "The number of protons",
        "The total number of protons and neutrons",
        "The number of electron shells"
      ],
      answer: 1,
      explanation:
        "The atomic number is the number of protons in the nucleus. It determines the identity of an element."
    },
    {
      question: "An atom contains 11 protons and 12 neutrons. What is its mass number?",
      options: [
        "11",
        "12",
        "23",
        "24"
      ],
      answer: 2,
      explanation:
        "Mass number is the sum of protons and neutrons. Therefore, 11 + 12 = 23."
    },
    {
      question: "What makes isotopes of the same element different?",
      options: [
        "They have different numbers of protons",
        "They have different numbers of neutrons",
        "They always have different atomic numbers",
        "They contain different elements"
      ],
      answer: 1,
      explanation:
        "Isotopes have the same number of protons but different numbers of neutrons."
    }
  ],

  "The Periodic Table": [
    {
      question: "How are elements arranged in the modern periodic table?",
      options: [
        "In alphabetical order",
        "According to increasing atomic number",
        "According to decreasing atomic mass",
        "According to their physical states"
      ],
      answer: 1,
      explanation:
        "The modern periodic table arranges elements in order of increasing atomic number, which is the number of protons in their atoms."
    },
    {
      question: "How many groups are in the modern periodic table?",
      options: [
        "7",
        "8",
        "18",
        "20"
      ],
      answer: 2,
      explanation:
        "The modern periodic table contains 18 vertical columns called groups."
    },
    {
      question: "Which of these is a metalloid?",
      options: [
        "Sodium",
        "Oxygen",
        "Silicon",
        "Iron"
      ],
      answer: 2,
      explanation:
        "Silicon is a metalloid because it has properties intermediate between metals and non-metals."
    },
    {
      question: "What generally happens to atomic radius across a period from left to right?",
      options: [
        "It increases",
        "It decreases",
        "It remains constant",
        "It becomes zero"
      ],
      answer: 1,
      explanation:
        "Atomic radius generally decreases across a period because the increasing nuclear charge attracts electrons more strongly while they are added to the same main energy level."
    },
    {
      question: "Why is the periodic table important in chemistry?",
      options: [
        "It helps classify elements and predict their properties",
        "It contains only metallic elements",
        "It shows the physical state of every compound",
        "It replaces the need for chemical experiments"
      ],
      answer: 0,
      explanation:
        "The periodic table helps chemists organise elements, identify patterns and predict aspects of their chemical behaviour."
    }
  ],
  "Introduction to Chemical Bonding": [
    {
      question: "What is chemical bonding?",
      options: [
        "The process of separating atoms into smaller particles",
        "The attractive forces that hold atoms or ions together",
        "The movement of substances from one container to another",
        "The physical mixing of different elements"
      ],
      answer: 1,
      explanation:
        "Chemical bonding involves attractive forces that hold atoms or ions together to form substances."
    },
    {
      question: "What happens during ionic bonding?",
      options: [
        "Atoms share electron pairs",
        "Atoms exchange protons",
        "Electrons are transferred, forming oppositely charged ions",
        "Metal atoms lose their nuclei"
      ],
      answer: 2,
      explanation:
        "Ionic bonding commonly involves electron transfer, producing positively and negatively charged ions that attract one another."
    },
    {
      question: "Which type of bonding involves sharing electron pairs?",
      options: [
        "Ionic bonding",
        "Covalent bonding",
        "Metallic bonding",
        "Hydrogen bonding"
      ],
      answer: 1,
      explanation:
        "Covalent bonding occurs when atoms share one or more pairs of electrons."
    },
    {
      question: "What holds the particles together in metallic bonding?",
      options: [
        "Attraction between positive metal ions and delocalised electrons",
        "Attraction between positive and negative non-metal ions",
        "Sharing of electron pairs between separate molecules",
        "Transfer of neutrons between metal atoms"
      ],
      answer: 0,
      explanation:
        "Metallic bonding involves electrostatic attraction between positive metal ions and delocalised electrons."
    },
    {
      question: "Why do atoms form chemical bonds?",
      options: [
        "To increase their atomic numbers",
        "To eliminate all their electrons",
        "To achieve more stable, lower-energy arrangements",
        "To convert every element into a metal"
      ],
      answer: 2,
      explanation:
        "Bond formation can produce more stable arrangements with lower energy. The precise arrangement depends on the atoms and their interactions."
    }
  ],

  "Introduction to Chemical Reactions": [
    {
      question: "What are reactants in a chemical reaction?",
      options: [
        "The substances formed after a reaction",
        "The starting substances that participate in a reaction",
        "The substances used only as catalysts",
        "The gases released during every reaction"
      ],
      answer: 1,
      explanation:
        "Reactants are the starting substances that participate in a chemical reaction and are converted into products."
    },
    {
      question: "In the equation 2H₂ + O₂ → 2H₂O, what is the product?",
      options: [
        "Hydrogen",
        "Oxygen",
        "Water",
        "Hydrogen peroxide"
      ],
      answer: 2,
      explanation:
        "Water (H₂O) is the product because it appears on the right-hand side of the chemical equation."
    },
    {
      question: "What does a balanced chemical equation demonstrate?",
      options: [
        "The reactants have greater mass than the products",
        "The number of atoms of each element is equal on both sides",
        "All reactants have the same physical state",
        "The reaction occurs at room temperature"
      ],
      answer: 1,
      explanation:
        "A balanced equation has equal numbers of atoms of each element on both sides, consistent with conservation of mass."
    },
    {
      question: "Which law states that mass is conserved during an ordinary chemical reaction?",
      options: [
        "Law of Conservation of Energy",
        "Law of Definite Proportions",
        "Law of Conservation of Mass",
        "Law of Multiple Proportions"
      ],
      answer: 2,
      explanation:
        "The law of conservation of mass states that mass is conserved during an ordinary chemical reaction in a closed system."
    },
    {
      question: "What type of reaction occurs when two or more substances combine to form one product?",
      options: [
        "Decomposition",
        "Synthesis",
        "Single replacement",
        "Double replacement"
      ],
      answer: 1,
      explanation:
        "A synthesis reaction occurs when two or more reactants combine to form a single product."
    }
  ],

  "Chemical Bonding": [
    {
      question: "What is the main force responsible for holding oppositely charged ions together in an ionic compound?",
      options: [
        "Sharing of electron pairs",
        "Electrostatic attraction",
        "Delocalisation of electrons",
        "Hydrogen bonding"
      ],
      answer: 1,
      explanation: "Ionic compounds are held together by electrostatic attraction between oppositely charged ions."
    },
    {
      question: "How many pairs of electrons are shared in a double covalent bond?",
      options: [
        "One pair",
        "Three pairs",
        "Two pairs",
        "Four pairs"
      ],
      answer: 2,
      explanation: "A double covalent bond contains two shared pairs of electrons between two atoms."
    },
    {
      question: "What causes a polar covalent bond to form?",
      options: [
        "Unequal sharing of bonding electrons",
        "Complete transfer of bonding electrons",
        "Equal sharing of bonding electrons",
        "Delocalisation of all valence electrons"
      ],
      answer: 0,
      explanation: "A polar covalent bond forms when bonded atoms attract shared electrons unequally due to a difference in electronegativity."
    },
    {
      question: "Which statement best describes metallic bonding?",
      options: [
        "Attraction between oppositely charged non-metal ions",
        "Sharing of electron pairs between two non-metals",
        "Attraction between neutral molecules",
        "Attraction between positive metal centres and delocalised electrons"
      ],
      answer: 3,
      explanation: "Metallic bonding involves electrostatic attraction between positive metal centres and delocalised valence electrons."
    },
    {
      question: "Why does water have a relatively high boiling point compared with hydrogen sulfide?",
      options: [
        "Water contains metallic bonds",
        "Water molecules form hydrogen bonds",
        "Water has ionic bonding between its molecules",
        "Water contains triple covalent bonds"
      ],
      answer: 1,
      explanation: "Water molecules form hydrogen bonds because hydrogen is bonded to highly electronegative oxygen. These intermolecular attractions require considerable energy to overcome."
    }
  ],

  "Chemical Formulae and Equations": [
    {
      question: "What is the correct chemical formula for aluminium oxide? (Al³⁺ and O²⁻)",
      options: [
        "AlO",
        "Al₂O₃",
        "Al₃O₂",
        "AlO₂"
      ],
      answer: 1,
      explanation: "Two Al³⁺ ions provide a total charge of +6 while three O²⁻ ions provide -6. The charges balance to give Al₂O₃."
    },
    {
      question: "What is the empirical formula of glucose, C₆H₁₂O₆?",
      options: [
        "C₂H₄O₂",
        "C₆H₁₂O₆",
        "CH₂O",
        "C₃H₆O₃"
      ],
      answer: 2,
      explanation: "The subscripts 6, 12 and 6 are divided by their highest common factor, 6, giving the simplest ratio CH₂O."
    },
    {
      question: "Which coefficients correctly balance this equation: Al + O₂ → Al₂O₃?",
      options: [
        "2, 3, 1",
        "4, 3, 2",
        "2, 1, 2",
        "4, 2, 3"
      ],
      answer: 1,
      explanation: "The balanced equation is 4Al + 3O₂ → 2Al₂O₃. Both sides contain four aluminium atoms and six oxygen atoms."
    },
    {
      question: "What does the state symbol (aq) represent in a chemical equation?",
      options: [
        "A substance in the solid state",
        "A substance in the gaseous state",
        "A substance in the liquid state",
        "A substance dissolved in water"
      ],
      answer: 3,
      explanation: "The symbol (aq) means aqueous. It indicates that the substance is dissolved in water."
    },
    {
      question: "What is the main role of a catalyst in a chemical reaction?",
      options: [
        "To increase activation energy",
        "To provide an alternative pathway with lower activation energy",
        "To increase the total amount of reactants",
        "To change the products into different substances"
      ],
      answer: 1,
      explanation: "A catalyst increases reaction rate by providing an alternative pathway with lower activation energy. It is not consumed overall."
    }
  ],

  "Mole Concept": [
    {
      question: "What is the number of specified elementary entities in exactly one mole of a substance?",
      options: [
        "6.022 × 10²²",
        "6.022 × 10²³",
        "6.022 × 10²⁴",
        "3.011 × 10²³"
      ],
      answer: 1,
      explanation: "One mole contains exactly 6.02214076 × 10²³ specified elementary entities. This value is the Avogadro constant."
    },
    {
      question: "What is the approximate molar mass of carbon dioxide (CO₂)? Use C = 12 and O = 16.",
      options: [
        "28 g/mol",
        "32 g/mol",
        "44 g/mol",
        "48 g/mol"
      ],
      answer: 2,
      explanation: "The molar mass of CO₂ is 12 + (2 × 16) = 44 g/mol."
    },
    {
      question: "Calculate the amount of substance in 36 g of water (H₂O). Take its molar mass as 18 g/mol.",
      options: [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "4 mol"
      ],
      answer: 2,
      explanation: "Using n = m/M, the amount is 36/18 = 2 mol."
    },
    {
      question: "How many molecules are present in 0.5 mol of oxygen molecules (O₂)?",
      options: [
        "6.022 × 10²³ molecules",
        "3.011 × 10²³ molecules",
        "1.2044 × 10²⁴ molecules",
        "3.011 × 10²² molecules"
      ],
      answer: 1,
      explanation: "The number of molecules is n × Avogadro constant = 0.5 × 6.022 × 10²³ = 3.011 × 10²³ molecules."
    },
    {
      question: "A solution contains 0.25 mol of solute in a final solution volume of 0.50 L. What is its molar concentration?",
      options: [
        "0.25 mol/L",
        "0.50 mol/L",
        "1.00 mol/L",
        "2.00 mol/L"
      ],
      answer: 1,
      explanation: "Molar concentration is amount of solute divided by solution volume: 0.25/0.50 = 0.50 mol/L."
    }
  ],
  "Stoichiometry": [
    {
      question: "In the balanced equation N₂ + 3H₂ → 2NH₃, what is the mole ratio of hydrogen to nitrogen?",
      options: [
        "1:3",
        "3:1",
        "2:1",
        "1:2"
      ],
      answer: 1,
      explanation: "The coefficients of H₂ and N₂ are 3 and 1 respectively. Therefore, the hydrogen-to-nitrogen mole ratio is 3:1."
    },
    {
      question: "According to 2H₂ + O₂ → 2H₂O, how many moles of water can theoretically form from 4 moles of hydrogen when oxygen is in excess?",
      options: [
        "2 moles",
        "3 moles",
        "4 moles",
        "8 moles"
      ],
      answer: 2,
      explanation: "The mole ratio of H₂ to H₂O is 2:2, or 1:1. Therefore, 4 moles of hydrogen produce 4 moles of water."
    },
    {
      question: "In the reaction 2H₂ + O₂ → 2H₂O, a mixture contains 5 moles of H₂ and 2 moles of O₂. Which reactant is limiting?",
      options: [
        "Hydrogen",
        "Oxygen",
        "Water",
        "Neither reactant"
      ],
      answer: 1,
      explanation: "Two moles of O₂ require 4 moles of H₂. Since 5 moles of H₂ are available, hydrogen is in excess and oxygen is the limiting reactant."
    },
    {
      question: "Magnesium reacts with oxygen according to 2Mg + O₂ → 2MgO. If 24 g of magnesium reacts completely with excess oxygen, what mass of MgO is theoretically produced? (Mg = 24, O = 16)",
      options: [
        "24 g",
        "32 g",
        "40 g",
        "48 g"
      ],
      answer: 2,
      explanation: "24 g of Mg represents 1 mole. The equation gives a 1:1 mole ratio of Mg to MgO. One mole of MgO has a molar mass of 24 + 16 = 40 g."
    },
    {
      question: "A chemical reaction has a theoretical yield of 20 g and an actual yield of 15 g. What is its percentage yield?",
      options: [
        "65%",
        "70%",
        "75%",
        "80%"
      ],
      answer: 2,
      explanation: "Percentage yield = (actual yield / theoretical yield) × 100 = (15/20) × 100 = 75%."
    }
  ],

  "Acids, Bases and Salts": [
    {
      question: "According to the Brønsted-Lowry theory, what is an acid?",
      options: [
        "A proton acceptor",
        "A proton donor",
        "An electron donor",
        "A hydroxide ion producer"
      ],
      answer: 1,
      explanation: "A Brønsted-Lowry acid is a proton (H⁺) donor, while a Brønsted-Lowry base is a proton acceptor."
    },
    {
      question: "Which statement correctly distinguishes a strong acid from a concentrated acid?",
      options: [
        "A strong acid always has a high concentration.",
        "A concentrated acid always ionises completely.",
        "Acid strength describes the extent of ionisation, while concentration describes the amount of acid per unit volume.",
        "Acid strength and concentration mean exactly the same thing."
      ],
      answer: 2,
      explanation: "Strength describes how extensively an acid ionises in water. Concentration describes how much acid is present per unit volume. A strong acid can be dilute and a weak acid can be concentrated."
    },
    {
      question: "At 25°C, what is the approximate pH of an aqueous solution with a hydrogen ion concentration of 1.0 × 10⁻⁴ mol/L?",
      options: [
        "2",
        "3",
        "4",
        "10"
      ],
      answer: 2,
      explanation: "Using pH = -log₁₀[H⁺], pH = -log₁₀(1.0 × 10⁻⁴) = 4."
    },
    {
      question: "Which set of products is formed when hydrochloric acid reacts with calcium carbonate?",
      options: [
        "Calcium chloride, water and carbon dioxide",
        "Calcium oxide, hydrogen and chlorine",
        "Calcium hydroxide and carbon monoxide",
        "Calcium chloride and hydrogen gas"
      ],
      answer: 0,
      explanation: "Hydrochloric acid reacts with calcium carbonate to form calcium chloride, water and carbon dioxide: 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂."
    },
    {
      question: "Which procedure is correct when diluting a concentrated acid?",
      options: [
        "Add water quickly to the concentrated acid.",
        "Mix the acid with any available solvent.",
        "Heat the acid before adding water.",
        "Add the acid slowly to water while stirring."
      ],
      answer: 3,
      explanation: "Always add concentrated acid slowly to water while stirring. The process releases heat, and adding water directly to concentrated acid can cause dangerous splashing."
    }
  ],

  "Gas Laws": [
    {
      question: "A gas occupies 4.0 L at a pressure of 2.0 atm. If its volume is reduced to 2.0 L at constant temperature, what is its final pressure?",
      options: [
        "1.0 atm",
        "2.0 atm",
        "4.0 atm",
        "8.0 atm"
      ],
      answer: 2,
      explanation: "According to Boyle's law, P₁V₁ = P₂V₂. Therefore, P₂ = (2.0 × 4.0) / 2.0 = 4.0 atm."
    },
    {
      question: "A gas occupies 2.0 L at 300 K. What volume will it occupy at 450 K if pressure remains constant?",
      options: [
        "1.0 L",
        "2.5 L",
        "3.0 L",
        "4.0 L"
      ],
      answer: 2,
      explanation: "Charles's law gives V₁/T₁ = V₂/T₂. Therefore, V₂ = (2.0 × 450) / 300 = 3.0 L."
    },
    {
      question: "A fixed amount of gas has a pressure of 100 kPa at 300 K. What will its pressure be at 600 K if its volume remains constant?",
      options: [
        "50 kPa",
        "100 kPa",
        "150 kPa",
        "200 kPa"
      ],
      answer: 3,
      explanation: "Using P₁/T₁ = P₂/T₂, P₂ = (100 × 600) / 300 = 200 kPa."
    },
    {
      question: "A gas mixture contains three non-reacting gases with partial pressures of 0.2 atm, 0.3 atm and 0.5 atm. What is the total pressure?",
      options: [
        "0.5 atm",
        "0.8 atm",
        "1.0 atm",
        "1.5 atm"
      ],
      answer: 2,
      explanation: "Dalton's law states that total pressure is the sum of the partial pressures. Therefore, 0.2 + 0.3 + 0.5 = 1.0 atm."
    },
    {
      question: "Which conditions generally cause a real gas to deviate more significantly from ideal gas behaviour?",
      options: [
        "Low pressure and high temperature",
        "High pressure and low temperature",
        "Low pressure and low temperature",
        "High pressure and high temperature"
      ],
      answer: 1,
      explanation: "At high pressure, the volume occupied by gas particles becomes significant. At low temperature, intermolecular attractions become more important. Both effects cause greater deviations from ideal behaviour."
    }
  ],

  "Chemical Energetics": [
    {
      question: "Which statement correctly describes an exothermic reaction?",
      options: [
        "It absorbs heat and has a positive enthalpy change.",
        "It releases heat and has a negative enthalpy change.",
        "It absorbs heat and has a negative enthalpy change.",
        "It releases heat and has a positive enthalpy change."
      ],
      answer: 1,
      explanation: "An exothermic reaction releases heat to its surroundings. The enthalpy of the system decreases, giving a negative enthalpy change."
    },
    {
      question: "A 100 g sample of water is heated from 25°C to 30°C. If its specific heat capacity is 4.18 J g⁻¹ °C⁻¹, how much heat does it absorb?",
      options: [
        "1,045 J",
        "2,090 J",
        "4,180 J",
        "8,360 J"
      ],
      answer: 1,
      explanation: "Using q = mcΔT: q = 100 × 4.18 × (30 − 25) = 2,090 J."
    },
    {
      question: "A reaction has an enthalpy change of −125 kJ. What is the enthalpy change when the reaction is reversed?",
      options: [
        "−250 kJ",
        "−125 kJ",
        "+125 kJ",
        "+250 kJ"
      ],
      answer: 2,
      explanation: "Reversing a thermochemical equation reverses the direction of energy transfer and changes the sign of its enthalpy change from −125 kJ to +125 kJ."
    },
    {
      question: "Which statement is correct about breaking chemical bonds?",
      options: [
        "It always releases energy.",
        "It requires energy to overcome the attraction between bonded atoms.",
        "It always produces a more stable compound.",
        "It has no effect on the energy of a chemical system."
      ],
      answer: 1,
      explanation: "Energy must be supplied to break a chemical bond. Bond formation releases energy."
    },
    {
      question: "What is the effect of a catalyst on the activation energy and enthalpy change of a reaction?",
      options: [
        "It increases both activation energy and enthalpy change.",
        "It decreases the enthalpy change but leaves activation energy unchanged.",
        "It decreases activation energy but does not change the overall enthalpy change.",
        "It changes the enthalpy change and equilibrium constant."
      ],
      answer: 2,
      explanation: "A catalyst provides an alternative reaction pathway with lower activation energy. It does not change the enthalpy difference between reactants and products or the equilibrium constant at a fixed temperature."
    }
  ],

  "Chemical Equilibrium": [
    {
      question: "What condition must be satisfied for a reversible reaction to reach dynamic equilibrium?",
      options: [
        "The concentrations of reactants and products must be equal.",
        "The forward and reverse reaction rates must be equal.",
        "The forward reaction must stop completely.",
        "All reactants must be converted into products."
      ],
      answer: 1,
      explanation: "Dynamic equilibrium occurs when the forward and reverse reaction rates are equal. Both reactions continue, while concentrations remain constant."
    },
    {
      question: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), which expression correctly represents Kc?",
      options: [
        "[N₂][H₂]³ / [NH₃]²",
        "[NH₃] / ([N₂][H₂])",
        "[NH₃]² / ([N₂][H₂]³)",
        "[NH₃]³ / ([N₂]²[H₂])"
      ],
      answer: 2,
      explanation: "Products appear in the numerator and reactants in the denominator. Each concentration is raised to the power of its coefficient in the balanced equation."
    },
    {
      question: "For an exothermic forward reaction at equilibrium, what happens when the temperature is increased?",
      options: [
        "Equilibrium shifts towards the products.",
        "Equilibrium shifts towards the reactants.",
        "The equilibrium constant always becomes zero.",
        "The catalyst causes the reaction to stop."
      ],
      answer: 1,
      explanation: "Increasing temperature favours the endothermic direction. For an exothermic forward reaction, this means the equilibrium shifts towards the reactants and Kc decreases."
    },
    {
      question: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what happens when pressure is increased by decreasing the volume at constant temperature?",
      options: [
        "Equilibrium shifts towards ammonia.",
        "Equilibrium shifts towards nitrogen and hydrogen.",
        "The equilibrium position remains unchanged.",
        "The forward and reverse reactions both stop."
      ],
      answer: 0,
      explanation: "The reactant side has four moles of gaseous particles while the product side has two. Increasing pressure favours the side with fewer gaseous moles, so equilibrium shifts towards ammonia."
    },
    {
      question: "What is the effect of adding a catalyst to a reversible reaction already at equilibrium?",
      options: [
        "It increases the equilibrium constant.",
        "It increases the final equilibrium yield.",
        "It shifts equilibrium towards the products.",
        "It helps equilibrium be reached faster without changing its position."
      ],
      answer: 3,
      explanation: "A catalyst increases the rates of both forward and reverse reactions. It helps the system reach equilibrium faster but does not change the equilibrium position or equilibrium constant at a fixed temperature."
    }
  ],

  "Advanced Organic Chemistry": [
    {
      question: "What is the defining relationship between a pair of enantiomers?",
      options: [
        "They have identical molecular structures but different molecular formulae.",
        "They are non-superimposable mirror images of each other.",
        "They differ only in the arrangement of atoms connected by single bonds.",
        "They have different numbers of carbon atoms."
      ],
      answer: 1,
      explanation: "Enantiomers are stereoisomers that are non-superimposable mirror images. They have the same connectivity but different three-dimensional configurations."
    },
    {
      question: "According to Hückel's rule, how many pi electrons must a monocyclic planar conjugated system contain to be aromatic?",
      options: [
        "4n pi electrons",
        "2n pi electrons",
        "(4n + 2) pi electrons",
        "(4n + 4) pi electrons"
      ],
      answer: 2,
      explanation: "Hückel's rule states that a monocyclic, planar and fully conjugated system is aromatic when it contains (4n + 2) pi electrons, where n is a non-negative integer."
    },
    {
      question: "Which type of reaction commonly occurs when a nucleophile attacks the carbonyl carbon of an aldehyde?",
      options: [
        "Electrophilic substitution",
        "Nucleophilic addition",
        "Free-radical substitution",
        "Electrophilic addition"
      ],
      answer: 1,
      explanation: "The carbonyl carbon of an aldehyde is electrophilic because oxygen attracts electron density. Nucleophiles can attack this carbon, producing a nucleophilic addition reaction."
    },
    {
      question: "Why must Grignard reagents be protected from moisture during preparation and use?",
      options: [
        "Water increases their molecular mass.",
        "Water converts them into more reactive Grignard compounds.",
        "Water causes them to polymerise.",
        "Water reacts with them and destroys the carbon-metal reagent."
      ],
      answer: 3,
      explanation: "Grignard reagents react with water through proton transfer. The carbon-metal bond is destroyed, producing a hydrocarbon and a magnesium-containing product. They therefore require dry reaction conditions."
    },
    {
      question: "A reaction preferentially occurs at one functional group in a molecule even though other functional groups are also present. What is this preference called?",
      options: [
        "Regioselectivity",
        "Chemoselectivity",
        "Stereoselectivity",
        "Conformational preference"
      ],
      answer: 1,
      explanation: "Chemoselectivity describes the preferential reaction of one functional group in the presence of other potentially reactive functional groups."
    }
  ],

  "Advanced Inorganic Chemistry": [
    {
      question: "What is the coordination number of cobalt in [Co(NH₃)₆]Cl₃?",
      options: [
        "3",
        "4",
        "6",
        "9"
      ],
      answer: 2,
      explanation: "The coordination number is the number of donor atoms directly bonded to the central metal. Six ammonia ligands each donate through one nitrogen atom, giving a coordination number of 6."
    },
    {
      question: "In an octahedral coordination complex, which set of d orbitals has the lower energy according to crystal field theory?",
      options: [
        "The eᵍ set",
        "The t₂g set",
        "All five d orbitals have equal energy",
        "The s orbital set"
      ],
      answer: 1,
      explanation: "In an octahedral crystal field, the five d orbitals split into two energy levels. The three t₂g orbitals have lower energy, while the two eᵍ orbitals have higher energy."
    },
    {
      question: "What causes linkage isomerism in coordination compounds?",
      options: [
        "A change in the oxidation state of the central metal",
        "Different numbers of ligands surrounding the metal",
        "An ambidentate ligand coordinating through different donor atoms",
        "A change in the overall charge of the compound"
      ],
      answer: 2,
      explanation: "Linkage isomerism occurs when an ambidentate ligand coordinates to the same metal through different donor atoms. For example, the nitrite ion can coordinate through nitrogen or oxygen."
    },
    {
      question: "Which statement correctly defines an organometallic compound?",
      options: [
        "A compound containing only metallic elements",
        "A compound containing a direct metal-carbon bond",
        "A compound containing only ionic bonds",
        "A compound formed exclusively through hydrogen bonding"
      ],
      answer: 1,
      explanation: "Organometallic compounds contain at least one direct bond between a metal and a carbon atom of an organic group. Examples include Grignard reagents and organolithium compounds."
    },
    {
      question: "According to the hard and soft acids and bases principle, which combination is generally favoured?",
      options: [
        "Mg²⁺ and I⁻",
        "Ag⁺ and F⁻",
        "Mg²⁺ and F⁻",
        "Ag⁺ and OH⁻"
      ],
      answer: 2,
      explanation: "Mg²⁺ is a hard Lewis acid, while F⁻ is a hard Lewis base. HSAB theory predicts that hard acids generally interact more favourably with hard bases."
    }
  ],

  "Chemical Kinetics": [
    {
      question: "For a reaction with the experimentally determined rate law rate = k[A]²[B], what is the overall reaction order?",
      options: [
        "First order",
        "Second order",
        "Third order",
        "Fourth order"
      ],
      answer: 2,
      explanation: "The overall reaction order is the sum of the individual exponents in the rate law. Therefore, 2 + 1 = 3, making the reaction third order overall."
    },
    {
      question: "A first-order reaction has a rate constant of 0.231 min⁻¹. What is its approximate half-life?",
      options: [
        "0.333 min",
        "1.50 min",
        "3.00 min",
        "6.00 min"
      ],
      answer: 2,
      explanation: "For a first-order reaction, half-life = 0.693/k. Therefore, t₁/₂ = 0.693/0.231 = 3.00 minutes."
    },
    {
      question: "Which statement about the rate law of an overall chemical reaction is correct?",
      options: [
        "Its exponents must always equal the balanced equation coefficients.",
        "Its exponents are generally determined experimentally.",
        "Its exponents must always be whole numbers.",
        "Its exponents are determined only by the reaction temperature."
      ],
      answer: 1,
      explanation: "The rate law of an overall reaction must generally be established experimentally. Its reaction orders cannot automatically be obtained from the coefficients of the balanced overall equation."
    },
    {
      question: "In an Arrhenius plot of ln k against 1/T, what does the gradient represent?",
      options: [
        "Ea/R",
        "R/Ea",
        "-Ea/R",
        "-R/Ea"
      ],
      answer: 2,
      explanation: "The logarithmic Arrhenius equation is ln k = ln A − Ea/RT. Comparing this with the straight-line equation y = mx + c shows that the gradient is −Ea/R."
    },
    {
      question: "What is the effect of adding a catalyst to a reversible reaction at equilibrium?",
      options: [
        "It increases the equilibrium constant.",
        "It shifts equilibrium towards products.",
        "It increases the equilibrium yield.",
        "It helps the system reach equilibrium faster without changing its position."
      ],
      answer: 3,
      explanation: "A catalyst increases the rates of both forward and reverse reactions. It helps the system reach equilibrium faster but does not change the equilibrium constant or equilibrium position at a fixed temperature."
    }
  ],

  "Electrochemistry": [
    {
      question: "In the reaction 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu, which substance acts as the reducing agent?",
      options: [
        "Copper ions",
        "Aluminium",
        "Copper metal",
        "Aluminium ions"
      ],
      answer: 1,
      explanation: "Aluminium loses electrons to form Al³⁺. It is oxidised and causes Cu²⁺ ions to be reduced. Therefore, aluminium is the reducing agent."
    },
    {
      question: "A Daniell cell has standard reduction potentials of +0.34 V for Cu²⁺/Cu and −0.76 V for Zn²⁺/Zn. What is its standard cell potential?",
      options: [
        "+0.42 V",
        "+1.10 V",
        "−0.42 V",
        "−1.10 V"
      ],
      answer: 1,
      explanation: "E°cell = E°cathode − E°anode = +0.34 − (−0.76) = +1.10 V."
    },
    {
      question: "A galvanic cell has E°cell = 1.10 V at 25°C. If n = 2 and the reaction quotient Q = 100, what is the approximate cell potential? Use 0.05916 V in the base-ten Nernst equation.",
      options: [
        "1.16 V",
        "1.10 V",
        "1.04 V",
        "0.98 V"
      ],
      answer: 2,
      explanation: "Using E = E° − (0.05916/n)log Q: E = 1.10 − (0.05916/2)log(100) = 1.10 − 0.05916 = 1.04084 V, approximately 1.04 V."
    },
    {
      question: "A current of 1.0 A passes through a copper(II) sulfate solution for 1,930 seconds. What mass of copper is deposited? Use Cu = 63.5 g/mol and F = 96,500 C/mol.",
      options: [
        "0.3175 g",
        "0.635 g",
        "1.270 g",
        "1.930 g"
      ],
      answer: 1,
      explanation: "Using m = MIt/(nF): m = (63.5 × 1.0 × 1930)/(2 × 96500) = 0.635 g. Two electrons are required to deposit one copper atom from Cu²⁺."
    },
    {
      question: "Which statement correctly describes galvanic and electrolytic cells?",
      options: [
        "Oxidation occurs at the cathode in both cells.",
        "Reduction occurs at the anode in both cells.",
        "The anode is always negative in both cells.",
        "Oxidation occurs at the anode in both cells."
      ],
      answer: 3,
      explanation: "Oxidation always occurs at the anode, while reduction always occurs at the cathode. The electrode signs differ: the anode is negative in a galvanic cell but positive in an electrolytic cell."
    }
  ],


  "Thermodynamics": [
    {
      question: "A thermodynamic system absorbs 500 J of heat and does 200 J of work on its surroundings. What is its change in internal energy?",
      options: [
        "700 J",
        "300 J",
        "-300 J",
        "-700 J"
      ],
      answer: 1,
      explanation: "Using the chemistry sign convention, ΔU = q + w. Heat absorbed is +500 J, while work done by the system is -200 J. Therefore, ΔU = 500 - 200 = +300 J."
    },
    {
      question: "According to the second law of thermodynamics, what happens to the total entropy of an isolated system during a spontaneous irreversible process?",
      options: [
        "It decreases.",
        "It remains constant.",
        "It increases.",
        "It becomes zero."
      ],
      answer: 2,
      explanation: "The second law states that the total entropy of an isolated system increases during a spontaneous irreversible process. It remains constant for an ideal reversible process."
    },
    {
      question: "A reaction has an enthalpy change of +30 kJ/mol and an entropy change of +100 J mol⁻¹ K⁻¹. What is its Gibbs free energy change at 400 K?",
      options: [
        "+70 kJ/mol",
        "+10 kJ/mol",
        "-10 kJ/mol",
        "-70 kJ/mol"
      ],
      answer: 2,
      explanation: "Using ΔG = ΔH − TΔS, first convert entropy to 0.100 kJ mol⁻¹ K⁻¹. Therefore, ΔG = 30 − (400 × 0.100) = -10 kJ/mol."
    },
    {
      question: "What is the value of Gibbs free energy change when a chemical system reaches equilibrium at constant temperature and pressure?",
      options: [
        "ΔG is positive.",
        "ΔG is negative.",
        "ΔG is zero.",
        "ΔG is equal to the enthalpy change."
      ],
      answer: 2,
      explanation: "At thermodynamic equilibrium, the Gibbs free energy change for an infinitesimal advancement of the reaction is zero under constant temperature and pressure. The forward and reverse processes have no net thermodynamic driving force."
    },
    {
      question: "Which equation correctly relates the standard Gibbs free energy change to the equilibrium constant?",
      options: [
        "ΔG° = RT ln K",
        "ΔG° = -RT ln K",
        "ΔG° = -R/T ln K",
        "ΔG° = RT/K"
      ],
      answer: 1,
      explanation: "The relationship is ΔG° = -RT ln K, where R is the gas constant, T is absolute temperature and K is the equilibrium constant."
    }
  ],


  "Spectroscopy": [
    {
      question: "What type of transition is primarily responsible for absorption in UV-Visible spectroscopy?",
      options: [
        "Nuclear spin transitions",
        "Electronic transitions",
        "Nuclear decay transitions",
        "Pure rotational transitions"
      ],
      answer: 1,
      explanation: "UV-Visible spectroscopy measures electronic transitions. Absorption of ultraviolet or visible radiation promotes electrons from lower-energy molecular orbitals to higher-energy orbitals."
    },
    {
      question: "A solution has a molar absorptivity of 150 L mol⁻¹ cm⁻¹, a concentration of 2.0 × 10⁻³ mol/L and a path length of 1.0 cm. What is its absorbance?",
      options: [
        "0.15",
        "0.20",
        "0.30",
        "0.45"
      ],
      answer: 2,
      explanation: "Using the Beer-Lambert law, A = εlc. Therefore, A = 150 × 1.0 × 2.0 × 10⁻³ = 0.30."
    },
    {
      question: "What condition must a molecular vibration satisfy to be infrared-active?",
      options: [
        "It must produce a change in dipole moment.",
        "It must produce a change in nuclear mass.",
        "It must involve the breaking of a chemical bond.",
        "It must produce a change in oxidation state."
      ],
      answer: 0,
      explanation: "A molecular vibration is infrared-active when it produces a change in the dipole moment of the molecule. The vibration frequency must also match the absorbed infrared radiation."
    },
    {
      question: "What information does integration provide in a proton NMR spectrum?",
      options: [
        "The molecular mass of the compound",
        "The relative number of hydrogen nuclei contributing to each signal",
        "The exact bond length between carbon atoms",
        "The total number of oxygen atoms"
      ],
      answer: 1,
      explanation: "Integration measures the relative area under NMR signals and provides information about the relative number of hydrogen nuclei contributing to each signal."
    },
    {
      question: "What does a mass spectrometer primarily use to separate detected ions?",
      options: [
        "Their boiling points",
        "Their electrical conductivity",
        "Their mass-to-charge ratios",
        "Their infrared absorption frequencies"
      ],
      answer: 2,
      explanation: "Mass spectrometers separate and detect ions according to their mass-to-charge ratios, represented by m/z. The resulting mass spectrum provides information useful for identifying and characterising substances."
    }
  ],


  "Reaction Mechanisms": [
    {
      question: "Which statement correctly describes the rate law of an SN2 reaction involving RX and a nucleophile (Nu⁻)?",
      options: [
        "Rate = k[RX]",
        "Rate = k[Nu⁻]",
        "Rate = k[RX][Nu⁻]",
        "Rate = k[RX]²"
      ],
      answer: 2,
      explanation: "An SN2 reaction is bimolecular and occurs in a single concerted step. Its rate depends on both the substrate and nucleophile concentrations: Rate = k[RX][Nu⁻]."
    },
    {
      question: "Why can SN1 reactions produce racemisation at a stereogenic carbon?",
      options: [
        "The nucleophile attacks only from the opposite side.",
        "A planar carbocation intermediate permits attack from either face.",
        "The leaving group changes the molecular formula.",
        "The reaction always produces a free radical."
      ],
      answer: 1,
      explanation: "SN1 reactions involve a carbocation intermediate with approximately planar geometry. A nucleophile can attack from either face, potentially producing both configurations and partial or substantial racemisation."
    },
    {
      question: "Which condition is particularly important for the usual E2 elimination mechanism?",
      options: [
        "Formation of a stable carbocation before elimination",
        "A strong base and suitable antiperiplanar arrangement",
        "Formation of a free radical through homolytic cleavage",
        "Attack by an electrophile on an aromatic ring"
      ],
      answer: 1,
      explanation: "E2 elimination occurs in a single concerted step. A base removes a beta-hydrogen as the leaving group departs. An antiperiplanar arrangement generally provides favourable orbital alignment."
    },
    {
      question: "What happens during the propagation stage of a free-radical chain reaction?",
      options: [
        "Radicals are initially generated.",
        "Radicals react to produce new radicals that continue the chain.",
        "All radicals combine and terminate the reaction.",
        "All covalent bonds become ionic bonds."
      ],
      answer: 1,
      explanation: "Propagation involves reactions in which a radical reacts with another substance to form a product and a new radical. The newly formed radical continues the chain reaction."
    },
    {
      question: "During electrophilic aromatic substitution, what happens after the electrophile attacks the aromatic ring?",
      options: [
        "The aromatic ring permanently loses its ability to undergo substitution.",
        "The electrophile is immediately converted into a nucleophile.",
        "A sigma complex forms, followed by proton removal to restore aromaticity.",
        "The aromatic ring undergoes complete hydrogenation."
      ],
      answer: 2,
      explanation: "Electrophilic attack produces a resonance-stabilised sigma complex. Subsequent removal of a proton from the substituted carbon restores the aromatic system."
    }
  ],

  "Analytical Chemistry": [
    {
      question: "A 12.5 mL sample of sulfuric acid is completely neutralised by 25.0 mL of 0.100 mol/L sodium hydroxide. What is the concentration of the sulfuric acid? (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)",
      options: [
        "0.050 mol/L",
        "0.100 mol/L",
        "0.150 mol/L",
        "0.200 mol/L"
      ],
      answer: 1,
      explanation: "Moles of NaOH = 0.100 × 0.0250 = 0.00250 mol. From the 1:2 mole ratio, moles of H₂SO₄ = 0.00250/2 = 0.00125 mol. Concentration = 0.00125/0.0125 = 0.100 mol/L."
    },
    {
      question: "In thin-layer chromatography, a substance travels 4.0 cm while the solvent front travels 8.0 cm. What is the retention factor (Rf)?",
      options: [
        "0.25",
        "0.50",
        "0.75",
        "2.00"
      ],
      answer: 1,
      explanation: "Rf = distance travelled by the substance / distance travelled by the solvent front = 4.0/8.0 = 0.50."
    },
    {
      question: "A calibration curve has the equation A = 0.200c + 0.020, where A is absorbance and c is concentration in mg/L. What is the concentration of a sample with an absorbance of 0.420?",
      options: [
        "1.00 mg/L",
        "2.00 mg/L",
        "2.10 mg/L",
        "4.00 mg/L"
      ],
      answer: 1,
      explanation: "Substitute A = 0.420 into the calibration equation: 0.420 = 0.200c + 0.020. Therefore, c = (0.420 − 0.020)/0.200 = 2.00 mg/L."
    },
    {
      question: "Why is a precipitate washed and dried before its mass is measured in gravimetric analysis?",
      options: [
        "To increase the particle size of the precipitate",
        "To convert the precipitate into a gas",
        "To remove soluble impurities and moisture",
        "To increase the reaction rate"
      ],
      answer: 2,
      explanation: "Washing removes soluble impurities while drying removes moisture. This helps ensure that the measured mass accurately represents the precipitate."
    },
    {
      question: "Repeated analytical measurements are very close to one another but consistently far from the accepted reference value. What does this indicate?",
      options: [
        "High accuracy and low precision",
        "High precision and low accuracy",
        "High accuracy and high precision",
        "Low accuracy and low precision"
      ],
      answer: 1,
      explanation: "The measurements are precise because they agree closely with one another, but they are inaccurate because they differ consistently from the accepted reference value."
    }
  ],

  "General Chemistry": [
    {
      question: "How many orbitals are present in the third principal energy level (n = 3)?",
      options: [
        "3",
        "5",
        "9",
        "18"
      ],
      answer: 2,
      explanation: "The total number of orbitals in a principal energy level is n². For n = 3, the number of orbitals is 3² = 9. These consist of one 3s orbital, three 3p orbitals and five 3d orbitals."
    },
    {
      question: "Why is boron trifluoride (BF₃) a non-polar molecule despite having polar B–F bonds?",
      options: [
        "Its B–F bonds have no electronegativity difference.",
        "Its trigonal planar geometry causes the bond dipoles to cancel.",
        "Its molecular structure contains hydrogen bonds.",
        "Its boron atom carries a permanent negative charge."
      ],
      answer: 1,
      explanation: "BF₃ has a symmetrical trigonal planar structure with bond angles of approximately 120°. The three polar B–F bond dipoles cancel one another, making the molecule non-polar overall."
    },
    {
      question: "Consider the reaction 2Al + 3Cl₂ → 2AlCl₃. If 4 moles of aluminium react with 5 moles of chlorine gas, which substance is the limiting reactant?",
      options: [
        "Aluminium",
        "Chlorine gas",
        "Aluminium chloride",
        "Neither reactant"
      ],
      answer: 1,
      explanation: "Five moles of chlorine require (2/3) × 5 = 3.33 moles of aluminium. Since 4 moles of aluminium are available, aluminium is in excess and chlorine gas is the limiting reactant."
    },
    {
      question: "A reaction has an enthalpy change of −40.0 kJ/mol and an entropy change of −100 J mol⁻¹ K⁻¹. Calculate its Gibbs free energy change at 298 K.",
      options: [
        "−69.8 kJ/mol",
        "−40.0 kJ/mol",
        "−10.2 kJ/mol",
        "+10.2 kJ/mol"
      ],
      answer: 2,
      explanation: "Using ΔG = ΔH − TΔS, convert entropy to −0.100 kJ mol⁻¹ K⁻¹. Therefore, ΔG = −40.0 − (298 × −0.100) = −40.0 + 29.8 = −10.2 kJ/mol."
    },
    {
      question: "A radioactive isotope undergoes first-order decay. What fraction of its original nuclei remains after three half-lives?",
      options: [
        "1/2",
        "1/4",
        "1/6",
        "1/8"
      ],
      answer: 3,
      explanation: "After each half-life, half of the remaining radioactive nuclei decay. After three half-lives, the fraction remaining is (1/2)³ = 1/8."
    }
  ],

  "Physical Chemistry": [
    {
      question: "For a particle in a one-dimensional infinite potential well, how does the energy of the second quantum state compare with that of the first state?",
      options: [
        "Twice the energy",
        "Three times the energy",
        "Four times the energy",
        "Eight times the energy"
      ],
      answer: 2,
      explanation: "The energy of a particle in a one-dimensional box is proportional to n². Therefore, E₂/E₁ = 2²/1² = 4. The second energy level has four times the energy of the first."
    },
    {
      question: "Which thermodynamic potential determines the spontaneity of a process at constant temperature and volume?",
      options: [
        "Enthalpy",
        "Helmholtz free energy",
        "Gibbs free energy",
        "Internal energy"
      ],
      answer: 1,
      explanation: "Helmholtz free energy is defined as A = U − TS. At constant temperature and volume, a spontaneous process has a negative change in Helmholtz free energy, while equilibrium corresponds to a minimum in A."
    },
    {
      question: "According to Boltzmann's equation, if the number of accessible microstates increases by a factor of e³, what is the entropy change?",
      options: [
        "kB",
        "2kB",
        "3kB",
        "e³kB"
      ],
      answer: 2,
      explanation: "Using ΔS = kB ln(W₂/W₁), the entropy change is kB ln(e³) = 3kB, where kB is the Boltzmann constant."
    },
    {
      question: "According to the Gibbs phase rule, how many degrees of freedom are present at the triple point of a pure substance?",
      options: [
        "Zero",
        "One",
        "Two",
        "Three"
      ],
      answer: 0,
      explanation: "The Gibbs phase rule is F = C − P + 2. For a pure substance, C = 1, and at the triple point three phases coexist, so F = 1 − 3 + 2 = 0."
    },
    {
      question: "A substance has a diffusion coefficient of 2.0 × 10⁻⁹ m²/s and a concentration gradient of −500 mol/m⁴. What is its diffusion flux according to Fick's first law?",
      options: [
        "−1.0 × 10⁻⁶ mol m⁻² s⁻¹",
        "−2.5 × 10⁻⁷ mol m⁻² s⁻¹",
        "+1.0 × 10⁻⁶ mol m⁻² s⁻¹",
        "+2.5 × 10⁻⁷ mol m⁻² s⁻¹"
      ],
      answer: 2,
      explanation: "Fick's first law is J = −D(dc/dx). Therefore, J = −(2.0 × 10⁻⁹ × −500) = +1.0 × 10⁻⁶ mol m⁻² s⁻¹. The positive sign indicates diffusion in the positive x-direction."
    }
  ],


  "Organic Chemistry": [
    {
      question: "Which hybridisation gives carbon a tetrahedral molecular geometry?",
      options: ["sp", "sp2", "sp3", "sp3d"],
      answer: 2,
      explanation: "sp3 hybridisation produces four equivalent hybrid orbitals arranged tetrahedrally with bond angles of approximately 109.5°."
    },
    {
      question: "What is the main characteristic of an SN2 reaction?",
      options: [
        "Formation of a stable carbocation intermediate",
        "A concerted mechanism with inversion of configuration",
        "A two-step mechanism involving carbocation formation",
        "Formation of a free radical intermediate"
      ],
      answer: 1,
      explanation: "SN2 reactions occur in one concerted step. Backside nucleophilic attack commonly causes inversion of configuration at the reacting stereogenic carbon."
    },
    {
      question: "According to Hückel's rule, which number of pi electrons makes a planar, cyclic and fully conjugated molecule aromatic?",
      options: ["4n", "4n + 2", "2n", "4n - 2"],
      answer: 1,
      explanation: "A planar, cyclic and fully conjugated system is aromatic when it contains 4n + 2 pi electrons, where n is a non-negative integer."
    },
    {
      question: "Which reagent is commonly used to reduce aldehydes and ketones to alcohols?",
      options: [
        "Sodium borohydride (NaBH4)",
        "Potassium permanganate (KMnO4)",
        "Concentrated nitric acid",
        "Sodium chloride (NaCl)"
      ],
      answer: 0,
      explanation: "Sodium borohydride is a reducing agent that converts aldehydes into primary alcohols and ketones into secondary alcohols."
    },
    {
      question: "What is the major purpose of retrosynthetic analysis?",
      options: [
        "To determine the boiling point of a compound",
        "To identify the molecular mass of a product",
        "To work backwards from a target molecule to simpler starting materials",
        "To measure the reaction rate experimentally"
      ],
      answer: 2,
      explanation: "Retrosynthetic analysis works backwards from the desired target molecule to identify simpler precursors and possible synthetic routes."
    }
  ],

  "Inorganic Chemistry": [
    {
      question: "What is the coordination number of the central metal ion in [Co(NH3)6]3+?",
      options: ["2", "4", "6", "8"],
      answer: 2,
      explanation: "Each NH3 ligand donates through one nitrogen atom. Six ammonia ligands give the cobalt ion a coordination number of 6."
    },
    {
      question: "In an octahedral crystal field, which set of d orbitals has lower energy?",
      options: [
        "eg orbitals",
        "t2g orbitals",
        "All five orbitals have equal energy",
        "Only the dz2 orbital"
      ],
      answer: 1,
      explanation: "In an octahedral complex, the d orbitals split into lower-energy t2g orbitals and higher-energy eg orbitals."
    },
    {
      question: "Which ligand is classified as bidentate?",
      options: ["NH3", "H2O", "Cl-", "Ethylenediamine"],
      answer: 3,
      explanation: "Ethylenediamine (en) contains two nitrogen donor atoms and can coordinate to a metal ion through both atoms."
    },
    {
      question: "Which metal ion is commonly found at the centre of the haemoglobin haem group?",
      options: ["Mg2+", "Fe2+", "Zn2+", "Cu2+"],
      answer: 1,
      explanation: "The haem group in haemoglobin contains iron, commonly in the Fe2+ oxidation state, which enables reversible oxygen binding."
    },
    {
      question: "What is the main purpose of the 18-electron rule in organometallic chemistry?",
      options: [
        "To calculate the atomic mass of a metal",
        "To predict the boiling point of a complex",
        "To assess the electronic stability of many transition metal complexes",
        "To determine the oxidation rate of a metal"
      ],
      answer: 2,
      explanation: "The 18-electron rule is a useful guideline for assessing the electronic stability of many transition metal complexes by considering their valence electron count."
    }
  ],

  "Analytical Chemistry": [
    {
      question: "What is the main difference between accuracy and precision?",
      options: [
        "Accuracy measures repeatability while precision measures correctness",
        "Accuracy measures closeness to an accepted value while precision measures agreement between repeated measurements",
        "Both terms mean exactly the same thing",
        "Accuracy measures concentration while precision measures volume"
      ],
      answer: 1,
      explanation: "Accuracy describes closeness to an accepted reference value, while precision describes the agreement between repeated measurements."
    },
    {
      question: "A solution has an absorbance of 0.60. If its molar absorptivity is 150 L mol-1 cm-1 and the path length is 1 cm, what is its concentration?",
      options: [
        "0.004 mol/L",
        "0.04 mol/L",
        "0.4 mol/L",
        "4.0 mol/L"
      ],
      answer: 0,
      explanation: "Using A = εlc, concentration = A/(εl) = 0.60/(150 × 1) = 0.004 mol/L."
    },
    {
      question: "Which analytical technique separates mixture components based on their different distributions between stationary and mobile phases?",
      options: [
        "Gravimetric analysis",
        "Potentiometry",
        "Chromatography",
        "Volumetric analysis"
      ],
      answer: 2,
      explanation: "Chromatography separates components according to their different interactions with the stationary and mobile phases."
    },
    {
      question: "In a 1:1 acid-base titration, 25.0 mL of an acid requires 20.0 mL of 0.10 mol/L NaOH for neutralisation. What is the acid concentration?",
      options: [
        "0.04 mol/L",
        "0.08 mol/L",
        "0.10 mol/L",
        "0.125 mol/L"
      ],
      answer: 1,
      explanation: "For a 1:1 reaction, CaVa = CbVb. Therefore, Ca = (0.10 × 20.0)/25.0 = 0.08 mol/L."
    },
    {
      question: "Which analytical technique measures the mass-to-charge ratio of ions?",
      options: [
        "Infrared spectroscopy",
        "Conductometry",
        "UV-visible spectroscopy",
        "Mass spectrometry"
      ],
      answer: 3,
      explanation: "Mass spectrometry measures the mass-to-charge ratio of ions and provides information about molecular mass and fragmentation."
    }
  ],

  "Industrial Chemistry": [
    {
      question: "Which equation represents the general material balance for an industrial process?",
      options: [
        "Input + Generation - Output - Consumption = Accumulation",
        "Input + Output = Generation",
        "Output - Input = Consumption",
        "Input - Generation = Accumulation"
      ],
      answer: 0,
      explanation: "The general material balance is Input + Generation - Output - Consumption = Accumulation. At steady state, accumulation is zero."
    },
    {
      question: "Which reactor operates continuously with well-mixed contents and continuous feed and product removal?",
      options: [
        "Batch reactor",
        "Continuous stirred-tank reactor",
        "Plug-flow reactor",
        "Fixed-bed batch reactor"
      ],
      answer: 1,
      explanation: "A continuous stirred-tank reactor (CSTR) receives continuous feed and removes product continuously while maintaining mixing."
    },
    {
      question: "Which catalyst is commonly used in the Haber-Bosch process?",
      options: [
        "Vanadium pentoxide",
        "Nickel",
        "Iron",
        "Platinum"
      ],
      answer: 2,
      explanation: "An iron-based catalyst is commonly used in industrial ammonia synthesis through the Haber-Bosch process."
    },
    {
      question: "What is the main principle behind fractional distillation in petroleum refining?",
      options: [
        "Differences in electrical conductivity",
        "Differences in boiling ranges",
        "Differences in magnetic properties",
        "Differences in molecular colour"
      ],
      answer: 1,
      explanation: "Fractional distillation separates crude oil components according to differences in their boiling ranges."
    },
    {
      question: "A process receives 500 kg of raw material and produces 350 kg of desired product. What is the product yield based on the raw material feed?",
      options: [
        "50%",
        "60%",
        "70%",
        "80%"
      ],
      answer: 2,
      explanation: "Yield based on raw material feed = (350 / 500) × 100 = 70%. This is a feed-based yield calculation, not necessarily the theoretical reaction yield."
    }
  ],

  "Polymer Chemistry": [
    {
      question: "What is the main difference between chain-growth and step-growth polymerisation?",
      options: [
        "Chain-growth requires no monomers",
        "Chain-growth occurs through successive addition to active chain ends while step-growth involves reactions between functional groups",
        "Step-growth always produces thermoplastics",
        "Both mechanisms occur only through free radicals"
      ],
      answer: 1,
      explanation: "Chain-growth polymerisation involves successive monomer addition to active chain ends. Step-growth polymerisation involves reactions between functional groups of monomers and growing molecules."
    },
    {
      question: "A polymer has a weight-average molecular weight of 120,000 g/mol and a number-average molecular weight of 60,000 g/mol. What is its polydispersity index?",
      options: [
        "0.5",
        "1.0",
        "2.0",
        "3.0"
      ],
      answer: 2,
      explanation: "PDI = Mw/Mn = 120,000/60,000 = 2.0."
    },
    {
      question: "Which thermal transition describes the change of amorphous polymer regions from a rigid glassy state to a more flexible state?",
      options: [
        "Melting temperature",
        "Glass transition temperature",
        "Boiling point",
        "Crystallisation temperature"
      ],
      answer: 1,
      explanation: "The glass transition temperature (Tg) marks the transition of amorphous polymer regions from a rigid glassy state to a more flexible rubbery state."
    },
    {
      question: "Which technique is commonly used to determine the molecular weight distribution of polymers?",
      options: [
        "Gel permeation chromatography",
        "Flame photometry",
        "Simple filtration",
        "Acid-base titration"
      ],
      answer: 0,
      explanation: "Gel permeation chromatography (GPC), also called size-exclusion chromatography, separates polymer chains according to their hydrodynamic size and is used to estimate molecular weight distribution."
    },
    {
      question: "Which statement correctly describes mechanical recycling of PET?",
      options: [
        "It converts PET completely into its original monomers",
        "It involves sorting, washing, shredding and reprocessing the polymer",
        "It requires complete combustion of PET",
        "It only applies to biodegradable plastics"
      ],
      answer: 1,
      explanation: "Mechanical PET recycling involves sorting, washing, size reduction and reprocessing the recovered polymer into usable material without intentionally depolymerising it into monomers."
    }
  ],


  "Research Methods in Chemistry": [
    {
      question: "What is the main purpose of a research hypothesis?",
      options: [
        "To present the final conclusion before experimentation",
        "To provide a testable proposed explanation or prediction",
        "To replace experimental measurements",
        "To summarise all published scientific literature"
      ],
      answer: 1,
      explanation: "A hypothesis is a testable proposed explanation or prediction that guides scientific investigation."
    },
    {
      question: "A researcher investigates how temperature affects reaction rate. Which variable is the independent variable?",
      options: [
        "Reaction rate",
        "Temperature",
        "Product concentration",
        "Reaction yield"
      ],
      answer: 1,
      explanation: "Temperature is the independent variable because it is deliberately changed by the researcher. Reaction rate is the dependent variable."
    },
    {
      question: "Which statistical measure describes the spread of experimental results around their mean?",
      options: [
        "Standard deviation",
        "Arithmetic mean",
        "Median",
        "Mode"
      ],
      answer: 0,
      explanation: "Standard deviation measures how widely individual observations are distributed around the mean."
    },
    {
      question: "Which of the following is an example of research misconduct?",
      options: [
        "Repeating an experiment",
        "Calibrating laboratory equipment",
        "Fabricating experimental results",
        "Acknowledging scientific sources"
      ],
      answer: 2,
      explanation: "Fabrication involves inventing data or results and presenting them as genuine research findings. It is a serious breach of research integrity."
    },
    {
      question: "What is the main purpose of a literature review?",
      options: [
        "To replace laboratory experiments",
        "To identify existing knowledge, research gaps and relevant methods",
        "To guarantee that a hypothesis is correct",
        "To present only the researcher's personal opinions"
      ],
      answer: 1,
      explanation: "A literature review evaluates existing research to establish background knowledge, identify gaps and guide the research methodology."
    }
  ],

};

// CHEMLEARN PROGRESS DATA

const savedProgress = JSON.parse(
  localStorage.getItem("chemknowProgress")
) || {};

const completedLessons = new Set(
  savedProgress.completedLessons || []
);

const quizScores = savedProgress.quizScores || [];

const quizMistakes = savedProgress.quizMistakes || [];

const resetQuizHistoryButton = document.getElementById("reset-quiz-history");

resetQuizHistoryButton.addEventListener("click", function () {
  const confirmReset = confirm(
    "Are you sure you want to clear your quiz scores and saved mistakes?"
  );

  if (!confirmReset) {
    return;
  }

  quizScores.length = 0;
  quizMistakes.length = 0;

  Object.keys(usedQuestions).forEach(function (topic) {
    delete usedQuestions[topic];
  });


  updateLearningProgress();

  alert("Your quiz history has been reset successfully.");
});


const usedQuestions = savedProgress.usedQuestions || {};

let currentPracticeMistake = null;

function updateLearningProgress() {
  document.getElementById("completed-lessons").textContent =
    completedLessons.size;

  document.getElementById("quizzes-attempted").textContent =
    quizScores.length;

  const averageScore = quizScores.length > 0
    ? quizScores.reduce(function (total, score) {
      return total + score;
    }, 0) / quizScores.length
    : 0;

  document.getElementById("average-score").textContent =
    averageScore.toFixed(0) + "%";

  localStorage.setItem(
    "chemknowProgress",
    JSON.stringify({
      completedLessons: Array.from(completedLessons),
      quizScores: quizScores,
      quizMistakes: quizMistakes,
      usedQuestions: usedQuestions,
    })
  );

  // UPDATE MISTAKE REVIEW DASHBOARD

  const totalMistakesElement =
    document.getElementById("total-mistakes");


  const mistakeListElement =
    document.getElementById("mistake-list");

  const topicsToReviewElement =
    document.getElementById("topics-to-review");

  if (totalMistakesElement && mistakeListElement) {

    totalMistakesElement.textContent = quizMistakes.length;

    const uniqueTopics = new Set(
      quizMistakes.map(function (mistake) {
        return mistake.topic;
      })
    );

    if (topicsToReviewElement) {
      topicsToReviewElement.textContent = uniqueTopics.size;
    }

    if (quizMistakes.length === 0) {
      mistakeListElement.innerHTML =
        "<p>No mistakes recorded yet.</p>";
    } else {

      mistakeListElement.innerHTML = quizMistakes.map(
        function (mistake, index) {

          const originalQuestions = chemistryQuizzes[mistake.topic] || [];

          const originalQuestion = originalQuestions.find(
            function (question) {
              return question.question === mistake.question;
            }
          );

          const options = mistake.options || originalQuestion?.options;

          const correctAnswerIndex =
            mistake.correctAnswerIndex !== undefined
              ? mistake.correctAnswerIndex
              : originalQuestion?.answer;

          mistake.options = options;
          mistake.correctAnswerIndex = correctAnswerIndex;

          return `
      <article class="mistake-item">
        <h4>${mistake.topic}</h4>
        <p><strong>Mistake ${index + 1}</strong></p>
        <p>${mistake.question}</p>
        <p><strong>Your answer:</strong> ${mistake.learnerAnswer}</p>
        <p><strong>Correct answer:</strong> ${mistake.correctAnswer}</p>
        <p><strong>Explanation:</strong> ${mistake.explanation}</p>

        <button
          class="practise-mistake-button"
          data-mistake-index="${index}"
          ${!options || correctAnswerIndex === undefined ? "disabled" : ""}
        >
          Practise Again
        </button>
      </article>
    `;
        }
      ).join("");
    }
  }

} // Closes updateLearningProgress()




updateLearningProgress(); // Runs the function when the page loads

// ==================================
// CHEMLEARN LEVEL SELECTION
// ==================================

const levelButtons = document.querySelectorAll(".level-button");
const curriculumDisplay = document.getElementById("curriculum-display");
const lessonDisplay = document.getElementById("lesson-display");
const quizDisplay = document.getElementById("quiz-display");

/// ==================================
// PRACTISE PREVIOUS MISTAKES
// ==================================

let activePracticeMistake = null;

const mistakeList = document.getElementById("mistake-list");

// OPEN A PREVIOUS MISTAKE

mistakeList.addEventListener("click", function (event) {

  const practiceButton = event.target.closest(
    ".practise-mistake-button"
  );

  if (!practiceButton) {
    return;
  }

  const mistakeIndex = Number(
    practiceButton.dataset.mistakeIndex
  );

  const mistake = quizMistakes[mistakeIndex];

  if (!mistake) {
    return;
  }

  // Retrieve older saved questions when necessary

  const originalQuestion = chemistryQuizzes[mistake.topic]?.find(
    function (question) {
      return question.question === mistake.question;
    }
  );

  const options = mistake.options || originalQuestion?.options;

  const correctAnswerIndex =
    mistake.correctAnswerIndex ?? originalQuestion?.answer;

  if (
    !options ||
    correctAnswerIndex === undefined
  ) {
    alert("This question is not available for practice yet.");
    return;
  }

  activePracticeMistake = {
    mistake: mistake,
    topic: mistake.topic,
    question: mistake.question,
    options: options,
    correctAnswerIndex: correctAnswerIndex,
    explanation: mistake.explanation || originalQuestion?.explanation
  };

  quizDisplay.innerHTML = `
    <section class="mistake-practice">

    <!-- PRACTICE HEADER -->

    <div class="practice-header">

      <div class="practice-heading">

        <span class="practice-heading-icon">
          <i data-lucide="brain"></i>
        </span>

        <div>
          <p class="practice-eyebrow">KNOWLEDGE REVIEW</p>
          <h2>Practise Your Mistake</h2>
        </div>

      </div>

      <span class="practice-topic">
        ${mistake.topic}
      </span>

    </div>


    <!-- QUESTION CARD -->

    <div class="practice-question-card">

      <p class="practice-question-label">
        QUESTION TO REVISIT
      </p>

      <h3 class="practice-question-text">
        ${mistake.question}
      </h3>

      <!-- ANSWER OPTIONS -->

      <div class="practice-options">

        ${options.map(function (option, index) {
    return `
            <label class="practice-option">

              <input
                type="radio"
                name="mistake-practice-answer"
                value="${index}"
              >

              <span class="practice-option-letter">
                ${String.fromCharCode(65 + index)}
              </span>

              <span class="practice-option-text">
                ${option}
              </span>

            </label>
          `;
  }).join("")}

      </div>


      <!-- CHECK ANSWER BUTTON -->

      <button
        type="button"
        id="check-mistake-answer"
        class="practice-check-button"
      >
        Check My Answer
      </button>


      <!-- ANSWER FEEDBACK -->

      <div
        id="mistake-practice-feedback"
        class="practice-feedback"
        aria-live="polite"
      ></div>

    </div>

    </section>
  `;

  // Render dynamically inserted Lucide icons
  lucide.createIcons();

  quizDisplay.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

});


// ==================================
// CHECK PRACTICE ANSWER
// ==================================

quizDisplay.addEventListener("click", function (event) {

  const checkButton = event.target.closest(
    "#check-mistake-answer"
  );

  if (!checkButton || !activePracticeMistake) {
    return;
  }

  const selectedAnswer = quizDisplay.querySelector(
    'input[name="mistake-practice-answer"]:checked'
  );

  const feedback = document.getElementById(
    "mistake-practice-feedback"
  );

  if (!selectedAnswer) {
    feedback.textContent = "Please select an answer first.";
    return;
  }

  const isCorrect =
    Number(selectedAnswer.value) ===
    activePracticeMistake.correctAnswerIndex;


  // INCORRECT ANSWER: ALLOW ANOTHER ATTEMPT

  if (!isCorrect) {

    feedback.textContent =
      "Not quite! Try another answer. Keep practising.";

    feedback.className = "incorrect-answer";

    quizDisplay.querySelectorAll(
      'input[name="mistake-practice-answer"]'
    ).forEach(function (input) {
      input.checked = false;
    });

    checkButton.textContent = "Try Again";

    return;
  }


  // CORRECT ANSWER: REMOVE THE MISTAKE

  const mistakeIndex = quizMistakes.indexOf(
    activePracticeMistake.mistake
  );

  if (mistakeIndex === -1) {
    return;
  }

  const topic = activePracticeMistake.topic;
  const explanation = activePracticeMistake.explanation;

  quizMistakes.splice(mistakeIndex, 1);

  updateLearningProgress();

  quizDisplay.innerHTML = `
    <div class="quiz-result">

      <h2>Excellent Work!</h2>

      <p>You answered correctly!</p>

      <p><strong>Topic:</strong> ${topic}</p>

      <p>
        <strong>Explanation:</strong>
        ${explanation}
      </p>


    </div>
  `;

  activePracticeMistake = null;

});




levelButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedLevel = button.dataset.level;
    const curriculum = chemistryCurriculum[selectedLevel];

    curriculumDisplay.innerHTML = `
      <h3>${curriculum.title}</h3>

      <ul>
        ${curriculum.topics.map(function (topic) {
      return `
            <li>
              <button class="curriculum-topic" data-topic="${topic}">
                ${topic}
              </button>
            </li>
          `;
    }).join("")}
      </ul>
    `;

    lessonDisplay.innerHTML = "";
    quizDisplay.innerHTML = "";

    curriculumDisplay.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });
});


// ==================================
// CHEMLEARN LESSON AND QUIZ DISPLAY
// ==================================

curriculumDisplay.addEventListener("click", function (event) {
  const selectedTopic = event.target.closest(".curriculum-topic");

  if (!selectedTopic) {
    return;
  }

  const topicName = selectedTopic.dataset.topic;
  const lesson = chemistryLessons[topicName];

  quizDisplay.innerHTML = "";

  if (!lesson) {
    lessonDisplay.innerHTML = `
      <p>This lesson is currently being prepared.</p>
    `;
    return;
  }

  lessonDisplay.innerHTML = `
    <h2>${lesson.title}</h2>

    <p>${lesson.introduction}</p>

    <h3>Learning Objectives</h3>

    <ul>
      ${lesson.objectives.map(function (objective) {
    return `<li>${objective}</li>`;
  }).join("")}
    </ul>

    ${lesson.sections.map(function (section) {
    return `
        <h3>${section.heading}</h3>
        <p>${section.content}</p>
      `;
  }).join("")}

<button id="complete-lesson-button" class="lesson-action-button">
  Mark Lesson as Completed
</button>

<button id="start-quiz-button" class="lesson-action-button">
  Take Lesson Quiz
</button>
  `;


  const completeLessonButton = document.getElementById("complete-lesson-button");

  completeLessonButton.addEventListener("click", function () {
    completedLessons.add(topicName);

    console.log("Completed lessons:", Array.from(completedLessons));

    updateLearningProgress();

    completeLessonButton.textContent = "Lesson Completed ✓";
    completeLessonButton.disabled = true;
  });
  const startQuizButton = document.getElementById("start-quiz-button");

  startQuizButton.addEventListener("click", function () {
    const questions = chemistryQuizzes[topicName];

    if (!questions) {
      quizDisplay.innerHTML = `
        <p>This quiz is currently being prepared.</p>
      `;
      return;
    }

    quizDisplay.innerHTML = `
      <h2>${topicName} Quiz</h2>

      ${questions.map(function (question, index) {
      return `
          <div class="quiz-question">
            <h3>${index + 1}. ${question.question}</h3>

            ${question.options.map(function (option, optionIndex) {
        return `
                <label>
                  <input
                    type="radio"
                    name="question-${index}"
                    value="${optionIndex}"
                  >
                  ${option}
                </label>
              `;
      }).join("")}
          </div>
        `;
    }).join("")}

      <button id="submit-quiz-button">
        Submit Answers
      </button>
    `;

    startQuizButton.hidden = true;

    const submitQuizButton = document.getElementById("submit-quiz-button");



    submitQuizButton.addEventListener("click", function () {
      let score = 0;
      let unanswered = 0;
      let feedbackHTML = "";
      let attemptMistakes = [];

      questions.forEach(function (question, index) {
        const selectedAnswer = quizDisplay.querySelector(
          `input[name="question-${index}"]:checked`
        );

        if (!selectedAnswer) {
          unanswered++;
          return;
        }

        const selectedIndex = Number(selectedAnswer.value);
        const isCorrect = selectedIndex === question.answer;

        if (!isCorrect) {
          attemptMistakes.push({
            topic: topicName,
            question: question.question,
            options: question.options,
            learnerAnswer: question.options[selectedIndex],
            correctAnswer: question.options[question.answer],
            correctAnswerIndex: question.answer,
            explanation: question.explanation
          });
        }

        if (isCorrect) {
          score++;
        }

        feedbackHTML += `
      <div class="quiz-feedback ${isCorrect ? "correct-answer" : "incorrect-answer"}">
        <h3>Question ${index + 1}</h3>
        <p>${question.question}</p>

        <p>
          <strong>Your answer:</strong>
          ${question.options[selectedIndex]}
        </p>

        <p>
          <strong>${isCorrect ? "Correct!" : "Incorrect."}</strong>
        </p>

        <p>
          <strong>Correct answer:</strong>
          ${question.options[question.answer]}
        </p>

        <p>
          <strong>Explanation:</strong>
          ${question.explanation}
        </p>
      </div>
    `;
      });

      if (unanswered > 0) {
        alert(`Please answer all ${questions.length} questions before submitting.`);
        return;
      }

      quizMistakes.push(...attemptMistakes);

      const percentage = (score / questions.length) * 100;
      quizScores.push(percentage);

      updateLearningProgress();

      let performanceMessage = "";

      if (percentage >= 80) {
        performanceMessage = "Excellent work! You have a strong understanding of this topic.";
      } else if (percentage >= 60) {
        performanceMessage = "Good effort! Keep building your understanding.";
      } else {
        performanceMessage = "Keep practising! Review the lesson and try again.";
      }

      quizDisplay.insertAdjacentHTML("beforeend", `
    <div class="quiz-result">
      <h3>Your Quiz Performance</h3>

      <div class="quiz-summary">
        <div class="quiz-stat">
          <span class="quiz-stat-value">${score}/${questions.length}</span>
          <p>Correct Answers</p>
        </div>

        <div class="quiz-stat">
          <span class="quiz-stat-value">${questions.length - score}</span>
          <p>Mistakes</p>
        </div>

        <div class="quiz-stat">
          <span class="quiz-stat-value">${percentage.toFixed(0)}%</span>
          <p>Score</p>
        </div>
      </div>

      <p>${performanceMessage}</p>
    </div>

    ${feedbackHTML}
  `);

      submitQuizButton.disabled = true;
      submitQuizButton.hidden = true;
    });



    quizDisplay.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  lessonDisplay.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


// ==================================
// INITIALISE LUCIDE ICONS
// ==================================


lucide.createIcons();
