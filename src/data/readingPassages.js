export const READING_CONTENT = {
  "source": "Emerging Actuator Technologies (Chapter 5)",
  "pageRange": "194-227",
  "sections": [
    {
      "id": "section-1",
      "title": "5 Magnetostrictive actuators (MSs)",
      "blocks": [
        {
          "id": "block-1",
          "en": "Magnetostrictive actuators are based on the Joule effect (magnetostriction), the oldest of the transduction phenomena described in this book as a basis for emerging actuator technologies. Magnetostriction determines highforce, relatively lowstroke actuators with attainable frequency bandwidths up to several kilohertz.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Given this type of performance, MS actuators are mostly suited to active vibration control applications. This chapter therefore addresses two parallel issues: magnetostrictive actuators as an emerging technology, and active vibration control and smart structures as the paradigmatic application of these actuators.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The chapter begins with an introductory historical note on the discovery of magnetostriction and a description of the basic magnetic properties of materials (fully applicable to MRF actuators as described in Chapter 6). Magnetostriction is described and analyzed in detail in the subsequent sections.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "At the same time, issues relating to positive and negative magnetostriction, concomitant effects like the twofold change in the Young's modulus of these materials, and properties of magnetostrictive materials are introduced. There is a section devoted specifically to the mechatronic design of MS actuators, particularly, design for improved stroke, linearized operation and selected dynamic properties of actuators.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In the section devoted to electric and magnetic circuit design, the reader is referred to Chapter 6, where these aspects are dealt with in more detail in the context of MRF actuators. The section on control of MS actuators offers a detailed analysis of the applicability of these actuators to active vibration control and smart structures.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "We decided also to include here those technologies that are most suitable for developing the concept of smart structures and smart actuators, for example, piezoelectric and shape memory alloy (SMA) actuators. As a result, smart structures are dealt with in a unified manner in this chapter rather than in separate sections in Chapters 2 and 3.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "As in previous chapters, the various static and dynamic figures of merit for this technology are analyzed. Since MS actuators are potential competitors of piezoelectric stacks in several applications, a reference is included to the performance characteristics of piezoelectric stacks. The scaling trends for the various different figures of merit are introduced at this point.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "Finally, this chapter introduces application cases for MS technologies. All of these are in the field of vibration control and smart structures, as these constitute the typical application field for this technology.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-2",
      "title": "5.1.1 Historical perspective",
      "blocks": [
        {
          "id": "block-1",
          "en": "Magnetostriction is one form of energy transduction from the magnetic domain to the mechanical domain. It is a phenomenon observed in all ferromagnetic materials. The following sections analyze in detail the basics of the magnetic properties of materials and, in particular, of the magnetostrictive effect.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The magnetostrictive effect, also called Joule effect, was first described by J.P. Joule (1818-1889) in 1842 after the observation of a change in length of nickel upon the application of an external magnetic field. Following this discovery, nickel and its alloys were widely used during the 1940s and 1950s both in military and civil applications.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The low magnetostrictive effect in nickel (typically of the order of 50 ppm), however, effectively limited the scope for new applications. In later years, terbium (Tb) and dysprosium (Dy) were characterized as elements exhibiting a strong magnetostrictive effect at low temperatures, between 100 and 1000 times that of nickel.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The addition of iron as an alloying element made the strong magnetostrictive properties of terbium and dysprosium available at ambient temperature. The critical factor and limiting parameter for the application of TbFe2 and DyFe 2 proved to be the highstrength magnetic fields required to achieve a high strain.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "At about the same time, researchers at the US Naval Ordnance Laboratory, today the Naval Surface Warfare Center, began to develop lanthanide alloys, leading eventually to the discovery of TbDyFe alloys with giant magnetostrictive properties (of the order of 1500-2000 ppm). The compound was called TerfenolD: TER for Terbium, FE for Iron, NOL for Naval Ordnance Laboratory (NOL) and D for Dysprosium.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Magnetostriction, as the conversion of energy between the magnetic and the mechanical domain, is accompanied by several interesting phenomena. The reverse magnetostrictive effect is also known as the Villari effect and accounts for the conversion between mechanical and magnetic energy. There is a particular instance of the magnetostrictive effect known as the Wiedemann effect.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The Wiedemann effect is the conversion from a helical magnetic field to torsional mechanical energy. It typically occurs when a permanent axial magnetic field is superimposed on the magnetic field generated by an electrical current flowing axially in a ferromagnetic probe.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The converse effect, that is, the generation of a helical magnetic field upon application of a torque, is known as the inverse Wiedemann effect or Matteuci effect. Of the various different transduction processes in either direction between magnetic and mechanical energy domains, magnetostriction is the one typically employed in actuator development.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "It may be described as the analogous effect to piezoelectricity in the magnetic domain. However, there are a number of specific points on which they differ.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-3",
      "title": "5.1.2 Basics of magnetic properties of materials",
      "blocks": [
        {
          "id": "block-1",
          "en": "Usually, analysis of the magnetic state of materials is based on socalled magnetization curves. The magnetization curve for a particular material plots the magnetic flux density, B as a function of the magnetic field strength, H. The magnetic flux density, B, may be viewed as the magnetic counterpart of the electrical displacement or charge density, D.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The magnetic field strength, H, and the electric field, E, are likewise analogous. The magnetization curve for the vacuum represents a linear relationship between magnetic field strength and magnetic flux density (see Figure 5.1a). The slope of the magnetization curve for the vacuum is called the permeability, μ0 .",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Similarly, the permeability of a given material, μ, is the ratio of the internal magnetization of that particular material in response to an applied magnetic field.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The relative permeability of a material, μ r , is defined as the ratio of the magnetic permeability to the vacuum permeability: μ r = μ μ0 (5.1) According to the shape of the magnetization curve, materials can be classified into diamagnetic substances, paramagnetic materials and magnetizable materials: 1. Diamagnetic substances.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The small magnetic dipoles (due to electron spin) in diamagnetic materials cancel one another out. When an external magnetic field is applied, these small magnetic dipoles align themselves to oppose the external field. Consequently, the magnetization curve for diamagnetic materials is slightly below the magnetization curve in vacuum (see Figure 5.1b).",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "2. Paramagnetic materials. In these materials, the small electronic magnetic dipoles do not cancel out exactly and, thus, exhibit a small permanent magnetic moment.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "When an external magnetic field is applied, this permanent magnetization intensifies slightly, and the magnetization curve for a paramagnetic material is situated slightly above the magnetization curve for vacuum.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "Magnetization of vacuum Diamagnetic substances Paramagnetic substances Ferromagnetic materials B S B B B B HS H H H H m0 m0 m0 m0 m0 mrm0 mrm0 (a) (c) (b) 1 1 1 1 1 1 1 (d) (μ r < 1), (c) paramagnetic substances (μ r > 1), and (d) ferromagnetic materials, μ r 1 (saturation at B S ). 3. Magnetizable materials.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "In these materials, the net magnetic moment can be made to point in a particular direction. The most relevant magnetizable materials for the purposes of actuators are ferromagnetic materials. Ferromagnetic materials are iron, nickel, cobalt, manganese and their alloys.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "They can be permanently magnetized by the application of an external magnetic field. In ferromagnetic materials, the density of magnetic moments is known as magnetization or magnetic polarization, M, and may be considered analogous to the electric polarization, P.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Analogously to the electrical state of a dielectric material, the magnetic state of a ferromagnetic material can be described by means of two independent variables plus a third dependent one.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "If magnetic field strength, H, and magnetization, M, are the independent variables, the equation describing the magnetic estate of a ferromagnetic material will be B = μ H + M (5.2) The process of magnetization in ferromagnetic materials involves the reorientation of magnetic domains so that they become aligned with the external magnetic field.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "Initially, most of the magnetic domains in a ferromagnetic material are oriented randomly. It is therefore relatively easy to orient them upon the application of an external magnetic field. Consequently, the slope of the magnetization curve is high for low values of the external field.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "As the magnetic field increases, less magnetic domains are left for reorientation. As a result, it becomes increasingly more difficult to achieve a higher magnetic flux density. At this stage, the apparent permeability is reduced to the vacuum permeability.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "This situation is depicted in Figure 5.1d. An interesting phenomenon of magnetism is the intrinsic hysteretic behavior of ferromagnetic materials in the BH curve. Ferromagnetic materials tend to remain magnetized once the magnetic field is removed.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "The magnetic remnance, B R , is defined as the remaining magnetization of a ferromagnetic material when the driving magnetic field is completely removed. The coercivity, HC , of the ferromagnetic material is defined as the reverse magnetic field required to drive the magnetization to zero after having been saturated. Remnance and coercivity are depicted in",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-4",
      "title": "5.1.3 Magnetostriction: constitutive equations",
      "blocks": [
        {
          "id": "block-1",
          "en": "Magnetostriction is the phenomenon whereby magnetic domains in a ferromagnetic material are reoriented and aligned in response to an applied external magnetic field. As a consequence of the magnetoelastic coupling in these materials, there is a macroscopic change in length in the direction of magnetization. We described magnetostriction as being the analog of piezoelectricity in the magnetic domain.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In fact, magnetostriction is a process of transduction between elastic mechanical energy (strain) and magnetic energy. However, there are evident significant differences between the two phenomena. The equations governing the magnetostrictive effect, magnetostriction constitutive equations, contain both linear B S B BR H S H HC vant points: B R , remnance; (HS , B S ), saturation; and HC , coercitive field strength.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "and quadratic terms in the magnetic field strength.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "In tensor notation this is S ij = c H ij kl T kl + dmij Hm + m ij kl Hk Hl B k = dkij T ij + μ T km Hm (5.3) where Sij is the mechanical strain, T kl is the mechanical stress, c H ij kl is the mechanical compliance under zero magnetic field (H = 0), Hm is the magnetic field strength, μ T km is the magnetic permeability under constant mechanical stress, dmij are the piezomagnetic displacement coefficients coupling linearly magnetic and mechanical variables, m ij kl is the magnetostrictive coefficient coupling quadratically magnetic and mechanical variables and B k is the magnetic flux density.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The equation coupling strain to magnetic field strength can be obtained from thermodynamic potential functions, and according to Equation 5.3 it has the following form: S ∝ c1H + c2H 2 (5.4) In Equation 5.4, c1 defines the piezomagnetic effect. In order for a material to exhibit piezomagnetism, the crystal structure must be anisotropic. However, all ferromagnetic materials exhibit magnetostriction, that is, c2 = 0.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Therefore, the phenomenological description of piezomagnetism and magnetostriction is equivalent to the phenomenological description of piezoelectricity and electrostriction. The typical strain versus applied magnetic field curve for magnetostrictive materials is depicted in Figure 5.3. It shows the quadratic dependence of strain on magnetic field strength.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Carrying on with the analogy between electrical and magnetic domains, for a pure magnetostrictive material (exhibiting crystal symmetry and thus no piezomagnetism), the magnetomechanical coupling will be described by S ij = m ij kl Hk Hl (5.5) e H sity in magnetostrictive materials.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "As in the case of electrostrictive polymer actuators, Equation 5.5 can now be expanded in Taylor series around a DC bias magnetic field, H0 , and for small variations of the magnetic field around the DC bias, we have Si = Si0 + dS dH ∣ ∣ ∣H =H0 (H − H0) + 1 2!",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "d2S dH 2 ∣ ∣ ∣H =H0 (H − H0)2 + · · · (5.6) which, for the direction of polarization, reduces to S ≈ 2mH0 H (5.7) Notice that Equation 5.5 represents a quadratic dependence of strain on magnetic field strength.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "Once the magnetostrictive coefficients are defined for a particular material, Equation 5.5 indicates that the magnetostrictive material will contract or expand when either positive or negative magnetic fields are applied.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Consequently, Equation 5.7 describes a way of converting unidirectional displacements in a magnetostrictive domain into twodirectional displacements by means of a bias magnetic field strength, H0 , a technique widely adopted in the design of magnetostrictive actuators. The process is schematically depicted in Figure 5.4.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "Owing to the quadratic relationship between strain and magnetic field, the driving frequency presents nonlinearity, and the rate of the strain is twice the rate of the applied magnetic field (black lines in Figure 5.4). When a bias DC magnetic field, H0 , is applied, the strain becomes quasilinear around the bias magnetic field and the nonlinearity in the frequency is eliminated (grey, dashed lines in Figure 5.4).",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "H0 H e Time Time Time Time materials.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-5",
      "title": "5.2 Magnetostrictive materials: giant magnetostriction",
      "blocks": [
        {
          "id": "block-1",
          "en": "Magnetostrictive materials expand or contract in the presence of a magnetic field because of the magnetostrictive effect described in the previous section. Of all magnetostrictive materials, the most useful for the implementation of actuators is TerfenolD.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "TerfenolD exhibits a magnetostrictive deformation of the order of 1500-2000 ppm, far above that of other magnetostrictive materials at ambient temperature, although it is lower than that of terbium or dysprosium when driven below approximately 180 K. Magnetostrictive materials are smallstroke, largeforce, solidstate actuators.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "As a direct consequence of the low strain, a mechanical impedance matching (mechanical amplification stages) is required in most applications. Magnetostrictive materials are ferromagnetic substances with very high magnetic permeability. In these materials, the Curie temperature is the transition point at which the material becomes ferromagnetic.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Below the Curie temperature, they present spontaneous magnetization.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-6",
      "title": "5.2.1 Positive versus negative magnetostriction: effect of the load",
      "blocks": [
        {
          "id": "block-1",
          "en": "Magnetostrictive materials exhibit mechanical displacements as described qualitatively by Equation 5.4, with c1 = 0. In Equation 5.4, c2 may take either positive, c2 > 0, or negative values, c2 < 0, producing positive or negative magnetostriction respectively. Nickel is an example of a material exhibiting negative magnetostriction.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Iron will exhibit either positive or negative magnetostriction, depending on the crystallographic direction, P´erezAparicio and Sosa (2004). Positive magnetostriction causes an increase in the material's length and a reduction in the transverse dimensions, so that the volume remains constant.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "On the other hand, negative magnetostriction causes a reduction in the material's length accompanied by an increase in transverse dimensions (see Figure 5.5). (a) (b) H H increases length, while (b) negative magnetostriction results in contraction. In magnetostrictive materials, the converse effect is also found.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "When a mechanical load is applied, there will be a change in the magnetization state of the material. This effect tends to decrease the reaction force against the external stress: 1.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In negative magnetostrictive materials, a traction force will result in a reorientation of magnetic domains in a direction perpendicular to the applied force, that is, in the direction of the field that minimizes the reaction against the external force. In the presence of a compression force, the domains will tend to align in the direction of that force. 2.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The opposite situation occurs in a positive magnetostrictive material. Compression forces will result in domains aligned in a direction perpendicular to the force, and traction forces will align the domains in their direction. This effect can be seen schematically in Figure 5.6.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The magnetoelastic coupling in magnetostrictive materials can be used to improve the stroke characteristics of MS actuators. This is illustrated qualitatively in orientation of domains perpendicularly to the force. If such a material is mechanically preloaded, additional magnetic domains are left to be reoriented upon the application of an external magnetic field.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "This in turn results in an increased stroke. T T T T T T T T (a) (b) materials and (b) positive magnetostrictive materials. e Increasing preload H stroke.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-7",
      "title": "5.2.2 Y -Effect in magnetostrictive materials",
      "blocks": [
        {
          "id": "block-1",
          "en": "The Young's modulus, Y , in structural materials is a parameter used to define the material's stiffness. It is calculated as the ratio of change in stress to the corresponding change in strain in a given material. In transducing materials, and in particular in magnetostrictive materials, there is a coupling between the stiffness (Young's modulus) and the magnetization state of the material.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "As a consequence, the Young's modulus for magnetostrictive materials is not constant but is rather a function of the magnetization state. A change in the Young's modulus of a magnetostrictive material is commonly to be expected. Giant magnetostrictive materials undergo strains of the order of 1500-2000 ppm in response to changes in the magnetization state.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The strains that these materials can exhibit when a pure mechanical load is applied are much lower that those produced by magnetostriction. Consequently, we may expect the effective elastic modulus, as the ratio of stress to strain, to be considerably affected by magnetization.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The socalled Yeffect is defined as the relative change in Young's modulus upon application of an external magnetic field, H , with respect to Young's modulus at zero magnetic field, H = 0 (Flatau et al. (1998)): Y = YH − Y0 Y0 (5.8) It is worth noting that Young's modulus undergoes a change even where the strength of the magnetic field is higher than the saturation magnetization.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "This indicates that the Yeffect cannot be convincingly explained only on the basis of the reorientation of magnetic domains due to external fields.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The maximum reported magnitude of the Yeffect (Clark and Savage (1975)) is of the order of 1, that is Young's modulus is doubled as a consequence of the Property Units TerfenolD Hiperco PZT-2 Mechanical properties Density Kgm−3 9.25 · 10 3 8.1 · 10 3 7.5 · 10 3 Young's modulus, H = 0 GPa 26.5 206 110 Young's modulus, B = 0 GPa 55.0 - 60 Speed of sound ms−1 1690 4720 3100 Electrical properties Resistivity 10−6 cm 60.0 0.23 0.01 Magnetostrictive and electrostrictive properties Permeability - 9.3 75 1300 Curie temperature C 387 1115 300 Maximum strain ppm 1500-2000 40 400 Coupling factor - 0.72 0.17 0.68 d33 mA−1 , mV−1 1.7 · 10−9 - 300 · 10−12 Energy density Jcm−3 14-25 · 10−3 - 10 3 change in the magnetization state of the magnetostrictive material.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Moreover, since the resonance frequency of a magnetostrictive rod is f r ∝ √Y (5.9) it follows that the change in Young's modulus is related to the change in the resonant frequency squared. It will be seen in the coming sections that this property of magnetostrictive materials can be used in tunable vibration absorbers based on this technology. materials.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The table shows mechanical, thermal and electrical as well as electrostrictive and magnetostrictive properties.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-8",
      "title": "5.3 Design of magnetostrictive actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "The mechatronic design of magnetostrictive actuators typically addresses four main topics: 1. Improvement of stroke. Magnetostrictive actuators exhibit comparatively higher displacements than piezoelectric actuators.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The displacement can be optimized by making use of the load effect on the magnetization state of the material. 2. Linearized operation.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The constitutive equations of the magnetostrictive effect show a quadratic relationship between magnetic field and strain. Bias magnetic fields can be used to linearize this relationship. 3.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Pushpull operation. As the strain versus magnetic field is a quadratic relationship, both positive and negative magnetic fields lead to unidirectional displacements. Bias magnetic fields can also be used to achieve twodirectional displacement.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "4. Optimization of electric and magnetic circuits. The magnetostrictive actuator is characterized electrically as an inductive load.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The considerations are much as in the case of magnetorheological fluid (MRF) actuators. And similarly again, reluctance circuits must be optimized for efficient operation. All these topics are addressed in the coming sections.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "In addition, the issue of selecting the resonance frequency is analyzed as a typical procedure in developing tunable vibration absorbers from magnetostrictive actuators. The typical design configuration for magnetostrictive actuators is schematically depicted in Figure 5.8.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "This includes prestressing mechanisms (usually based on compression springs), bias magnetic field mechanisms (based on either permanent magnets or coils) and the magnetic circuit. Permanent magnets Magnetostrictive rod Magnetic field coil Reluctance circuit Parallel prestress spring Φ Φ/2 Φ/2 Magnetic field coil actuator.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-9",
      "title": "5.3.1 Design for improved stroke",
      "blocks": [
        {
          "id": "block-1",
          "en": "The stroke of giant magnetostrictive materials is of the order of 1500-2000 ppm for static applications. These figures can reach up to 3000-4000 ppm when considering resonant amplifications, Claeyssen et al. (2002).",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "TerfenolD rods generally consist of randomly oriented magnetic dipoles. The orientation of these dipoles upon the application of an external magnetic field produces magnetostrictive strain through magnetoelastic coupling. We noted earlier (see Section 5.2.1) that in positive magnetostrictive materials the application of compression loads causes magnetic dipoles to be oriented in the plane perpendicular to the load.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "This has the consequence of increasing the number of domains available for reorientation due to external magnetic fields, thus maximizing the stroke. In practice, prestressing mechanisms are introduced. The prestress on the magnetostrictive rod can be applied by external springs either in parallel or in series, but the former is most commonly used.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "A parallel prestressing mechanism is schematically depicted in Figure 5.8. Actuators with parallel prestressing are stiffer than actuators with series prestressing. Prestress values are typically of the order of 10-14 MPa.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "Prestressing also has the beneficial effect of keeping the alloy working under compressive loads. If traction loads are avoided, the fatigue limit properties of magnetostrictive actuators are improved.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-10",
      "title": "5.3.2 Design for linearized, push-pull operation",
      "blocks": [
        {
          "id": "block-1",
          "en": "For the sake of convenience, let us recall Equation 5.4, which describes the quadratic relationship between strain and stress for a magnetostrictive material. S ∝ c1H + c2H 2 Linearized operation is a desirable characteristic in any actuator as it makes for simplified control. A linearization technique equivalent to the one described in this section was described with reference to electrostrictive polymer actuators.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Indeed, an analogy was introduced between electrostriction and magnetostriction. If a bias magnetic field, H0 , is applied to the magnetostrictive material, a quasilinear relationship will, in theory, be found between relative strain, S, and relative magnetic field, H = H − H0 (see Equation 5.7).",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The bias magnetic field can be applied either by means of permanent magnets or through a coilbased constant magnetic field. In most common implementations, permanent magnets are used (see Figure 5.8). This makes for greater efficiency.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "When designing magnetic biasing concepts for magnetostrictive actuators, the issue of nonsymmetrical operation has to be addressed. In the event that the bias magnetic field is not centered in the magnetization curve of the magnetostrictive material, operation may be nonsymmetrical. This is illustrated schematically in tostrictive material will produce higher negative relative strain.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "H0 H e Time Time ment.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-11",
      "title": "5.3.3 Design of electric and magnetic circuits",
      "blocks": [
        {
          "id": "block-1",
          "en": "Magnetostrictive actuators are characterized by exhibiting electrical inductive loads. This is mainly because coils are used to set up the magnetic field to drive the actuator. As such, the electrical driving requirements for MS actuators are equivalent to those of MRF actuators.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "We decided to concentrate on the analysis of electrical circuits for inductive loads in the chapter devoted to MRF actuators, and the reader is therefore referred to Section 6.2.3. To establish the required magnetic field in the magnetostrictive material, the magnetic flux has to be guided to the active area.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Again, this concept is implemented similarly in MRF actuators, and the basics of magnetic circuit design are analyzed in detail in Section 6.2.4. The main difference between MS and MRF actuators as regards the magnetic circuit design lies in the use of permanent magnets in MS actuators to set up the bias magnetic field. The best configuration in terms of efficiency has been analyzed in detail by Janocha (2001).",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Three elements are coaxially implemented to drive MS actuators: the MS material (T), the coil (C) and the permanent magnets (M). The specific configuration, in terms of the relative position of these three elements, has direct consequences for the homogeneity of the field in the MS material and for the attainable field strength.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "Optimum configurations are those in which the MS material (T) occupies the inner part of the actuator and the permanent magnets are placed in the outermost part of the actuators, that is, what is known as the TCM configuration (see Figure 5.8).",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-12",
      "title": "5.3.4 Design for selected resonance characteristics",
      "blocks": [
        {
          "id": "block-1",
          "en": "A magnetostrictive actuator, as a secondorder system, is characterized by a first resonance frequency at: 2πfr = √ Keff Meff (5.10) where Keff is the effective stiffness of the actuator and Meff is the effective mass of the system.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The effective stiffness of the actuator will, generally speaking, be a function of the geometry and material characteristics of the magnetostrictive rod, KR , and of the prestress mechanism, KP , being implemented.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "If a cylindrical configuration for the magnetostrictive rod is assumed, its stiffness can be expressed as KR = Y Aeff Leff (5.11) In Equation 5.11, Y is the Young's modulus of the material and Aeff and Leff are the effective crosssectional area and length of the rod respectively.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The effective stiffness of the actuator, Keff , will be greater than the stiffness of the magnetostrictive rod if the prestressing mechanism is placed in parallel to the magnetostrictive material, Keff = KR + KP . On the other hand, where the prestress mechanism is in series, the effective stiffness of the actuator is less than that of the magnetostrictive rod, 1/Keff = 1/KR + 1/KP .",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The combination of the magnetostrictive material's Young's modulus (typically lower than that of piezoelectric materials) and the prestressing mechanisms leads to lower frequencies in magnetostrictive than in piezoelectric resonators. This was one of the distinctive characteristics that prompted the adoption of the magnetostrictive technology in Sonar applications.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The resonance frequency of the system can be adapted to the application by careful selection of the rod's geometry and the prestressing mechanism. If a dynamic adaptation is required (as in the application of MS actuators in tunable vibration absorbers), the Yeffect must be used. As noted earlier, the Yeffect produces up to 100% variation in the Young's modulus of magnetostrictive materials.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "This in turn results in changes of up to 40% in the resonance frequency so that tuning can be effected in response to structural modal changes in vibration absorption applications.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-13",
      "title": "5.4 Control of magnetostrictive actuators: vibration absorption",
      "blocks": [
        {
          "id": "block-1",
          "en": "If there is one actuator technology that is almost exclusively linked to a single application, that is the magnetostrictive actuator, the application is active structural vibration control. Almost all the applications described in the literature on magnetostrictive actuators are related in one way or another to vibration suppression mechanisms.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Magnetostrictive actuators deliver highoutput forces and relatively high displacements (compared to other emerging actuator technologies) and can be driven at high frequencies. These characteristics make them suitable for a variety of vibration control applications.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Other actuator technologies described in this book have been proposed in vibration control applications, in particular, piezoelectric actuators and shape memory actuators for active control and electroand magnetorheological actuators in semiactive control.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Semiactive vibration control is analyzed in detail in the context of ER and MR actuators (see Chapter 6.) In this section, we address the topic of active vibration control as the paradigmatic application of magnetostrictive actuators. A thorough analysis of the topic would require a complete monograph, and so the discussion here is confined to a descriptive level.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "For further reading and analysis, the reader is thus referred to one of the various books available on the topic. Most of the strategies discussed here are applicable to other actuator technologies, and there is frequent crossreferencing in the following paragraphs.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "A whole section is devoted to the topic of smart structures as a concept intrinsically linked to smart actuator technologies, and in particular to SMA, piezoelectric and MS actuators.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-14",
      "title": "5.4.1 Active vibration suppression",
      "blocks": [
        {
          "id": "block-1",
          "en": "Passive tuned vibration absorption is a classical approach to reducing undesired vibration in a structure. It consists in the use of a mechanical springmassdamper oscillator whose resonance frequency is tuned to the frequency at which structural vibration needs to be reduced. It has been successfully applied since the late1800s (Flatau et al.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "(1998)) in the context of narrowband attenuation of undesired oscillations (see Figure 5.10a). The development of actuator technologies has opened up the possibility of structural active vibration control. However, traditional actuator technologies impose various limits on the applicability of active vibration control: 1.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Limited actuator dynamics. Limited dynamics means that vibration control is only possible in narrowband. 2.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Difficult integration. Traditional actuators impose lumped systems as they cannot readily be integrated in the structure. 3.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "Need for external sensors. Traditional actuators are not susceptible of incorporating sensor functions, and so the smart actuator concept is hard to apply. The advent of new actuator technologies extends the domain of vibration control to broadband and to responsive structures with integrated (smart) actuators.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Returning to the example of the tuned vibration absorber in Figure 5.10a, it is f r f r M M fr fr Frequency Impedance Frequency Impedance (a) (b) strictive tunable vibration absorber. possible to implement the concept of a 'tunable' vibration absorber based on magnetostrictive actuators.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "In this new concept, the Yeffect can be exploited to develop a vibration absorber whose resonant frequency can be tuned in response to structural modal variations (see Figure 5.10b and a more detailed description on page 190). Active vibration control can be approached in feedback and feedforward control strategies. Feedback systems are further classified into active damping control and modalbased feedback control.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The following paragraphs briefly describe the three approaches and outline the main characteristics. Feedforward vibration control Feedforward vibration control strategies can only be implemented in the case of known disturbances, or in the event of having a signal correlated to the disturbance.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Σ Σ Gd(s) G(s) Adaptive filter + _ + + r(s) y(s) d(s) and output drives an adaptive filter to generate a second disturbance to cancel the primary one. The underlying idea is to generate a second disturbance such that when applied to the plant, it cancels the effect of the primary disturbance. In this approach, the reference signal (correlated to the disturbance) is filtered and applied to the plant.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "The error signal supplied by a sensor is used to adaptively tune the filter parameters so that the error is minimized. A block diagram of this vibration control approach is shown in Figure 5.11. The feedforward approach only guarantees vibration reduction at the sensor's location and so must be considered a local method.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "When sensor and actuator are not collocated, an estimate of the transfer function between sensor and actuator is required to compute the error signal that drives the filter parameter adaptation process. Since this process is based on an adaptive algorithm, it is robust and allows higher frequency band attenuation than feedback approaches.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "Modalbased feedback vibration control A general feedback control loop might be represented by the block diagram in bounded, H (s) is a feedback compensator, r(s) is a reference value of any plant variable (position, velocity) and d(s) is an undesired disturbance that will affect the output y(s).",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "The transfer function, F r (s), between reference input, r(s), and plant output, y(s), is readily available: F r (s) = y(s) r(s) = H (s)G(s) 1 + H (s)G(s) (5.12) The transfer function, F d (s), between the disturbance d(s) and the system's output can be expressed as F d (s) = y(s) d(s) = 1 1 + H (s)G(s) (5.13) Σ Σ H(s) G(s) + _ + + r(s) y(s) d(s) It is evident that, when H (s)G(s) 1, the output perfectly tracks the reference, that is, F r (s) → 1, and the effect of the disturbance on the output is negligible: H (s)G(s) 1 ⇒ y(s) ≈ r(s) and y(s) d(s) ≈ 0 (5.14) The modalbased feedback vibration control approach is intended to provide perfect tracking of the plant's reference value while ensuring high disturbance rejection.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "According to Preumont (1997), irrespective of the method used to find the appropriate compensator, H (s), the following characteristics are common to all modal reference feedback control systems: 1. They always depend on accurate models of the plant being controlled, and the bandwidth of the control system depends on the accuracy of the model.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "Low accuracy produces spillover, which is a reduced damping of residual modes. 2. Rejection of the disturbance in the control bandwidth leads to increased disturbance outside the control range.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "3. A very high sampling frequency is required in digitally implemented control loops (of the order of 10 times the maximum control frequency). Active damping The objective of active damping control is to increase the damping of some of the vibration modes of a structure while leaving the system's transfer function unaffected outside the resonance modes.",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "Ideally, the closedloop transfer function F (s) in Equation 5.12 would look the same as G(s) out of resonance but would be more damped (the amplitude reduced) close to the resonance frequency. According to Preumont (1997), active damping control can be achieved without a model of the structure and provide guaranteed stability under two conditions: 1. Sensors and actuators are collocated.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "In practice, this means that the sensor directly provides a measure of the action of the actuator. This is an important feature when considering smart structures (see Section 5.4.2). 2.",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "Actuator and sensor have perfect dynamics. Perfect dynamics for sensor and actuator will produce infinite bandwidth rejection. The active damping system will have finite bandwidth to the extent that sensor and actuator have limited dynamics, which is always the case.",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "The condition of collocated sensors and actuators in an undamped structure produces alternating poles and zeros on the imaginary axis of the splane. If the system damping is moderately increased, the alternating pattern of poles and zeros shifts slightly toward the negative real half plane, guaranteeing stability.",
          "zh": ""
        },
        {
          "id": "block-21",
          "en": "Several active damping strategies can be envisaged (Preumont (1997)): velocity feedback, acceleration feedback, lead compensator position feedback and force feedback. Here, we briefly analyze active damping through velocity feedback, since this is of particular interest for active damping control implementations in smart structures. Let us consider the feedback loop in Figure 5.12.",
          "zh": ""
        },
        {
          "id": "block-22",
          "en": "In order to simplify the derivation, we will consider an undamped structure with the following governing equation: [Ms2 + K] x(s) = f (s) + Bu(s) (5.15) Since we are considering collocated sensors and actuators, the following equation applies: sy(s) = B T x(s) (5.16) Moreover, in the case of a velocity feedback law, the control action will be u(s) = −Dsy(s) (5.17) If all three Equations 5.15-5.17 are combined, this gives [Ms2 + BDB T s + K] x(s) = f (s) (5.18) The control action on the plant results in a viscously damped closedloop transfer function.",
          "zh": ""
        },
        {
          "id": "block-23",
          "en": "As discussed in the next section, in applications of piezoelectric actuators in smart structures, direct electrical current feedback can be considered equivalent in approach to direct velocity feedback and produces active structural damping. 'Tunable' vibration absorbers Tuned vibration absorbers were mentioned earlier as a successful classic approach to vibration attenuation.",
          "zh": ""
        },
        {
          "id": "block-24",
          "en": "As noted then, a springmassdamper mechanism is tuned so that its resonance frequency matches the particular frequency for which vibration reduction in a structure is desired. The tuned vibration absorber is mounted on the structure whose vibration is to be attenuated.",
          "zh": ""
        },
        {
          "id": "block-25",
          "en": "When the structure is excited at this particular frequency, the vibration is absorbed by the tuned mechanical system and the structure exhibits antiresonance (zero amplitude vibration) behavior (see Figure 5.10a). Tuned vibration absorbers are limited to singlefrequency vibration attenuation. If multifrequency attenuation is required, additional absorbers must be used.",
          "zh": ""
        },
        {
          "id": "block-26",
          "en": "Magnetostrictive materials exhibit the Yeffect (see Section 5.2.2). This phenomenon produces changes in Young's modulus as the magnetization state of the material is modified. Since the resonance frequency of a secondorder system is proportional to the square root of the Young's modulus, fr ∝ √Y , the Yeffect can be used to effectively change the resonance frequency of a magnetostrictive material.",
          "zh": ""
        },
        {
          "id": "block-27",
          "en": "This in turn can be used to implement a \"tunable\" vibration absorber. This is the way that an actuator with a seismic mass attached to it is developed (see the schematic representation in Figure 5.10b).",
          "zh": ""
        },
        {
          "id": "block-28",
          "en": "By changing the magnetization state when an external magnetic field is applied to the magnetostrictive material, the resonance frequency of the tunable massspringdamper magnetostrictive system will be modified and can be adapted to requirements.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-15",
      "title": "5.4.2 Smart actuators and smart structures",
      "blocks": [
        {
          "id": "block-1",
          "en": "The most distinctive feature of smart actuators is their intrinsic ability to perform simultaneously as sensors and actuators. As was discussed in Chapter 1, this property is a product of the transducing characteristics of various materials. The distinctive feature of smart structures is the high degree to which sensors and actuators are integrated as constitutive components of the structure.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The integration of sensor and actuator functions results in functional and active structures. Owing to the intimate combination of sensor, actuator and structural functions, they can perform the following roles: 1. Structural health monitoring.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Embedded smart actuators can be used to assess the condition of a structure, for instance, to detect increasing loss of stiffness because of growing cracks. 2. Failure prevention.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Upon detection of increasing loss of stiffness or in the event of overloading, smart actuators can be used to temporarily stiffen the structure. 3. Integrity protection.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "Smart actuators can generally provide reactive action following any undesired circumstance, for instance, when excessive vibration is sensed. Of the various actuator technologies discussed in this book, SMA actuators, piezoelectric actuators and magnetostrictive actuators are the three best suited to develop the smart actuator and smart structure concepts.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Their properties in this regard are briefly reviewed in the following paragraphs. Shape memory alloy actuators in smart structures SMA actuators can both sense the status (position) of and deliver mechanical energy to the structure in which they are embedded. They can be readily embedded in structures to provide functionality.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Three possible actuation mechanisms are envisaged: 1. Stiffening through control of the Young's modulus. The Young's modulus of SMAs increases significantly upon transformation from martensite to the parent phase.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "This can be used to stiffen the structure transitorily. The stiffening process can be used, for instance, to shift the resonance frequency of the structure and avoid possible resonance vibration in response to external excitation. 2.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Generation of strain. The shape memory effect can be used to exert a stress on the structure and strain it. This can also be readily used to change the resonance properties of the structure.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "3. Energy dissipation through the hysteretic pseudoelastic effect. The pseudoelastic effect in SMAs (see Section 3.1.2) is characterized by a hysteretic dissipation phenomenon.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Pseudoelasticity can be used to increase the apparent damping of the structure. The first two actuation mechanisms can be implemented in response to some monitoring action that may also be accomplished by the SMA, this time performing as a sensor (see Section 3.3.3). The third mechanism is intrinsically passive.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "Piezoelectric actuators in smart structures Piezoelectric actuators were extensively discussed in Chapter 1. Like SMA actuators, they can perform both as sensors and as actuators.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "Unlike SMA actuators, piezoelectric actuators cannot be used to concomitantly impose and sense the same output variable (in Chapter 1, a method based on unbalanced bridge circuits was introduced as a possible approach to estimate this output variable), but they can sense the conjugate variable to the imposed one.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "When discussing piezoelectric actuators, we pointed out (see Section 2.5.2) that current drawn is, in principle, proportional to the actuator's velocity.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "For the sake of convenience, let us recall these relationships here: l ≈ Q v p ≈ i ap ≈ di/dt According to the above equations, if control is achieved by feeding the current drawn directly back in a negative control loop, the result is equivalent to a direct velocity feedback approach. Direct velocity feedback, in a collocated sensor/actuator pair, leads to stable active damping control schemes (see section 5.4.1).",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "Therefore, since a piezoelectric smart actuator is intrinsically collocated, this approach greatly facilitates the implementation of active vibration control in smart structures. Also in Section 2.5.2, we discussed how the electrical boundary conditions applied to a piezoelectric actuator can result in programmable actuator stiffness.",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "Programmable stiffness, like the first actuation mechanism in SMA actuators, can be applied for voluntary stiffening in response to monitoring functions. Two actuation approaches can be envisaged for piezoelectric actuators: 1. As linear actuators.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "In this approach, they replace conventional actuators in controlling structure parameters. As noted earlier, this actuation approach is not suitable for development of the smart structure concept as sensor and actuator functions are lumped rather than distributed. We need discuss this scheme no further.",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "2. As surface bonded actuators. The piezoelectric material is laminated and bonded in thin layers to the structure (see Figure 5.13).",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "This can serve for the application of either axial or bending loads. Both actuation approaches are most commonly used to enhance the damping characteristics of the structure to which they are attached (first case) or embedded (second approach). As regards surfacebonded actuators, in controlling damping, again there are two possible strategies: 1.",
          "zh": ""
        },
        {
          "id": "block-21",
          "en": "Passive damping. In this approach, the actuator is bonded to the structure and is electrically connected to a passive RLC circuit. The actuator acts as a voltage source when driven by the structural vibrations through the direct piezoelectric effect.",
          "zh": ""
        },
        {
          "id": "block-22",
          "en": "The electrical energy is dissipated at the resistor. This results in an apparent increase of structural damping. Structure Piezoelectric actuator R C circuit for passive damping.",
          "zh": ""
        },
        {
          "id": "block-23",
          "en": "Some selectivity in the damping process can be achieved by tuning the RLC characteristics of the passive circuit to the target frequency (see Figure 5.13). 2. Active damping.",
          "zh": ""
        },
        {
          "id": "block-24",
          "en": "In this mode, the piezoelectric actuators are integrated in a modal reference feedback control strategy, in an active control strategy or in a feedforward control strategy. In any of these control algorithms, the piezoelectric actuator can perform as a smart actuator, that is, sensing and actuating concomitantly.",
          "zh": ""
        },
        {
          "id": "block-25",
          "en": "Magnetostrictive actuators in smart structures Magnetostrictive actuators are best suited for active vibration control of structures. Moreover, they are a typical example of a smart actuator. However, they are not suitable for integration in any type of structure.",
          "zh": ""
        },
        {
          "id": "block-26",
          "en": "In particular, planar configurations (similar to bonded laminate piezoelectric actuators (see Figure 5.13) are not ideal for magnetostrictive actuators. This is due to the difficulty in creating a uniform magnetic field for such a planar configuration.",
          "zh": ""
        },
        {
          "id": "block-27",
          "en": "Magnetostrictive actuators are more suitable for integration in discrete structures like threedimensional trusses and structures with structural cables (bridges or buildings). There, they can take the place of passive structural elements and thus offer the possibility of cancelling out structural vibrations (see Bartlett et al. (2001)).",
          "zh": ""
        },
        {
          "id": "block-28",
          "en": "The issue of active control of truss structures has been comprehensively studied by Preumont (1997). We will not go into more detail here; for more details, the reader is referred to this or any other book on the subject. Magnetostrictive actuators can be used in the context of vibration suppression in smart structures, in three different modes: 1.",
          "zh": ""
        },
        {
          "id": "block-29",
          "en": "Stiffeners 2. Dampers 3. Active elements.",
          "zh": ""
        },
        {
          "id": "block-30",
          "en": "Stiffeners make use of the Yeffect, which allows a twofold increase in the actuator's stiffness. By changes induced in the structural stiffness of the structure in which they are integrated, the resonance frequency can be modified to prevent resonance amplification following external excitation. Magnetostrictive actuators can also be used as dampers in active damping control approaches.",
          "zh": ""
        },
        {
          "id": "block-31",
          "en": "Active damping control was already introduced in previous sections. The role of the actuator in this control scheme is to enhance the structural damping by means of direct velocity feedback or similar approaches. Finally, they can be applied in active vibration cancellation control schemes, both feedforward and feedback.",
          "zh": ""
        },
        {
          "id": "block-32",
          "en": "In this approach, the MS actuator will provide the necessary secondary disturbance to cancel out vibrations. As in the case of piezoelectric or shape memory actuators, both sensing and driving functions can be implemented concomitantly. This is discussed in more detail in the next section.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-16",
      "title": "5.4.3 Combined sensing and actuation",
      "blocks": [
        {
          "id": "block-1",
          "en": "We described the reversibility of the magnetostrictive effect in previous sections. Two different phenomena, the Villari effect and the Matteuci effect, have been defined as transduction between force and torque (energy in the mechanical domain) to the magnetic domain. Owing to the existence of these converse transduction processes, magnetostrictive transducers can be configured as sensors.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Sensors based on either of the two above effects have been proposed to monitor various different physical variables. They are classified in three categories (see Dapino et al. (2002)): 1.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Passive sensors. These rely on the transduction process itself, that is, the change in the material's magnetic properties in response to environmental changes. 2.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Active sensors. These sensors use the magnetostrictive material in an active way. They are excited in a known manner, and this facilitates measurement of some properties of the material that change with an external physical variable.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "3. Combined sensors. Here, the magnetostrictive transducer is used in combination with other materials.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The magnetostrictive material is used to excite or alter another material which will, in turn, allow the target property to be measured. In the context of concomitant sensing and actuation based on magnetostrictive materials, we are mainly interested in passive magnetostrictive sensors, that is, in the concomitant use of direct and converse effects for simultaneous sensing and actuation.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Let us recall here the linearized version of the constitutive equations (Equation 5.3) for the magnetostrictive effect: S = c H T + dH B = ¯dT + μ T H (5.19) Equation 5.19 describes the coupling between magnetic and mechanical variables in the direct and converse magnetostrictive effect.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The first equation describes the transducer as an actuator, that is, the resulting displacement is a function of the applied magnetic field strength. It further includes the coupling between mechanical variables, that is, the displacement resulting from mechanical load. The second part of the constitutive equation describes the transducer in the role of sensor, relating the mechanical load to the magnetic induction.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Again, this part includes the coupling between the magnetic field variables, that is, the applied magnetic field strength results in magnetic induction. The two equations can be combined by solving the first part for H and substituting it in the second part to yield B = T [ ¯d + μ T c H d ] + μ T d S (5.20) Equation 5.20 describes the sensor model for the magnetostrictive transducer.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "It formulates the relationship between the resulting magnetic induction in the magnetostrictive material, B, the applied force, T , and displacement, S. Faraday's law can be used to determine the magnetic induction in the material.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "This states that the voltage induced in a coil wrapped around the magnetostrictive material is V = NA dB dt = NA dT dt [ ¯d + μ T c H d ] + NA dS dt μ T d (5.21) where N is the number of turns in the coil and A is the crosssectional area.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "Equation 5.21 indicates that the voltage in such a sensor configuration is proportional to the rate of change of force (jerk) and to the rate of change of displacements (velocity) in the magnetostrictive material. It can be demonstrated (Dapino et al.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "(2002)) that the magnetostrictive process is fully reversible and ¯d = d, and that the term in Equation 5.21 corresponding to the velocity is one order of magnitude smaller than the terms relating to force.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "Therefore, for harmonic excitations, a model for the force measured by the transducer would be T = V NAω [ 1 d + μ T c H d ] (5.22) The design of magnetostrictive transducers as sensors is equivalent to their design as actuators. Moreover, as we assumed that ¯d = d, this implies that if the transducer is designed for efficient operation as an actuator, it will be a highsensitivity sensor.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "These are commonly used in sonar transducers where a transducer designed as an efficient emitter also yields the best results as a receiver. For combined sensor and actuation operation of magnetostrictive actuators, the bridge circuit configuration as discussed in Section 1.5 can be implemented.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "To do this, the linearized constitutive equations for the magnetostrictive effect, Equation 5.19, must be rewritten in line with the electriccircuit analogy as discussed in Chapter 1. We commence the process by multiplying the sensing part of Equation 5.19 by the actuator's crosssectional area A.",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "Considering that = B · A, it follows that = ¯dT A + μ T H A (5.23) Now, if we take the time derivative of Equation 5.23, multiply the equation by N (the number of turns in the MS actuator coil) and note that V (t) = N d /dt and H = I (t)N , we obtain V (t) = N ¯d dT dt A + μ T N 2 A l dI dt (5.24) The Laplace transform of Equation 5.24 can now be developed.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "In addition, if we take into account lowfrequency excitation of the transducer, we can assume that the material's deformation obeys Hooke's law (T = Y ε). Given these assumptions, we can write V (j ω) = N ¯d AY l U (j ω) + j ωLI (j ω) (5.25) where Y is the Young's modulus and l is the length of the magnetostrictive actuator.",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "A simple inspection of Equations 5.25 and 1.5 will show that Ze = j ωL, that is, the blocked impedance of the magnetostrictive actuator (which is required to complete the second branch of the bridge circuit) is simply the inductance of the solenoid (with the MS material as the core) used to drive the MS actuator (see A similar approach can be used to derive the second part of Equation 1.5.",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "It can be shown (Pratt (1993)) that this produces F (j ω) = AY l 1 j ω U (j ω) + AY dN I (j ω) (5.26) If the solenoid inductance is used in the second branch of the bridge circuit, the voltage across the bridge ought to be proportional to the actuator's velocity. However, this is not the case, and the reason is that the blocked impedance is nonlinearly dependent on the current drawn.",
          "zh": ""
        },
        {
          "id": "block-21",
          "en": "Consequently, concomitant sensing and actuation with MS actuators is difficult to achieve, although some authors (Pratt (1993)) have reported positive results in narrow frequency bands around the actuator's mechanical resonance.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-17",
      "title": "5.5 Figures of merit of MS actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "This section analyzes the performance characteristics of magnetostrictive actuators. Chapter 7 is devoted entirely to a comparative analysis of all emerging actuator MS actuator Z e = jwL V v V R R as a sensor. technologies, but here we pay particular attention to a comparative analysis of MS and piezoelectric actuators because these have the closest figures of merit.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In this section, we also give some indications about scaling trends in MS actuators.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-18",
      "title": "5.5.1 Operational range",
      "blocks": [
        {
          "id": "block-1",
          "en": "Static performance Magnetostrictive and piezoelectric stack actuators can be classified together as highforce devices. The absolute value of force in these actuators is in the kilonewton range (F ≥ 1 kN). Relative forces (for instance as compared to crosssectional area or size), nevertheless, become several orders of magnitude lower than relative forces in piezoelectric actuators.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "This is mainly due to the accompanying components required to set up bias magnetic fields or to prestress the magnetostrictive actuator. While piezoelectric stack actuators can be directly applied to drive the load, MS actuators require coils to set up the magnetic field and, in most implementations, permanent magnets to apply bias fields.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Stroke in MS actuators is of the order of 1500-2000 ppm for static applications and close to 4000 ppm where resonance amplification is used in dynamic applications. In absolute value, the displacement is limited in practice to some tenths of a millimeter.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Stroke is higher in MS actuators than in piezoelectric stack actuators, but the performance of piezoelectric stack and MS actuators is very similar in terms of the relative stroke (for instance, with respect to the length of the actuator). Dynamic performance The energy density of magnetostrictive actuators is in the range of W V ≤ 10−3 J/cm3 and must therefore be considered low.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "If only the magnetostrictive material were considered, the energy density would be closer to that of piezoelectric actuators, but, here again, the bulky accompanying elements cause reduced work density. The bandwidth of MS actuators is high, f ≥ 1 kHz. Together with piezoelectric stack actuators and some piezoelectric multimorph drives, they have the highest frequency bandwidth of all emerging actuator technologies.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "MS drives are driven at lower frequencies than piezoelectric stack actuators. There are two main reasons for this: 1. Lower Young's modulus.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "MS materials exhibit a lower Young's modulus than piezoelectric materials (two to three times lower). This results in lower resonance frequency of MS materials, which in turn limits the maximum driving frequency for actuators based on this technology. 2.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "Eddy currents. Changing magnetic fields induce electrical currents in the magnetostrictive materials; the higher the excitation frequency, the stronger are the currents induced. This imposes a practical limit on the maximum frequency attainable with MS actuators.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Power density in MS actuators is a result of the two previous figures of merit. Since both energy density and bandwidth are lower in MS actuators than in piezoelectric drives, absolute power density values are low, of the order of 1 W/cm3 , which is up to three orders of magnitude lower than in piezoelectric stack actuators.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "Other performance characteristics The temperature range of operation for MS actuators is limited in practice by the material's Curie temperature. The Curie temperature for TerfenolD is close to 380 ◦C, which is higher than the Curie temperature for lead zirconate titanate (PZT) materials. Driving voltages for MS actuators are lower than those for piezoelectric stack actuators.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Power supply for this technology is readily available from several manufacturers. Unfortunately, the MS material itself is much less readily available. While PZT materials can be found in several grades, the only available MS material grade is TerfenolD.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-19",
      "title": "5.5.2 Scaling laws for magnetostriction",
      "blocks": [
        {
          "id": "block-1",
          "en": "Scaling laws for magnetostrictive actuators are similar to scaling laws for Piezoelectric stack actuators. The force in MS actuators is proportional to its crosssectional area and hence is proportional to the square of the dominant dimension, F ∝ L2 . scaling trends for MS actuators.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Figures of merit MS actuators Force, F High, ≥103 N Displacement, S Up to 2000 ppm Work density, W V ≈10−4 -10−3 J/cm3 Power density, P V ≈1 W/cm3 Bandwidth, f ≥103 Hz Efficiency, η Coupling factor 0.75 Scaling trends Force F ∝ L2 Stroke S ∝ L Work per cycle W ∝ L3 Energy density W V ∝ L0 Bandwidth f ∝ L−2 Power density P V ∝ L−2 The stroke is usually given as a percentage of the actuator's length; thus, since the actuator's dimensions are reduced linearly, so is the stroke, S ∝ L.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The work per cycle can be readily derived from the force and stroke, that is, W ∝ L3 . The ratio of work per cycle to the actuator volume is the energy density, which scales as W V ∝ L0 . The time constant of an MS actuator can be estimated from the following expression: [F ] = [m][a] = [L3 ] [L] [T 2 ] ⇒ τ ∝ L2 (5.27) Since frequency bandwidth and time constant are inversely proportional, it follows that f ∝ L−2 .",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "As a result, the power density scales as P V ∝ L−2 . laws. A more detailed comparison with other emerging actuator technologies and traditional drives can be found in Chapter 7.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-20",
      "title": "5.6 Applications",
      "blocks": [
        {
          "id": "block-1",
          "en": "Case study 5.1: Active vibration control of helicopter blades based on MS actuators It is recognized that the full development of helicopter aviation is seriously limited by the inherent high vibration levels. The vibration is due mostly to the interaction of each blade with the wake of preceding blades.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The problem of high vibration levels in helicopters is noise and to a great extent the limitation they impose on speed and load capacity. Vibration is also an important problem in that it causes accelerated pilot and passenger fatigue and, in some instances payload damage and frequent maintenance requirements (Fenn et al. (1996)).",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Active vibration control of helicopter seems a promising strategy for improvement of vibration levels. In this context, conventional actuation mechanisms based on hydraulic and electric motors are less attractive than approaches based on certain emerging actuator technologies.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "This Case Study examines the application of Magnetostrictive actuators to active vibration control of helicopter blades, which may be regarded as one of the paradigmatic applications of MS actuators. An individual blade control (IBC) system includes all the components usually found in motion control systems: sensors, electronics, controls and actuators.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "All the technologies required for IBC are well developed and ready for implementation. However, this is not true of actuators. In general, IBC systems can be classified into two categories: continuous active control of blade twisting (see Figure 5.15b) and discrete actuation of a servocontrolled surface (typically a flap or the blade tip; see Figure 5.15b).",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "MS actuator MS actuator Flaps for vibration control Distributed PZT actuators for continuous blade twist (a) (b) controlled flaps and (b) continuous active control of blade twisting. In continuous active control of blade twisting, the smart structure concept is commonly used. In this case, distributed inducedstrain actuators produce continuous blade deformation in response to control actions.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "In the case of discrete actuation, flaps are used to generate localized aerodynamic forces. The smart structure approach to blade vibration control has been implemented using PZTdistributed piezoelectric ceramics actuators, lead magnesium niobate (PMN) electrostrictive actuators and TerfenolD magnetostrictive actuators. However, it has been shown (Fenn et al.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "(1996)) that approaches based on continuous blade twisting impose power requirements several orders of magnitude higher than discrete active control systems. The particular requirements on actuators to achieve discrete (flapbased) vibration control of helicopter blades depend on innumerable factors, in particular, the ratio of blade length to width and the length of the control flaps.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "In general, MS actuators meet the actuation requirements for this application. In addition, MS actuators provide allelectric operation (thus simplified requirements as compared to hybride.g., hydraulicactuators), low mass, low voltage, insensitivity to centripetal acceleration, and simplicity and reliability.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "When implemented in flapbased blade vibration control approaches, MS actuators can provide the required angular displacement of the flap with very compact solutions. Case study 5.2: Prototype magnetic shape memory actuators A new family of magnetostrictive materials, in which magnetostriction is twin induced, has recently been emerging as a highly promising technology.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "These are known as ferromagnetic shape memory alloys or magnetic shape memory alloys (MSMAs) and were introduced in Chapter 1. In the first place, since they exhibit twininduced strain, the stroke level is much higher (equivalent to the stroke level in thermally triggered SMAs) than in traditional Joule effectbased magnetostrictive materials.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "In the second place, since the martensitic transformation in MSMA actuators is magnetically triggered, they present a much faster response than thermally triggered SMAs. Consequently, MSMAs share the good stroke characteristics of SMA actuators and the fast operating range of MS actuators. The technology is currently being explored in the areas of materials research and of operation and application.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "One possible limiting factor in the development of the technology is the low availability of the material. Currently, MSMAs are only commercialized by Adaptamat Ltd., a company located in Finland (http://www.adaptamat.com) that markets material samples for research activities and is currently developing the first prototype actuators based on this technology.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "This case study describes the first steps in the development of prototype MSMA actuators by Adaptamat Ltd. Here we discuss the development of three actuator prototypes spanning various force, stroke and operational frequency ranges. The information and pictures in this section are courtesy of E.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "Pagounis, Adaptamat Ltd. The first prototype is the A5-2 actuator model from Adaptamat (see force (blocked force in the order of 3 N) actuator. The basic configuration of MSMA actuators was discussed in Chapter 1.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "Basically, it consists of a MSMA stick aligned with the actuator direction. The magnetic field is set up perpendicular to the actuation direction. This triggers the reorientation of twin variants and initiates the actuation process.",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "In the case of the A5-2 actuator, the active MSMA stick comprises three active sections of 0.52 × 2.4 × 28 mm so as to achieve a large overall stroke. The magnetic field is set up in this prototype by means of two coils, which can be electrically connected in parallel or in series.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "The actuator provides a fast drive with an electrical winding time constant of the order of 5 ms and a maximum operational frequency of 300 Hz. The second prototype in this section is the smallstroke (maximum displacement 0.6 mm at 200 Hz), lowforce (3 N) A06-3 actuator (see Figure 5.17). The basic configuration is similar to the previous case.",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "Again, two coils are used to set up the magnetic field. This time a single MSMA stick (0.55 × 2.2 × 20 mm, with an active length of 15 mm) is used, resulting in a lower stroke. The A06-3 prototype gives a faster drive than the previous example.",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "The maximum attainable operational frequency is 600 Hz. It is also a much smaller courtesy of E. Pagounis, Adaptamat Ltd.) courtesy of E.",
          "zh": ""
        },
        {
          "id": "block-21",
          "en": "Pagounis, Adaptamat Ltd.) graph courtesy of E. Pagounis, Adaptamat Ltd.) actuator, weighing approximately 50 g as compared to the A5-2 prototype (which weighs around 500 g). The following example illustrates the development of highforce, lowstroke actuators based on MSM materials: the A1-2000 actuator prototype from Adaptamat Ltd (see Figure 5.18).",
          "zh": ""
        },
        {
          "id": "block-22",
          "en": "One of the current limiting factors in MSMAs is an intrinsically low Young's modulus (approximately three times lower than the Young's modulus of TerfenolD) and high required magnetic fields (approximately twice those required in TerfenolD).",
          "zh": ""
        },
        {
          "id": "block-23",
          "en": "It is thought that this could be a serious impediment to the development of highforce MSMA actuators (since high forces require active material with a high crosssectional area, which in turn requires a highly focused magnetic field over a large volume). The A1-2000 prototype is an illustration example of an MSMAbased highforce actuator.",
          "zh": ""
        },
        {
          "id": "block-24",
          "en": "In order to attain the highforce level (2 kN), 48 MSMA sticks are used mechanically in parallel. The dimensions of each stick are approximately 2.5 × 5.0 × 30 mm (with an active length of 25 mm, which means that the working strain is of the order of 40,000 ppm). Each stick has an active crosssectional area of 12.5 mm2 , which makes a total active area of 600 mm2 for the actuator.",
          "zh": ""
        },
        {
          "id": "block-25",
          "en": "The actuator's very large dimensions result make for an overall weight of 31 kg. Consequently, the operational frequency for this highforce drive is of the order of 100 Hz (and hence much lower than the previous examples, as one would expect). These examples illustrate the development of MSMA actuators.",
          "zh": ""
        },
        {
          "id": "block-26",
          "en": "They are claimed to be applicable to the field of fluidics (for the implementation of valves, pumps and injectors), vibration analysis and control (e.g. shakers, vibration dampers and sonar transducers), and as positioning devices in robotics, manipulators and linear drives in general.",
          "zh": ""
        }
      ]
    }
  ]
}
