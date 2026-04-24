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
          "zh": "磁致伸缩执行器基于焦耳效应（磁致伸缩），这是本书中描述的最古老的换能现象，作为新兴执行器技术的基础。 磁致伸缩决定了高作用力、相对低行程的执行器，其频率带宽可达数千赫兹。"
        },
        {
          "id": "block-2",
          "en": "Given this type of performance, MS actuators are mostly suited to active vibration control applications. This chapter therefore addresses two parallel issues: magnetostrictive actuators as an emerging technology, and active vibration control and smart structures as the paradigmatic application of these actuators.",
          "zh": "鉴于这种性能，MS 执行器最适合主动振动控制应用。 因此，本章讨论了两个并行的问题：磁致伸缩执行器作为一种新兴技术，主动振动控制和智能结构作为这些执行器的典型应用。"
        },
        {
          "id": "block-3",
          "en": "The chapter begins with an introductory historical note on the discovery of magnetostriction and a description of the basic magnetic properties of materials (fully applicable to MRF actuators as described in Chapter 6). Magnetostriction is described and analyzed in detail in the subsequent sections.",
          "zh": "本章首先介绍了磁致伸缩的发现历史记录，并描述了材料的基本磁性（完全适用于第 6 章中所述的 MRF 执行器）。 磁致伸缩将在后续章节中详细描述和分析。"
        },
        {
          "id": "block-4",
          "en": "At the same time, issues relating to positive and negative magnetostriction, concomitant effects like the twofold change in the Young's modulus of these materials, and properties of magnetostrictive materials are introduced. There is a section devoted specifically to the mechatronic design of MS actuators, particularly, design for improved stroke, linearized operation and selected dynamic properties of actuators.",
          "zh": "同时，介绍了与正磁致伸缩和负磁致伸缩、这些材料的杨氏模量的双重变化等伴随效应以及磁致伸缩材料的性能有关的问题。 其中有一节专门讨论 MS 执行器的机电一体化设计，特别是改进行程、线性化操作和选定的执行器动态特性的设计。"
        },
        {
          "id": "block-5",
          "en": "In the section devoted to electric and magnetic circuit design, the reader is referred to Chapter 6, where these aspects are dealt with in more detail in the context of MRF actuators. The section on control of MS actuators offers a detailed analysis of the applicability of these actuators to active vibration control and smart structures.",
          "zh": "在专门讨论电磁电路设计的部分中，读者可以参考第 6 章，其中在 MRF 执行器的背景下更详细地讨论了这些方面。 MS 执行器控制部分详细分析了这些执行器在主动振动控制和智能结构中的适用性。"
        },
        {
          "id": "block-6",
          "en": "We decided also to include here those technologies that are most suitable for developing the concept of smart structures and smart actuators, for example, piezoelectric and shape memory alloy (SMA) actuators. As a result, smart structures are dealt with in a unified manner in this chapter rather than in separate sections in Chapters 2 and 3.",
          "zh": "我们还决定在此纳入那些最适合开发智能结构和智能执行器概念的技术，例如压电和形状记忆合金（SMA）执行器。 因此，智能结构在本章中以统一的方式讨论，而不是在第 2 章和第 3 章中单独的章节中讨论。"
        },
        {
          "id": "block-7",
          "en": "As in previous chapters, the various static and dynamic figures of merit for this technology are analyzed. Since MS actuators are potential competitors of piezoelectric stacks in several applications, a reference is included to the performance characteristics of piezoelectric stacks. The scaling trends for the various different figures of merit are introduced at this point.",
          "zh": "与前面的章节一样，我们分析了该技术的各种静态和动态品质因数。 由于 MS 执行器在多种应用中是压电堆栈的潜在竞争对手，因此参考了压电堆栈的性能特征。 此时介绍了各种不同品质因数的缩放趋势。"
        },
        {
          "id": "block-8",
          "en": "Finally, this chapter introduces application cases for MS technologies. All of these are in the field of vibration control and smart structures, as these constitute the typical application field for this technology.",
          "zh": "最后，本章介绍了MS技术的应用案例。所有这些都属于振动控制和智能结构领域，因为这些构成了该技术的典型应用领域。"
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
          "zh": "磁致伸缩是从磁域到机械域的能量转换的一种形式。 这是在所有铁磁材料中观察到的现象。 以下各节详细分析材料磁特性的基础知识，特别是磁致伸缩效应的基础知识。"
        },
        {
          "id": "block-2",
          "en": "The magnetostrictive effect, also called Joule effect, was first described by J.P. Joule (1818-1889) in 1842 after the observation of a change in length of nickel upon the application of an external magnetic field. Following this discovery, nickel and its alloys were widely used during the 1940s and 1950s both in military and civil applications.",
          "zh": "磁致伸缩效应，也称为焦耳效应，首先由 J.P. 焦耳 (1818-1889) 在 1842 年观察到施加外部磁场时镍的长度发生变化。 这一发现之后，镍及其合金在 20 世纪 40 年代和 20 世纪 50 年代广泛应用于军事和民用领域。"
        },
        {
          "id": "block-3",
          "en": "The low magnetostrictive effect in nickel (typically of the order of 50 ppm), however, effectively limited the scope for new applications. In later years, terbium (Tb) and dysprosium (Dy) were characterized as elements exhibiting a strong magnetostrictive effect at low temperatures, between 100 and 1000 times that of nickel.",
          "zh": "然而，镍的低磁致伸缩效应（通常为 50 ppm 量级）有效地限制了新应用的范围。 后来，铽（Tb）和镝（Dy）被认为是在低温下表现出强磁致伸缩效应的元素，其磁致伸缩效应是镍的100至1000倍。"
        },
        {
          "id": "block-4",
          "en": "The addition of iron as an alloying element made the strong magnetostrictive properties of terbium and dysprosium available at ambient temperature. The critical factor and limiting parameter for the application of TbFe2 and DyFe 2 proved to be the highstrength magnetic fields required to achieve a high strain.",
          "zh": "添加铁作为合金元素，使铽和镝在常温下具有强磁致伸缩特性。 事实证明，TbFe2 和DyFe 2 应用的关键因素和限制参数是实现高应变所需的高强度磁场。"
        },
        {
          "id": "block-5",
          "en": "At about the same time, researchers at the US Naval Ordnance Laboratory, today the Naval Surface Warfare Center, began to develop lanthanide alloys, leading eventually to the discovery of TbDyFe alloys with giant magnetostrictive properties (of the order of 1500-2000 ppm). The compound was called TerfenolD: TER for Terbium, FE for Iron, NOL for Naval Ordnance Laboratory (NOL) and D for Dysprosium.",
          "zh": "大约在同一时间，美国海军军械实验室（现为海军水面作战中心）的研究人员开始开发稀土合金，最终发现了具有超磁致伸缩特性（约为 1500-2000 ppm）的 TbDyFe 合金。 该化合物被称为 TerfenolD：TER 代表铽，FE 代表铁，NOL 代表海军军械实验室 (NOL)，D 代表镝。"
        },
        {
          "id": "block-6",
          "en": "Magnetostriction, as the conversion of energy between the magnetic and the mechanical domain, is accompanied by several interesting phenomena. The reverse magnetostrictive effect is also known as the Villari effect and accounts for the conversion between mechanical and magnetic energy. There is a particular instance of the magnetostrictive effect known as the Wiedemann effect.",
          "zh": "磁致伸缩作为磁域和机械域之间的能量转换，伴随着一些有趣的现象。 反磁致伸缩效应也称为维拉里效应，它解释了机械能和磁能之间的转换。 磁致伸缩效应有一个特殊的例子，称为维德曼效应。"
        },
        {
          "id": "block-7",
          "en": "The Wiedemann effect is the conversion from a helical magnetic field to torsional mechanical energy. It typically occurs when a permanent axial magnetic field is superimposed on the magnetic field generated by an electrical current flowing axially in a ferromagnetic probe.",
          "zh": "维德曼效应是螺旋磁场到扭转机械能的转换。 当永久轴向磁场叠加在铁磁探针中轴向流动的电流产生的磁场时，通常会发生这种情况。"
        },
        {
          "id": "block-8",
          "en": "The converse effect, that is, the generation of a helical magnetic field upon application of a torque, is known as the inverse Wiedemann effect or Matteuci effect. Of the various different transduction processes in either direction between magnetic and mechanical energy domains, magnetostriction is the one typically employed in actuator development.",
          "zh": "相反的效应，即在施加扭矩时产生螺旋磁场，被称为逆维德曼效应或马特乌西效应。 在磁能域和机械能域之间任一方向上的各种不同的转换过程中，磁致伸缩是执行器开发中通常采用的转换过程。"
        },
        {
          "id": "block-9",
          "en": "It may be described as the analogous effect to piezoelectricity in the magnetic domain. However, there are a number of specific points on which they differ.",
          "zh": "它可以被描述为磁域中压电效应的类似效应。然而，它们在许多具体点上存在分歧。"
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
          "zh": "通常，材料磁状态的分析基于所谓的磁化曲线。 特定材料的磁化曲线绘制了磁通密度 B 与磁场强度 H 的函数关系。 磁通密度 B 可被视为电位移或电荷密度 D 的磁对应物。"
        },
        {
          "id": "block-2",
          "en": "The magnetic field strength, H, and the electric field, E, are likewise analogous. The magnetization curve for the vacuum represents a linear relationship between magnetic field strength and magnetic flux density (see Figure 5.1a). The slope of the magnetization curve for the vacuum is called the permeability, μ0 .",
          "zh": "磁场强度 H 和电场 E 也类似。 真空的磁化曲线表示磁场强度和磁通密度之间的线性关系（见图 5.1a）。 真空磁化曲线的斜率称为磁导率 μ0 。"
        },
        {
          "id": "block-3",
          "en": "Similarly, the permeability of a given material, μ, is the ratio of the internal magnetization of that particular material in response to an applied magnetic field.",
          "zh": "类似地，给定材料的磁导率 μ 是该特定材料的内部磁化强度对所施加磁场的响应的比率。"
        },
        {
          "id": "block-4",
          "en": "The relative permeability of a material, μ r , is defined as the ratio of the magnetic permeability to the vacuum permeability: μ r = μ μ0 (5.1) According to the shape of the magnetization curve, materials can be classified into diamagnetic substances, paramagnetic materials and magnetizable materials: 1. Diamagnetic substances.",
          "zh": "材料的相对磁导率 μ r 定义为磁导率与真空磁导率的比值： μ r = μ μ0 (5.1) 根据磁化曲线的形状，材料可分为反磁性材料、顺磁性材料和可磁化材料： 1. 抗磁性物质。"
        },
        {
          "id": "block-5",
          "en": "The small magnetic dipoles (due to electron spin) in diamagnetic materials cancel one another out. When an external magnetic field is applied, these small magnetic dipoles align themselves to oppose the external field. Consequently, the magnetization curve for diamagnetic materials is slightly below the magnetization curve in vacuum (see Figure 5.1b).",
          "zh": "反磁性材料中的小磁偶极子（由于电子自旋）相互抵消。 当施加外部磁场时，这些小磁偶极子会自行排列以对抗外部磁场。 因此，反磁性材料的磁化曲线略低于真空中的磁化曲线（见图 5.1b）。"
        },
        {
          "id": "block-6",
          "en": "2. Paramagnetic materials. In these materials, the small electronic magnetic dipoles do not cancel out exactly and, thus, exhibit a small permanent magnetic moment.",
          "zh": "2.顺磁性材料。在这些材料中，小的电子磁偶极子不能完全抵消，因此表现出小的永磁矩。"
        },
        {
          "id": "block-7",
          "en": "When an external magnetic field is applied, this permanent magnetization intensifies slightly, and the magnetization curve for a paramagnetic material is situated slightly above the magnetization curve for vacuum.",
          "zh": "当施加外部磁场时，这种永久磁化强度会稍微增强，并且顺磁材料的磁化曲线略高于真空的磁化曲线。"
        },
        {
          "id": "block-8",
          "en": "Magnetization of vacuum Diamagnetic substances Paramagnetic substances Ferromagnetic materials B S B B B B HS H H H H m0 m0 m0 m0 m0 mrm0 mrm0 (a) (c) (b) 1 1 1 1 1 1 1 (d) (μ r < 1), (c) paramagnetic substances (μ r > 1), and (d) ferromagnetic materials, μ r 1 (saturation at B S ). 3. Magnetizable materials.",
          "zh": "真空磁化 反磁性物质 顺磁性物质 铁磁性材料 B S B B B B B HS H H H H m0 m0 m0 m0 m0 mrm0 mrm0 (a) (c) (b) 1 1 1 1 1 1 1 (d) (μ r < 1)，(c) 顺磁性物质 (μ r > 1)，以及 (d) 铁磁性材料，μ r 1 （BS 处饱和）。 3. 可磁化材料。"
        },
        {
          "id": "block-9",
          "en": "In these materials, the net magnetic moment can be made to point in a particular direction. The most relevant magnetizable materials for the purposes of actuators are ferromagnetic materials. Ferromagnetic materials are iron, nickel, cobalt, manganese and their alloys.",
          "zh": "在这些材料中，可以使净磁矩指向特定方向。 对于致动器来说最相关的可磁化材料是铁磁材料。 铁磁材料是铁、镍、钴、锰及其合金。"
        },
        {
          "id": "block-10",
          "en": "They can be permanently magnetized by the application of an external magnetic field. In ferromagnetic materials, the density of magnetic moments is known as magnetization or magnetic polarization, M, and may be considered analogous to the electric polarization, P.",
          "zh": "它们可以通过施加外部磁场而被永久磁化。 在铁磁材料中，磁矩密度称为磁化强度或磁极化强度 M，并且可以被视为类似于电极化强度 P。"
        },
        {
          "id": "block-11",
          "en": "Analogously to the electrical state of a dielectric material, the magnetic state of a ferromagnetic material can be described by means of two independent variables plus a third dependent one.",
          "zh": "与介电材料的电状态类似，铁磁材料的磁状态可以通过两个自变量加上第三个因变量来描述。"
        },
        {
          "id": "block-12",
          "en": "If magnetic field strength, H, and magnetization, M, are the independent variables, the equation describing the magnetic estate of a ferromagnetic material will be B = μ H + M (5.2) The process of magnetization in ferromagnetic materials involves the reorientation of magnetic domains so that they become aligned with the external magnetic field.",
          "zh": "如果磁场强度 H 和磁化强度 M 是自变量，则描述铁磁材料磁性的方程将为 B = μ H + M (5.2) 铁磁材料的磁化过程涉及磁畴的重新定向，以便它们与外部磁场对齐。"
        },
        {
          "id": "block-13",
          "en": "Initially, most of the magnetic domains in a ferromagnetic material are oriented randomly. It is therefore relatively easy to orient them upon the application of an external magnetic field. Consequently, the slope of the magnetization curve is high for low values of the external field.",
          "zh": "最初，铁磁材料中的大多数磁畴是随机取向的。 因此，在施加外部磁场时相对容易对它们进行定向。 因此，当外部磁场值较低时，磁化曲线的斜率较高。"
        },
        {
          "id": "block-14",
          "en": "As the magnetic field increases, less magnetic domains are left for reorientation. As a result, it becomes increasingly more difficult to achieve a higher magnetic flux density. At this stage, the apparent permeability is reduced to the vacuum permeability.",
          "zh": "随着磁场的增加，可供重新定向的磁畴越来越少。 结果，获得更高的磁通密度变得越来越困难。 在此阶段，表观磁导率降低至真空磁导率。"
        },
        {
          "id": "block-15",
          "en": "This situation is depicted in Figure 5.1d. An interesting phenomenon of magnetism is the intrinsic hysteretic behavior of ferromagnetic materials in the BH curve. Ferromagnetic materials tend to remain magnetized once the magnetic field is removed.",
          "zh": "这种情况如图 5.1d 所示。 磁性的一个有趣现象是铁磁材料在 BH 曲线中固有的磁滞行为。 一旦磁场移除，铁磁材料往往会保持磁化状态。"
        },
        {
          "id": "block-16",
          "en": "The magnetic remnance, B R , is defined as the remaining magnetization of a ferromagnetic material when the driving magnetic field is completely removed. The coercivity, HC , of the ferromagnetic material is defined as the reverse magnetic field required to drive the magnetization to zero after having been saturated. Remnance and coercivity are depicted in",
          "zh": "剩磁B R 定义为当驱动磁场完全去除时铁磁材料的剩余磁化强度。 铁磁材料的矫顽力 HC 定义为饱和后将磁化强度驱动至零所需的反向磁场。 剩磁和矫顽力如图所示"
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
          "zh": "磁致伸缩是铁磁材料中的磁畴响应于所施加的外部磁场而重新定向和排列的现象。 由于这些材料中的磁弹性耦合，磁化方向的长度发生宏观变化。 我们将磁致伸缩描述为磁域中压电的模拟。"
        },
        {
          "id": "block-2",
          "en": "In fact, magnetostriction is a process of transduction between elastic mechanical energy (strain) and magnetic energy. However, there are evident significant differences between the two phenomena. The equations governing the magnetostrictive effect, magnetostriction constitutive equations, contain both linear B S B BR H S H HC vant points: B R , remnance; (HS , B S ), saturation; and HC , coercitive field strength.",
          "zh": "事实上，磁致伸缩是弹性机械能（应变）与磁能之间的转换过程。 然而，这两种现象之间存在明显的显着差异。 控制磁致伸缩效应的方程，即磁致伸缩本构方程，包含两个线性 B S B BR H S H HC vant 点：B R ，剩磁； (HS , BS ), 饱和度;和 HC ，矫顽场强。"
        },
        {
          "id": "block-3",
          "en": "and quadratic terms in the magnetic field strength.",
          "zh": "和磁场强度的二次项。"
        },
        {
          "id": "block-4",
          "en": "In tensor notation this is S ij = c H ij kl T kl + dmij Hm + m ij kl Hk Hl B k = dkij T ij + μ T km Hm (5.3) where Sij is the mechanical strain, T kl is the mechanical stress, c H ij kl is the mechanical compliance under zero magnetic field (H = 0), Hm is the magnetic field strength, μ T km is the magnetic permeability under constant mechanical stress, dmij are the piezomagnetic displacement coefficients coupling linearly magnetic and mechanical variables, m ij kl is the magnetostrictive coefficient coupling quadratically magnetic and mechanical variables and B k is the magnetic flux density.",
          "zh": "在张量表示法中，为 S ij = c H ij kl T kl + dmij Hm + m ij kl Hk Hl B k = dkij T ij + μ T km Hm (5.3) 其中 Sij 是机械应变，T kl 是机械应力，c H ij kl 是零磁场 (H = 0) 下的机械柔量，Hm 是磁场强度，μ T km 是恒定机械应力下的磁导率， dmij 是耦合线性磁和机械变量的压磁位移系数，m ij kl 是耦合二次磁和机械变量的磁致伸缩系数，B k 是磁通密度。"
        },
        {
          "id": "block-5",
          "en": "The equation coupling strain to magnetic field strength can be obtained from thermodynamic potential functions, and according to Equation 5.3 it has the following form: S ∝ c1H + c2H 2 (5.4) In Equation 5.4, c1 defines the piezomagnetic effect. In order for a material to exhibit piezomagnetism, the crystal structure must be anisotropic. However, all ferromagnetic materials exhibit magnetostriction, that is, c2 = 0.",
          "zh": "应变与磁场强度的耦合方程可以从热力学势函数得到，根据方程 5.3，其形式如下： S ∝ c1H + c2H 2 (5.4) 在方程 5.4 中，c1 定义压磁效应。 为了使材料表现出压磁性，晶体结构必须是各向异性的。 然而，所有铁磁材料都表现出磁致伸缩，即c2 = 0。"
        },
        {
          "id": "block-6",
          "en": "Therefore, the phenomenological description of piezomagnetism and magnetostriction is equivalent to the phenomenological description of piezoelectricity and electrostriction. The typical strain versus applied magnetic field curve for magnetostrictive materials is depicted in Figure 5.3. It shows the quadratic dependence of strain on magnetic field strength.",
          "zh": "因此，压磁和磁致伸缩的唯象描述相当于压电和电致伸缩的唯象描述。 磁致伸缩材料的典型应变与施加磁场的关系曲线如图 5.3 所示。 它显示了应变对磁场强度的二次依赖性。"
        },
        {
          "id": "block-7",
          "en": "Carrying on with the analogy between electrical and magnetic domains, for a pure magnetostrictive material (exhibiting crystal symmetry and thus no piezomagnetism), the magnetomechanical coupling will be described by S ij = m ij kl Hk Hl (5.5) e H sity in magnetostrictive materials.",
          "zh": "继续电域和磁域之间的类比，对于纯磁致伸缩材料（表现出晶体对称性，因此不具有压磁性），磁致伸缩材料中的磁力耦合将由 S ij = m ij kl Hk Hl (5.5) e H sity 描述。"
        },
        {
          "id": "block-8",
          "en": "As in the case of electrostrictive polymer actuators, Equation 5.5 can now be expanded in Taylor series around a DC bias magnetic field, H0 , and for small variations of the magnetic field around the DC bias, we have Si = Si0 + dS dH ∣ ∣ ∣H =H0 (H − H0) + 1 2!",
          "zh": "与电致伸缩聚合物致动器的情况一样，方程 5.5 现在可以围绕直流偏置磁场 H0 展开泰勒级数，并且对于直流偏置周围磁场的微小变化，我们有 Si = Si0 + dS dH ∣ ∣ ∣H =H0 (H − H0) + 1 2!"
        },
        {
          "id": "block-9",
          "en": "d2S dH 2 ∣ ∣ ∣H =H0 (H − H0)2 + · · · (5.6) which, for the direction of polarization, reduces to S ≈ 2mH0 H (5.7) Notice that Equation 5.5 represents a quadratic dependence of strain on magnetic field strength.",
          "zh": "d2S dH 2 ∣ ∣ ∣H =H0 (H − H0)2 + · · · (5.6) 对于极化方向，可简化为 S ≈ 2mH0 H (5.7) 请注意，公式 5.5 表示应变对磁场强度的二次依赖性。"
        },
        {
          "id": "block-10",
          "en": "Once the magnetostrictive coefficients are defined for a particular material, Equation 5.5 indicates that the magnetostrictive material will contract or expand when either positive or negative magnetic fields are applied.",
          "zh": "一旦为特定材料定义了磁致伸缩系数，方程 5.5 表明当施加正或负磁场时，磁致伸缩材料将收缩或膨胀。"
        },
        {
          "id": "block-11",
          "en": "Consequently, Equation 5.7 describes a way of converting unidirectional displacements in a magnetostrictive domain into twodirectional displacements by means of a bias magnetic field strength, H0 , a technique widely adopted in the design of magnetostrictive actuators. The process is schematically depicted in Figure 5.4.",
          "zh": "因此，方程 5.7 描述了一种通过偏置磁场强度 H0 将磁致伸缩域中的单向位移转换为双向位移的方法，这是磁致伸缩致动器设计中广泛采用的技术。 该过程如图 5.4 所示。"
        },
        {
          "id": "block-12",
          "en": "Owing to the quadratic relationship between strain and magnetic field, the driving frequency presents nonlinearity, and the rate of the strain is twice the rate of the applied magnetic field (black lines in Figure 5.4). When a bias DC magnetic field, H0 , is applied, the strain becomes quasilinear around the bias magnetic field and the nonlinearity in the frequency is eliminated (grey, dashed lines in Figure 5.4).",
          "zh": "由于应变与磁场呈二次关系，驱动频率呈现非线性，应变速率是外加磁场速率的两倍（图5.4中的黑线）。 当施加偏置直流磁场 H0 时，应变在偏置磁场周围变为准线性，并且频率的非线性被消除（图 5.4 中的灰色虚线）。"
        },
        {
          "id": "block-13",
          "en": "H0 H e Time Time Time Time materials.",
          "zh": "H0 H e 时间时间时间时间材料。"
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
          "zh": "由于上一节中描述的磁致伸缩效应，磁致伸缩材料在磁场存在下会膨胀或收缩。 在所有磁致伸缩材料中，对于执行器的实现最有用的是 TerfenolD。"
        },
        {
          "id": "block-2",
          "en": "TerfenolD exhibits a magnetostrictive deformation of the order of 1500-2000 ppm, far above that of other magnetostrictive materials at ambient temperature, although it is lower than that of terbium or dysprosium when driven below approximately 180 K. Magnetostrictive materials are smallstroke, largeforce, solidstate actuators.",
          "zh": "TerfenolD 表现出 1500-2000 ppm 量级的磁致伸缩变形，远高于环境温度下的其他磁致伸缩材料，尽管在低于约 180 K 的温度下驱动时它低于铽或镝。 磁致伸缩材料是小行程、大作用力的固态致动器。"
        },
        {
          "id": "block-3",
          "en": "As a direct consequence of the low strain, a mechanical impedance matching (mechanical amplification stages) is required in most applications. Magnetostrictive materials are ferromagnetic substances with very high magnetic permeability. In these materials, the Curie temperature is the transition point at which the material becomes ferromagnetic.",
          "zh": "作为低应变的直接结果，大多数应用都需要机械阻抗匹配（机械放大级）。 磁致伸缩材料是具有极高磁导率的铁磁物质。 在这些材料中，居里温度是材料变成铁磁性的转变点。"
        },
        {
          "id": "block-4",
          "en": "Below the Curie temperature, they present spontaneous magnetization.",
          "zh": "低于居里温度，它们呈现自发磁化。"
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
          "zh": "磁致伸缩材料表现出机械位移，如公式 5.4 定性描述的那样，其中 c1 = 0。 在公式 5.4 中，c2 可以取正值（c2 > 0）或负值（c2 < 0），分别产生正磁致伸缩或负磁致伸缩。 镍是表现出负磁致伸缩的材料的示例。"
        },
        {
          "id": "block-2",
          "en": "Iron will exhibit either positive or negative magnetostriction, depending on the crystallographic direction, P´erezAparicio and Sosa (2004). Positive magnetostriction causes an increase in the material's length and a reduction in the transverse dimensions, so that the volume remains constant.",
          "zh": "铁将表现出正磁致伸缩或负磁致伸缩，具体取决于晶体方向，P´erezAparicio 和 Sosa (2004)。 正磁致伸缩导致材料长度增加和横向尺寸减小，从而使体积保持恒定。"
        },
        {
          "id": "block-3",
          "en": "On the other hand, negative magnetostriction causes a reduction in the material's length accompanied by an increase in transverse dimensions (see Figure 5.5). (a) (b) H H increases length, while (b) negative magnetostriction results in contraction. In magnetostrictive materials, the converse effect is also found.",
          "zh": "另一方面，负磁致伸缩会导致材料长度减少，同时横向尺寸增加（见图 5.5）。 (a) (b) H H 增加长度，而 (b) 负磁致伸缩导致收缩。 在磁致伸缩材料中，也发现了相反的效应。"
        },
        {
          "id": "block-4",
          "en": "When a mechanical load is applied, there will be a change in the magnetization state of the material. This effect tends to decrease the reaction force against the external stress: 1.",
          "zh": "当施加机械载荷时，材料的磁化状态会发生变化。这种效应往往会降低抵抗外部应力的反作用力： 1."
        },
        {
          "id": "block-5",
          "en": "In negative magnetostrictive materials, a traction force will result in a reorientation of magnetic domains in a direction perpendicular to the applied force, that is, in the direction of the field that minimizes the reaction against the external force. In the presence of a compression force, the domains will tend to align in the direction of that force. 2.",
          "zh": "在负磁致伸缩材料中，牵引力将导致磁畴在垂直于所施加的力的方向上重新取向，即在使对外力的反作用最小化的场的方向上。 在存在压缩力的情况下，磁域将倾向于沿该力的方向排列。 2."
        },
        {
          "id": "block-6",
          "en": "The opposite situation occurs in a positive magnetostrictive material. Compression forces will result in domains aligned in a direction perpendicular to the force, and traction forces will align the domains in their direction. This effect can be seen schematically in Figure 5.6.",
          "zh": "相反的情况发生在正磁致伸缩材料中。 压缩力将导致域在垂直于力的方向上对齐，而牵引力将导致域在其方向上对齐。 这种效果如图 5.6 所示。"
        },
        {
          "id": "block-7",
          "en": "The magnetoelastic coupling in magnetostrictive materials can be used to improve the stroke characteristics of MS actuators. This is illustrated qualitatively in orientation of domains perpendicularly to the force. If such a material is mechanically preloaded, additional magnetic domains are left to be reoriented upon the application of an external magnetic field.",
          "zh": "磁致伸缩材料中的磁致弹性耦合可用于改善 MS 执行器的行程特性。 这通过垂直于力的域的方向定性地说明。 如果这种材料是机械预加载的，则额外的磁畴会在施加外部磁场时重新定向。"
        },
        {
          "id": "block-8",
          "en": "This in turn results in an increased stroke. T T T T T T T T (a) (b) materials and (b) positive magnetostrictive materials. e Increasing preload H stroke.",
          "zh": "这反过来又导致行程增加。 T T T T T T T T (a) (b) 材料和 (b) 正磁致伸缩材料。 e 增加预载 H 行程。"
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
          "zh": "结构材料中的杨氏模量 Y 是用于定义材料刚度的参数。 它的计算方式为给定材料中应力变化与相应应变变化的比率。 在换能材料中，特别是在磁致伸缩材料中，材料的刚度（杨氏模量）和磁化状态之间存在耦合。"
        },
        {
          "id": "block-2",
          "en": "As a consequence, the Young's modulus for magnetostrictive materials is not constant but is rather a function of the magnetization state. A change in the Young's modulus of a magnetostrictive material is commonly to be expected. Giant magnetostrictive materials undergo strains of the order of 1500-2000 ppm in response to changes in the magnetization state.",
          "zh": "因此，磁致伸缩材料的杨氏模量不是恒定的，而是磁化状态的函数。 通常预期磁致伸缩材料的杨氏模量会发生变化。 超磁致伸缩材料响应磁化状态的变化而承受 1500-2000 ppm 量级的应变。"
        },
        {
          "id": "block-3",
          "en": "The strains that these materials can exhibit when a pure mechanical load is applied are much lower that those produced by magnetostriction. Consequently, we may expect the effective elastic modulus, as the ratio of stress to strain, to be considerably affected by magnetization.",
          "zh": "当施加纯机械负载时，这些材料可以表现出的应变比磁致伸缩产生的应变低得多。 因此，我们可以预期有效弹性模量（即应力与应变之比）会受到磁化强度的显着影响。"
        },
        {
          "id": "block-4",
          "en": "The socalled Yeffect is defined as the relative change in Young's modulus upon application of an external magnetic field, H , with respect to Young's modulus at zero magnetic field, H = 0 (Flatau et al. (1998)): Y = YH − Y0 Y0 (5.8) It is worth noting that Young's modulus undergoes a change even where the strength of the magnetic field is higher than the saturation magnetization.",
          "zh": "所谓的 Y 效应定义为在施加外部磁场 H 时杨氏模量相对于零磁场下杨氏模量 H = 0 的相对变化（Flatau 等人，2015）。 (1998)): Y = YH − Y0 Y0 (5.8) 值得注意的是，即使磁场强度高于饱和磁化强度，杨氏模量也会发生变化。"
        },
        {
          "id": "block-5",
          "en": "This indicates that the Yeffect cannot be convincingly explained only on the basis of the reorientation of magnetic domains due to external fields.",
          "zh": "这表明仅根据外部场导致的磁畴重新定向不能令人信服地解释 Y 效应。"
        },
        {
          "id": "block-6",
          "en": "The maximum reported magnitude of the Yeffect (Clark and Savage (1975)) is of the order of 1, that is Young's modulus is doubled as a consequence of the Property Units TerfenolD Hiperco PZT-2 Mechanical properties Density Kgm−3 9.25 · 10 3 8.1 · 10 3 7.5 · 10 3 Young's modulus, H = 0 GPa 26.5 206 110 Young's modulus, B = 0 GPa 55.0 - 60 Speed of sound ms−1 1690 4720 3100 Electrical properties Resistivity 10−6 cm 60.0 0.23 0.01 Magnetostrictive and electrostrictive properties Permeability - 9.3 75 1300 Curie temperature C 387 1115 300 Maximum strain ppm 1500-2000 40 400 Coupling factor - 0.72 0.17 0.68 d33 mA−1 , mV−1 1.7 · 10−9 - 300 · 10−12 Energy density Jcm−3 14-25 · 10−3 - 10 3 change in the magnetization state of the magnetostrictive material.",
          "zh": "Y 效应的最大报告量级（Clark 和 Savage (1975)）约为 1，即杨氏模量由于属性单位 TerfenolD Hiperco PZT-2 机械属性 密度 Kgm−3 9.25 · 10 3 8.1 · 10 3 7.5 · 10 3 杨氏模量加倍，H = 0 GPa 26.5 206 110 杨氏模量，B = 0 GPa 55.0 - 60 声速 ms−1 1690 4720 3100 电气特性 电阻率 10−6 cm 60.0 0.23 0.01 磁致伸缩和电致伸缩特性 磁导率 - 9.3 75 1300 居里温度 C 387 1115 300 最大应变 ppm 1500-2000 40 400 耦合系数 - 0.72 0.17 0.68 d33 mA−1 , mV−1 1.7 · 10−9 - 300 · 10−12 能量密度 Jcm−3 14-25 · 10−3 - 10 3 磁致伸缩材料磁化状态的变化。"
        },
        {
          "id": "block-7",
          "en": "Moreover, since the resonance frequency of a magnetostrictive rod is f r ∝ √Y (5.9) it follows that the change in Young's modulus is related to the change in the resonant frequency squared. It will be seen in the coming sections that this property of magnetostrictive materials can be used in tunable vibration absorbers based on this technology. materials.",
          "zh": "此外，由于磁致伸缩棒的谐振频率为 f r ∝ √Y (5.9)，因此杨氏模量的变化与谐振频率平方的变化有关。 在接下来的章节中将会看到，磁致伸缩材料的这种特性可以用于基于该技术的可调减振器。 材料。"
        },
        {
          "id": "block-8",
          "en": "The table shows mechanical, thermal and electrical as well as electrostrictive and magnetostrictive properties.",
          "zh": "该表显示了机械、热、电以及电致伸缩和磁致伸缩特性。"
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
          "zh": "磁致伸缩执行器的机电一体化设计通常涉及四个主要主题： 1. 行程的改进。磁致伸缩致动器表现出比压电致动器相对更高的位移。"
        },
        {
          "id": "block-2",
          "en": "The displacement can be optimized by making use of the load effect on the magnetization state of the material. 2. Linearized operation.",
          "zh": "可以通过利用载荷对材料磁化状态的影响来优化位移。 2. 线性化操作。"
        },
        {
          "id": "block-3",
          "en": "The constitutive equations of the magnetostrictive effect show a quadratic relationship between magnetic field and strain. Bias magnetic fields can be used to linearize this relationship. 3.",
          "zh": "磁致伸缩效应的本构方程显示了磁场与应变之间的二次关系。偏置磁场可用于使这种关系线性化。 3."
        },
        {
          "id": "block-4",
          "en": "Pushpull operation. As the strain versus magnetic field is a quadratic relationship, both positive and negative magnetic fields lead to unidirectional displacements. Bias magnetic fields can also be used to achieve twodirectional displacement.",
          "zh": "推拉操作。 由于应变与磁场是二次关系，因此正磁场和负磁场都会导致单向位移。 偏置磁场也可用于实现双向位移。"
        },
        {
          "id": "block-5",
          "en": "4. Optimization of electric and magnetic circuits. The magnetostrictive actuator is characterized electrically as an inductive load.",
          "zh": "4、电、磁路优化。磁致伸缩致动器的电气特征是感性负载。"
        },
        {
          "id": "block-6",
          "en": "The considerations are much as in the case of magnetorheological fluid (MRF) actuators. And similarly again, reluctance circuits must be optimized for efficient operation. All these topics are addressed in the coming sections.",
          "zh": "这些考虑因素与磁流变流体 (MRF) 执行器的情况非常相似。 同样，磁阻电路必须进行优化以实现高效运行。 所有这些主题将在接下来的部分中讨论。"
        },
        {
          "id": "block-7",
          "en": "In addition, the issue of selecting the resonance frequency is analyzed as a typical procedure in developing tunable vibration absorbers from magnetostrictive actuators. The typical design configuration for magnetostrictive actuators is schematically depicted in Figure 5.8.",
          "zh": "此外，还分析了选择共振频率的问题，作为开发磁致伸缩致动器可调减振器的典型过程。 磁致伸缩执行器的典型设计配置如图 5.8 所示。"
        },
        {
          "id": "block-8",
          "en": "This includes prestressing mechanisms (usually based on compression springs), bias magnetic field mechanisms (based on either permanent magnets or coils) and the magnetic circuit. Permanent magnets Magnetostrictive rod Magnetic field coil Reluctance circuit Parallel prestress spring Φ Φ/2 Φ/2 Magnetic field coil actuator.",
          "zh": "这包括预应力机构（通常基于压缩弹簧）、偏置磁场机构（基于永磁体或线圈）和磁路。 永磁体 磁致伸缩杆 磁场线圈 磁阻电路 并联预应力弹簧 Φ Φ/2 Φ/2 磁场线圈执行器。"
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
          "zh": "对于静态应用，超磁致伸缩材料的冲程约为 1500-2000 ppm。 Claeyssen 等人在考虑共振放大时，这些数字可能高达 3000-4000 ppm。 （2002）。"
        },
        {
          "id": "block-2",
          "en": "TerfenolD rods generally consist of randomly oriented magnetic dipoles. The orientation of these dipoles upon the application of an external magnetic field produces magnetostrictive strain through magnetoelastic coupling. We noted earlier (see Section 5.2.1) that in positive magnetostrictive materials the application of compression loads causes magnetic dipoles to be oriented in the plane perpendicular to the load.",
          "zh": "TerfenolD 棒通常由随机取向的磁偶极子组成。 施加外部磁场时这些偶极子的方向通过磁致弹性耦合产生磁致伸缩应变。 我们之前注意到（参见第 5.2.1 节），在正磁致伸缩材料中，压缩载荷的应用导致磁偶极子在垂直于载荷的平面中定向。"
        },
        {
          "id": "block-3",
          "en": "This has the consequence of increasing the number of domains available for reorientation due to external magnetic fields, thus maximizing the stroke. In practice, prestressing mechanisms are introduced. The prestress on the magnetostrictive rod can be applied by external springs either in parallel or in series, but the former is most commonly used.",
          "zh": "其结果是增加了由于外部磁场而可用于重新定向的磁域数量，从而最大化了行程。 在实践中，引入了预应力机制。 磁致伸缩杆上的预应力可以通过并联或串联的外部弹簧施加，但最常用的是前者。"
        },
        {
          "id": "block-4",
          "en": "A parallel prestressing mechanism is schematically depicted in Figure 5.8. Actuators with parallel prestressing are stiffer than actuators with series prestressing. Prestress values are typically of the order of 10-14 MPa.",
          "zh": "并行预应力机构示意性如图 5.8 所示。 具有并联预应力的执行器比具有串联预应力的执行器更硬。 预应力值通常约为 10-14 MPa。"
        },
        {
          "id": "block-5",
          "en": "Prestressing also has the beneficial effect of keeping the alloy working under compressive loads. If traction loads are avoided, the fatigue limit properties of magnetostrictive actuators are improved.",
          "zh": "预应力还具有保持合金在压缩载荷下工作的有益效果。如果避免牵引载荷，磁致伸缩执行器的疲劳极限特性就会得到改善。"
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
          "zh": "为了方便起见，让我们回顾一下方程 5.4，它描述了磁致伸缩材料的应变和应力之间的二次关系。 S ∝ c1H + c2H 2 线性化操作是任何执行器的理想特性，因为它可以简化控制。 参考电致伸缩聚合物致动器描述了与本节中描述的技术等效的线性化技术。"
        },
        {
          "id": "block-2",
          "en": "Indeed, an analogy was introduced between electrostriction and magnetostriction. If a bias magnetic field, H0 , is applied to the magnetostrictive material, a quasilinear relationship will, in theory, be found between relative strain, S, and relative magnetic field, H = H − H0 (see Equation 5.7).",
          "zh": "事实上，在电致伸缩和磁致伸缩之间进行了类比。 如果对磁致伸缩材料施加偏置磁场 H0，理论上，相对应变 S 和相对磁场 H = H − H0 之间将存在准线性关系（参见公式 5.7）。"
        },
        {
          "id": "block-3",
          "en": "The bias magnetic field can be applied either by means of permanent magnets or through a coilbased constant magnetic field. In most common implementations, permanent magnets are used (see Figure 5.8). This makes for greater efficiency.",
          "zh": "偏置磁场可以通过永磁体或基于线圈的恒定磁场来施加。 在最常见的实施中，使用永磁体（见图 5.8）。 这可以提高效率。"
        },
        {
          "id": "block-4",
          "en": "When designing magnetic biasing concepts for magnetostrictive actuators, the issue of nonsymmetrical operation has to be addressed. In the event that the bias magnetic field is not centered in the magnetization curve of the magnetostrictive material, operation may be nonsymmetrical. This is illustrated schematically in tostrictive material will produce higher negative relative strain.",
          "zh": "在设计磁致伸缩执行器的磁偏置概念时，必须解决非对称操作的问题。 在偏置磁场不在磁致伸缩材料的磁化曲线中心的情况下，操作可能是不对称的。 这示意性地示出了在拉伸材料中将产生更高的负相对应变。"
        },
        {
          "id": "block-5",
          "en": "H0 H e Time Time ment.",
          "zh": "H0 H e 时间 时间。"
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
          "zh": "磁致伸缩执行器的特点是表现出电感应负载。 这主要是因为线圈用于建立磁场来驱动执行器。 因此，MS 执行器的电气驱动要求与 MRF 执行器的电气驱动要求相同。"
        },
        {
          "id": "block-2",
          "en": "We decided to concentrate on the analysis of electrical circuits for inductive loads in the chapter devoted to MRF actuators, and the reader is therefore referred to Section 6.2.3. To establish the required magnetic field in the magnetostrictive material, the magnetic flux has to be guided to the active area.",
          "zh": "我们决定在专门介绍 MRF 执行器的章节中重点分析感性负载的电路，因此请读者参考第 6.2.3 节。 为了在磁致伸缩材料中建立所需的磁场，必须将磁通量引导到有源区域。"
        },
        {
          "id": "block-3",
          "en": "Again, this concept is implemented similarly in MRF actuators, and the basics of magnetic circuit design are analyzed in detail in Section 6.2.4. The main difference between MS and MRF actuators as regards the magnetic circuit design lies in the use of permanent magnets in MS actuators to set up the bias magnetic field. The best configuration in terms of efficiency has been analyzed in detail by Janocha (2001).",
          "zh": "同样，这个概念在 MRF 执行器中的实现类似，磁路设计的基础知识在第 6.2.4 节中详细分析。 MS 和 MRF 执行器在磁路设计方面的主要区别在于 MS 执行器中使用永磁体来设置偏置磁场。 Janocha (2001) 详细分析了效率方面的最佳配置。"
        },
        {
          "id": "block-4",
          "en": "Three elements are coaxially implemented to drive MS actuators: the MS material (T), the coil (C) and the permanent magnets (M). The specific configuration, in terms of the relative position of these three elements, has direct consequences for the homogeneity of the field in the MS material and for the attainable field strength.",
          "zh": "同轴实施三个元件来驱动 MS 执行器：MS 材料 (T)、线圈 (C) 和永磁体 (M)。 就这三个元件的相对位置而言，具体配置对 MS 材料中场的均匀性和可达到的场强度具有直接影响。"
        },
        {
          "id": "block-5",
          "en": "Optimum configurations are those in which the MS material (T) occupies the inner part of the actuator and the permanent magnets are placed in the outermost part of the actuators, that is, what is known as the TCM configuration (see Figure 5.8).",
          "zh": "最佳配置是 MS 材料 (T) 占据执行器的内部，永磁体放置在执行器的最外部，即所谓的 TCM 配置（见图 5.8）。"
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
          "zh": "磁致伸缩致动器作为二阶系统，其第一共振频率为： 2πfr = √ Keff Meff (5.10) 其中 Keff 是致动器的有效刚度，Meff 是系统的有效质量。"
        },
        {
          "id": "block-2",
          "en": "The effective stiffness of the actuator will, generally speaking, be a function of the geometry and material characteristics of the magnetostrictive rod, KR , and of the prestress mechanism, KP , being implemented.",
          "zh": "一般来说，致动器的有效刚度是磁致伸缩杆 KR 和所实施的预应力机构 KP 的几何形状和材料特性的函数。"
        },
        {
          "id": "block-3",
          "en": "If a cylindrical configuration for the magnetostrictive rod is assumed, its stiffness can be expressed as KR = Y Aeff Leff (5.11) In Equation 5.11, Y is the Young's modulus of the material and Aeff and Leff are the effective crosssectional area and length of the rod respectively.",
          "zh": "如果假设磁致伸缩杆为圆柱形配置，则其刚度可表示为 KR = Y Aeff Leff (5.11) 在公式 5.11 中，Y 是材料的杨氏模量，Aeff 和 Leff 分别是杆的有效横截面积和长度。"
        },
        {
          "id": "block-4",
          "en": "The effective stiffness of the actuator, Keff , will be greater than the stiffness of the magnetostrictive rod if the prestressing mechanism is placed in parallel to the magnetostrictive material, Keff = KR + KP . On the other hand, where the prestress mechanism is in series, the effective stiffness of the actuator is less than that of the magnetostrictive rod, 1/Keff = 1/KR + 1/KP .",
          "zh": "如果预应力机构与磁致伸缩材料平行放置，则执行器的有效刚度 Keff 将大于磁致伸缩杆的刚度，Keff = KR + KP 。 另一方面，当预应力机构串联时，执行器的有效刚度小于磁致伸缩杆的有效刚度，1/Keff = 1/KR + 1/KP 。"
        },
        {
          "id": "block-5",
          "en": "The combination of the magnetostrictive material's Young's modulus (typically lower than that of piezoelectric materials) and the prestressing mechanisms leads to lower frequencies in magnetostrictive than in piezoelectric resonators. This was one of the distinctive characteristics that prompted the adoption of the magnetostrictive technology in Sonar applications.",
          "zh": "磁致伸缩材料的杨氏模量（通常低于压电材料的杨氏模量）和预应力机制的结合导致磁致伸缩材料的频率低于压电谐振器。 这是促使磁致伸缩技术在声纳应用中采用的显着特征之一。"
        },
        {
          "id": "block-6",
          "en": "The resonance frequency of the system can be adapted to the application by careful selection of the rod's geometry and the prestressing mechanism. If a dynamic adaptation is required (as in the application of MS actuators in tunable vibration absorbers), the Yeffect must be used. As noted earlier, the Yeffect produces up to 100% variation in the Young's modulus of magnetostrictive materials.",
          "zh": "通过仔细选择杆的几何形状和预应力机制，可以使系统的共振频率适应应用。 如果需要动态适应（如在可调减振器中应用 MS 执行器），则必须使用 Yeffect。 如前所述，Y 效应使磁致伸缩材料的杨氏模量产生高达 100% 的变化。"
        },
        {
          "id": "block-7",
          "en": "This in turn results in changes of up to 40% in the resonance frequency so that tuning can be effected in response to structural modal changes in vibration absorption applications.",
          "zh": "这反过来会导致共振频率发生高达 40% 的变化，从而可以根据振动吸收应用中的结构模态变化进行调整。"
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
          "zh": "如果有一种执行器技术几乎完全与单一应用相关，即磁致伸缩执行器，那么该应用就是主动结构振动控制。 几乎所有有关磁致伸缩致动器的文献中描述的应用都以某种方式与振动抑制机制相关。"
        },
        {
          "id": "block-2",
          "en": "Magnetostrictive actuators deliver highoutput forces and relatively high displacements (compared to other emerging actuator technologies) and can be driven at high frequencies. These characteristics make them suitable for a variety of vibration control applications.",
          "zh": "磁致伸缩执行器可提供高输出力和相对较高的位移（与其他新兴执行器技术相比），并且可以高频驱动。 这些特性使它们适用于各种振动控制应用。"
        },
        {
          "id": "block-3",
          "en": "Other actuator technologies described in this book have been proposed in vibration control applications, in particular, piezoelectric actuators and shape memory actuators for active control and electroand magnetorheological actuators in semiactive control.",
          "zh": "本书中描述的其他致动器技术已在振动控制应用中提出，特别是用于主动控制的压电致动器和形状记忆致动器以及半主动控制中的电和磁流变致动器。"
        },
        {
          "id": "block-4",
          "en": "Semiactive vibration control is analyzed in detail in the context of ER and MR actuators (see Chapter 6.) In this section, we address the topic of active vibration control as the paradigmatic application of magnetostrictive actuators. A thorough analysis of the topic would require a complete monograph, and so the discussion here is confined to a descriptive level.",
          "zh": "在 ER 和 MR 执行器的背景下详细分析了半主动振动控制（参见第 6 章）。在本节中，我们将主动振动控制作为磁致伸缩执行器的典型应用。 对这个主题的彻底分析需要一本完整的专着，因此这里的讨论仅限于描述性的水平。"
        },
        {
          "id": "block-5",
          "en": "For further reading and analysis, the reader is thus referred to one of the various books available on the topic. Most of the strategies discussed here are applicable to other actuator technologies, and there is frequent crossreferencing in the following paragraphs.",
          "zh": "为了进一步阅读和分析，读者可以参考有关该主题的各种书籍之一。 这里讨论的大多数策略都适用于其他执行器技术，并且在以下段落中经常交叉引用。"
        },
        {
          "id": "block-6",
          "en": "A whole section is devoted to the topic of smart structures as a concept intrinsically linked to smart actuator technologies, and in particular to SMA, piezoelectric and MS actuators.",
          "zh": "整个章节专门讨论智能结构这一主题，它是一个与智能执行器技术本质上相关的概念，特别是 SMA、压电和 MS 执行器。"
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
          "zh": "被动调谐振动吸收是减少结构中不需要的振动的经典方法。 它包括使用机械弹簧质量阻尼器振荡器，其共振频率被调谐到需要减少结构振动的频率。 自 20 世纪 00 年代末以来，它已被成功应用（Flatau 等人，2017）。"
        },
        {
          "id": "block-2",
          "en": "(1998)) in the context of narrowband attenuation of undesired oscillations (see Figure 5.10a). The development of actuator technologies has opened up the possibility of structural active vibration control. However, traditional actuator technologies impose various limits on the applicability of active vibration control: 1.",
          "zh": "(1998)) 在不良振荡的窄带衰减的背景下（见图 5.10a）。 执行器技术的发展开启了结构主动振动控制的可能性。 然而，传统的执行器技术对主动振动控制的适用性施加了各种限制： 1."
        },
        {
          "id": "block-3",
          "en": "Limited actuator dynamics. Limited dynamics means that vibration control is only possible in narrowband. 2.",
          "zh": "有限的执行器动力学。有限的动态意味着振动控制只能在窄带内进行。 2."
        },
        {
          "id": "block-4",
          "en": "Difficult integration. Traditional actuators impose lumped systems as they cannot readily be integrated in the structure. 3.",
          "zh": "整合困难。传统执行器采用集总系统，因为它们无法轻松集成到结构中。 3."
        },
        {
          "id": "block-5",
          "en": "Need for external sensors. Traditional actuators are not susceptible of incorporating sensor functions, and so the smart actuator concept is hard to apply. The advent of new actuator technologies extends the domain of vibration control to broadband and to responsive structures with integrated (smart) actuators.",
          "zh": "需要外部传感器。 传统的执行器不易集成传感器功能，因此智能执行器的概念很难应用。 新执行器技术的出现将振动控制领域扩展到宽带和具有集成（智能）执行器的响应结构。"
        },
        {
          "id": "block-6",
          "en": "Returning to the example of the tuned vibration absorber in Figure 5.10a, it is f r f r M M fr fr Frequency Impedance Frequency Impedance (a) (b) strictive tunable vibration absorber. possible to implement the concept of a 'tunable' vibration absorber based on magnetostrictive actuators.",
          "zh": "回到图 5.10a 中的调谐减振器示例，它是 fr f r M M fr fr 频率阻抗 频率阻抗 (a) (b) 严格的可调谐减振器。 可以实现基于磁致伸缩致动器的“可调”减振器的概念。"
        },
        {
          "id": "block-7",
          "en": "In this new concept, the Yeffect can be exploited to develop a vibration absorber whose resonant frequency can be tuned in response to structural modal variations (see Figure 5.10b and a more detailed description on page 190). Active vibration control can be approached in feedback and feedforward control strategies. Feedback systems are further classified into active damping control and modalbased feedback control.",
          "zh": "在这个新概念中，可以利用 Yeffect 来开发一种减振器，其共振频率可以根据结构模态变化进行调整（参见图 5.10b 和第 190 页的更详细描述）。 主动振动控制可以通过反馈和前馈控制策略来实现。 反馈系统进一步分为主动阻尼控制和基于模态的反馈控制。"
        },
        {
          "id": "block-8",
          "en": "The following paragraphs briefly describe the three approaches and outline the main characteristics. Feedforward vibration control Feedforward vibration control strategies can only be implemented in the case of known disturbances, or in the event of having a signal correlated to the disturbance.",
          "zh": "以下段落简要描述了这三种方法并概述了主要特征。 前馈振动控制 前馈振动控制策略只能在已知干扰的情况下或在具有与干扰相关的信号的情况下实施。"
        },
        {
          "id": "block-9",
          "en": "Σ Σ Gd(s) G(s) Adaptive filter + _ + + r(s) y(s) d(s) and output drives an adaptive filter to generate a second disturbance to cancel the primary one. The underlying idea is to generate a second disturbance such that when applied to the plant, it cancels the effect of the primary disturbance. In this approach, the reference signal (correlated to the disturbance) is filtered and applied to the plant.",
          "zh": "Σ Σ Gd(s) G(s) 自适应滤波器 + _ + + r(s) y(s) d(s) 和输出驱动自适应滤波器生成第二个干扰以消除第一个干扰。 基本思想是产生第二次干扰，当应用于植物时，它会抵消一次干扰的影响。 在这种方法中，参考信号（与干扰相关）被过滤并应用于设备。"
        },
        {
          "id": "block-10",
          "en": "The error signal supplied by a sensor is used to adaptively tune the filter parameters so that the error is minimized. A block diagram of this vibration control approach is shown in Figure 5.11. The feedforward approach only guarantees vibration reduction at the sensor's location and so must be considered a local method.",
          "zh": "传感器提供的误差信号用于自适应地调整滤波器参数，以使误差最小化。 这种振动控制方法的框图如图 5.11 所示。 前馈方法仅保证传感器位置处的振动减少，因此必须被视为局部方法。"
        },
        {
          "id": "block-11",
          "en": "When sensor and actuator are not collocated, an estimate of the transfer function between sensor and actuator is required to compute the error signal that drives the filter parameter adaptation process. Since this process is based on an adaptive algorithm, it is robust and allows higher frequency band attenuation than feedback approaches.",
          "zh": "当传感器和执行器未并置时，需要估计传感器和执行器之间的传递函数来计算驱动滤波器参数自适应过程的误差信号。 由于该过程基于自适应算法，因此它具有鲁棒性，并且允许比反馈方法更高的频带衰减。"
        },
        {
          "id": "block-12",
          "en": "Modalbased feedback vibration control A general feedback control loop might be represented by the block diagram in bounded, H (s) is a feedback compensator, r(s) is a reference value of any plant variable (position, velocity) and d(s) is an undesired disturbance that will affect the output y(s).",
          "zh": "基于模态的反馈振动控制一般反馈控制环路可以用有界框图表示，H(s)是反馈补偿器，r(s)是任何设备变量（位置、速度）的参考值，d(s)是影响输出y(s)的不需要的扰动。"
        },
        {
          "id": "block-13",
          "en": "The transfer function, F r (s), between reference input, r(s), and plant output, y(s), is readily available: F r (s) = y(s) r(s) = H (s)G(s) 1 + H (s)G(s) (5.12) The transfer function, F d (s), between the disturbance d(s) and the system's output can be expressed as F d (s) = y(s) d(s) = 1 1 + H (s)G(s) (5.13) Σ Σ H(s) G(s) + _ + + r(s) y(s) d(s) It is evident that, when H (s)G(s) 1, the output perfectly tracks the reference, that is, F r (s) → 1, and the effect of the disturbance on the output is negligible: H (s)G(s) 1 ⇒ y(s) ≈ r(s) and y(s) d(s) ≈ 0 (5.14) The modalbased feedback vibration control approach is intended to provide perfect tracking of the plant's reference value while ensuring high disturbance rejection.",
          "zh": "参考输入 r(s) 和设备输出 y(s) 之间的传递函数 F r (s) 很容易获得： F r (s) = y(s) r(s) = H (s)G(s) 1 + H (s)G(s) (5.12) 扰动 d(s) 和系统输出之间的传递函数 F d (s) 可表示为 F d (s) = y(s) d(s) = 1 1 + H (s)G(s) (5.13) Σ Σ H(s) G(s) + _ + + r(s) y(s) d(s) 显然，当 H (s)G(s) 1 时，输出完全跟踪参考，即 F r (s) → 1，并且干扰对输出的影响可以忽略不计： H (s)G(s) 1 ⇒ y(s) ≈ r(s) 和 y(s) d(s) ≈ 0 (5.14) 基于模态的反馈振动控制方法旨在提供对设备参考值的完美跟踪，同时确保高抗扰性。"
        },
        {
          "id": "block-14",
          "en": "According to Preumont (1997), irrespective of the method used to find the appropriate compensator, H (s), the following characteristics are common to all modal reference feedback control systems: 1. They always depend on accurate models of the plant being controlled, and the bandwidth of the control system depends on the accuracy of the model.",
          "zh": "根据 Preumont (1997) 的说法，无论使用何种方法寻找合适的补偿器 H(s)，以下特性对于所有模态参考反馈控制系统都是通用的： 1. 它们始终依赖于受控设备的准确模型，并且控制系统的带宽取决于模型的精度。"
        },
        {
          "id": "block-15",
          "en": "Low accuracy produces spillover, which is a reduced damping of residual modes. 2. Rejection of the disturbance in the control bandwidth leads to increased disturbance outside the control range.",
          "zh": "低精度会产生溢出，即残余模式的阻尼减小。 2.抑制控制带宽内的干扰会导致控制范围外的干扰增加。"
        },
        {
          "id": "block-16",
          "en": "3. A very high sampling frequency is required in digitally implemented control loops (of the order of 10 times the maximum control frequency). Active damping The objective of active damping control is to increase the damping of some of the vibration modes of a structure while leaving the system's transfer function unaffected outside the resonance modes.",
          "zh": "3. 数字实现的控制环路需要非常高的采样频率（约为最大控制频率的 10 倍）。 主动阻尼主动阻尼控制的目标是增加结构某些振动模式的阻尼，同时使系统的传递函数在共振模式之外不受影响。"
        },
        {
          "id": "block-17",
          "en": "Ideally, the closedloop transfer function F (s) in Equation 5.12 would look the same as G(s) out of resonance but would be more damped (the amplitude reduced) close to the resonance frequency. According to Preumont (1997), active damping control can be achieved without a model of the structure and provide guaranteed stability under two conditions: 1. Sensors and actuators are collocated.",
          "zh": "理想情况下，公式 5.12 中的闭环传递函数 F (s) 看起来与非谐振的 G(s) 相同，但在接近谐振频率时阻尼更大（幅度减小）。 根据 Preumont (1997) 的说法，主动阻尼控制无需结构模型即可实现，并在以下两种条件下提供有保证的稳定性： 1. 传感器和执行器是并置的。"
        },
        {
          "id": "block-18",
          "en": "In practice, this means that the sensor directly provides a measure of the action of the actuator. This is an important feature when considering smart structures (see Section 5.4.2). 2.",
          "zh": "实际上，这意味着传感器直接提供执行器动作的测量。在考虑智能结构时，这是一个重要特征（参见第 5.4.2 节）。 2."
        },
        {
          "id": "block-19",
          "en": "Actuator and sensor have perfect dynamics. Perfect dynamics for sensor and actuator will produce infinite bandwidth rejection. The active damping system will have finite bandwidth to the extent that sensor and actuator have limited dynamics, which is always the case.",
          "zh": "执行器和传感器具有完美的动力学特性。 传感器和执行器的完美动态将产生无限带宽抑制。 主动阻尼系统的带宽有限，传感器和执行器的动态性能有限，情况总是如此。"
        },
        {
          "id": "block-20",
          "en": "The condition of collocated sensors and actuators in an undamped structure produces alternating poles and zeros on the imaginary axis of the splane. If the system damping is moderately increased, the alternating pattern of poles and zeros shifts slightly toward the negative real half plane, guaranteeing stability.",
          "zh": "无阻尼结构中并置的传感器和执行器的情况会在平面的虚轴上产生交替的极点和零点。 如果适度增加系统阻尼，极点和零点的交替模式会稍微向负实半平面移动，从而保证稳定性。"
        },
        {
          "id": "block-21",
          "en": "Several active damping strategies can be envisaged (Preumont (1997)): velocity feedback, acceleration feedback, lead compensator position feedback and force feedback. Here, we briefly analyze active damping through velocity feedback, since this is of particular interest for active damping control implementations in smart structures. Let us consider the feedback loop in Figure 5.12.",
          "zh": "可以设想几种主动阻尼策略（Preumont (1997)）：速度反馈、加速度反馈、超前补偿器位置反馈和力反馈。 在这里，我们通过速度反馈简要分析主动阻尼，因为这对于智能结构中主动阻尼控制的实现特别重要。 让我们考虑一下图 5.12 中的反馈循环。"
        },
        {
          "id": "block-22",
          "en": "In order to simplify the derivation, we will consider an undamped structure with the following governing equation: [Ms2 + K] x(s) = f (s) + Bu(s) (5.15) Since we are considering collocated sensors and actuators, the following equation applies: sy(s) = B T x(s) (5.16) Moreover, in the case of a velocity feedback law, the control action will be u(s) = −Dsy(s) (5.17) If all three Equations 5.15-5.17 are combined, this gives [Ms2 + BDB T s + K] x(s) = f (s) (5.18) The control action on the plant results in a viscously damped closedloop transfer function.",
          "zh": "为了简化推导，我们将考虑具有以下控制方程的无阻尼结构： [Ms2 + K] x(s) = f (s) + Bu(s) (5.15) 由于我们考虑的是并置传感器和执行器，因此适用以下方程： sy(s) = B T x(s) (5.16) 此外，在速度反馈定律的情况下，控制作用将为 u(s) = −Dsy(s) (5.17) 如果将所有三个方程 5.15-5.17 组合起来，则得出 [Ms2 + BDB T s + K] x(s) = f (s) (5.18) 对设备的控制作用产生粘性阻尼闭环传递函数。"
        },
        {
          "id": "block-23",
          "en": "As discussed in the next section, in applications of piezoelectric actuators in smart structures, direct electrical current feedback can be considered equivalent in approach to direct velocity feedback and produces active structural damping. 'Tunable' vibration absorbers Tuned vibration absorbers were mentioned earlier as a successful classic approach to vibration attenuation.",
          "zh": "正如下一节所讨论的，在压电致动器在智能结构中的应用中，直接电流反馈可以被认为与直接速度反馈等效，并产生主动结构阻尼。 “可调”减振器 前面提到可调减振器是一种成功的经典减振方法。"
        },
        {
          "id": "block-24",
          "en": "As noted then, a springmassdamper mechanism is tuned so that its resonance frequency matches the particular frequency for which vibration reduction in a structure is desired. The tuned vibration absorber is mounted on the structure whose vibration is to be attenuated.",
          "zh": "如随后所指出的，弹簧质量阻尼器机构被调谐，使得其共振频率与需要减少结构振动的特定频率相匹配。 调谐减振器安装在需要衰减振动的结构上。"
        },
        {
          "id": "block-25",
          "en": "When the structure is excited at this particular frequency, the vibration is absorbed by the tuned mechanical system and the structure exhibits antiresonance (zero amplitude vibration) behavior (see Figure 5.10a). Tuned vibration absorbers are limited to singlefrequency vibration attenuation. If multifrequency attenuation is required, additional absorbers must be used.",
          "zh": "当结构在此特定频率下受到激励时，振动被调谐机械系统吸收，并且结构表现出反共振（零振幅振动）行为（见图 5.10a）。 调谐减振器仅限于单频振动衰减。 如果需要多频衰减，则必须使用额外的吸收器。"
        },
        {
          "id": "block-26",
          "en": "Magnetostrictive materials exhibit the Yeffect (see Section 5.2.2). This phenomenon produces changes in Young's modulus as the magnetization state of the material is modified. Since the resonance frequency of a secondorder system is proportional to the square root of the Young's modulus, fr ∝ √Y , the Yeffect can be used to effectively change the resonance frequency of a magnetostrictive material.",
          "zh": "磁致伸缩材料表现出 Y 效应（参见第 5.2.2 节）。 随着材料磁化状态的改变，这种现象会产生杨氏模量的变化。 由于二阶系统的谐振频率与杨氏模量的平方根fr ∝ √Y 成正比，因此Y效应可用于有效改变磁致伸缩材料的谐振频率。"
        },
        {
          "id": "block-27",
          "en": "This in turn can be used to implement a \"tunable\" vibration absorber. This is the way that an actuator with a seismic mass attached to it is developed (see the schematic representation in Figure 5.10b).",
          "zh": "这又可用于实现“可调谐”减振器。这就是开发附有地震质量的执行器的方法（参见图 5.10b 中的示意图）。"
        },
        {
          "id": "block-28",
          "en": "By changing the magnetization state when an external magnetic field is applied to the magnetostrictive material, the resonance frequency of the tunable massspringdamper magnetostrictive system will be modified and can be adapted to requirements.",
          "zh": "通过改变磁致伸缩材料施加外部磁场时的磁化状态，可调质量弹簧阻尼器磁致伸缩系统的谐振频率将被修改并可适应要求。"
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
          "zh": "智能执行器最显着的特点是其作为传感器和执行器同时运行的内在能力。 正如第一章所讨论的，这种特性是各种材料的传导特性的产物。 智能结构的显着特征是传感器和执行器作为结构的组成部分的高度集成。"
        },
        {
          "id": "block-2",
          "en": "The integration of sensor and actuator functions results in functional and active structures. Owing to the intimate combination of sensor, actuator and structural functions, they can perform the following roles: 1. Structural health monitoring.",
          "zh": "传感器和执行器功能的集成产生了功能性和主动结构。 由于传感器、执行器和结构功能的紧密结合，它们可以发挥以下作用： 1. 结构健康监测。"
        },
        {
          "id": "block-3",
          "en": "Embedded smart actuators can be used to assess the condition of a structure, for instance, to detect increasing loss of stiffness because of growing cracks. 2. Failure prevention.",
          "zh": "嵌入式智能执行器可用于评估结构的状况，例如，检测由于裂纹增长而导致的刚度损失的增加。 2. 故障预防。"
        },
        {
          "id": "block-4",
          "en": "Upon detection of increasing loss of stiffness or in the event of overloading, smart actuators can be used to temporarily stiffen the structure. 3. Integrity protection.",
          "zh": "当检测到刚度损失增加或发生过载时，智能执行器可用于暂时加固结构。 3.完整性保护。"
        },
        {
          "id": "block-5",
          "en": "Smart actuators can generally provide reactive action following any undesired circumstance, for instance, when excessive vibration is sensed. Of the various actuator technologies discussed in this book, SMA actuators, piezoelectric actuators and magnetostrictive actuators are the three best suited to develop the smart actuator and smart structure concepts.",
          "zh": "智能执行器通常可以在任何不期望的情况下提供反应动作，例如，当感测到过度振动时。 在本书讨论的各种执行器技术中，SMA 执行器、压电执行器和磁致伸缩执行器是最适合开发智能执行器和智能结构概念的三种。"
        },
        {
          "id": "block-6",
          "en": "Their properties in this regard are briefly reviewed in the following paragraphs. Shape memory alloy actuators in smart structures SMA actuators can both sense the status (position) of and deliver mechanical energy to the structure in which they are embedded. They can be readily embedded in structures to provide functionality.",
          "zh": "以下段落简要回顾了它们在这方面的特性。 智能结构中的形状记忆合金执行器 SMA 执行器既可以感知其嵌入结构的状态（位置），也可以向其传递机械能。 它们可以轻松嵌入结构中以提供功能。"
        },
        {
          "id": "block-7",
          "en": "Three possible actuation mechanisms are envisaged: 1. Stiffening through control of the Young's modulus. The Young's modulus of SMAs increases significantly upon transformation from martensite to the parent phase.",
          "zh": "设想了三种可能的驱动机制： 1.通过控制杨氏模量来加强。 SMA 的杨氏模量在从马氏体转变为母体相时显着增加。"
        },
        {
          "id": "block-8",
          "en": "This can be used to stiffen the structure transitorily. The stiffening process can be used, for instance, to shift the resonance frequency of the structure and avoid possible resonance vibration in response to external excitation. 2.",
          "zh": "这可用于暂时加固结构。 例如，硬化过程可用于改变结构的共振频率并避免响应外部激励而可能发生的共振。 2."
        },
        {
          "id": "block-9",
          "en": "Generation of strain. The shape memory effect can be used to exert a stress on the structure and strain it. This can also be readily used to change the resonance properties of the structure.",
          "zh": "菌株的产生。形状记忆效应可用于对结构施加应力并使其应变。这也可以很容易地用于改变结构的共振特性。"
        },
        {
          "id": "block-10",
          "en": "3. Energy dissipation through the hysteretic pseudoelastic effect. The pseudoelastic effect in SMAs (see Section 3.1.2) is characterized by a hysteretic dissipation phenomenon.",
          "zh": "3.通过滞后伪弹性效应耗散能量。 SMA 中的伪弹性效应（参见第 3.1.2 节）的特点是滞后耗散现象。"
        },
        {
          "id": "block-11",
          "en": "Pseudoelasticity can be used to increase the apparent damping of the structure. The first two actuation mechanisms can be implemented in response to some monitoring action that may also be accomplished by the SMA, this time performing as a sensor (see Section 3.3.3). The third mechanism is intrinsically passive.",
          "zh": "伪弹性可用于增加结构的表观阻尼。 前两个驱动机制可以响应一些监控动作来实现，这些监控动作也可以由 SMA 完成，这次作为传感器执行（参见第 3.3.3 节）。 第三种机制本质上是被动的。"
        },
        {
          "id": "block-12",
          "en": "Piezoelectric actuators in smart structures Piezoelectric actuators were extensively discussed in Chapter 1. Like SMA actuators, they can perform both as sensors and as actuators.",
          "zh": "智能结构中的压电执行器 第 1 章广泛讨论了压电执行器。与 SMA 执行器一样，它们既可以用作传感器，也可以用作执行器。"
        },
        {
          "id": "block-13",
          "en": "Unlike SMA actuators, piezoelectric actuators cannot be used to concomitantly impose and sense the same output variable (in Chapter 1, a method based on unbalanced bridge circuits was introduced as a possible approach to estimate this output variable), but they can sense the conjugate variable to the imposed one.",
          "zh": "与 SMA 执行器不同，压电执行器不能同时施加和感测相同的输出变量（在第 1 章中，介绍了一种基于不平衡电桥电路的方法作为估计该输出变量的可能方法），但它们可以感测所施加的共轭变量。"
        },
        {
          "id": "block-14",
          "en": "When discussing piezoelectric actuators, we pointed out (see Section 2.5.2) that current drawn is, in principle, proportional to the actuator's velocity.",
          "zh": "在讨论压电执行器时，我们指出（参见第 2.5.2 节），原则上，消耗的电流与执行器的速度成正比。"
        },
        {
          "id": "block-15",
          "en": "For the sake of convenience, let us recall these relationships here: l ≈ Q v p ≈ i ap ≈ di/dt According to the above equations, if control is achieved by feeding the current drawn directly back in a negative control loop, the result is equivalent to a direct velocity feedback approach. Direct velocity feedback, in a collocated sensor/actuator pair, leads to stable active damping control schemes (see section 5.4.1).",
          "zh": "为了方便起见，让我们在这里回忆一下这些关系： l ≈ Q v p ≈ i ap ≈ di/dt 根据上述方程，如果通过在负控制环路中直接反馈汲取的电流来实现控制，则结果相当于直接速度反馈方法。 并置传感器/执行器对中的直接速度反馈可实现稳定的主动阻尼控制方案（参见第 5.4.1 节）。"
        },
        {
          "id": "block-16",
          "en": "Therefore, since a piezoelectric smart actuator is intrinsically collocated, this approach greatly facilitates the implementation of active vibration control in smart structures. Also in Section 2.5.2, we discussed how the electrical boundary conditions applied to a piezoelectric actuator can result in programmable actuator stiffness.",
          "zh": "因此，由于压电智能致动器本质上是配置的，因此这种方法极大地促进了智能结构中主动振动控制的实现。 同样在第 2.5.2 节中，我们讨论了应用于压电执行器的电气边界条件如何导致可编程执行器刚度。"
        },
        {
          "id": "block-17",
          "en": "Programmable stiffness, like the first actuation mechanism in SMA actuators, can be applied for voluntary stiffening in response to monitoring functions. Two actuation approaches can be envisaged for piezoelectric actuators: 1. As linear actuators.",
          "zh": "可编程刚度（如 SMA 致动器中的第一个致动机构）可用于响应监控功能的自愿硬化。 对于压电致动器，可以设想两种致动方法： 1. 作为线性执行器。"
        },
        {
          "id": "block-18",
          "en": "In this approach, they replace conventional actuators in controlling structure parameters. As noted earlier, this actuation approach is not suitable for development of the smart structure concept as sensor and actuator functions are lumped rather than distributed. We need discuss this scheme no further.",
          "zh": "通过这种方法，它们在控制结构参数方面取代了传统的执行器。 如前所述，这种驱动方法不适合智能结构概念的开发，因为传感器和执行器功能是集中的而不是分布式的。 我们不需要进一步讨论这个方案。"
        },
        {
          "id": "block-19",
          "en": "2. As surface bonded actuators. The piezoelectric material is laminated and bonded in thin layers to the structure (see Figure 5.13).",
          "zh": "2. 作为表面粘合执行器。压电材料以薄层形式层压并粘合到结构上（见图 5.13）。"
        },
        {
          "id": "block-20",
          "en": "This can serve for the application of either axial or bending loads. Both actuation approaches are most commonly used to enhance the damping characteristics of the structure to which they are attached (first case) or embedded (second approach). As regards surfacebonded actuators, in controlling damping, again there are two possible strategies: 1.",
          "zh": "这可以用于轴向或弯曲载荷的应用。 这两种驱动方法最常用于增强其所附着（第一种情况）或嵌入（第二种方法）的结构的阻尼特性。 对于表面粘合执行器，在控制阻尼方面，同样有两种可能的策略： 1."
        },
        {
          "id": "block-21",
          "en": "Passive damping. In this approach, the actuator is bonded to the structure and is electrically connected to a passive RLC circuit. The actuator acts as a voltage source when driven by the structural vibrations through the direct piezoelectric effect.",
          "zh": "被动阻尼。 在这种方法中，致动器粘合到结构上并电连接到无源 RLC 电路。 当通过直接压电效应受到结构振动驱动时，执行器充当电压源。"
        },
        {
          "id": "block-22",
          "en": "The electrical energy is dissipated at the resistor. This results in an apparent increase of structural damping. Structure Piezoelectric actuator R C circuit for passive damping.",
          "zh": "电能在电阻器处耗散。这导致结构阻尼明显增加。结构 压电致动器 R C 电路用于被动阻尼。"
        },
        {
          "id": "block-23",
          "en": "Some selectivity in the damping process can be achieved by tuning the RLC characteristics of the passive circuit to the target frequency (see Figure 5.13). 2. Active damping.",
          "zh": "通过将无源电路的 RLC 特性调整到目标频率，可以实现阻尼过程中的某些选择性（见图 5.13）。 2.主动阻尼。"
        },
        {
          "id": "block-24",
          "en": "In this mode, the piezoelectric actuators are integrated in a modal reference feedback control strategy, in an active control strategy or in a feedforward control strategy. In any of these control algorithms, the piezoelectric actuator can perform as a smart actuator, that is, sensing and actuating concomitantly.",
          "zh": "在此模式下，压电致动器集成在模态参考反馈控制策略、主动控制策略或前馈控制策略中。 在任何这些控制算法中，压电致动器都可以充当智能致动器，即同时进行感测和致动。"
        },
        {
          "id": "block-25",
          "en": "Magnetostrictive actuators in smart structures Magnetostrictive actuators are best suited for active vibration control of structures. Moreover, they are a typical example of a smart actuator. However, they are not suitable for integration in any type of structure.",
          "zh": "智能结构中的磁致伸缩执行器磁致伸缩执行器最适合结构的主动振动控制。 此外，它们是智能执行器的典型例子。 然而，它们不适合集成到任何类型的结构中。"
        },
        {
          "id": "block-26",
          "en": "In particular, planar configurations (similar to bonded laminate piezoelectric actuators (see Figure 5.13) are not ideal for magnetostrictive actuators. This is due to the difficulty in creating a uniform magnetic field for such a planar configuration.",
          "zh": "特别是，平面配置（类似于粘合层压压电执行器（见图 5.13））对于磁致伸缩执行器来说并不理想。 这是因为很难为这种平面配置产生均匀的磁场。"
        },
        {
          "id": "block-27",
          "en": "Magnetostrictive actuators are more suitable for integration in discrete structures like threedimensional trusses and structures with structural cables (bridges or buildings). There, they can take the place of passive structural elements and thus offer the possibility of cancelling out structural vibrations (see Bartlett et al. (2001)).",
          "zh": "磁致伸缩执行器更适合集成在离散结构中，例如三维桁架和具有结构缆索的结构（桥梁或建筑物）。 在那里，它们可以取代被动结构元件，从而提供消除结构振动的可能性（参见 Bartlett 等，2017）。 （2001））。"
        },
        {
          "id": "block-28",
          "en": "The issue of active control of truss structures has been comprehensively studied by Preumont (1997). We will not go into more detail here; for more details, the reader is referred to this or any other book on the subject. Magnetostrictive actuators can be used in the context of vibration suppression in smart structures, in three different modes: 1.",
          "zh": "Preumont (1997) 对桁架结构的主动控制问题进行了全面的研究。 我们在这里不再赘述；要了解更多详细信息，读者可以参考本书或任何其他有关该主题的书。 磁致伸缩执行器可用于智能结构的振动抑制，具有三种不同的模式： 1."
        },
        {
          "id": "block-29",
          "en": "Stiffeners 2. Dampers 3. Active elements.",
          "zh": "加强筋 2. 阻尼器 3. 主动元件。"
        },
        {
          "id": "block-30",
          "en": "Stiffeners make use of the Yeffect, which allows a twofold increase in the actuator's stiffness. By changes induced in the structural stiffness of the structure in which they are integrated, the resonance frequency can be modified to prevent resonance amplification following external excitation. Magnetostrictive actuators can also be used as dampers in active damping control approaches.",
          "zh": "加强筋利用 Y 效应，使执行器的刚度增加两倍。 通过集成它们的结构的结构刚度的变化，可以修改谐振频率以防止外部激励后的谐振放大。 磁致伸缩执行器还可用作主动阻尼控制方法中的阻尼器。"
        },
        {
          "id": "block-31",
          "en": "Active damping control was already introduced in previous sections. The role of the actuator in this control scheme is to enhance the structural damping by means of direct velocity feedback or similar approaches. Finally, they can be applied in active vibration cancellation control schemes, both feedforward and feedback.",
          "zh": "主动阻尼控制已在前面的章节中介绍过。 该控制方案中执行器的作用是通过直接速度反馈或类似方法来增强结构阻尼。 最后，它们可以应用于主动减振控制方案，包括前馈和反馈。"
        },
        {
          "id": "block-32",
          "en": "In this approach, the MS actuator will provide the necessary secondary disturbance to cancel out vibrations. As in the case of piezoelectric or shape memory actuators, both sensing and driving functions can be implemented concomitantly. This is discussed in more detail in the next section.",
          "zh": "在这种方法中，MS 执行器将提供必要的二次扰动来抵消振动。 与压电或形状记忆执行器的情况一样，传感和驱动功能可以同时实现。 这将在下一节中更详细地讨论。"
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
          "zh": "我们在前面的章节中描述了磁致伸缩效应的可逆性。 维拉里效应和马特乌西效应这两种不同的现象被定义为力和扭矩（机械域中的能量）到磁域之间的传导。 由于这些逆向传导过程的存在，磁致伸缩换能器可以被配置为传感器。"
        },
        {
          "id": "block-2",
          "en": "Sensors based on either of the two above effects have been proposed to monitor various different physical variables. They are classified in three categories (see Dapino et al. (2002)): 1.",
          "zh": "已经提出基于上述两种效应中的任一种的传感器来监测各种不同的物理变量。它们分为三类（参见 Dapino 等人 (2002)）： 1."
        },
        {
          "id": "block-3",
          "en": "Passive sensors. These rely on the transduction process itself, that is, the change in the material's magnetic properties in response to environmental changes. 2.",
          "zh": "无源传感器。这些依赖于转导过程本身，即材料的磁性随环境变化而变化。 2."
        },
        {
          "id": "block-4",
          "en": "Active sensors. These sensors use the magnetostrictive material in an active way. They are excited in a known manner, and this facilitates measurement of some properties of the material that change with an external physical variable.",
          "zh": "主动传感器。 这些传感器以主动方式使用磁致伸缩材料。 它们以已知的方式被激发，这有助于测量随着外部物理变量而变化的材料的一些特性。"
        },
        {
          "id": "block-5",
          "en": "3. Combined sensors. Here, the magnetostrictive transducer is used in combination with other materials.",
          "zh": "3.组合传感器。这里，磁致伸缩换能器与其他材料结合使用。"
        },
        {
          "id": "block-6",
          "en": "The magnetostrictive material is used to excite or alter another material which will, in turn, allow the target property to be measured. In the context of concomitant sensing and actuation based on magnetostrictive materials, we are mainly interested in passive magnetostrictive sensors, that is, in the concomitant use of direct and converse effects for simultaneous sensing and actuation.",
          "zh": "磁致伸缩材料用于激发或改变另一种材料，从而允许测量目标特性。 在基于磁致伸缩材料的伴随传感和驱动的背景下，我们主要对无源磁致伸缩传感器感兴趣，即同时使用直接和反向效应来同时传感和驱动。"
        },
        {
          "id": "block-7",
          "en": "Let us recall here the linearized version of the constitutive equations (Equation 5.3) for the magnetostrictive effect: S = c H T + dH B = ¯dT + μ T H (5.19) Equation 5.19 describes the coupling between magnetic and mechanical variables in the direct and converse magnetostrictive effect.",
          "zh": "让我们回顾一下磁致伸缩效应的线性化本构方程（方程 5.3）： S = c H T + dH B = ¯dT + μ T H (5.19) 方程 5.19 描述了正磁致伸缩效应和逆磁致伸缩效应中磁变量和机械变量之间的耦合。"
        },
        {
          "id": "block-8",
          "en": "The first equation describes the transducer as an actuator, that is, the resulting displacement is a function of the applied magnetic field strength. It further includes the coupling between mechanical variables, that is, the displacement resulting from mechanical load. The second part of the constitutive equation describes the transducer in the role of sensor, relating the mechanical load to the magnetic induction.",
          "zh": "第一个方程将换能器描述为致动器，也就是说，产生的位移是所施加磁场强度的函数。 它还包括机械变量之间的耦合，即机械载荷引起的位移。 本构方程的第二部分描述了传感器的作用，将机械负载与磁感应强度联系起来。"
        },
        {
          "id": "block-9",
          "en": "Again, this part includes the coupling between the magnetic field variables, that is, the applied magnetic field strength results in magnetic induction. The two equations can be combined by solving the first part for H and substituting it in the second part to yield B = T [ ¯d + μ T c H d ] + μ T d S (5.20) Equation 5.20 describes the sensor model for the magnetostrictive transducer.",
          "zh": "同样，这部分包括磁场变量之间的耦合，即施加的磁场强度导致磁感应。 可以通过求解第一部分的 H 并将其代入第二部分来组合这两个方程，从而得出 B = T [ ¯d + μ T c H d ] + μ T d S (5.20) 方程 5.20 描述了磁致伸缩传感器的传感器模型。"
        },
        {
          "id": "block-10",
          "en": "It formulates the relationship between the resulting magnetic induction in the magnetostrictive material, B, the applied force, T , and displacement, S. Faraday's law can be used to determine the magnetic induction in the material.",
          "zh": "它公式化了磁致伸缩材料中产生的磁感应强度 B、所施加的力 T 和位移 S 之间的关系。 法拉第定律可用于确定材料中的磁感应强度。"
        },
        {
          "id": "block-11",
          "en": "This states that the voltage induced in a coil wrapped around the magnetostrictive material is V = NA dB dt = NA dT dt [ ¯d + μ T c H d ] + NA dS dt μ T d (5.21) where N is the number of turns in the coil and A is the crosssectional area.",
          "zh": "这表明缠绕在磁致伸缩材料上的线圈中感应的电压为 V = NA dB dt = NA dT dt [ ¯d + μ T c H d ] + NA dS dt μ T d (5.21) 其中 N 是线圈的匝数，A 是横截面积。"
        },
        {
          "id": "block-12",
          "en": "Equation 5.21 indicates that the voltage in such a sensor configuration is proportional to the rate of change of force (jerk) and to the rate of change of displacements (velocity) in the magnetostrictive material. It can be demonstrated (Dapino et al.",
          "zh": "公式 5.21 表明，此类传感器配置中的电压与磁致伸缩材料中的力（急动度）变化率和位移（速度）变化率成正比。 可以证明这一点（Dapino 等人，2017）。"
        },
        {
          "id": "block-13",
          "en": "(2002)) that the magnetostrictive process is fully reversible and ¯d = d, and that the term in Equation 5.21 corresponding to the velocity is one order of magnitude smaller than the terms relating to force.",
          "zh": "(2002)) 磁致伸缩过程是完全可逆的，并且 ¯d = d，并且方程 5.21 中对应于速度的项比与力相关的项小一个数量级。"
        },
        {
          "id": "block-14",
          "en": "Therefore, for harmonic excitations, a model for the force measured by the transducer would be T = V NAω [ 1 d + μ T c H d ] (5.22) The design of magnetostrictive transducers as sensors is equivalent to their design as actuators. Moreover, as we assumed that ¯d = d, this implies that if the transducer is designed for efficient operation as an actuator, it will be a highsensitivity sensor.",
          "zh": "因此，对于谐波激励，传感器测得的力的模型为 T = V NAω [ 1 d + μ T c H d ] (5.22) 磁致伸缩传感器作为传感器的设计等同于它们作为执行器的设计。 此外，正如我们假设 ¯d = d，这意味着如果传感器被设计为作为执行器高效运行，那么它将是一个高灵敏度传感器。"
        },
        {
          "id": "block-15",
          "en": "These are commonly used in sonar transducers where a transducer designed as an efficient emitter also yields the best results as a receiver. For combined sensor and actuation operation of magnetostrictive actuators, the bridge circuit configuration as discussed in Section 1.5 can be implemented.",
          "zh": "这些通常用于声纳传感器，其中设计为高效发射器的传感器也可作为接收器产生最佳结果。 对于磁致伸缩致动器的组合传感器和致动操作，可以实现第 1.5 节中讨论的桥电路配置。"
        },
        {
          "id": "block-16",
          "en": "To do this, the linearized constitutive equations for the magnetostrictive effect, Equation 5.19, must be rewritten in line with the electriccircuit analogy as discussed in Chapter 1. We commence the process by multiplying the sensing part of Equation 5.19 by the actuator's crosssectional area A.",
          "zh": "为此，必须根据第 1 章中讨论的电路类比重写磁致伸缩效应的线性化本构方程（方程 5.19）。 我们通过将方程 5.19 的传感部分乘以执行器的横截面积 A 来开始该过程。"
        },
        {
          "id": "block-17",
          "en": "Considering that = B · A, it follows that = ¯dT A + μ T H A (5.23) Now, if we take the time derivative of Equation 5.23, multiply the equation by N (the number of turns in the MS actuator coil) and note that V (t) = N d /dt and H = I (t)N , we obtain V (t) = N ¯d dT dt A + μ T N 2 A l dI dt (5.24) The Laplace transform of Equation 5.24 can now be developed.",
          "zh": "考虑到= B·A，可得出 = ́dT A + μ T H A (5.23) 现在，如果我们对公式 5.23 求时间导数，将该公式乘以 N（MS 致动器线圈的匝数），并注意 V (t) = N d /dt 且 H = I (t)N ，我们得到 V (t) = N ́d dT dt A + μ T N 2 A l dI dt (5.24) 现在可以开发公式 5.24 的拉普拉斯变换。"
        },
        {
          "id": "block-18",
          "en": "In addition, if we take into account lowfrequency excitation of the transducer, we can assume that the material's deformation obeys Hooke's law (T = Y ε). Given these assumptions, we can write V (j ω) = N ¯d AY l U (j ω) + j ωLI (j ω) (5.25) where Y is the Young's modulus and l is the length of the magnetostrictive actuator.",
          "zh": "此外，如果我们考虑换能器的低频激励，我们可以假设材料的变形遵循胡克定律（T = Y ε）。 考虑到这些假设，我们可以写成 V (j ω) = N ́d AY l U (j ω) + j ωLI (j ω) (5.25)，其中 Y 是杨氏模量，l 是磁致伸缩执行器的长度。"
        },
        {
          "id": "block-19",
          "en": "A simple inspection of Equations 5.25 and 1.5 will show that Ze = j ωL, that is, the blocked impedance of the magnetostrictive actuator (which is required to complete the second branch of the bridge circuit) is simply the inductance of the solenoid (with the MS material as the core) used to drive the MS actuator (see A similar approach can be used to derive the second part of Equation 1.5.",
          "zh": "简单检查公式 5.25 和 1.5 将显示 Ze = j ωL，即磁致伸缩执行器的阻塞阻抗（完成桥电路的第二支路所需）只是用于驱动 MS 执行器的螺线管（以 MS 材料为核心）的电感（请参阅类似的方法可用于导出公式 1.5 的第二部分。"
        },
        {
          "id": "block-20",
          "en": "It can be shown (Pratt (1993)) that this produces F (j ω) = AY l 1 j ω U (j ω) + AY dN I (j ω) (5.26) If the solenoid inductance is used in the second branch of the bridge circuit, the voltage across the bridge ought to be proportional to the actuator's velocity. However, this is not the case, and the reason is that the blocked impedance is nonlinearly dependent on the current drawn.",
          "zh": "可以证明（Pratt (1993)），这会产生 F (j ω) = AY l 1 j ω U (j ω) + AY dN I (j ω) (5.26) 如果在电桥电路的第二支路中使用螺线管电感，则电桥两端的电压应与执行器的速度成正比。 然而，情况并非如此，原因是阻塞阻抗与汲取的电流呈非线性相关。"
        },
        {
          "id": "block-21",
          "en": "Consequently, concomitant sensing and actuation with MS actuators is difficult to achieve, although some authors (Pratt (1993)) have reported positive results in narrow frequency bands around the actuator's mechanical resonance.",
          "zh": "因此，尽管一些作者（Pratt (1993)）报告了在致动器机械共振周围的窄频带中取得的积极结果，但 MS 致动器的同步传感和致动很难实现。"
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
          "zh": "本节分析磁致伸缩执行器的性能特点。 第 7 章完全致力于对所有新兴执行器 MS 执行器 Ze = jwL V v V R R 作为传感器的比较分析。 技术，但在这里我们特别关注 MS 和压电执行器的比较分析，因为它们具有最接近的品质因数。"
        },
        {
          "id": "block-2",
          "en": "In this section, we also give some indications about scaling trends in MS actuators.",
          "zh": "在本节中，我们还给出了有关 MS 执行器的缩放趋势的一些指示。"
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
          "zh": "静态性能 磁致伸缩和压电堆栈执行器可以一起归类为高力设备。 这些执行器中的力的绝对值在千牛顿范围内 (F ≥ 1 kN)。 然而，相对力（例如与横截面积或尺寸相比）变得比压电致动器中的相对力低几个数量级。"
        },
        {
          "id": "block-2",
          "en": "This is mainly due to the accompanying components required to set up bias magnetic fields or to prestress the magnetostrictive actuator. While piezoelectric stack actuators can be directly applied to drive the load, MS actuators require coils to set up the magnetic field and, in most implementations, permanent magnets to apply bias fields.",
          "zh": "这主要是由于设置偏置磁场或对磁致伸缩致动器施加预应力所需的附带组件所致。 虽然压电堆栈执行器可以直接用于驱动负载，但 MS 执行器需要线圈来建立磁场，并且在大多数实现中需要永磁体来施加偏置场。"
        },
        {
          "id": "block-3",
          "en": "Stroke in MS actuators is of the order of 1500-2000 ppm for static applications and close to 4000 ppm where resonance amplification is used in dynamic applications. In absolute value, the displacement is limited in practice to some tenths of a millimeter.",
          "zh": "对于静态应用，MS 执行器的行程约为 1500-2000 ppm，而在动态应用中使用共振放大时，行程接近 4000 ppm。 从绝对值来看，位移实际上限制在零点几毫米。"
        },
        {
          "id": "block-4",
          "en": "Stroke is higher in MS actuators than in piezoelectric stack actuators, but the performance of piezoelectric stack and MS actuators is very similar in terms of the relative stroke (for instance, with respect to the length of the actuator). Dynamic performance The energy density of magnetostrictive actuators is in the range of W V ≤ 10−3 J/cm3 and must therefore be considered low.",
          "zh": "MS 致动器的行程高于压电堆栈致动器，但压电堆栈和 MS 致动器的性能在相对行程（例如，相对于致动器的长度）方面非常相似。 动态性能 磁致伸缩执行器的能量密度在 W V ≤ 10−3 J/cm3 范围内，因此必须被视为较低。"
        },
        {
          "id": "block-5",
          "en": "If only the magnetostrictive material were considered, the energy density would be closer to that of piezoelectric actuators, but, here again, the bulky accompanying elements cause reduced work density. The bandwidth of MS actuators is high, f ≥ 1 kHz. Together with piezoelectric stack actuators and some piezoelectric multimorph drives, they have the highest frequency bandwidth of all emerging actuator technologies.",
          "zh": "如果仅考虑磁致伸缩材料，能量密度将更接近压电致动器的能量密度，但是，笨重的伴随元件再次导致工作密度降低。 MS 执行器的带宽很高，f ≥ 1 kHz。 与压电堆栈执行器和一些压电多晶驱动器一起，它们具有所有新兴执行器技术中最高的频率带宽。"
        },
        {
          "id": "block-6",
          "en": "MS drives are driven at lower frequencies than piezoelectric stack actuators. There are two main reasons for this: 1. Lower Young's modulus.",
          "zh": "MS 驱动器的驱动频率低于压电堆栈执行器。其主要原因有两个： 1. 杨氏模量较低。"
        },
        {
          "id": "block-7",
          "en": "MS materials exhibit a lower Young's modulus than piezoelectric materials (two to three times lower). This results in lower resonance frequency of MS materials, which in turn limits the maximum driving frequency for actuators based on this technology. 2.",
          "zh": "MS 材料的杨氏模量比压电材料低（低两到三倍）。 这导致MS材料的共振频率较低，进而限制了基于该技术的执行器的最大驱动频率。 2."
        },
        {
          "id": "block-8",
          "en": "Eddy currents. Changing magnetic fields induce electrical currents in the magnetostrictive materials; the higher the excitation frequency, the stronger are the currents induced. This imposes a practical limit on the maximum frequency attainable with MS actuators.",
          "zh": "涡流。 改变磁场会在磁致伸缩材料中感应出电流；激励频率越高，感应电流越强。 这对 MS 执行器可达到的最大频率施加了实际限制。"
        },
        {
          "id": "block-9",
          "en": "Power density in MS actuators is a result of the two previous figures of merit. Since both energy density and bandwidth are lower in MS actuators than in piezoelectric drives, absolute power density values are low, of the order of 1 W/cm3 , which is up to three orders of magnitude lower than in piezoelectric stack actuators.",
          "zh": "MS 执行器的功率密度是前两个品质因数的结果。 由于 MS 执行器的能量密度和带宽均低于压电驱动器，因此绝对功率密度值较低，约为 1 W/cm3，比压电堆栈执行器低三个数量级。"
        },
        {
          "id": "block-10",
          "en": "Other performance characteristics The temperature range of operation for MS actuators is limited in practice by the material's Curie temperature. The Curie temperature for TerfenolD is close to 380 ◦C, which is higher than the Curie temperature for lead zirconate titanate (PZT) materials. Driving voltages for MS actuators are lower than those for piezoelectric stack actuators.",
          "zh": "其他性能特性 MS 执行器的工作温度范围实际上受到材料居里温度的限制。 TerfenolD 的居里温度接近 380°C，高于锆钛酸铅 (PZT) 材料的居里温度。 MS 致动器的驱动电压低于压电堆栈致动器的驱动电压。"
        },
        {
          "id": "block-11",
          "en": "Power supply for this technology is readily available from several manufacturers. Unfortunately, the MS material itself is much less readily available. While PZT materials can be found in several grades, the only available MS material grade is TerfenolD.",
          "zh": "多家制造商均可轻松提供适用于该技术的电源。 不幸的是，MS 材料本身不太容易获得。 虽然 PZT 材料有多种等级，但唯一可用的 MS 材料等级是 TerfenolD。"
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
          "zh": "磁致伸缩致动器的缩放定律与压电堆栈致动器的缩放定律相似。 MS 执行器中的力与其横截面积成正比，因此与主尺寸 F ∝ L2 的平方成正比。 MS 执行器的缩放趋势。"
        },
        {
          "id": "block-2",
          "en": "Figures of merit MS actuators Force, F High, ≥103 N Displacement, S Up to 2000 ppm Work density, W V ≈10−4 -10−3 J/cm3 Power density, P V ≈1 W/cm3 Bandwidth, f ≥103 Hz Efficiency, η Coupling factor 0.75 Scaling trends Force F ∝ L2 Stroke S ∝ L Work per cycle W ∝ L3 Energy density W V ∝ L0 Bandwidth f ∝ L−2 Power density P V ∝ L−2 The stroke is usually given as a percentage of the actuator's length; thus, since the actuator's dimensions are reduced linearly, so is the stroke, S ∝ L.",
          "zh": "MS 执行器的品质因数 力，F 高，≥103 N 位移，S 高达 2000 ppm 工作密度，W V ≈10−4 -10−3 J/cm3 功率密度，P V ≈1 W/cm3 带宽，f ≥103 Hz 效率，η 耦合系数 0.75 比例趋势 力 F ∝ L2 行程 S ∝ L 每周期做功 W ∝ L3 能量密度 W V ∝ L0 带宽 f ∝ L−2 功率密度 P V ∝ L−2 行程通常以执行器长度的百分比给出；因此，由于执行器的尺寸线性减小，因此行程 S ∝ L 也线性减小。"
        },
        {
          "id": "block-3",
          "en": "The work per cycle can be readily derived from the force and stroke, that is, W ∝ L3 . The ratio of work per cycle to the actuator volume is the energy density, which scales as W V ∝ L0 . The time constant of an MS actuator can be estimated from the following expression: [F ] = [m][a] = [L3 ] [L] [T 2 ] ⇒ τ ∝ L2 (5.27) Since frequency bandwidth and time constant are inversely proportional, it follows that f ∝ L−2 .",
          "zh": "每个周期的功可以很容易地从力和行程中导出，即 W ∝ L3 。 每个周期的功与执行器体积的比率是能量密度，其比例为 W V ∝ L0 。 MS执行器的时间常数可以通过以下表达式估计： [F ] = [m][a] = [L3 ] [L] [T 2 ] ⇒ τ ∝ L2 (5.27) 由于频率带宽和时间常数成反比，因此f ∝ L−2 成立。"
        },
        {
          "id": "block-4",
          "en": "As a result, the power density scales as P V ∝ L−2 . laws. A more detailed comparison with other emerging actuator technologies and traditional drives can be found in Chapter 7.",
          "zh": "结果，功率密度按 P V ∝ L−2 缩放。法律。与其他新兴执行器技术和传统驱动器的更详细比较可以在第 7 章中找到。"
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
          "zh": "案例研究 5.1：基于 MS 执行器的直升机桨叶主动振动控制 人们认识到，直升机航空的全面发展受到固有的高振动水平的严重限制。 振动主要是由于每个叶片与前面叶片的尾流的相互作用造成的。"
        },
        {
          "id": "block-2",
          "en": "The problem of high vibration levels in helicopters is noise and to a great extent the limitation they impose on speed and load capacity. Vibration is also an important problem in that it causes accelerated pilot and passenger fatigue and, in some instances payload damage and frequent maintenance requirements (Fenn et al. (1996)).",
          "zh": "直升机的高振动水平的问题是噪音，并且在很大程度上限制了它们对速度和负载能力的限制。 振动也是一个重要问题，因为它会导致飞行员和乘客加速疲劳，并且在某些情况下有效载荷损坏和频繁的维护要求（Fenn 等，2017）。 （1996））。"
        },
        {
          "id": "block-3",
          "en": "Active vibration control of helicopter seems a promising strategy for improvement of vibration levels. In this context, conventional actuation mechanisms based on hydraulic and electric motors are less attractive than approaches based on certain emerging actuator technologies.",
          "zh": "直升机的主动振动控制似乎是改善振动水平的一种有前途的策略。 在这种情况下，基于液压和电动马达的传统致动机构不如基于某些新兴致动器技术的方法有吸引力。"
        },
        {
          "id": "block-4",
          "en": "This Case Study examines the application of Magnetostrictive actuators to active vibration control of helicopter blades, which may be regarded as one of the paradigmatic applications of MS actuators. An individual blade control (IBC) system includes all the components usually found in motion control systems: sensors, electronics, controls and actuators.",
          "zh": "本案例研究探讨了磁致伸缩执行器在直升机桨叶主动振动控制中的应用，这可被视为 MS 执行器的典型应用之一。 独立叶片控制 (IBC) 系统包括运动控制系统中常见的所有组件：传感器、电子设备、控制器和执行器。"
        },
        {
          "id": "block-5",
          "en": "All the technologies required for IBC are well developed and ready for implementation. However, this is not true of actuators. In general, IBC systems can be classified into two categories: continuous active control of blade twisting (see Figure 5.15b) and discrete actuation of a servocontrolled surface (typically a flap or the blade tip; see Figure 5.15b).",
          "zh": "IBC 所需的所有技术均已开发完善并已准备好实施。 然而，执行器却并非如此。 一般来说，IBC 系统可分为两类：叶片扭转的连续主动控制（见图 5.15b）和伺服控制表面的离散驱动（通常是襟翼或叶片尖端；见图 5.15b）。"
        },
        {
          "id": "block-6",
          "en": "MS actuator MS actuator Flaps for vibration control Distributed PZT actuators for continuous blade twist (a) (b) controlled flaps and (b) continuous active control of blade twisting. In continuous active control of blade twisting, the smart structure concept is commonly used. In this case, distributed inducedstrain actuators produce continuous blade deformation in response to control actions.",
          "zh": "MS 执行器 MS 执行器 襟翼用于振动控制 分布式 PZT 执行器用于连续叶片扭转 (a) (b) 受控襟翼和 (b) 叶片扭转的连续主动控制。 在叶片扭转的连续主动控制中，普遍采用智能结构概念。 在这种情况下，分布式诱导应变执行器响应于控制动作而产生连续的叶片变形。"
        },
        {
          "id": "block-7",
          "en": "In the case of discrete actuation, flaps are used to generate localized aerodynamic forces. The smart structure approach to blade vibration control has been implemented using PZTdistributed piezoelectric ceramics actuators, lead magnesium niobate (PMN) electrostrictive actuators and TerfenolD magnetostrictive actuators. However, it has been shown (Fenn et al.",
          "zh": "在离散致动的情况下，襟翼用于产生局部空气动力。 使用 PZT 分布式压电陶瓷执行器、铌酸铅镁 (PMN) 电致伸缩执行器和 TerfenolD 磁致伸缩执行器实现了叶片振动控制的智能结构方法。 然而，它已经被证明（Fenn 等人，2017）。"
        },
        {
          "id": "block-8",
          "en": "(1996)) that approaches based on continuous blade twisting impose power requirements several orders of magnitude higher than discrete active control systems. The particular requirements on actuators to achieve discrete (flapbased) vibration control of helicopter blades depend on innumerable factors, in particular, the ratio of blade length to width and the length of the control flaps.",
          "zh": "（1996））基于连续叶片扭转的方法对功率要求比离散主动控制系统高几个数量级。 对执行器实现直升机桨叶离散（基于襟翼）振动控制的特殊要求取决于无数因素，特别是桨叶长宽比以及控制襟翼的长度。"
        },
        {
          "id": "block-9",
          "en": "In general, MS actuators meet the actuation requirements for this application. In addition, MS actuators provide allelectric operation (thus simplified requirements as compared to hybride.g., hydraulicactuators), low mass, low voltage, insensitivity to centripetal acceleration, and simplicity and reliability.",
          "zh": "一般来说，MS 执行器满足此应用的执行要求。 此外，MS 执行器提供全电动操作（因此与混合动力执行器相比简化了要求）、低质量、低电压、对向心加速度不敏感以及简单性和可靠性。"
        },
        {
          "id": "block-10",
          "en": "When implemented in flapbased blade vibration control approaches, MS actuators can provide the required angular displacement of the flap with very compact solutions. Case study 5.2: Prototype magnetic shape memory actuators A new family of magnetostrictive materials, in which magnetostriction is twin induced, has recently been emerging as a highly promising technology.",
          "zh": "当在基于襟翼的叶片振动控制方法中实施时，MS 执行器可以通过非常紧凑的解决方案提供所需的襟翼角位移。 案例研究 5.2：原型磁性形状记忆执行器 一种新的磁致伸缩材料系列，其中磁致伸缩是孪生感应的，最近作为一项非常有前途的技术而出现。"
        },
        {
          "id": "block-11",
          "en": "These are known as ferromagnetic shape memory alloys or magnetic shape memory alloys (MSMAs) and were introduced in Chapter 1. In the first place, since they exhibit twininduced strain, the stroke level is much higher (equivalent to the stroke level in thermally triggered SMAs) than in traditional Joule effectbased magnetostrictive materials.",
          "zh": "这些被称为铁磁形状记忆合金或磁性形状记忆合金 (MSMA)，已在第 1 章中介绍。 首先，由于它们表现出孪生应变，因此冲程水平（相当于热触发 SMA 中的冲程水平）比传统的基于焦耳效应的磁致伸缩材料高得多。"
        },
        {
          "id": "block-12",
          "en": "In the second place, since the martensitic transformation in MSMA actuators is magnetically triggered, they present a much faster response than thermally triggered SMAs. Consequently, MSMAs share the good stroke characteristics of SMA actuators and the fast operating range of MS actuators. The technology is currently being explored in the areas of materials research and of operation and application.",
          "zh": "其次，由于 MSMA 执行器中的马氏体转变是磁触发的，因此它们的响应速度比热触发 SMA 快得多。 因此，MSMA 具有 SMA 执行器的良好行程特性和 MS 执行器的快速操作范围。 该技术目前正在材料研究和操作应用领域进行探索。"
        },
        {
          "id": "block-13",
          "en": "One possible limiting factor in the development of the technology is the low availability of the material. Currently, MSMAs are only commercialized by Adaptamat Ltd., a company located in Finland (http://www.adaptamat.com) that markets material samples for research activities and is currently developing the first prototype actuators based on this technology.",
          "zh": "该技术发展的一个可能的限制因素是材料的可用性低。 目前，MSMA 仅由位于芬兰的 Adaptamat Ltd. (http://www.adaptamat.com) 进行商业化，该公司销售用于研究活动的材料样品，目前正在开发第一个基于该技术的原型执行器。"
        },
        {
          "id": "block-14",
          "en": "This case study describes the first steps in the development of prototype MSMA actuators by Adaptamat Ltd. Here we discuss the development of three actuator prototypes spanning various force, stroke and operational frequency ranges. The information and pictures in this section are courtesy of E.",
          "zh": "本案例研究描述了 Adaptamat Ltd 开发 MSMA 执行器原型的第一步。 在这里，我们讨论了跨越不同力、行程和工作频率范围的三种执行器原型的开发。 本节中的信息和图片由 E 提供。"
        },
        {
          "id": "block-15",
          "en": "Pagounis, Adaptamat Ltd. The first prototype is the A5-2 actuator model from Adaptamat (see force (blocked force in the order of 3 N) actuator. The basic configuration of MSMA actuators was discussed in Chapter 1.",
          "zh": "Pagounis，Adaptamat Ltd。第一个原型是来自 Adaptamat 的 A5-2 执行器模型（参见力（3 N 量级的阻挡力）执行器。MSMA 执行器的基本配置已在第 1 章中讨论。"
        },
        {
          "id": "block-16",
          "en": "Basically, it consists of a MSMA stick aligned with the actuator direction. The magnetic field is set up perpendicular to the actuation direction. This triggers the reorientation of twin variants and initiates the actuation process.",
          "zh": "基本上，它由一根与执行器方向对齐的 MSMA 棒组成。 磁场设置为垂直于致动方向。 这会触发双变体的重新定向并启动驱动过程。"
        },
        {
          "id": "block-17",
          "en": "In the case of the A5-2 actuator, the active MSMA stick comprises three active sections of 0.52 × 2.4 × 28 mm so as to achieve a large overall stroke. The magnetic field is set up in this prototype by means of two coils, which can be electrically connected in parallel or in series.",
          "zh": "对于 A5-2 执行器，主动 MSMA 棒由三个 0.52 × 2.4 × 28 mm 的主动部分组成，以实现较大的总行程。 该原型中的磁场是通过两个线圈建立的，这两个线圈可以并联或串联电连接。"
        },
        {
          "id": "block-18",
          "en": "The actuator provides a fast drive with an electrical winding time constant of the order of 5 ms and a maximum operational frequency of 300 Hz. The second prototype in this section is the smallstroke (maximum displacement 0.6 mm at 200 Hz), lowforce (3 N) A06-3 actuator (see Figure 5.17). The basic configuration is similar to the previous case.",
          "zh": "该执行器提供快速驱动，电气绕组时间常数约为 5 ms，最大工作频率为 300 Hz。 本节中的第二个原型是小行程（200 Hz 时最大位移 0.6 mm）、低力 (3 N) A06-3 执行器（见图 5.17）。 基本配置与前面的情况类似。"
        },
        {
          "id": "block-19",
          "en": "Again, two coils are used to set up the magnetic field. This time a single MSMA stick (0.55 × 2.2 × 20 mm, with an active length of 15 mm) is used, resulting in a lower stroke. The A06-3 prototype gives a faster drive than the previous example.",
          "zh": "同样，使用两个线圈来建立磁场。 这次使用单根 MSMA 棒（0.55 × 2.2 × 20 mm，有效长度为 15 mm），从而产生较低的行程。 A06-3 原型的驱动速度比前一个示例更快。"
        },
        {
          "id": "block-20",
          "en": "The maximum attainable operational frequency is 600 Hz. It is also a much smaller courtesy of E. Pagounis, Adaptamat Ltd.) courtesy of E.",
          "zh": "可达到的最大工作频率为 600 Hz。它也是由 E. Pagounis、Adaptamat Ltd. 提供的一个小得多的版本）由 E. Pagounis 提供。"
        },
        {
          "id": "block-21",
          "en": "Pagounis, Adaptamat Ltd.) graph courtesy of E. Pagounis, Adaptamat Ltd.) actuator, weighing approximately 50 g as compared to the A5-2 prototype (which weighs around 500 g). The following example illustrates the development of highforce, lowstroke actuators based on MSM materials: the A1-2000 actuator prototype from Adaptamat Ltd (see Figure 5.18).",
          "zh": "Pagounis，Adaptamat Ltd.）图表由 E. 提供 Pagounis，Adaptamat Ltd.）执行器，与 A5-2 原型（重约 500 克）相比，重量约为 50 克。 以下示例说明了基于 MSM 材料的高力、低行程执行器的开发：来自 Adaptamat Ltd 的 A1-2000 执行器原型（见图 5.18）。"
        },
        {
          "id": "block-22",
          "en": "One of the current limiting factors in MSMAs is an intrinsically low Young's modulus (approximately three times lower than the Young's modulus of TerfenolD) and high required magnetic fields (approximately twice those required in TerfenolD).",
          "zh": "MSMA 的当前限制因素之一是本质上较低的杨氏模量（大约比 TerfenolD 的杨氏模量低三倍）和所需的高磁场（大约是 TerfenolD 所需磁场的两倍）。"
        },
        {
          "id": "block-23",
          "en": "It is thought that this could be a serious impediment to the development of highforce MSMA actuators (since high forces require active material with a high crosssectional area, which in turn requires a highly focused magnetic field over a large volume). The A1-2000 prototype is an illustration example of an MSMAbased highforce actuator.",
          "zh": "人们认为这可能是高力 MSMA 执行器发展的严重障碍（因为高力需要具有高横截面积的活性材料，这反过来又需要大体积上高度聚焦的磁场）。 A1-2000 原型是基于 MSMA 的高力执行器的示例。"
        },
        {
          "id": "block-24",
          "en": "In order to attain the highforce level (2 kN), 48 MSMA sticks are used mechanically in parallel. The dimensions of each stick are approximately 2.5 × 5.0 × 30 mm (with an active length of 25 mm, which means that the working strain is of the order of 40,000 ppm). Each stick has an active crosssectional area of 12.5 mm2 , which makes a total active area of 600 mm2 for the actuator.",
          "zh": "为了达到高力水平 (2 kN)，并行使用 48 根 MSMA 棒。 每根棒的尺寸约为 2.5 × 5.0 × 30 mm（有效长度为 25 mm，这意味着工作应变约为 40,000 ppm）。 每根杆的有效横截面积为 12.5 mm2，这使得执行器的总有效面积为 600 mm2。"
        },
        {
          "id": "block-25",
          "en": "The actuator's very large dimensions result make for an overall weight of 31 kg. Consequently, the operational frequency for this highforce drive is of the order of 100 Hz (and hence much lower than the previous examples, as one would expect). These examples illustrate the development of MSMA actuators.",
          "zh": "该执行器的尺寸非常大，总重量为 31 公斤。 因此，该强力驱动器的工作频率约为 100 Hz（因此，正如人们所期望的那样，远低于前面的示例）。 这些例子说明了 MSMA 执行器的发展。"
        },
        {
          "id": "block-26",
          "en": "They are claimed to be applicable to the field of fluidics (for the implementation of valves, pumps and injectors), vibration analysis and control (e.g. shakers, vibration dampers and sonar transducers), and as positioning devices in robotics, manipulators and linear drives in general.",
          "zh": "据称它们适用于流体学领域（用于阀门、泵和喷射器的实现）、振动分析和控制（例如振动分析和控制）。 振动器、减振器和声纳传感器），以及一般机器人、机械手和线性驱动器中的定位装置。"
        }
      ]
    }
  ]
}
