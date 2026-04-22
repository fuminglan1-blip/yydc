export const READING_CONTENT = {
  "source": "Emerging Actuator Technologies (from 1.4 to before Chapter 3)",
  "pageRange": "40-123",
  "sections": [
    {
      "id": "section-1",
      "title": "1.4 What is mechatronics? Principles and biomimesis",
      "blocks": [
        {
          "id": "block-1",
          "en": "The term mechatronics was coined in Japan in the mid-1970s to denote the engineering discipline dealing with the study, analysis, design and implementation of hybrid systems comprising mechanical, electrical and control (intelligence) components or subsystems. Ever since, mechatronics has been understood to mean the integrated and concurrent approach of engineering disciplines for the study of such hybrid systems.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-2",
      "title": "1.4.1 Principles",
      "blocks": [
        {
          "id": "block-1",
          "en": "The black box convention for system analysis is used throughout this book. A system, then, is conceived as a black box with an input and an output port. Systems can interact with one another to set up systems with added complexity and functionality.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "A mechatronic system is thus a hybrid system including sensor subsystems, control subsystems and actuator subsystems. Subsystems can be connected in a cascade configuration. In this configuration, there is always an interaction between the output port of one subsystem and the input port of the consecutive one.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "As discussed earlier, the state of the interaction between two cascaded systems is defined according to conjugated variables. Mechatronic systems are in many instances synonymous of motion control systems. As such, they include different functional subsystems as introduced in Section 1.3.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "A very interesting feature of mechatronic systems is the combination of functions in the same component. Here, we are especially interested in the possible combination of sensing and actuation functions in a subsystem. This aspect is analyzed in more detail in Section 1.5, when dealing with concomitant sensing and actuation.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The combination of functions by means of mechatronic integration of disciplines in the design of actuators has clear functional benefits. The miniaturization of systems can be seen as a direct consequence of this combination of functions. Yet, the paradox of opposite rationales in the design of sensors and actuators must be addressed, see Section 1.5.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "This book focuses particularly on analysis of the actuator subsystem within a mechatronic system. The actuator subsystem itself can be shown to exhibit the same mechatronic characteristics as a motion control system. This means that the actuator can be analyzed as a mechatronic system, and it will benefit from the intrinsic crossfertilization between engineering disciplines (Reynaerts et al.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "(1998)). The concept of an actuator as a true mechatronic system will be illustrated with the example of a resonant piezoelectric drive. A piezoelectric actuator is an electromechanical device in which the converse piezoelectric effect is used to transduce from electrical to mechanical energy domains (see Chapter 2).",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "A piezoelectric ceramic is characterized electrically by a capacitive load that is out of resonance and a resistive electrical load that is at resonance (local minimum in mechanical impedance) and antiresonance (local maximum in electrical impedance). Piezoelectric resonators are driven close to their resonance or antiresonance frequencies.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "In such a driving condition, the electrical load is resistive, and so input voltage and current will exhibit a phase lag close to zero. In actuators of this type, an applied external load or temperature change will lead to a shift in the resonance frequency (see Figure 1.11). If this is not compensated for, the operating point of the piezoelectric drive will generally not be perfectly tuned.",
          "zh": "在这种驱动条件下，电负载是电阻性的，因此输入电压和电流将表现出接近零的相位滞后。在这种类型的执行器中，施加的外部负载或温度变化将导致共振频率的偏移（见图1.11 ）。如果没有补偿，压电驱动的工作点通常不会被完美调谐。"
        },
        {
          "id": "block-10",
          "en": "Note the relative position of the original operating point (light grey dot at f1 in Figure 1.11) with respect to the resonance as compared to the new relative position (grey dot at f1 ).",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "With a mechatronic approach, a selftuning electrical driver can be designed, which will track any possible fluctuation in the resonance characteristics of the actuator, and, thus, the new operating point will be tuned to the new resonance curve (see grey dot at f2 in Figure 1.11). In so doing, the phase between voltage and current can be used as an indicator of the electrical impedance of the actuator.",
          "zh": "通过机电一体化方法，可以设计自调谐电驱动器，该驱动器将跟踪执行器共振特性的任何可能波动，因此，新的工作点将被调谐到新的共振曲线（参见图1.11中f2处的灰点）。在这样做时，电压和电流之间的相位可以用作致动器的电阻抗的指示器。"
        },
        {
          "id": "block-12",
          "en": "This can then be used to close the loop, for instance, by means of a phase locked loop (PLL). The resonant piezoelectric actuator as described above includes an actuator system (the voltagedriven piezoelectric resonator), a sensor system (monitoring Frequency Shift due to temperature or load changes f1 f2 Impedance teristics of piezoelectric actuators and corresponding modification of the operating point.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "the phase lag or impedance condition at the input port) and a disturbance rejection control system (the PLL drive).",
          "zh": "输入端口的相位滞后或阻抗条件）和干扰抑制控制系统（ PLL驱动器）。"
        }
      ]
    },
    {
      "id": "section-3",
      "title": "1.4.2 Mechatronics and biomimesis",
      "blocks": [
        {
          "id": "block-1",
          "en": "Engineering disciplines have always looked to nature as a source of inspiration. Several million years of evolution have seen living creatures progress to their current state. Engineering has very often taken nature as a model and has mimicked biological structures.",
          "zh": "工程学科一直将大自然视为灵感的源泉。经过几百万年的进化，生物已经发展到目前的状态。工程学经常以自然为模型，模仿生物结构。"
        },
        {
          "id": "block-2",
          "en": "By way of example, Figure 1.12 shows a biological structure usually taken as a model in the development of helicopter blades and airplane wings. Mechatronics as an engineering discipline may also benefit from seeking a source of inspiration in nature. As noted earlier, mechatronic systems are in most cases equivalent to motion control systems.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "As such, the motor control structure of upper mammalians is a perfect model in which to find inspiration. Hierarchical motor control in mammalians as a model Hierarchical control schemes are common in motion control systems. There is sufficient evidence to support the view that the structure of the motor control system in mammalians is hierarchically organized.",
          "zh": "因此，上层哺乳动物的运动控制结构是寻找灵感的完美模型。哺乳动物中的分层运动控制作为模型分层控制方案在运动控制系统中很常见。有足够的证据支持哺乳动物运动控制系统的结构是分层组织的观点。"
        },
        {
          "id": "block-4",
          "en": "This follows from the excellent performance of both human and nonhuman primates in manipulation tasks. This performance in manipulation comprises, among other functions, superb response to disturbance, for example, increased prehensile force following slippage of grasped objects, and perfect modulation of upper limb (impedance controlled) interaction with the environment.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In these particular manipulative tasks, feedback control schemes involving structures in the central nervous system (CNS) do not seem feasible. In fact, the shortest loop delay involving neural transmission from skin receptors to the CNS and back is in the region of 100–150 ms.",
          "zh": "在这些特定的操作任务中，涉及中枢神经系统（ CNS ）结构的反馈控制方案似乎不可行。事实上，涉及从皮肤受体到中枢神经系统和背部的神经传输的最短循环延迟在100–150 ms范围内。"
        },
        {
          "id": "block-6",
          "en": "If these feedback loops involve computing at the brain level (for instance, in visual feedback operations) the loop delay can reach up to 200–250 ms. With loop delays of this magnitude, the effectiveness Lowlevel controller Mechanical port Actuator Environment Sensor Actuator Environment of feedback modulation of impedance or the response to disturbance would be very much compromised.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Hierarchical control schemes mimicking the structure of the human motor control system are a common approach. Figure 1.13 shows a schematic representation of such a hierarchical control scheme. An upperlevel task planner is in charge of sending motion commands (reference trajectories) to lowlevel controllers.",
          "zh": "模仿人体运动控制系统结构的分层控制方案是一种常见的方法。图1.13显示了这种分层控制方案的示意图。上级任务规划师负责向低级控制器发送运动命令（参考轨迹）。"
        },
        {
          "id": "block-8",
          "en": "The lowlevel controllers interact with the plant through sensors and actuators (including the corresponding impedancematching stages). As seen from the upperlevel controller, the process is an open loop. Switching control of muscle contraction as a model to modulate the input power in actuators The human musculoskeletal system is driven through switched techniques.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Motor stimuli reach the various different muscles through motoneurons. Each muscular stimulus leads in the first instance to muscle contraction followed by relaxation. The time constants of the contraction and relaxation processes are very different.",
          "zh": "运动刺激通过运动神经元到达各种不同的肌肉。每种肌肉刺激首先导致肌肉收缩，然后是放松。收缩和放松过程的时间常数非常不同。"
        },
        {
          "id": "block-10",
          "en": "The muscle contraction time constant is much lower than the relaxation time constant; as a result, the musculoskeletal system responses during contraction and relaxation exhibit different dynamics (see the different dynamics in a muscle twitch inset in If repeated stimuli reach the muscle prior to total relaxation, summation occurs, and the result is increasing contraction.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Overall muscle contraction is a combination of increased contraction of individual fibers due to summation and increased recruiting of additional motoneurons, and, consequently, muscle fibers. See Figure 1.14 for a schematic representation of the switched control of muscle contraction.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "In addition to position control of the human musculoskeletal system, there is sufficient evidence to believe that the modulation of the motor activity in antagonistic muscles is one of the mechanisms that mammalians use to modulate the impedance around an equilibrium position (Hogan (1985b)).",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "Switching techniques as an approach to modulation of the flow of energy in actuators is of particular interest when actuators exhibit different dynamics in both directions (like in the case of muscle contraction–relaxation). This is generally true Muscle contraction Time Motoneuron stimuli Twitch Summation τR τC Tetanus energy in actuators. of thermal actuators, and, in particular, of SMA actuators.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "In these systems, the time constant for the heating process is generally much lower than for the cooling process (which is limited by thermal inertia and heat dissipation). Wherever a discontinuity occurs in the change in length of an actuator (see Chapter 4), switching techniques may be the only possible solution for accurate positioning tasks.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "The discontinuity, as depicted in Figure 1.15, leads to mechanical states that are not attainable in equilibrium. In such a case, switching techniques can maintain the mechanical state without equilibrium within the margin of mechanical state error allowed by the application (Mitwalli (1998)). Stimuli Range of volumes not attainable in equilibrium Volume able mechanical states.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "Actuation modes based on biological models The previous two examples of biomimesis are more closely related to the way actuators can be driven and how the energy flow is modulated. Nature is full of models for establishing actuation principles.",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "Here, we will briefly describe two locomotion models that inspired the development of the socalled inchworm actuators and travelling wave linear and rotational ultrasonic motors (see Chapter 2). The first model is the locomotion process of some earth worms as depicted in rear and front legs of the worm are fixed alternately to the terrain.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "In the second cycle, the intermediate segments of the worm elongate and contract alternately. Both cycles are nested to provide the locomotion. The same principle is followed in the development of inchworm piezoelectric motors (see Section 2.4.3).",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "Here, three independent piezoelectric ceramics are used to mimic the operation of rear and front legs (ceramics 1 and 3), and the intermediate segments (ceramic 2). The piezoelectric actuators 1 and 3 are driven according to the first cycle so that they clamp the rotor (displacer) alternately.",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "The piezoelectric actuator 2 is driven according to the second cycle, mimicking the elongation and contraction of the intermediate segments of the worm. The second locomotion principle is found in some millipedes and centipedes (see Figure 1.17a). The motion of the different legs is coordinated to produce an approximate sinusoidal pattern in both the elevation and the forward–backward movement.",
          "zh": ""
        },
        {
          "id": "block-21",
          "en": "These sinusoidal movements in perpendicular directions produce an elliptic movement of each leg. This elliptic movement (which is implemented in successive legs with a small delay) provides incremental traction to the millipede. The same principle is exploited in travelling wave ultrasonic motors.",
          "zh": ""
        },
        {
          "id": "block-22",
          "en": "The case of linear piezoelectric motors based on this principle is described in Section 2.3.3, while the case of rotational drives is described in Section 2.3.2.",
          "zh": ""
        },
        {
          "id": "block-23",
          "en": "In both the approaches, a laminate structure composed of an elastic substrate and a piezoelectric ceramic is driven in resonance to produce (through superposition of sinusoidal perpendicular Rotor Elastic substrate Wave propagation (a) (b) Piezoelectric ceramic motors. motions) an effective elliptic displacement at the interface between rotor and stator (see Figure 1.17b).",
          "zh": ""
        },
        {
          "id": "block-24",
          "en": "This provides traction through a frictional transmission.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-4",
      "title": "1.5 Concomitant actuation and sensing: smart structures",
      "blocks": [
        {
          "id": "block-1",
          "en": "In previous sections, we discussed how transducing devices can be configured either as sensors or as actuators. Here, we stress the fact that transducers can implement both crucial roles – sensing and actuation – in a motion control system. The former provides a tool for monitoring the status of a system and the latter enables us to impose a condition on a system.",
          "zh": "在前面的章节中，我们讨论了如何将换能器设备配置为传感器或执行器。在这里，我们强调这样一个事实，即传感器可以在运动控制系统中实现两个关键作用–传感和致动。前者提供了监控系统状态的工具，后者使我们能够对系统施加条件。"
        },
        {
          "id": "block-2",
          "en": "In some special cases, transducers can be used both as sensors and as actuators. Take for instance, DC electromagnetic motors. Rotational electromagnetic motors can function both as actuators (i.e.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "rotational mechanical energy is produced by the application of a driving voltage), and as generators (i.e. the rotation of the output shaft produces a voltage, proportional to the rotation rate, at the electrical terminals). Let us consider the case of a permanent magnet DC electromagnetic motor.",
          "zh": "旋转机械能由施加驱动电压产生） ，以及作为发电机（即输出轴的旋转在电气端子处产生与旋转速率成比例的电压）。让我们以永磁直流电磁电机为例。"
        },
        {
          "id": "block-4",
          "en": "DC electromagnetic actuators make use of Lorentz’s electromagnetic interaction between a permanent magnetic flux, B, and an electrical current, i, flowing in a coil (see Figure 1.3). In an appropriate configuration, if the coil is allowed to rotate, the magnetic interaction produces a torque, T , on the coil, causing rotation.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The torque developed by the electromagnetic interaction can be expressed as: T = kT i (1.13) where kT is the socalled torque constant of the DC motor. Similarly, since the DC motor coil is rotating in a magnetic field, induction will take place and a (back) electromagnetic voltage (EMF) will be induced.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The expression for the back EMF is: VEMB = kV ω (1.14) where ω is the angular rate of the coil and kV is the voltage constant or backEMF constant of the motor. When the DC electromagnetic motor is driven by an input voltage, an angular rate will be developed.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "It can be demonstrated, in a first approximation, that the angular velocity of the motor obeys the following differential equation when no external load is applied to the shaft: dω dt = − 1 J kF ω(t) + 1 J kM i(t) (1.15) where J is the motor’s rotational inertia and, kF is the viscous damping constant equivalent to the frictional forces in the motor.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "Likewise, when no voltage is applied to the DC motor terminals and the shaft is rotated at a constant velocity, ω, a voltage will be developed between the terminals according to Equation 1.14. This means that the motor works either as an actuator or as a sensor.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "A transducer cannot be operated both as a sensor and as an actuator simultaneously unless a model of the transduction is available; in other words, the device can only be used for one of its functions at a time.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "For practical purposes, this means, in the case of the previous example, that if a rotational velocity is being imposed by means of a DC electromagnetic motor, the same motor cannot be used to sense the rotational velocity that is being imposed. The previous discussion is true and holds for all transducers; however, some sensing and actuation functions can still be implemented concomitantly.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Equations 1.13 and 1.14 can be rewritten according to the following expression: [V i ] = [0 kV kT 0 ] [T ω ] (1.16) It can be shown that kV = −1/kT ; thus, the motor can be classified as a gyrating transducer. As discussed previously, in gyrating transducers, there is a causal relationship between the effort at one port and the flow at the other port.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "If the torque (effort) is selected as the independent variable, the current (flow) is causally determined. The motor can be used to sense the load (torque) by monitoring the electrical current. Piezoelectric actuators are a similar case.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "A piezoelectric actuator establishes a flow of energy from the electrical to the mechanical domain according to the constitutive equations of the piezoelectric effect (see Chapter 2). When no external load is applied to a piezoelectric stack actuator, the displacement (strain) will be a nonlinear, hysteretic function, S1(V ), of the voltage applied at the input port.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "Wherever an external force is applied to the actuator, it will act as a disturbance to the output displacement. The complete relationship between strain, voltage and load will take the form of Equation 1.17 and is commonly called an operatorbased actuator model of the piezoelectric stack transducer (Kuhnen and Janocha (1998)). S(t) = S1(V ) + kf (t) (1.17) where k is the piezoelectric stack stiffness.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "Similarly, the charge developed in the piezoelectric stack, Q(t), will be a direct function of the load applied to the transducer, f (t). This time, the voltageinduced charge during operation will act as a disturbance to the operatorbased sensor model described by Equation 1.18. Q(t) = df (t) + Q1(V ) (1.18) where d is the piezoelectric coefficient and Q1(V ) is a nonlinear, hysteretic function of the voltage.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "Again, even though the piezoelectric stack cannot be used to impose a displacement (strain) and to concomitantly sense it, the sensor model of Equation 1.18 can be used to estimate the load on the actuator, that is, the piezoelectric stack is being used concomitantly to impose a displacement and to sense the load.",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "The estimated load can then be used to compensate for its disturbing effect on the displacement of Equation 1.17 (Kuhnen and Janocha (1998)). A model of the transduction process can be used to implement both functions (sensing and actuation) at a time.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "Before discussing this possibility in detail, let us recall here Equation 1.10, which describes the relationship between effort and flow variables in the electriccircuit analogy: V = Ze I + Tem v and F = Tme I + Zm v The first equation describes the transducer as an actuator, that is, the application of a voltage, V , leads to a current drawn, I , and to an output velocity, v.",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "The Laplace transform of this first equation is: V (j ω) = Ze I (j ω) + Tem U (j ω) (1.19) The overall electrical voltage includes a term dependent on the current drawn, Ze I (j ω), and a term related to the output velocity, Tem U (j ω).",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "This equation indicates that the output velocity could be estimated by measuring the overall voltage, V , and subtracting the voltage drop, VZ e , across the actuator’s blocked impedance, VZ e = Ze I (j ω). The above result provides the basis for estimation of the actuator’s motion from a bridge circuit configuration, as shown in Figure 1.18.",
          "zh": ""
        },
        {
          "id": "block-21",
          "en": "This result is important in that it could lead to: (i) modification of the actuator’s behavior (for instance its damping characteristics) through the implementation of feedback control loops based on the estimation of the velocity and (ii) collocated and concomitant sensing and actuation. Actuator Ze Vv V R R velocity in concomitant sensing and actuation.",
          "zh": ""
        },
        {
          "id": "block-22",
          "en": "If a copy of the actuator’s blocked impedance is used in the bridge circuit branch as depicted in Figure 1.18, the voltage across the bridge, Vv , is proportional to the actuator’s velocity. The first approach, that is, modification of the actuator’s damping properties, has been studied in the context of voice coil loudspeakers (de Boer (1961)).",
          "zh": ""
        },
        {
          "id": "block-23",
          "en": "In this case, the feedback from the unbalanced bridge voltage is utilized to increase damping around the resonance frequencies. The second approach has been implemented in collocated and concomitant position and velocity feedback in piezoelectric actuators (see Dosch et al. (1992) and Hagwood and Anderson (1991)).",
          "zh": ""
        },
        {
          "id": "block-24",
          "en": "The main problem in this approach is measurement of the actuator’s blocked impedance. It has been found that in most implementations the blocked impedance, rather than being constant and independent of the actuator’s motion, is a nonlinear function of the current drawn.",
          "zh": ""
        },
        {
          "id": "block-25",
          "en": "Ideally, if output velocity could be estimated from the voltage across the bridge, the sensing part of the electriccircuit analogy (see Equation 1.20) could then be used to produce an estimate of the mechanical conjugate variable (the force).",
          "zh": "理想情况下，如果可以从桥梁上的电压估计输出速度，则可以使用电路类比的传感部分（见公式1.20 ）来产生机械共轭变量（力）的估计。"
        },
        {
          "id": "block-26",
          "en": "F (j ω) = Tme I (j ω) + Zm U (j ω) (1.20) In some instances, twodirectional transduction of the same conjugated variable can be achieved when a transducing material is used to develop an actuator. This is only possible where the actuation process is accompanied by a concomitant change in any of the material properties of the transducer. This is true of shape memory alloy actuators (SMAs) (see Chapter 3).",
          "zh": ""
        },
        {
          "id": "block-27",
          "en": "In SMAs, thermal input energy is used to promote a phase change in the material. This phase change is accompanied by recovery of the shape induced by deformation. A number of physical properties of the material are altered during the process of shape recovery.",
          "zh": ""
        },
        {
          "id": "block-28",
          "en": "In particular, the electrical resistivity of the material is modified by the thermally driven shape change. The electrical resistance can be used to monitor the shape recovery. The actuator can be used to impose a displacement (strain) and simultaneously to sense this displacement.",
          "zh": ""
        },
        {
          "id": "block-29",
          "en": "Concomitant sensing and actuation is a very powerful phenomenon in mechatronic system design (see Section 1.4). As shown above, it allows functions to be shared on a single component. When properly exploited, this can result in very compact and smart solutions.",
          "zh": ""
        },
        {
          "id": "block-30",
          "en": "On the basis of the use of concomitant sensing and actuation is the concept of a smart actuator. When a twodirectional transducer of this type is embedded in a structure, the combination is usually referred to as a smart structure. The term active structures is also commonly found in the literature.",
          "zh": ""
        },
        {
          "id": "block-31",
          "en": "The main difference between a smart and an active structure is more a matter of the degree of integration than of the functionality of the embedded smart actuators. In smart structures, a higher degree of integration is assumed: that is, twodirectional transducers are highly integrated in the structure so that the whole structure can be considered a functional continuum.",
          "zh": ""
        },
        {
          "id": "block-32",
          "en": "In smart actuators, two functions are combined on a single component. When analyzing smart actuators, particular attention must be paid to the rationale behind the development of monitoring transducers (sensors) and acting transducers (actuators). As noted earlier, sensors are intrinsically lowpower transducers.",
          "zh": ""
        },
        {
          "id": "block-33",
          "en": "A minimum energy interaction with the plant must be ensured so that the monitoring process does not interfere with the plant. Miniaturization is therefore a logical and desirable trend. On the other hand, actuators are intrinsically highpower transducers and as such should impose a state without being disturbed by the plant.",
          "zh": ""
        },
        {
          "id": "block-34",
          "en": "In actuators, the trend toward miniaturization is not a logical consequence of their interaction with the plant. There are two opposite design goals driving the development of sensors and actuators. The former are lowpower devices, best approached in a miniaturized fashion, while the latter are intrinsically highpower devices, conceptually the opposite of miniaturized components.",
          "zh": ""
        },
        {
          "id": "block-35",
          "en": "These apparently opposing requirements can only be met by highpower density transducing materials. Power density in emerging actuators is considered throughout this book as one of the driving forces in the development of new technologies.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-5",
      "title": "1.6 Figures of merit of actuator technologies",
      "blocks": [
        {
          "id": "block-1",
          "en": "Actuators drive plants in motion control systems in obedience to control inputs. They are used to impose the controlled variable on the plant in accordance with the reference trajectory. Imposing a state on the parameter of the plant raises a number of issues: 1.",
          "zh": "执行器驱动运动控制系统中的工厂，以服从控制输入。它们用于根据参考轨迹将受控变量施加到设备上。对工厂的参数施加状态会引发许多问题： 1."
        },
        {
          "id": "block-2",
          "en": "Univocal correspondence between input signal and imposed system variable. Ideally, there should be a unique output value corresponding to the system’s parameter. 2.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Linearity. Even though the above univocal correspondence will not generally be linear, linearity is always desirable. 3.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Stability. The correspondence between input and output should not be influenced by drifts. The intrinsic highpower characteristics of actuators usually leads to thermal drift.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In selecting actuators for a particular application, a number of requirements may arise. These include power or force density, efficiency, size and weight, and cost. The following paragraphs briefly describe the figures of merit of actuators.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "In some instances, these figures of merit are perfectly quantifiable (e.g. force or power density); in other cases, quantification is not possible, and a thorough analysis of the application and the actuator characteristics for matching will be required.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The different figures of merit are arranged in the following categories: dynamic performance, behavior upon scaling, static performance, impact of environmental parameters, suitability to the application and cost.",
          "zh": "不同的优点分为以下几类：动态性能、结垢性能、静态性能、环境参数的影响、对应用的适用性和成本。"
        }
      ]
    },
    {
      "id": "section-6",
      "title": "1.6.1 Dynamic performance",
      "blocks": [
        {
          "id": "block-1",
          "en": "In general, actuators are used under dynamic operation conditions. Dynamic operation entails continuous changes in the reference trajectory and in the loading conditions imposed by the mechanical interaction with the environment at the output port.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Dynamic operation usually produces changing conditions in the amount of energy flow across the actuator (power requirements), in the relative value of the conjugate variables (velocity and force) at the mechanical port and in the efficiency of transduction between input and output energy. There are several indicators that can be used to measure the dynamic performance of actuators.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Some of these are analyzed in the coming sections.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Power density and specific power density Power density, P V , is the ratio of the maximum available mechanical output power, Pout , to the volume of the actuator, V : P V = Pout V (1.21) If the ratio of output mechanical power to the weight, ρV , of the actuator is considered, this defines specific power density, P ρ : P ρ = Pout ρV (1.22) Power density and specific power density are measures of the rate of energy delivery at the mechanical port.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "They are also a measure of how suitable a transducing technology is as a smart actuator that is also for simultaneous use as a sensor.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Work density and specific work density per cycle Like power density, Work Density per cycle, W V , is defined as the amount of mechanical work that an actuator can deliver during an actuation cycle and is defined by the ratio of output work to volume: W V = Wout V (1.23) Likewise, specific work density per cycle, Wρ , is defined as the ratio of maximum available output mechanical work per actuation cycle to the weight of the actuator: W ρ = Wout ρV (1.24) In practice, both power and work densities are difficult to standardize as indicators for dynamic performance.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "This is basically due to uncertainty as to what should be considered the actuator volume or weight. Taking for example the case of traditional pneumatic linear actuators, if the volume or weight of the pneumatic cylinder is considered, the resulting work density is high as compared, for instance, to electromagnetic drives.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "However, if the accompanying components (power source, proportional or “on–off” valves, fluidfiltering components) are considered, the situation may be the reverse. Power and work per cycle density and specific density are related through the actuator’s available working frequency, f .",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Thus, P V = W V f (1.25) P ρ = W ρ f (1.26) Time constant and frequency bandwidth The Time constant, τ , of a firstorder system is the time taken for the output parameter of the system to reach 63.2% of its final value upon the application of a step input.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "In actuator systems, the mechanical time constant, τ m, is usually defined as the time required for the output velocity of the actuator to reach 63.2% of its final value under no external load. Owing to the inherent power limitations of any actuator system, the frequency response of the actuator will take the form of a low pass filter. This was illustrated in Figure 1.6.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "The cutoff frequency is defined as the frequency at which a decay of 3 dB in the output velocity of the actuator is observed. The available bandwidth of the actuator is then defined by the cutoff frequency.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "Both the time constant and the maximum available frequency of an actuator are related by the following expression: f = 1 2π τ (1.27) Energetic efficiency The efficiency, η, in the transduction process in an actuator is defined as the ratio of the output mechanical energy, W m, to the input electrical energy, W e.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "In most emerging actuators, an extension of the actuator concept will be necessary in order to apply this definition, as the input of the transducer usually is in a nonelectrical domain: for example, magnetostrictive (magnetic domain), SMA (thermal domain), polymer gels (chemical domain). η = W m W e (1.28) Ideally, actuators are lossless devices, and, thus, efficiency in an ideal situation should be close to 100%.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "In practice, various different dissipative phenomena take place in the transducer or accompanying components, producing lower efficiency. The transduction efficiency of all actuator technologies is a dynamic parameter. In general, the efficiency of the actuator is a function of the actuation conditions.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "The maximum efficiency is usually taken as the figure of merit.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-7",
      "title": "1.6.2 Actuator behavior upon scaling",
      "blocks": [
        {
          "id": "block-1",
          "en": "Current technological trends towards miniaturization impose strict requirements on actuators. Actuators are intrinsically highpower devices. The higher the power they can deliver, the more optimal their performance is.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Higherpower availability is an indication for instance of higherfrequency bandwidth or higher rejection of load disturbances. Miniaturization does not therefore logically lead to optimization of actuator performance. Rather, miniaturization of actuators must be seen as an application requirement.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The behavior of an actuator upon scaling is a characteristic of each technology and can be assessed by analyzing how the various different performance parameters (efficiency, power and work density, response time, force and stroke) evolve upon scaling. The analysis of scaling of actuators is a complex task. The reader is referred to Madou (1997) and Peirs (2001) for a detailed study of scaling.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Here, we will only give some theoretical background with experimental examples where possible. For direct transducing operations, finding the available force, stroke and work density upon scaling is straightforward. If we let L be the dominant dimension of the actuator, the following can be said: • Force upon scaling.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "When analyzing the available force of an actuator, the relevant dimension, L, for most technologies (e.g. piezoelectric actuators, shape memory alloy actuators, magnetostrictive actuators and most electroactive actuators) is the dimension of the cross section. The force, F , is then easily found following the scaling law of Equation 1.29.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "F ∝ L2 (1.29) Upon scaling the dominant dimension, L, the available force scales as L2 . Dimensions multiplied by 10 lead to available force multiplied by 100. The opposite occurs when scaling down the actuator’s dimensions.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "• Stroke upon scaling. In this case, the stroke, S, of the actuator is usually given as a percentage of its length. Thus, the dominant dimension is the length of the actuator, L.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The stroke scales linearly with the scaling of the actuator: S ∝ L (1.30) When the dimensions of the actuator are multiplied or divided by 10, so is the stroke. • Work density and specific work density upon scaling. Work can be readily determined as the product of displacement and force, Wm = F · S.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "In addition, the volume of an actuator obeys a scaling law proportional to the third power of the dominant dimension, V ∝ L3 . It follows, then, that the work density, defined as the ratio of work to volume, scales according to the following expression: W V ∝ L0 (1.31) The above equation indicates that for most actuator technologies, the available work density per cycle remains roughly constant upon scaling.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "When considering the effect of scaling on dynamic properties (power density, time constant, frequency), the analysis becomes more complex. This entails identifying what particular factors will become dominant upon scaling, so that they effectively limit the dynamic performance of the actuator. Once the dominant factor is identified, its evolution upon scaling is estimated.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "In particular, the time constant of the actuator (which can be used to work out all the other dynamic properties from the static ones) may be limited by a variety of factors for a single actuator technology. In the case of piezoelectric actuators in particular, the time constant (maximum frequency) can be limited by: 1. The resonance frequency of the actuator, which in most cases imposes the driving bandwidth, 2.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "The heating of the piezoelectric ceramic, which can lead to depolarization if the Curie temperature is reached, 3. The charging time of the capacitor. In other actuator technologies, the limiting factors for the time response may be very different: heat dissipation (conduction or convection) in thermal actuators; mass transport or diffusion in ionictype EAPs.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-8",
      "title": "1.6.3 Suitability for the application",
      "blocks": [
        {
          "id": "block-1",
          "en": "The suitability of an actuator technology for a particular application is hard to quantify, but it is usually one of the aspects considered when adopting a particular technology for an application. Suitability may involve a variety of aspects, but it commonly depends on a particular actuation characteristic that is intrinsically matched by the conditions of the application. Two examples will illustrate this point.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Let us first consider the temperature control in a process for mixing two fluids. The resulting fluid must remain between upper and lower temperatures of T u and T l respectively. In these conditions, a thermal actuator may be the right choice.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "If, for example, an SMA actuator is chosen, it can be made to open and close the hot fluid valve directly in response to the temperature of the mixed fluid in which it is immersed. A similar application to this example is described in more detail in Case Study 3.2, page 135. For our second example, let us consider conducting polymers in biomedical applications (see Chapter 6).",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Conducting polymers are soft ionic actuators. In order to actuate, they have to be immersed in an aqueous electrolyte. This requirement is usually a shortcoming rather than an advantage; in most applications, they require packaging solutions to keep the actuator wet during operation.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In the biomedical field, most applications are naturally realized in aqueous electrolytes (blood, urine, etc.). If other actuator technologies are to be applied under these conditions, they must be protected against these corrosive environments. However, it is the ideal environment for CP actuators.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-9",
      "title": "1.6.4 Static performance",
      "blocks": [
        {
          "id": "block-1",
          "en": "The static performance of actuators is typically evaluated on the basis of their available maximum effort (force or torque) and their maximum output velocity or stroke. Blocking effort The blocking effort is defined as the maximum effort (force or torque) that the actuator can deliver. This is the effort that will block the actuator so that no further displacement can be achieved against this load.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In the case of rotational actuators, the blocking effort is usually referred to as stall torque. Maximum stroke The maximum stroke (if any) of an actuator is the maximum available displacement that the actuator can deliver. It is the value of the displacement when no external load is applied on the actuator.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "For most emerging actuators, the maximum stroke is given as a percentage of its length. In other actuators (pneumatic and hydraulic), it is limited by the particular configuration of the piston and is given as an absolute value. Other actuators present no limit on the displacement they can attain.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "This is true of most rotational actuators (electromagnetic motors, ultrasonic motors, etc.). In these cases, the maximum rotational speed is commonly given.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-10",
      "title": "1.6.5 Impact of environmental parameters",
      "blocks": [
        {
          "id": "block-1",
          "en": "As noted earlier, for optimal use, actuators should be as insensitive as possible to external parameters. These typically involve temperature fluctuations, humidity changes and other external factors.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Temperature and temperature fluctuations have a direct undesired effect on most actuator technologies: there are upper limits on the temperatures that piezoelectric actuators can sustain because of depolarization; the electrical conductivity characteristics of ERF actuators can change as a result of temperature fluctuations.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Humidity has a direct effect on wet EAPs, so that there are strict packaging technology requirements unless the application is intrinsically wet.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-11",
      "title": "1.7 A classification of actuator technologies",
      "blocks": [
        {
          "id": "block-1",
          "en": "Actuators, as a particular category of transducers, can be classified according to a variety of criteria. Since the main function of an actuator in a mechatronic system is to establish a flow of energy between an input domain and the output domain, the first category heading is the sign of the power transmission. Power is assumed to be positive when energy flows from the transducer to the plant and not vice versa.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "This classification, which categorizes actuators as semiactive or active devices, was introduced in an earlier section.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-12",
      "title": "1.7.1 Semiactive versus active actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "The power at the output port of the actuator can be expressed as a function of the conjugate variables as: PTrans = F · v (1.32) for translational output mechanical energy, and: PRot = T · ω (1.33) for rotational mechanical energy. Semiactive actuators are those whose output mechanical power is not positive: PTrans ≤ 0 or PRot ≤ 0. This means that the energy level in the plant is reduced.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Semiactive actuators dissipate the energy of the plant they are coupled to. Semiactive actuators can actively modulate power dissipation, but the effort they supply (whether a force or a torque) can only oppose the flow in the plant (whether a velocity or an angular rate). Where semiactive actuators are used in motion control systems, these are known as Semiactive motion control systems.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "They are particular implementations of mechatronic systems in which the objective is to maintain the energy level of the plant within a bounded region. A typical example of a semiactive motion control system is the use of ER or MR fluid actuators for vibration isolation of delicate or fragile equipment from noise sources.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Semiactive control of vibrations, as the paradigmatic application of these systems, is analyzed in detail in Section 6.3. In addition, several instances of application to semiactive vibration isolation are analyzed in Case Studies 6.1 to 6.3. Active actuators can either increase or decrease the energy level of the plant to which they are coupled.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The power flow can be either positive or negative: PTrans ≷ 0 or PRot ≷ 0. Of the various different emerging actuators discussed in the book, only ERF and MRF actuators are classified as semiactive.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-13",
      "title": "1.7.2 Translational versus rotational actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "The conjugate variables used to define the power output in a translational actuator are the linear velocity, v and the force, f . The conjugate variables for rotational actuators are the angular rate, ω, and the torque, T . Translational actuators convert electrical energy into translational mechanical energy, while rotational actuators convert electrical energy to rotational mechanical energy.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Rotational actuators are always obtained from geometrical transducers, for example, an electromagnetic DC motor. On the other hand, transducing materials generally produce translational actuators, for example, magnetostrictive actuators, unless some geometrical concept is added.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Depending on the type of motion resulting from the transduction process, bending actuators may also be considered (for instance, piezoelectric multimorph actuators). However, bending actuators are most often used in the context of driving linear plants. In general, actuators of both types can be developed from geometrical concepts for all transducing materials.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "This applies particularly to piezoelectric actuators. Piezoelectric actuators lead, through different geometrical concepts, to rotational, translational and bending actuators.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-14",
      "title": "1.7.3 Input energy domain",
      "blocks": [
        {
          "id": "block-1",
          "en": "The classification according to the transduction principle (see Section 1.2) gives an idea of what classification according to input energy domain is like. Here, the Summary of actuator classification.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Type Power flow Output energy Input energy domain Force flow Active Semiactive Linear Rotational Electric Thermal Magnetic Chemical Fluid Soft Hard Piezoelectric actuators TWUM X X X X TWLUM X X X X Stacks X X X X Inchworm X X X X Multimorph X Bending X X Shape memory actuators Mass load X X X X X X Spring load X X X X X X Antagonistic X X X X X X Wet EAP actuators Polymer gels X X X X X X IPMC actuators X Bending X X CP actuators X Bending X X Carbon nanotubes X X X X Dry EAP actuators Electrostrictive X X X X Dielectric elastomers X X X X Field responsive fluid actuators MRF actuators X X X X X X ERF actuators X X X X X X Magnetostrictive actuators Magnetostriction X X X X MSM actuators X X X X output energy domain is restricted to the mechanical domain, without any further separation of energy types (rotational and translational).",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "There are five main input domains: 1. Input electrical energy. Most actuators belong to this category, particularly all piezoelectric actuators, electrostatic actuators, dry EAPs and ERF actuators.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "2. Thermal electrical energy. This category includes SMA actuators, some wet EAP actuators (in particular, some Polymer Gels) and thermal bimetallic actuators.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "3. Magnetic electrical energy. This category includes magnetostrictive actuators, MRF actuators and magnetic shape memory (MSM) actuators.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "4. Chemical input energy. This category includes some wet (ionic) EAPs.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "5. Fluid input energy. The pressure of a fluid in a chamber is used to provide the actuator force.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "This category includes pneumatic and hydraulic actuators. This domain, together with the thermal domain, is considered a particularization of the mechanical energy domain.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-15",
      "title": "1.7.4 Soft versus hard actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "Soft actuators, also called pulling actuators, are based on transducing materials configured in thin sheets or wires so that they can only withstand traction forces.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The operative principle restricts the available forces to pulling: fSof t ≥ 0 (1.34) Hard actuators, also known as push–pull actuators, have the ability to sustain both traction and compression forces: fHard ≷ 0 (1.35) Hard actuators are inherently twodirectional actuators. Soft actuators are inherently unidirectional actuators but can be configured in antagonistic pairs to provide twoway actuation.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "This is commonly true of SMA actuators. There are other possible classification criteria for actuators and transducers. For instance, actuators can also be classified according to whether the output motion is continuous or discontinuous.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "A classical example of discontinuous operation is electromagnetic or piezoelectric steppers. Table 1.2 summarizes the classification convention followed in this book.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-16",
      "title": "1.8 Emerging versus traditional actuator technologies",
      "blocks": [
        {
          "id": "block-1",
          "en": "Traditional actuators have been employed extensively during the last century in all application domains. The category of traditional actuators includes three main technologies, namely, Electromagnetic motors, pneumatic actuators and hydraulic actuators. Electromagnetic motors exploit Lorentz’s interaction between an electrical charge and a magnetic field in which it moves.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In the case of a rotational motor, the transducer equation for this technology is [V i ] = [0 g −1/g 0 ] [T ω ] (1.36) These may be considered as gyrating transducers. In general, the applied voltage, V , will determine the rotational or translational velocity, ω or v, respectively. The current drawn is an indication of the torque or force applied at the mechanical port.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "There are many different types of electromagnetic motors, but an exhaustive discussion of this technology lies outside the scope of this book. The reader is referred to any of the countless reference books on motion control hardware. Q P v, f matic and hydraulic actuators.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Traditional actuators Emerging actuators Based on geometrical transducers Based on transducing materials (possibly in combination with geometrical concept) Offtheshelf availability Designed for the application Good performance at normal scale Good for meeting miniaturization demands Lumped approach: discrete components in MCS Integrated and embedded approach: open to smart structure concepts Used in combination with external sensors Pursuit of the smart actuator concept Conventional mechanical transmissions for (output) impedance matching New transmission designs based on hinges and friction Incompatible with biomedical applications Technologies (in some cases) ideally suited to biomedical applications Pneumatic actuators exploit the power of a fluid (a gas, usually air) flowing into a chamber to develop a force (see Figure 1.19).",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The input energy is in the fluid domain. The power is defined by the volume flow rate, Q, and the pressure, P , as conjugate variables. Hydraulic actuators are equivalent to pneumatic actuators in that the input energy is also in the fluid domain.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The fluid is, however, an incompressible liquid (usually oil). For a linear actuator, the equation of the transducer is ideally [P Q ] = [k 0",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-17",
      "title": "0 −1/k",
      "blocks": [
        {
          "id": "block-1",
          "en": "] [f v ] (1.37) where k is the effective area of the pneumatic cylinder. Emerging actuators are those driving technologies developed from novel (or when old, newly developed) transducer materials. They are analyzed in detail throughout this book.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Table 1.3 compares traditional and emerging actuators.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-18",
      "title": "1.9 Scope of the book: emerging actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "This book is devoted to the analysis of emerging actuators as constituents of motion control mechatronic systems, and as mechatronic systems on their own. The electromechanical design, particular control concepts and exploitation of the smart actuator approach is therefore analyzed for each technology.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The analysis is divided into five chapters dealing with five transduction technologies and the actuator concepts based on these technologies. The transducing materials are the following: 1. Piezoelectric ceramics, Chapter 2.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "2. Shape memory alloys, Chapter 3. 3.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Electroactive polymers, Chapter 4. 4. Magnetostrictive materials, Chapter 5.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "5. Electroand magnetorheological fluids, Chapter 6.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The following aspects are addressed for each transducing material: • detailed description of transduction principles and characteristics; • analysis of constitutive equations for the transducer and the actuator concepts; • mechatronic aspects of actuator design; • control aspects of particular relevance for each technology; • figures of merit and scaling properties; and • relevant illustrative applications.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The last chapter of this book summarizes the most salient issues of each emerging actuator technology and presents the comparative position of the various different actuator technologies. Here, traditional actuators are discussed for reference purposes. Particular emphasis is placed on trends in applications and on open research issues.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-19",
      "title": "1.10 Other actuator technologies",
      "blocks": []
    },
    {
      "id": "section-20",
      "title": "1.10.1 Electrostatic actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "Electrostatic actuators are relatively novel devices whose operating principle is based on electrostatic attractive and repulsive forces between electrical charges. As such, they exhibit the same operating principle as Dielectric Elastomer actuators (see Chapter 4). Basics of electrostatic interaction and actuators The basic configuration of an electrostatic actuator is that of a capacitor of variable capacitance, C.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The capacitance of a flat, parallel plate capacitor is: C = ε A d (1.38) The constitutive equations for the electrostatic actuator can be developed from the expression of the electrical power, P , stored in the capacitor. The power can be obtained from the time rate change of the stored electrical energy, P = dW/dt. The electrical energy for a capacitor with an applied electric field E is W = q2 2C = 1",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-21",
      "title": "2 εE2V = 1",
      "blocks": []
    },
    {
      "id": "section-22",
      "title": "2 εE2ayx (1.39) where q is the electrical charge at the capacitor plates, V is the volume of the",
      "blocks": [
        {
          "id": "block-1",
          "en": "dielectric between the plates and the other dimensions are as in Figure 1.20. If a variable gap capacitor is considered, the resulting expression for the power will be P = dW dt = ∂W ∂x dx dt + ∂W ∂q dq dt (1.40) In Equation 1.40, the term dx/dt is the velocity of the moving plate and dq/dt is the electrical current used to charge the capacitor.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Since the result of the two terms at the righthand side of the equation must be a power, it follows that ∂W ∂x must be the electrostatic force on the moving plate, F⊥, and ∂W ∂q must be the voltage across the capacitor, U . If we use Equation 1.39 together with the previous results, it follows that F⊥ = ∂W ∂x = 1",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-23",
      "title": "2 εE2ay (1.41) y",
      "blocks": [
        {
          "id": "block-1",
          "en": "x U a Perpendicular force Parallel force y x ator. and U = ∂W ∂q = q C (1.42) Here, let us consider a case in which the variable capacitance configuration is obtained by a modification of the capacitor’s effective area while maintaining the gap. If this is achieved by sliding one of the plates sidewise in the direction of y (see Figure 1.20), the expression for the force is F\u0001 = ∂W ∂y = 1",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-24",
      "title": "2 εE2ax (1.43)",
      "blocks": [
        {
          "id": "block-1",
          "en": "Equations 1.41 and 1.43 can be rewritten in terms of the applied voltage: F\u0001 = 1",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-25",
      "title": "2 εU 2 a x and F⊥ = 1",
      "blocks": []
    },
    {
      "id": "section-26",
      "title": "2 εU 2 ay x2 (1.44)",
      "blocks": [
        {
          "id": "block-1",
          "en": "A simple inspection of Equation 1.44, will readily show the following. 1. Electrostatic interaction is short range.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The magnitude of the electrostatic forces decrease rapidly when the actuator is scaled up. 2. Perpendicular forces are much higher than parallel forces.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "In most, F⊥ ≈ 103F\u0001. 3. Electrostatic interaction is appropriate for microapplications.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "4. Complementarity in force and stroke. Actuators based on perpendicular and parallel forces are complementary in force and stroke.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In perpendicular actuators, the stroke is limited at most to the size of the gap. Actuator configurations Electrostatic actuators exploit either perpendicular, F⊥, or parallel forces, F\u0001. In parallel configurations, the most common developments are the ones known as comb drives.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "In comb drives, two comblike structures are used. The pins in each comb structure are used as electrodes in a layered capacitor configuration. The paralleltype electrostatic forces tend to pull both combs together.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The combination of multiple layers and the symmetry of the structure is used to balance out the perpendicular interaction so that F⊥ on each pin would ideally cancel out. Comb drives can be used to develop both linear and rotational actuators. ated by the electrostatic interaction results in interdigital rotational and translational movements.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The other typical configuration for electrostatic actuators is one that exploits perpendicular forces. This configuration is illustrated by the tilt mechanism of microscope mirrors as depicted in Figure 1.22. The mirrors can be rotated around a torsional hinge (light white in Figure 1.22b) as a consequence of the electrostatic force of perpendicular force actuators.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-27",
      "title": "1.10.2 Thermal actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "Thermal actuators are based on the thermal expansion of materials, either in solids or gases. SMA actuators (see Chapter 3), and some polymer gel actuators (see Chapter 4), can be considered thermal actuators as well as actuators based on thermal expansion. However, the term thermal actuators usually refers to multimorphtype thermally activated actuators.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "These actuators exploit the difference in thermal expansion coefficients of two dissimilar metals bonded together to produce bending deformations of the composite structure. (a) (b) nation with a ratchet and (b) detailed view of a linear actuator structure. (a) (b)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-28",
      "title": "16 μm in width and is mounted on electrostatic actuators.",
      "blocks": [
        {
          "id": "block-1",
          "en": "Thermal actuators are limited by the long response time of the heat transport process required for actuation. The force available in a thermal actuator is proportional to L2 , where L is the dominant dimension of the actuator. Similarly, the available stroke is usually expressed as a percentage of the actuator length and thus scales as L.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "From the force and stroke, it follows that the available work per cycle and the available work density per cycle scale in proportion to L3 and L0 respectively. In thermal systems, the time taken to transport the heat and actuate the system is proportional to the mass of the actuator, L3 , and inversely proportional to the heat rate. According to Peirs (2001), the heat rate scales proportionally to L.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Therefore, the time constant of thermal systems scales in proportion to L2 . This means that reducing the scale of the actuator by a factor of 10 will produce systems that are 100 times faster. As calculated above, the power density is proportional to L−2 and thus also increases by a factor of 100 when the actuator is scaled down by a factor of 10.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "All these results suggest that thermal actuators are an appropriate technology for integration in microsystems. Figure 1.23 shows a thermal actuator in a microsystems application.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-29",
      "title": "1.10.3 Magnetic shape memory actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "A martensitic transformation is a firstorder, diffusionless transformation exhibited by some alloys (Fe, Cu and Ti alloys). The martensitic transformation is affected by a variety of external fields (temperature, uniaxial stress, hydrostatic pressure and magnetic fields) and is the basis of various different emerging actuator mechanisms.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In the context of thermally triggered martensitic transformations in Tibased alloys in particular, we would highlight the case of shape memory alloy actuators (see Chapter 3 for a detailed discussion of SMA actuators and martensitic transformations). grated micromirror.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The application of a current to the actuator arm produces vertical motion of the mirror, which can either reflect an optical beam or allow it to be transmitted (Photograph courtesy of Joseph N. Mitchell, Southwest Research Institute).",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "In this section, we will briefly address the case of actuators based on martensitic transformations triggered by magnetic fields, which are known as ferromagnetic shape memory alloy actuators, FSMAs or magnetic shape memory actuators, MSMAs.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "As in the case of thermally triggered shape memory actuators, the transformation is possible because of the difference in magnetic moment between the parent and the martensite variants. The mechanism of actuation with MSMAs is similar to the mechanism with thermal shape memory actuators.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The ferromagnetic shape memory alloy consists of internal domains and twin variants, which have different crystallographic and magnetic orientations. In the martensite phase, when no external magnetic field is applied, the twin variants are preferentially aligned (by means of a bias load).",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The shortest, magnetically active axis in the crystallographic lattice is generally oriented in the direction of actuation (see Figure 1.24, left). When a magnetic field is applied perpendicular to the magnetically active axis, the other twin variants appear and grow.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "As a direct consequence, the magnetically active axis (which is the shortest in the lattice) of these new variants is aligned perpendicular to the direction of actuation and the length of the specimen increases (see Figure 1.24, right). The maximum attainable stroke is defined by the ratio of the length of the long to the short axis in the lattice, α/c.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "For the magnetic shape memory effect to materialize, the magnetic anisotropy energy of these alloys must be larger than the elastic or frictional energy associated with the conversion of variants. As in the case of thermally triggered shape memory actuators, MSMAs are oneway actuators and must be configured against bias c a H H H MSMA rod Magnetic flux Reluctance circuit Parallel prestress spring Φ tance circuit.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "loading in order to complete the actuation cycle. Again, magnetic SMAs can be made to change their shape in response to axial, bending or torsional loading. The basic structure of a magnetic shape memory actuator is depicted in specimen (usually based on linear springs as shown in the figure) and components to set up the magnetic field perpendicular to the direction of actuation.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "The reader is referred to Chapter 6 for more details regarding the design of reluctance circuits to set up the magnetic field. Magnetic shape memory actuators are a special class of giant magnetostrictive actuators, which can therefore be classified into two broad categories: Joule magnetostrictive actuators and twininduced magnetostrictive actuators.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "On the one hand, magnetostriction based on the Joule effect has been known since the nineteenth century and is dealt with in detail in Chapter 5. On the other hand, the property known as twininduced magnetostriction was discovered much more recently (in the 1960s, see Kakeshita and Ullakko (2002)) and is only now gaining some momentum.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "Joulebased magnetostriction is characterized by higher forces (only a few N have been achieved in MSMAs so far) and frequency of actuation, higher Curie temperatures (about 380 C as compared to only 100 C in twininduced magnetostrictive materials) and smaller driving magnetic fields (usually half that required in MSMAs), fatigue and hysteresis.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "Twininduced magnetostriction is characterized by a higher stroke (up to 50,000 ppm, as compared to 1700 ppm in Terfenol–D, see Chapter 5) and higher energy output per cycle (three times that of Terfenol–D). The first prototypes of MSMAs were not developed until recently; they are currently at a promising experimental stage.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "Some of these prototype implementations will be introduced in more detail in a case study in Chapter 5. 2 Piezoelectric actuators Actuators based on piezoelectric materials probably represent the most mature and best established of the different emerging technologies. The physical phenomenon of piezoelectricity provides the foundation for the transduction process upon which all piezoelectric actuators are based.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "The category of piezoelectric actuators encompasses a number of different configurations. It is common to find both stepping and continuous piezoelectric actuators, rotational and translational drives, micropositioning piezoelectric stages with subnanometer resolution, large stroke positioning stages and also fast drives. This chapter provides an analysis of piezoelectric actuators.",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "After a short historical note, there is an introduction to the basics of piezoelectricity, piezoelectric materials and their constitutive equations. These driving technologies are classified for analysis into resonant and nonresonant piezoelectric actuators. Various different configurations within these two categories are discussed and the main driving characteristics are highlighted.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "In line with the mechatronic focus of this book, we highlight the possibility of using piezoelectric actuators concomitantly as sensors, in the context of developing control strategies for achieving optimal operation points in resonant drives and reduced hysteresis in non resonant drives. A whole section is devoted to a comparative analysis of the various different piezoelectric actuator configurations.",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "In particular, there is a detailed note on the scaling properties of this technology. The last part of this chapter addresses the application of piezoelectric actuators, through an analysis of five case studies. Two of these concern resonant piezoelectric actuators, presenting the development of OEM drives and the integration of ultrasonic motors in the optical automatic focus of reflex cameras.",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "The three last application examples concern nonresonant drives. Here, three very different application domains are analyzed, which lead to three different actuator configurations: piezoelectric benders for needle selection modules in knitting Emerging Actuator Technologies: A Micromechatronic Approach J. L.",
          "zh": ""
        },
        {
          "id": "block-21",
          "en": "Pons  2005 John Wiley & Sons, Ltd., ISBN 0-470-09197-5 equipment; piezoelectric stepping motors for ultrastiff positioning in machine tools; and lastly, modified piezoelectric stack actuators for precise scanning in atomic force microscopy in spacecraft applications.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-30",
      "title": "2.1 Piezoelectricity and piezoelectric materials",
      "blocks": [
        {
          "id": "block-1",
          "en": "Piezoelectricity was first observed in some natural materials (quartz, tourmaline and Rochelle salt), which exhibited electrical polarization as the result of an applied mechanical load. Historically, piezoelectricity was observed by Pierre and Jacques Curie in 1880.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The mathematical formulation of the governing constitutive equations for the piezoelectric effect were then developed in the decades following this discovery. The first engineering application of piezoelectricity was devised by Langevin, who laid the foundations of ultrasonic submarine detection in 1916.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The piezoelectric effect can be described as modification of the polarization of a dielectric arising from the mechanical energy of the stress. Materials exhibiting such an effect are said to be piezoelectric materials. The piezoelectric effect is reversible in the sense that when an electric field is applied, a mechanical strain will arise.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "This is the converse piezoelectric effect. In what are called dielectric materials, the application of an external electric field leads to electric dipoles. This phenomenon is known as electric polarization and is usually characterized by the vector magnitude \u0001 P .",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In these materials, the electrical charge per unit area is known as electric displacement and is denoted by the vector magnitude \u0001 D. The electrical state of a dielectric is then determined according to the following expression: \u0001D = \u00010 \u0001E + \u0001P = \u0001\u00010 \u0001E (2.1) where \u00010 is the vacuum electric permittivity and \u0001 is the relative permittivity of the dielectric material.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "When the crystal structure of the dielectric material is such that in the absence of external electric fields the centers of positive and negative electrical charges do not coincide, the material is said to exhibit spontaneous polarization. If this polarization can be modified when an external electric field is applied, the material is said to be ferroelectric. Ferroelectric materials are not generally piezoelectric.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "This is mainly because they are isotropic materials; that is, there is no dominant direction for polarization. In order to serve as piezoelectric materials, ferroelectric materials must be subject to an external electric field, the poling field. Therefore, it is the poling process that is responsible for the appearance of piezoelectric properties in ferroelectric materials.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "This process can take place either at room temperature, once the ferroelectric material is obtained, or in what is called the paraelectric phase. The latter approach involves sustained application of an external electric field while the material is cooled to below the Curie temperature, so that the resulting ferroelectric domains have a dominant orientation for the polarization.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "The Curie temperature becomes the upper limit for the operational range of piezoelectric ceramics; polarization is lost for higher temperatures (see Most current piezoelectric materials are ceramics with a crystalline structure of the perovskite type, ABO3. In particular, the wellknown PZT and PLZT ceramics are solid solutions obtained from Ti, Zr and Pb oxides.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "A classic example of perovskitetype materials is barium titanate, B a T i O3 (see Figure 2.2). In this particular case, the T 4+ i is slightly shifted toward one of the six faces of the cubic structure. When the ceramic is poled, a dominant direction for the shift of the T 4+ i will develop, and there will be a piezoelectric effect.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Temperature Permittivity Spontaneous Polarization Property Tc temperature: spontaneous polarization in ferroelectric materials is lost at more than the Curie temperature, T c. Ba2+ Ti4+ O2−",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-31",
      "title": "2.2 Constitutive equations of piezoelectric materials",
      "blocks": [
        {
          "id": "block-1",
          "en": "The functional relation between applied electric field and corresponding material strain in a piezoelectric PZT ceramic can be depicted graphically as shown in When lowamplitude electric field cycles are applied to the piezoelectric materials, a quasilinear mechanical strain is generated. This is the converse piezoelectric effect introduced above, which is characterized by lowlevel hysteretic behavior.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "When the applied electric field is increased, the hysteresis level is also increased until there is a coercitive electric field. At this level, a degenerated butterflylike relationship develops between the applied electric field and the resulting mechanical strain.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Piezoelectric ceramics are classified into soft and hard ceramics, according to the relative value of the coercitive electric field: • Hard Piezoelectric Ceramics are characterized by relatively high coercitive electric fields (≥20 kV/cm), a relatively wide linear piezoelectric region, moderate piezoelectric coefficients and high quality factors, Q.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "• Soft Piezoelectric Ceramics exhibit low coercitive electric fields (≈14–16 kV/cm), relatively higher electrically driven mechanical strain and lower hysteresis levels. When dealing with actuator applications, particularly in the case of resonanttype piezoelectric actuators, hard piezoelectric ceramics are preferred. This is basically due to the higher quality factor.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "High quality factors are an indication of high efficiency in the transduction between electrical and mechanical energy, the basis for actuator design. The quasilinear, low hysteresis piezoelectric effect can be mathematically described by what are known as constitutive equations.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The constitutive equations Ec E Low hysteretic piezoelectric effect e for the piezoelectric effect are described in terms of the relationship between electrical and mechanical variables. The formulation of the piezoelectric constitutive equations can be derived from a number of thermodynamic energy density functions involving both elastic and electrical energy (Rosen et al. (1992)).",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The particular set of constitutive equations depends on the choice of dependent and independent variables. As we saw earlier in Equation 2.1, a complete definition of the electrical state in the dielectric requires the specification of two independent variables of the set { \u0001 E, \u0001 D and \u0001 P }.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "In the following equations, { \u0001 E} has been taken as the electrical independent variable and { \u0001 D} as the electrical dependent variable. For the case of elastic energy, the strain, S, and the stress, T , are commonly used.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "If strain and electric field are selected as independent variables and the electric displacement, \u0001 D, is selected as the dependent electrical variable, the constitutive equation of the piezoelectric actuator can be expressed in tensor notation as follows: Sij = c E ij kl T kl + dmij E m D k = dkij T ij + \u0001 T km E m (2.2) The above tensor notation can be compacted into a matrix notation following the contraction criteria described in Table 2.1.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "When this contraction criterion is followed, directions 1, 2 and 3 generally represent normal strains, while directions 4, 5 and 6 represent shear strain. In addition, direction 3 is usually associated with the poling direction. See Figure 2.4 for a schematic representation of the axes convention.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Tensor notation (ij , kl) 11 22 33 23, 32 31, 13 12, 21 Matrix notation (p, q) 1 2 3 4 5 6 1 Poling direction 2 3 6 4 5 tion “3” is defined as the poling direction. In general, according to the rank of all the tensors in the constitutive equations, the electromechanical relationship in a piezoelectric will be completely specified by 21 independent elastic coefficients, 18 independent piezoelectric constants and",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-32",
      "title": "6 independent dielectric constants. However, poled ferroelectric ceramics exhibit crystal symmetry, so that there is a reduced set of independent elastic, piezoelectric",
      "blocks": [
        {
          "id": "block-1",
          "en": "and dielectric coefficients. In the case of poled ferroelectric ceramics in particular, only 5 independent elastic constants, 3 piezoelectric coefficients and 2 dielectric constants fully describe the material’s electromechanical behavior.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In compact notation, the full set of constitutive equations can be described using the following expression: { S D } = [[s] [d]T [d] [ε] ] {T E } (2.3) where, [s] =         s11 s12 s13 0 0 0 s12 s22 s23 0 0 0 s13 s23 s33 0 0 0",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-33",
      "title": "0 0 0 s44 0 0",
      "blocks": []
    },
    {
      "id": "section-34",
      "title": "0 0 0 0 s55 0",
      "blocks": []
    },
    {
      "id": "section-35",
      "title": "0 0 0 0 0 s66",
      "blocks": [
        {
          "id": "block-1",
          "en": "        (2.4) [d]T =        ",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-36",
      "title": "0 0 d31",
      "blocks": []
    },
    {
      "id": "section-37",
      "title": "0 0 d31",
      "blocks": []
    },
    {
      "id": "section-38",
      "title": "0 0 0",
      "blocks": []
    },
    {
      "id": "section-39",
      "title": "0 d15 0 d15 0 0",
      "blocks": []
    },
    {
      "id": "section-40",
      "title": "0 0 0",
      "blocks": [
        {
          "id": "block-1",
          "en": "        (2.5) and [ε] =   ε11 0 0",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-41",
      "title": "0 ε22 0",
      "blocks": []
    },
    {
      "id": "section-42",
      "title": "0 0 ε33",
      "blocks": [
        {
          "id": "block-1",
          "en": "  (2.6)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-43",
      "title": "2.3 Resonant piezoelectric actuators",
      "blocks": []
    },
    {
      "id": "section-44",
      "title": "2.3.1 Basics of resonant operation of piezoelectric loads",
      "blocks": [
        {
          "id": "block-1",
          "en": "Electromechanical characterization The resonant operation of a piezoelectric motor can be represented by the electrical parameters of the equivalent electrical circuit shown in Figure 2.5. C0 is the clamped capacitance of the piezoelectric vibrator, that is, the capacitance of the piezoelectric ceramic under the boundary conditions of fixed electrodes.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Parallel to the clamped capacitance is the motional impedance, which consists of the Cm C0 L m Rm motional capacitance C m, the motional inductance L m and the resistance Rm. Rm accounts for the power losses within the piezoelectric vibrator, friction losses at the rotor–stator interface (if any) and the mechanical output power delivered to the shaft.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "In resonanttype piezoelectric motors, in order to get the maximum mechanical output power, the excitation frequency is tuned to the resonance or antiresonance frequency of the device. A piezoelectric ceramic, as a mechanical continuum, is electrically characterized by an infinity of resonance modes.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "See Figure 2.6a, b and c for the electromechanical characterization of resonance modes of a piezoelectric motor in a frequency range of 35 to 70 kHz. A resonance mode is characterized electromechanically by a local minimum of both the electrical and the mechanical impedance.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "While the electrical impedance is defined as the vector ratio (magnitude and phase) of applied voltage to current drawn, the mechanical impedance is defined as the ratio of vibration velocity to applied exciting force. As a vector magnitude, the electrical impedance of a piezoelectric actuator depends on its magnitude and phase along the frequency axis.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Figure 2.6 shows the electromechanical characterization of a resonanttype piezoelectric motor. The figure shows the particular electromechanical characterization for the operational frequency range. frequency.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Every mechanical vibration mode (see Figure 2.6c) is electrically characterized by a resonance and an antiresonance mode. The resonance mode exhibits a local minimum of the magnitude of the impedance, while the antiresonance mode represents a local maximum of the magnitude (see Figure 2.6a). Resonance and antiresonance modes are also characterized by abrupt changes in the phase of the electrical impedance.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The electrical equivalent of a piezoelectric ceramic is approximately a capacitive load in a frequency range outside the",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-45",
      "title": "35 40 45 50 55 60 65 70",
      "blocks": [
        {
          "id": "block-1",
          "en": "35 −100 −80 −60 −40 200 300 400 500 0 000 1500 500 600 (b) (c) (a)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-46",
      "title": "40 45 50 55 60 65 70",
      "blocks": []
    },
    {
      "id": "section-47",
      "title": "35 40 45 50",
      "blocks": [
        {
          "id": "block-1",
          "en": "Frequency (kHz) Am (Ω) Ze (Ω) Φe (deg)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-48",
      "title": "55 60 65 70 piezoelectric motor.",
      "blocks": [
        {
          "id": "block-1",
          "en": "Frequency −p/2 p/2 Φ f a f r range for a piezoelectric ceramic. resonance range. In the vicinity of a resonance–antiresonance mode, the piezoelectric load shows electrical behavior proximate to a squarewell phase angle function (see Figure 2.7).",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The phase takes values of ±π/2, with discontinuity at the resonance and antiresonance frequencies. In other words, the electrical equivalent in the frequency range between resonance and antiresonance is inductive, and hence the piezoelectric load represents a resistive load at resonance and antiresonance. The quality factor, Q One important electromechanical parameter of mechatronic systems is the quality factor, Q.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The quality factor is a measure of the actuator’s efficiency in transduction from electrical to mechanical energy. The quality factor is a magnitude closely related to the shape of the resonance and antiresonance peaks. It is also related to the intrinsic structural damping of the piezoelectric ceramic.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "In particular, the sharper and the narrower the resonance (the antiresonance) peak, the higher will be the quality factor and the lower the system damping. The quality factor can be practically derived from the motional impedance of the resonant piezoelectric ceramic.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In particular, a good approximation of the quality factor is given by: Q = √L m /C m Rm (2.7) Piezoelectric transducers differ in their operation point according to whether they are conceived as sensors or as actuators. Resonant piezoelectric actuators are usually driven in a frequency range close to the antiresonance frequency of the device.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "As proposed by Uchino, Uchino and Hirose (2001), antiresonance modes (Btype modes) are better for actuators since their quality factor is higher than Atype modes (resonance modes) over the entire range of vibration frequency (see As a consequence, the driving situation for resonance piezoelectric actuators is as shown in Figure 2.9.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The lower limit of the range of frequencies used to drive 0 500 1000 1500 2000 30 40 20 10",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-49",
      "title": "0.02 0.01 0.05 0.1 0.2 0.5",
      "blocks": [
        {
          "id": "block-1",
          "en": "QA QB TA TB Vibration speed (m/s) Q ∆T of vibration speed. Note the superior performance of Btype modes (antiresonance modes) due to the higher comparative quality factor. Courtesy of K.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Uchino. Frequency f min fmax Impedance impedance decay after antiresonance. the actuator is usually set at a frequency close to antiresonance.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The smoothly decreasing impedance curve after antiresonance is therefore used to define the range of frequencies allowed for motor speed control. Frictional transmission in resonant drives Resonanttype piezoelectric motors can be classified according to a number of criteria. Several of these classifications are briefly introduced in Section 2.3.2.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "In this section, we shall focus on the way the microscopic resonant vibration of the piezoelectric ceramic is transmitted and transformed into a macroscopic linear or rotary motion. In general, the transmission of microscopic vibrational motion into macroscopic motion is based on a friction mechanism between the motor stator and rotor.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "This is usually achieved in two steps: first, the vibrational motion is transformed to a microscopic elliptic motion of the stator; then, this elliptic motion is transmitted to the rotor through friction or impact mechanisms. The first step is usually based on a combination of two linear motions on orthogonal axes.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The combination of harmonic motion in two mutually orthogonal directions leads to the wellknown Lissajous loci. Joules Lissajous (1822–1880) was the first to observe and describe these curves during his experiments on optics of vibrational movements.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "They are obtained by superposition of orthogonal movements of the form: y = Ay sin(ω y t + ϕy ) (2.8) x = Ax sin(ω x t + ϕx ) (2.9) The exact shape of the Lissajous loci depends on the particular frequencies of the orthogonal movements, ω y and ω x .",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The condition for a closed Lissajous locus wx = wy wx = 2wy wx = 3wy wx = 2/3wy −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x (a) (c) (b) (d) orthogonal movements, ω x /ω y . is given by ω y = ny ω0 (2.10) ω x = nx ω0 (2.11) where ny and nx are integers. For the particular situation in which nx = ny , and ϕx − ϕy = π",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-50",
      "title": "2 , the locus is an ellipse (see Figure 2.10a). This is the situation usually found in resonant ultrasonic",
      "blocks": [
        {
          "id": "block-1",
          "en": "motors. The cases of different combinations of frequencies are also shown in The practical application to piezoelectric resonant drives involves either the combination of two orthogonal vibration modes at the same frequency or the use of what is known as the mode conversion principle (see Section 2.3.2).",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Resonanttype piezoelectric motors can be classified into linear or rotational motors, depending on the resulting macroscopic movement. In either case, the travelling waves are normally used as a means of exciting the Lissajous locus at the stator–rotor interface. The next section deals specifically with rotational resonant piezoelectric motors, and in particular with travelling wave ultrasonic motors, TWUMs.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-51",
      "title": "2.3.2 Rotational ultrasonic motors",
      "blocks": [
        {
          "id": "block-1",
          "en": "There is no clear consensus as to who conducted the original research on rotational ultrasonic motors, but it was most likely in the Soviet Union in the early 1960s. As early as 1964, Lavrinenko introduced a rotational motor based on a piezoelectric ceramic converter.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In the early 1970s, a number of implementations of rotational ultrasonic motors based on resonant piezoceramics were known (for instance, Siemens and Matsushita Electric Industries). The next steps towards the development of highperformance ultrasonic motors were taken in Japan. In 1980, Toshiiku Sashida presented an ultrasonic motor with practical industrial applications (driving frequency 27.8 kHz, output torque",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-52",
      "title": "0.25 Nm, input electrical power 90 W and output mechanical power 50 W). Initial practical problems with wear at the rotor–stator interface were overcome two years",
      "blocks": [
        {
          "id": "block-1",
          "en": "later when he introduced the travelling wave ultrasonic motor, TWUM. There are various classifications for rotational resonant piezoelectric motors. All classifications share the concept of the resulting rotational macroscopic motion and the use of at least one vibration mode excited in resonance.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "According to the definition of actuators as twoport transducers, rotational piezoelectric motors have an electrical input port and a mechanical output port. The input port can be configured as a singlephase electrical port, as a twophase port or as a multiplephase input port.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "According to this criterion, a first classification of rotational piezoelectric motors relates to the number of electrical phases at the input port. A more useful classification of resonant piezoelectric motors takes into consideration the vibration modes used to produce the elliptic microscopic motion.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Generally speaking, a combination of the following resonance modes can be used to excite an elliptic motion at the rotor–stator interface: • Flexural Vibration Mode. The stator of a piezoelectric resonant motor can be considered a laminate elastic structure. The laminate structure is composed of an elastic metal substrate and an exciting piezoelectric ceramic.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "This diskshaped laminate structure is usually thin, in the sense that the diameter of the disk is much larger than its thickness, and it therefore meets the Kirchhoff’s assumption. For structures of this type, the Kirchhoff’s assumption established that when a flexural vibration mode is excited, the planes orthogonal to the neutral plane remain orthogonal after the flexural strain is excited.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "In this type of vibration mode, the axial displacement is a function of the circumferential Z r φ in the circumferential direction. variable, φ, and the radial variable (see Figure 2.11). u(φ, r) = A cos(kφ)F (r) (2.12) In this equation, k defines the mode order.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The higher the value of k, the larger is the number of nodal diameters. In Equation 2.12, F (r) is a function of the radial variable. The particular shape of F (r) is also a function of the mode order; here again, the higher the mode order, the higher is the number of nodal circumferences.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "• Radial Vibration Mode. In this type of vibration mode, the stator displacement is predominantly radial. This vibration mode is depicted graphically in modes to achieve microscopic elliptic motion.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "• Longitudinal Vibration Mode. The predominant component in the longitudinal vibration mode is an axial displacement. Figure 2.13 shows this vibration Z r along r axis.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "Z r along z axis. Z r upper part of the disk with respect to the lower part along the θ axis. mode schematically.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "Longitudinal vibration modes are commonly used either in combination with torsional and flexural modes or in what is known as the mode conversion approach. • Torsional Vibration Mode. A torsional vibration mode is predominantly a shear strain resonance mode (see Figure 2.14).",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "As in the previous case, torsional modes are usually combined with other orthogonal modes to obtain the required Lissajous loci. There is a further classification of rotational piezoelectric motors based on the way the different modes are combined to achieve elliptic motion at the stator–rotor interface. 1.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "Motors using resonance modes of the same type. We know that because of the axial symmetry of disk type piezoelectric motors there are two degenerate modal shapes for each outofplane vibration mode. These degenerate modal shapes are shifted by a magnitude equal to λ/4 in the circumferential direction, where λ is the circumferential wavelength.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "Flexural vibration modes as described above are typical examples of this situation. For this type of vibration mode, it is relatively easy to excite both degenerate modal shapes at the same resonance frequency. The wellknown travelling wave ultrasonic motors belong to this category.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "2. Motors using resonance modes of different types at the same frequency. In piezoelectric motors, it is possible to excite an elliptic motion at the rotor–stator interface by a combination of two vibration modes of different types.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "Since different vibration modes will generally occur at different resonance frequencies, the geometry of the stator in this type of motors is designed in such a way that both modes are brought together at the same resonance frequency. This is true of a twopiezoelectric ceramic stator in which the first longitudinal and the first transversal vibration modes are used (see Figure 2.15a).",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "In such a stator, the frequency of these two vibration modes can be made to coincide by a proper selection of the mass’ length, L0 . Under this condition, both vibration modes are excited and the corresponding Lissajous locus is achieved for the same driving frequency.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "Langevin exciter Rotor Longitudinal Torsional fr Y f f f r f r1 f r2 f s Y (a) (d) (c) (b) (a) different modes at the same resonance frequency, (b) modes of different types at different frequencies, (c) mode separation and (d) mode conversion. 3. Motors using resonance modes of different types at different frequencies.",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "An approach similar to the above is when two orthogonal vibration modes are combined but one of them is excited out of resonance. As mentioned before, different vibration modes generally occur at different frequencies. In this type of motor, two electrically independent piezoelectric ceramics are used to drive both orthogonal vibrations.",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "Both ceramics are excited at the same driving frequency, but owing to the separation of modes, only one of them is driven in resonance. Since the generation of Lissajous loci requires the excitation of orthogonal vibration with a phase lag of 90◦ , the driving electrical signals for both vibration modes are used in quadrature. 4.",
          "zh": ""
        },
        {
          "id": "block-21",
          "en": "Motors using mode separation. As discussed earlier, two degenerate modal shapes coexist at the same frequency in outofplane vibration modes of structures exhibiting axial symmetry. In such cases, a small geometrical perturbation of the structure is sufficient to produce nonsymmetric geometry, and this in turn will separate the two degenerate modal shapes.",
          "zh": ""
        },
        {
          "id": "block-22",
          "en": "In this situation, the use of a frequency of the driving electrical signal within the range bounded by the new resonance peaks corresponding to the separate degenerate modes would result in combined excitation of the two modes (see 5. Motors using mode conversion. In this type of motor, the stator is excited in a single longitudinal vibration mode.",
          "zh": ""
        },
        {
          "id": "block-23",
          "en": "The longitudinal vibrator is a Langevin transducer (Ueha et al. (1993)), which is placed nearly perpendicular (≈85◦) to a disk rotor. The longitudinal displacement of the Langevin vibration produces an impact, and, thus, the longitudinal displacement is converted to a transversal displacement (see Figure 2.15d).",
          "zh": ""
        },
        {
          "id": "block-24",
          "en": "Some of the limiting factors in this kind of motor are the heavy wear at the interface and the difficulty in reversing the rotation direction. Travelling wave ultrasonic motors One of the most successful implementations among the various different resonanttype rotational piezoelectric motors has been what is known as the travelling wave ultrasonic motor, TWUM.",
          "zh": ""
        },
        {
          "id": "block-25",
          "en": "The term ultrasonic refers to the fact that the driving frequency used to excite these motors lies in a frequency range above 20 kHz and is, hence, well beyond the limits of human hearing. TWUMs make use of two degenerate flexural vibration modes at the same frequency to achieve elliptic motion at the rotor–stator interface. Therefore, they belong to the first type of motors as described above (see Figure 2.16).",
          "zh": ""
        },
        {
          "id": "block-26",
          "en": "Wave propagation Elastic substrate Rotor Piezoelectric ceramic A travelling wave is generally described by a mathematical function having the form: u(φ, t) = Af (kφ ± wt) (2.13) In rotational motors, φ is the circumferential variable, k defines the mode order, w is the frequency of the driving electrical signal and t is the time.",
          "zh": ""
        },
        {
          "id": "block-27",
          "en": "In Equation 2.13, the minus sign leads to a wave travelling in the direction of increasing φ, while the positive sign leads to a wave travelling in the negative direction of φ. The mathematical expression of a travelling wave can be expanded as a sum of two standing waves.",
          "zh": ""
        },
        {
          "id": "block-28",
          "en": "By assuming a sinusoidal function for the travelling wave and taking into account that the axial displacement, R(r), is a function of the radial distance, Equation 2.13 can be written as u(φ, r, t) = AR(r) cos(kφ) cos(wt) ∓ AR(r) sin(kφ) sin(wt) (2.14) where the function R(r) describes the axial displacement of the stator as a function of the radial variable r.",
          "zh": ""
        },
        {
          "id": "block-29",
          "en": "Equation 2.14 suggests how a travelling wave can be excited in the ultrasonic motor stator. At a first glance, Equation 2.14 will show the presence of a cosine, and a sine geometrical pattern. The wavelength of these patterns, λ, is defined by k, the mode order, so that λ = 2π/k.",
          "zh": ""
        },
        {
          "id": "block-30",
          "en": "It is common practice to fix both geometrical patterns in the stator’s structure during poling of the piezoelectric ceramic used to drive the travelling wave. In practice, this is done by an alternating poling pattern in the direction of the thickness of the piezoelectric ceramic. Usually, half of the piezoelectric disk is used to define what is called the sine mode while the other half is used for the cosine mode.",
          "zh": ""
        },
        {
          "id": "block-31",
          "en": "Each mode is obtained by alternating the poling direction in adjacent circumferential angular sectors of an arc of λ/2. Both modes are circumferentially shifted apart by a magnitude of π/2k, which corresponds to λ/4. The poling pattern is described schematically in Figure 2.17a.",
          "zh": ""
        },
        {
          "id": "block-32",
          "en": "Once the piezoelectric ceramic is poled according to the sine and cosine modes, a twophase electrical excitation circuit is configured. In this way, one of the sides 3λ/4 λ/4 Poling pattern λ Electrode Sinemode electrode Cosinemode electrode (a) (b) poling sine and cosine modes in the piezoelectric ceramic and (b) use of independent electrodes for both modes.",
          "zh": ""
        },
        {
          "id": "block-33",
          "en": "of the piezoelectric ceramic becomes the reference electrode. Independent electrodes are used on the other side of the ceramic for both modes (see Figure 2.17b). By selecting the appropriate phase of the electrical signals applied to both phases, it is possible to select the turning direction of the travelling wave, and, thus, the direction of rotation of the TWUM.",
          "zh": ""
        },
        {
          "id": "block-34",
          "en": "Let us analyze the case of a thin laminate structure in which a travelling wave is excited (see Figure 2.18). As noted earlier, Kirchhoff’s assumption for flexural vibration of thin structures posits a motion in which planes perpendicular to the neutral plane remain perpendicular after bending. In Kirchhoff’s theory, points on the neutral plane exhibit pure axial displacement in flexion.",
          "zh": ""
        },
        {
          "id": "block-35",
          "en": "According to this assumption, the displacement of a point Q at the rotor–stator interface is described by the following expression: \u0001u Q = u(r, ϕ, t)\u0001e z − au ,r (r, ϕ, t)\u0001e r − (a/r)u ,ϕ (r, ϕ, t)\u0001e ϕ (2.15) where u ,r (r, ϕ, t) = ∂u ∂r , u ,ϕ (r, ϕ, t) = ∂u ∂ϕ , \u0001e z, \u0001e r and \u0001e ϕ are unit vectors in axial, radial and circumferential directions respectively and a is the distance from the rotor–stator interface to the neutral plane.",
          "zh": ""
        },
        {
          "id": "block-36",
          "en": "It can readily be shown that the projection of the trajectory of point Q described by Equation 2.15 onto a tangential plane is an ellipse. It can further be demonstrated Neutral plane e z O a er ej that the velocity of point Q in the upper part of the trajectory has a horizontal component only. In TWUMs, both rotor and stator are prestressed against each other by a compressive force.",
          "zh": ""
        },
        {
          "id": "block-37",
          "en": "The tangential motion of point Q in the upper part of the trajectory is then transmitted through friction to the rotor. The rotor’s angular velocity can be estimated on the assumption that there is no sliding at the interface.",
          "zh": ""
        },
        {
          "id": "block-38",
          "en": "The linear velocity of the stator’s contact point Q is v t = − a r B kR(r B ) (2.16) where is the rotational frequency of point Q while describing the elliptic trajectory depicted in Figure 2.19, r B is the radius at the point of contact between stator and rotor and R(r B ) is the axial displacement at radius r B .",
          "zh": ""
        },
        {
          "id": "block-39",
          "en": "R(r) Z Q Ω j a/r m R(r) Assuming there is no sliding, the angular velocity of the rotor becomes ˙ Rotor = − a r B m R(r B ) r B (2.17) A first glance shows that some qualitative conclusions can be drawn from the analysis of Equation 2.17: 1. The equation suggests a high transmission (reduction) ratio between the driving frequency and the motor’s angular velocity ˙ Rotor .",
          "zh": ""
        },
        {
          "id": "block-40",
          "en": "In fact, since the disk is thin, the ratio a r B is small, typically of the order of 0.01. However, the ratio R(r B ) r B is even smaller, since R(r B ) is of the order of a few microns. The combination of these reduction ratios leads to an aggregate reduction of approximately 1:50,000.",
          "zh": ""
        },
        {
          "id": "block-41",
          "en": "The TWUM can therefore be said to have a large intrinsic transmission ratio. This in turn means that motor operation is characterized by a low rotational speed (a few hundred rotations per minute) and a high torque. 2.",
          "zh": ""
        },
        {
          "id": "block-42",
          "en": "Equation 2.17 suggests various different ways in which the TWUMs can be controlled. It can readily be appreciated that the motor’s angular velocity is proportional to the driving electrical frequency, , and to the amplitude of the axial vibration at the contact point R(r B ).",
          "zh": ""
        },
        {
          "id": "block-43",
          "en": "This suggests that both the amplitude and the frequency of the driving electrical signal could be used to control the angular velocity of the TWUMs. Even though the above consideration is correct, care has to be taken since operation in the proximity of resonance or antiresonance peaks leads to hidden secondary effects that become dominant when the driving frequency is selected as the input control variable.",
          "zh": ""
        },
        {
          "id": "block-44",
          "en": "In fact, as noted in Section 2.3, the frequency operation range for TWUMs is commonly the region of smooth impedance decay immediately above the antiresonance peak. In this region, a low frequency means proximity to the antiresonance peak, and this in turn means high amplification of the mechanical vibration, R(r B ). The latter is dominant, and the motor’s angular velocity is maximum at low frequency.",
          "zh": ""
        },
        {
          "id": "block-45",
          "en": "This is the opposite of what one might expect from a first glance at equation 2.17.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-53",
      "title": "2.3.3 Linear ultrasonic motors",
      "blocks": [
        {
          "id": "block-1",
          "en": "The previous section contained an analysis of rotational resonant piezoelectric drives and classified them according to the particular vibration modes that are used to excite elliptic motion at the rotor–stator interface. This was followed by a similar analysis in terms of the way these vibration modes are combined to generate driving elliptic motion.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Linear resonant piezoelectric drives can be analyzed in a similar way. In order to avoid unnecessary duplication in the analysis of resonant drives, this is restricted to the case of travelling wave linear motors, TWLMs. Travelling wave linear motors, TWLMs TWLMs have specific particularities whose analysis is relevant at this stage.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "In the case of rotational travelling waves, the elastic substrate supporting the travelling wave is an infinite continuum. In the particular case of linear travelling wave motors, the elastic substrate is per se finite.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The governing equation for the transverse motion of a beam or rod can be obtained from the statement of equilibrium conditions for a small element of the rod (Graff (1975)): ∂4v ∂x4 + ρA EI ∂2v ∂t2 = q(x, t) (2.18) where v is the transversal displacement of the rod points, x is the longitudinal variable describing the linear position in the rod, ρ is the density of the elastic substrate, A is the section area, E is the Young’s modulus of the substrate, I is the moment of inertia of the cross section, and q(x, t) is a distributed load on the rod in the direction of y.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "If we assume that no load is being applied to the rod, Equation 2.18 becomes ∂4v ∂x4 + ρA EI ∂2v ∂t2 = 0 (2.19) Equation 2.19 can be solved for the transversal displacement v(x, t): v(x, t) = a sin(kx − wt) (2.20) Equation 2.20 represents a sinusoidal wave travelling in the positive direction of x.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The longitudinal displacement of the rod, u(x, y, t), can be derived by means of the following expression: u(x, y, t) = −y ∂v ∂x = −ayk cos(kx − wt) (2.21) The linear combination of the transverse and longitudinal displacement of Equations 2.20 and 2.21 results in an elliptic motion of the points in the rod (conforming to the Lissajous loci described in previous sections).",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "In finite beams or rods, the travelling wave, v(x, t), will be subject to a reflection process at the free end of the elastic domain. As a consequence of this process, a travelling wave is also generated in the opposite direction, v o (x, t).",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The mathematical expression for the latter is v o (x, t) = a sin(kx + wt) (2.22) The linear combination of the travelling waves represented by Equations 2.20 and 2.22 results in a standing wave, u s (x, t), in the beam or rod: v s (x, t) = a cos(kx) cos(wt) (2.23) Langevin exciter Langevin absorber Direction of wave propagation Direction of linear displacement Contact force The longitudinal displacement corresponding to this situation is u s (x, y, t) = −y ∂v s ∂x = −ayk sin(kx) cos(wt) (2.24) For a particular point (x1, y1) in the rod elastic domain, the expression for the transversal and longitudinal displacement in the rod reduces to u s (t) = Ku cos(wt) v s (t) = Kv cos(wt) (2.25) The combination of u s and v s according to Equation 2.25 results in a linear displacement of the points in the elastic domain.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "No elliptic motion is established as a consequence; friction transmission to a linear slider cannot be realized using this scheme. What this analysis indicates in practice is the need for a mechanism of absorption of the travelling wave at the opposite end of the finite elastic domain. In common practice, Langevin vibrators are used at either end of the elastic domain (see Figure 2.20).",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "One of the Langevin vibrators is used to excite a wave travelling in the direction of the other vibrator. The latter then acts as a vibration absorber. If the situation is reversed, the wave travels in the opposite direction, as does the linear slider.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-54",
      "title": "2.4 Nonresonant piezoelectric actuators",
      "blocks": []
    },
    {
      "id": "section-55",
      "title": "2.4.1 Bimorph actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "The word “bimorph” is a registered trademark of Morgan Electro Ceramic, but it has come to be the commonly adopted name for bending piezoelements comprising two bonded ceramic plates. Bending piezoelectric elements comprising a multiplicity of bonded ceramic plates are called multimorphs. The particular case of a single piezoelectric element bonded to an elastic substrate is usually referred to as a unimorph.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Bimorphs are thin bending piezoelectric elements made up of a combination of two very thin piezoceramic plates bonded together to a thin metal beam. The poling directions of the ceramic plates in the bimorph and the selection of electrodes are so configured that when electrically powered, one of the ceramics will expand while the other contracts.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The combined mechanical interaction between the two ceramics causes bending of the bimorph. Also, when the bimorph structure is bent, a voltage is developed across the electrodes, as one might expect given the reversibility of the piezoelectric effect. Piezoelectric bimorphs can be poled and configured to operate in series or in parallel.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "See Figure 2.21 for a schematic representation of both configurations. The parallel configuration has the ceramic plates poled in opposite directions, while the series configuration has them poled in the same direction. In the electrical connections for the parallel configuration, one electrode is connected to the central metal beam, while the second electrode is connected to both outer sides of the ceramics.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In the series configuration, each electrode is connected to each outer side of the ceramics and no electrical connection is established with the central metal vane. As to the applicability of bimorphs as actuators, the parallel configuration gives twice as much deflection as the series configuration. This follows from the fact that the full driving voltage is applied to each ceramic plate.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The intrinsic characteristics of bimorphs as actuators are 1. High deflection and low force with a relatively low driving voltage (as compared to direct piezoelectric extenders). 2.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Voltagelimited operation for both DC and AC applications of the driving voltage. This is because in both series and parallel configurations, one of the ceramic plates is always subject to an electric field opposite to the original polarization. 3.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "Stresslimited operation in resonance, resulting in driving voltages about one order of magnitude less than for nonresonance driving. (a) (b) ration.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-56",
      "title": "2.4.2 Stack piezoelectric actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "Stack piezoelectric actuators are made of thin piezoelectric laminae stacked in such a way that a common electrode is deposited between two consecutive laminae. After this stacking process, all electrodes in alternating positions are electrically connected, so that there are two electrical terminals. See Figure 2.22 for a schematic representation of the stacking process.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Each lamina in the stack piezoelectric structure is a few tens of micrometers thick. All the laminae are poled in the direction of the thickness. In addition, the laminae are stacked in such a way that consecutive laminae have opposite poling directions.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The result of the electrode disposition described above and the process of alternating lamina poling directions is a device that acts electrically in parallel and mechanically in series. One direct consequence of this is that a high mechanical displacement is achieved for a low applied electric field.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "If a voltage V is applied to the stack piezoelectric actuator, every single lamina will respond according to the following equation: li = V d33 (2.26) where d33 is the piezoelectric coefficient and li is the mechanical displacement for the lamina.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The total displacement for the particular configuration of the piezoelectric stack is l = n ∑ i=1 li = nV d33 (2.27) In the event that higher range displacements are required, piezoelectric stacks can be combined in turn. Piezoelectric stacks are commercial devices. Table 2.2 shows a comparative list of several commercial piezoelectric stacks, with particular reference to the operational data for these devices.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The force level is comparatively Matroc Matroc Ferroperm Ferroperm 7111-03031 7111-05051 Pz27-40x033 Pz29-27x067 Dimensions, mm 3.5 × 3.5 × 3.5 5 × 5 × 3.5 6.8 × 4.7 × 1.7 6.7 × 4.6 × 2.2 Capacitance, nF 70 120 – – Voltage, V +150–−20 +150–−20 100 200 Maximum stroke, μm",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-57",
      "title": "2 2.8 1.6 3.3",
      "blocks": [
        {
          "id": "block-1",
          "en": "Maximum force, N",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-58",
      "title": "425 850 – –",
      "blocks": [
        {
          "id": "block-1",
          "en": "Maximum Temperature, C <75 <75 <250 <150 higher as compared to piezoelectric unimorphs or bimorphs, while the available displacements are of the order of a few microns. The use of stacked piezoelectric actuators can produce two important consequences.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "First, because of the low stroke availability, the application of stacks may require the use of mechanical transmission stages for increased displacement; secondly, the positioning accuracy of piezoelectric stacks can be very high, of the order of nanometers. Because of their operational characteristics, these actuators are normally used in micropositioning stages of vibration suppression systems.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Piezoelectric stacks belong to the nonresonant category of piezoelectric actuators. This means, in practice, that they can be driven in a frequency range starting from static application of driving voltages. This kind of actuator cannot take advantage of intrinsic mechanical amplification at resonance, and, therefore, high displacements require high electric fields.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "As noted earlier, in the process of poling, the material of piezoelectric ceramics is cooled down from a high temperature while the poling electric field is being applied. Under operational conditions, there is a threshold for the applicable driving voltage.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "This threshold is imposed to prevent depolarization of the piezoelectric ceramic as a result of high voltages being applied in the opposite direction to the poling voltage. In order to minimize the chance of depolarization of the ceramic, an offset is usually applied to the driving voltage to ensure that there is no depolarization.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "When piezoelectric actuators are driven at alternating voltages, there is an increase in the material temperature, that is, part of the reactive power required to drive a capacitive electrical load is converted to heat.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "This has two main drawbacks: first, the temperature rise must be limited so that the material does not reach its Curie temperature, T c (to prevent depolarization); second, there may be alteration of the adhesive layers between consecutive ceramic laminae. The time response of piezoelectric actuators is highly dependent on the electrical capacitance of the device, which is usually large.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The charge time for the stack actuators is limited by the power source being used, but the discharging time will mainly depend on the actuator capacitance, and this will impose a very strict limit on the response time. Piezoelectric stack manufacturers usually provide maximum charge and discharge electrical currents in their data sheets.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-59",
      "title": "2.4.3 Inchworm actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "The inspiration for the conceptual operating principle of inchworm piezoelectric actuators is biological, specifically the movement of some earthworms. Piezoelectric inchworm actuators are characterized by the long strokes of which they are capable; these are generally limited by the length of the rotor. The linear inchworm actuator comprises three independently driven piezoelectric ceramics.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The three piezoelectric ceramics can be configured for a variety of implementations, but the most typical one is depicted in Figure 2.23. In this configuration, ceramics 1 and 3 are used in a radial actuation mode to clamp the rotor, while ceramic 2 is driven in an axial mode to effectively produce the displacement. The axial displacement of the rotor is then transformed into a cycle: 1.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The first ceramic (1) is driven so that it deforms radially in order to clamp the rotor. 2. The second piezoelectric ceramic (2) is actuated in axial mode.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "If the mid position of the second piezoelectric ceramic is taken as the reference position for the axial displacement of the rotor, this step leads to an axial displacement that is half the displacement of the second piezoelectric ceramic. 3. The third ceramic (3) is then actuated in a manner similar to the first one.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "It clamps the rotor while the second ceramic is still actuated. 4. At this stage, the first ceramic (1) is relaxed so that it releases the rotor.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "3 1",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-60",
      "title": "1 2 3 4 5 6",
      "blocks": [
        {
          "id": "block-1",
          "en": "2 electric motors. 5. The second ceramic (2) is now relaxed and as a result the rotor is again displaced axially, by half the total relaxation of the second piezoelectric ceramic.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "6. This last step completes the cycle as the third ceramic (3) is relaxed. If this operation sequence is repeated, the resulting operational behavior is similar to that of “stepping” motors.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The rate of axial displacement will range from a few nanometers per second to a few meters per second, depending on the duration of the entire cycle and the voltage applied.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-61",
      "title": "2.5 Control aspects of piezoelectric motors",
      "blocks": []
    },
    {
      "id": "section-62",
      "title": "2.5.1 Control circuits and resonant drivers",
      "blocks": [
        {
          "id": "block-1",
          "en": "It is common practice in textbooks on mechatronics to show sensors, actuators and controllers as constitutive components in control motion systems. This was already stressed in Chapter 1 when dealing with the role of actuators in mechatronic systems. As noted earlier, an actuator can in itself be considered a mechatronic system.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In the particular case of resonanttype piezoelectric motors, this is apparent from the analysis of their operation conditions. During normal operation of a resonant piezoelectric motor, the driving voltage, the system temperature or the actuator load will be subject to variations. Consequently, the resonant characteristics of the system will be altered.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "This is commonly sufficient to cause alterations in the operation point. Optimum tracking of the operation point is therefore required to overcome temperature, voltage or load changes. The adaptation of driving conditions can be optimized for tracking the operation point following a threefold approach: 1.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Selection of efficient driving signals. Because piezoelectric motors are resonant, a wise selection of driving signals would aim at providing pure tones or at least at shifting harmonics apart. 2.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "Signal amplification and tuning. Switching signals used to drive capacitive loads usually cause unacceptable current spikes. This can only be overcome by proper design of a resonant driving circuit suitably attuned to the mechanical resonance characteristics of the piezoelectric motor.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "3. Resonance tracking. The shift in the mechanical resonance characteristics of the piezoelectric motor must be tracked to ensure an optimum operation point.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "In the coming paragraphs, we focus on an analysis of the three different steps for optimum operation of resonant piezoelectric motors.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The threestep approach is a typical example of a mechatronic approach to system design: the analysis of the mechanical characteristics of the plant (piezoelectric motor) leads to the formulation of control strategies (which are based on tuning electronic drivers) to track the operation point and thus enhance overall operation and performance.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Selection of efficient driving signals The piezoelectric motor is a resonant structure that behaves as a mechanical filter. The optimum driving signal for a piezoelectric ceramic is a pure sinusoidal signal tuned to the resonance frequency of the mechanical part. Any undesired harmonic in the driving signal will be filtered by the piezoelectric ceramic, causing overall heating and loss of efficiency.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "Digital electronic circuits are preferred to their analog counterparts. The solution is usually to use switching techniques to set up the driving signal. Switched signals can be configured to reduce the undesirable effects of harmonics of the fundamental resonance frequency.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "According to Schaaf and van der Broeck (1995), if, for instance, bipolar symmetrical voltage pulses are used in particular, the frequency spectrum can be demonstrated to be Vn = 4 π V sin nπ w n [1 − (−1) n]",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-63",
      "title": "2 (2.28) where V is the DC supply voltage, n is the number of the harmonic and w is the",
      "blocks": [
        {
          "id": "block-1",
          "en": "duty cycle of the signal. Selection of a bipolar symmetrical signal results in zero even harmonics. Furthermore, if the duty cycle of the driving signal is 1/3, the third harmonic vanishes (see Figure 2.24).",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The combination of these two conditions produces an acceptable driving signal that is practically equivalent to a pure tone at the resonance frequency. Signal amplification and tuning The inverter output voltage of the previous stage cannot be applied directly to the motor since the switched voltage would cause high current spikes at the clamped capacitance C0 .",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "In order to overcome this problem, an inductor has to be placed in series to the motor. The inductor will cause a slight drop in the fundamental voltage. This must be limited by means of an additional serial capacitor.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The inductor and the capacitor together form a serial resonant filter (see Schaaf and van der Broeck (1995)) whose resonant frequency must be tuned to that of the motional impedance of the motor. The inverter voltage is adapted to the required voltage at the motor by means of an inductive transformer.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In an optimum situation, the leakage inductance of the transformer can be used as the reactive component of the resonant series filter (see Schaaf and van der Broeck (1995)). The transformer’s secondary inductance is used to compensate for the clamped capacitance of the motor. Again, the parallel resonance frequency must be tuned to the resonant frequency of the motional",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-64",
      "title": "10 0 2 4 6 8 12 14",
      "blocks": [
        {
          "id": "block-1",
          "en": "−0.2 −0.1 0.1 0 0.2 0.3 0.4 0.5 0.6 0.7 0.8 Frequency harmonic Amplitude Spectrum for a bipolar symmetrical 1/3 duty cycle switched bipolar symmetrical signal with a duty cycle of 1/3. V0 Lm Cm Rm Co Cr Ve Ve C1 Inverter driving voltage Parallel resonant converter Piezoelectric resonator Series resonant converter L1 L2 t1 t1 t t cuit.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Proper selection of the various different electric parameters produces resonance matching and parasitic resonance rejection. impedance of the motor. The design of the resonant electrical circuit must fulfill the condition of matching the resonant frequency of the motional impedance, the series resonant filter and the parallel resonant filter.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Following the nomenclature of Figure 2.25, the condition for matching the series and parallel filters to the motional impedance of the piezoelectric motor is formulated mathematically by the following expression: L m C m = L s C1 = L2(C0 + C2) (2.29) In addition, care must be taken to avoid excessive reactive currents due to parasitic resonance in the circuit.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The first parasitic resonance, wp1 , (involving the path comprising C1 and L1 ) affects transient situations when switching on because its resonance frequency is relatively lower. The second parasitic resonance, wp2 , is due to the serial connection of clamped capacitance, compensation capacitors and the leakage inductance.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "Since this second parasitic resonance frequency is relatively higher than the motional resonance frequency, care must be taken not to let this parasitic component come into proximity with harmonics of the fundamental frequency. Here, we can profitably select bipolar symmetrical switched signals with a duty cycle of 1/3. For this particular signal, the first nonzero harmonic is 5wr .",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "It would be sufficient to limit this second parasitic resonance, for instance, to wp2 ≤ 3wr . The effect of unmatched power drives is twofold: first, unadapted impedances produce a decrease in the driving voltage; second, they also result in a phase shift with respect to the reference phase shift. This can be seen particularly in Ideally, both signals should exhibit a phase lag of 90◦ and similar amplitudes when",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-65",
      "title": "0 5",
      "blocks": [
        {
          "id": "block-1",
          "en": "−200 −150 −100 −50 50 0 100 150 200",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-66",
      "title": "10 15 20 25",
      "blocks": [
        {
          "id": "block-1",
          "en": "Time (μs) Voltage (V)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-67",
      "title": "30 35 40 45 50 two-phase TWUM.",
      "blocks": [
        {
          "id": "block-1",
          "en": "perfect impedance matching is achieved. In this case, the first phase is impedance matched but phase two is unmatched. Consequently, the voltage level for the second driving signal is reduced and the phase lag is shifted so that both signals are nearly out of phase.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Resonance tracking As explained in previous sections, a piezoelectric resonator is characterized by a capacitive electrical load in a frequency range below the resonance frequency and above the antiresonance frequency. In between, the electrical equivalent to the piezoelectric ceramic is inductive. This means that the piezoelectric ceramic becomes a pure resistive electrical load at resonance and antiresonance.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "This is consistent with the fact that at resonance and antiresonance the reactive part of the electrical impedance vanishes, thus producing peak efficiency. The resonance and antiresonance frequency of a piezoelectric actuator is generally subject to perturbations during operation. For optimal operation, a tracking electronic drive is required.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The functional characteristics of such a tracking drive are depicted in the block diagram of Figure 2.27. The blocks in the tracking system are as follows: 1. Error phase detector.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The role of this block is to provide an error signal proportional to the phase error between driving voltage and current drawn. 2. Loop controller.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The loop controller receives the phase error between current and voltage as an input and provides a control signal that asymptotically tracks the resonance frequency of the piezoelectric actuator. 3. The plant.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "This block represents the piezoelectric actuator itself. It receives the control action and performs at resonance independently of external perturbations. In practical terms, the design of a resonance frequency–tracking electronic drive is commonly based on a phaselocked loop, PLL, technique.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "A PLL consists of two main building blocks, namely the phase detector, PD, and the voltage controlled oscillator, VCO. In a common implementation, a phase detector works as an up–down counter, in which the up count is edge triggered by the first input signal (the current; see Error phase detector fr f Loop controller Piezoactuator (Plant) antiresonance operation.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-68",
      "title": "0 10 20 30 40 50",
      "blocks": [
        {
          "id": "block-1",
          "en": "Time (μs)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-69",
      "title": "60 70 80 90 100 triggered by two input signals. The upper line represents zero crossing points of",
      "blocks": [
        {
          "id": "block-1",
          "en": "the current drawn; the middle line is the switching driving voltage; and the lower line is the switching output signal from the phase detector. the upper line in Figure 2.28) and the down count is also edge triggered by the second input signal (the voltage; see the middle line in Figure 2.28).",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "According to this description, the phase detector output is made up of a train of pulses, whose width is proportional to the phase lag between voltage and current drawn (see the lower line in Figure 2.28). The phase detector provides an output signal proportional to the difference in phase between current drawn and voltage: v e = Kd (θi − θo ) = Kd ε (2.30) Ve (s) ε(s) = Kd (2.31) where Kd is the phase detector gain.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "In order to obtain the desired performance from the error phase detector in The combination of the phase detector and the low pass filter will produce an analog error signal proportional to the phase difference between voltage and current. The VCO generates a switching signal with a fundamental frequency proportional to its input voltage.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The duty cycle of the switching signal can generally be selected to suit the requirements of the application and will not interfere with the phase detector described above. As explained at the beginning of this section, a suitable choice for the duty cycle would be around 1/3.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The VCO will provide a deviation from the central frequency, which is proportional to the analog error signal from the phase detector and loop filter, v f .",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "This is mathematically expressed as ω = K0v f (2.32) Since frequency is a derivative of phase, the above formulation for the functional characteristics of the VCO can be described as s\u000evco (s) = K0 Vp (s) (2.33) It can readily be appreciated that Equation 2.33 describes the VCO as a pure integrator. As a result, the closed loop transfer function of the tracking loop is always a Type I loop.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "If the tracking circuit implements an appropriate controller together with the VCO in a cascade configuration, this will give the functionality of the loop controller in Figure 2.27. To be able to reject permanent DC components in the error signal, the appropriate low pass filter must be selected. In the simplest configuration, a classic passive low pass filter can be implemented.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "As discussed by Gardner (1979), a passive low pass filter gives good results in most tracking applications. The transfer function for the low pass filter is Vf (s) Ve (s) = 1 + sτ2",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-70",
      "title": "1 + sτ1",
      "blocks": [
        {
          "id": "block-1",
          "en": "(2.34) The open loop transfer function for the tracking circuit can be written as G(s) = Kd K0 s",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-71",
      "title": "1 + sτ2",
      "blocks": []
    },
    {
      "id": "section-72",
      "title": "1 + sτ1",
      "blocks": [
        {
          "id": "block-1",
          "en": "(2.35) The closed loop transfer function corresponding to the tracking circuit comprising the phase detector (Equation 2.31), the loop low pass filter (Equation 2.34) and the VCO (Equation 2.33) is H (s) = G(s)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-73",
      "title": "1 + G(s)H (s) = Kd Ko /τ1(1 + τ2s) s2 + s(1 + Ko Kd τ2)/τ1 + Ko Kd /τ1",
      "blocks": [
        {
          "id": "block-1",
          "en": "(2.36) The stability of the tracking system can readily be shown using the final value theorem, whose mathematical formulation is lim t→∞ h(t) = lim s→0 sH (s) (2.37) For the particular case of classic low pass passive filters, the system is Type I, that is, there is one perfect integrator in the tracking loop–the one provided by the VCO.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "When directly applied, the final value theorem predicts that the system will track step changes in the phase error without permanent phase error in the steady state. However, the system will lead to permanent constant error in the steady state if a ramp phase error is introduced.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "If we wish to ensure zero tracking error upon application of ramp phase errors, the looptracking circuit should be completed either by a classic PI controller or by making use of active filters with a transfer function: Vf (s) Ve (s) = 1 + sτ2 sτ1 (2.38) In that case, the tracking loop would be converted to a Type II system comprising two perfect integrators.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Consequently, ramp changes in the phase error would be perfectly tracked without permanent steady state errors.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-74",
      "title": "2.5.2 Control of nonresonant actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "As we discussed in previous sections, the electrical equivalent load of a piezoelectric actuator driven in a frequency band outside the resonance–antiresonance region is a capacitor. This capacitive load is larger where stack piezoelectric actuators are concerned.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "For a capacitive load, the following approximate electromechanical relations apply: l ≈ Q (2.39) v p ≈ i ap ≈ di dt Hysteretic behavior of voltagedriven applications It is known (see for instance D¨orlemann et al. (2002)) that in open loop control of piezoelectric actuators the relationship between displacement and driving voltage is nonlinear and hysteretic.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "On the other hand, the relationship between displacement and charge or current drawn is quasilinear and nearly nonhysteretic. This situation is illustrated in Figure 2.29. The effect of the nonlinear, hysteretic behavior in the voltage–strain relationship produces what is called multimode excitation of voltagedriven piezoelectric actuators.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "The situation can be summarized as follows: when a pure tone voltage excitation is applied to the actuator, the corresponding mechanical vibration will exhibit a nonzero spectrum at the different harmonics of the fundamental voltage frequency. Then again, if a pure tone current signal is applied to the actuator, the resulting mechanical vibration will also be a pure tone.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "As a result, there is increased heating when voltagedriven actuators are used, and thus the dynamic range of the system is reduced. This situation is summarized in Figure 2.29b. e (a) (b) e i, q V by means of current or charge control.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Control of actuator stiffness In normal, passive materials, the mechanical stiffness, K, is defined as the ratio of applied force to deformation: K = dF dl (2.40) In the case of piezoelectric actuators, because of the active nature of the material there is the possibility of programmable stiffness.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The forcedeformation ratio for piezoelectric actuators is highly dependent on the electrical boundary conditions applied to the actuator electrodes. In this context, there are three possible situations, depending on the electrical boundary conditions: 1. Shortcircuited or voltagecontrolled actuators.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "In this situation, a “low” stiffness is achieved. Under deformation, the charge generated by the piezoelectric effect is free to flow and equilibrate. 2.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Open circuit or charge-/currentcontrolled actuators. In this situation, the charge is blocked at the electrodes of the actuator when a force is applied. Blocking of the charge (either because the circuit is open or because the control fixes its value) results in an electric field that will oppose the force.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "The outcome of this situation is greater stiffness (twice as much as in case 1). 3. Impedancecontrolled drives.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "In this case, the control loop applied to the piezoelectric actuator sets the reference impedance for the piezoelectric drive. At the upper limit, when the reference impedance is very high, the control strategy is equivalent to a position control of the piezoelectric motor, and the apparent stiffness of the actuator is virtually infinite.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "In this case again, the charge or current control of piezoelectric drives opens up the possibility of dynamic modulation of piezoelectric drive stiffness.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "Current control of piezoelectric actuators It is clear from the above analysis that current control of piezoelectric drives offers significant advantages over voltage control: • hysteretic behavior is reduced to a minimum, • the displacement to drive signal relationship is linearized, • heat losses are reduced, leading to better dynamic driving and • the stiffness of the actuator can be modulated.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-75",
      "title": "2.6 Figures of merit of piezoelectric actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "The various different types and actuation principles of piezoelectric actuators cover a wide range of operational characteristics. They can provide short stroke operation (a few μm), both rotational and translational, with subnanometer resolution (piezoelectric stacks), but they can also offer unlimited stroke operation (inchworm and travelling wave concepts) in linear and rotational actuators.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The following sections analyze the main operational characteristics of piezoelectric actuators and their behavior upon scaling.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-76",
      "title": "2.6.1 Operational characteristics",
      "blocks": [
        {
          "id": "block-1",
          "en": "Static performance The piezoelectric effect in piezoelectric ceramics leads to static strains of 0.1–0.6%, depending on the material’s characteristics. These figures are as high as 1.5–1.7% in the case of singlecrystal piezoelectric ceramics.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Similarly, in the case of direct application of the piezoelectric effect, blocked forces are subject to an upper pressure limit of the order of 100–110 MPa; for single crystals, however, the maximum pressure is as high as 130–140 MPa. Direct application of the piezoelectric effect is not common.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Actuators generally employ specific geometrical configurations to achieve output mechanical energy, and the available stroke and force will be highly dependent on the configuration. We would note a number of characteristics of static performance of nonresonant piezoelectric actuators: 1. Stack piezoelectric actuators.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "These provide high force and low stroke. The maximum stroke may vary in absolute terms from a few micrometers to a few millimeters. The blocked force varies within the range of 102 –105 N.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "2. Piezoelectric benders. Multimorph configurations produce a medium stroke and very limited force.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "In absolute terms, the stroke can vary between 10−2 and 10 mm and thus occupies the range between stacks and inchworm actuators (see next item). This configuration produces virtually no force, and values tend to be situated in a range of 10−2 –102 N. Bender (Circular) Bender (Rectangular) Inchworm Stacks 10−2 10−2 10−1 100 101 102 103 104 105 10−3 10−1 100 101 102 Stroke (mm) Force (N) actuators.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "3. Inchworm actuators. The force delivered by these actuators is in the same range as benders, but the stroke can be very high and may even be unlimited in some configurations.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "These are stepper motors and may present resolutions down to the nanometer scale. The relative positions of piezoelectric actuators in terms of stroke and force are shown in Figure 2.30. They complement each other in both actuation indicators and span a suitably wide area on the stroke versus force plane.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Resonant piezoelectric actuators are characterized by unlimited travel or stroke, and so their static performance is best characterized in terms of maximum speed (either rotational or translational) and stall torque or force respectively. The data for rotational and translational actuators is scanty.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "There are only a few implementations commercially available, but interesting conclusions can be derived from a comparison of the performances of resonant piezoelectric drives and their electromagnetic counterparts, which have become the principal actuator technology. Travelling wave ultrasonic (rotational) motors, TWUMs, complement electromagnetic DC motors in terms of both torque and (rotational) speed.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "For output mechanical power up to 7–8 W, TWUMs can be driven at a maximum speed of the order of 1000 rpm while the stall torque can be up to 1 Nm. Compare this to DC motors (with the same power limitation), which are usually driven at rotational speeds in the region of 10 4 rpm with maximum stall torque of 10–100 mNm.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "This situation, depicted in Figure 2.31, indicates that mechanical impedance matching is typically better in the piezoelectric technology.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-77",
      "title": "102 101",
      "blocks": [
        {
          "id": "block-1",
          "en": "100 101 102 103",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-78",
      "title": "103 104 105",
      "blocks": [
        {
          "id": "block-1",
          "en": "Speed (rpm) Torque (mNm) Rotative Ultrasonic Motors DC motors DC brushless and high torque) and DC (high speed and low torque) motors up to 7–8 W. Dynamic performance This section deals with the time response of the actuators and their energetic characteristics. Where direct application of the piezoelectric effect is concerned, the coupling factor gives a good indication of the transduction efficiency.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The coupling factor is defined as the square root of the energy ratio between stored mechanical energy and input electrical energy. For piezoelectric ceramics, again depending on their piezoelectric parameters, the coupling factor is of the order of 0.7–0.75. As in the previous case, particular actuator configurations determine very different dynamic properties.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "• Energy Density and Specific Energy Density. These are defined as the ratio of output mechanical energy per cycle to actuator size or weight, respectively. From theoretical considerations of maximum breakdown electric field sustained by dielectric ceramics, values of up to about 50 Jcm−3 have been reported for the maximum energy density of piezoelectric actuators (Madou (1997)).",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "In the case of specific actuator configurations, the theoretical figures are one or two orders of magnitude lower. Depending on the type of actuator, the energy density falls within the range 10−3 –10−1 Jcm−3 (see Figure 2.32). • Power Density and Specific Power Density.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "Owing to the high dynamic range of piezoelectric actuators, the power density can also be high; however, this depends very much on the actuator configuration.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "For stack piezoelectric actuators (which most resemble direct application of the piezoelectric effect), 10−4 10−5 10−4 10−3 10−2 10−1 100 101 102 103 104 10−3 10−2 10−1 10 0 Work density (J/cm3) Power density (W/cm 3) Stacks Benders Inchworm TWUMs and TWUMs on the energy–power density plane. the power density is in the range 10 3 –104 Wcm−3 . However, for inchworm actuators, it can be as low as 10−1 Wcm−3 .",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Other piezoelectric actuators lie in between these upper and lower limits; for instance, benders perform with a power density of the order of 10 Wcm−3 , while TWUMs perform in the range 10−1 –1 Wcm−3 (see Figure 2.32). • Time Constant and Frequency Bandwidth. As indicated in chapter 1, both time constant and frequency bandwidth are inversely related and to a large extent define the dynamic properties of an actuator.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "Piezoelectric stacks present time constants ranging from microseconds to milliseconds and producing maximum frequency bandwidths up to hundreds of kilohertz. The frequency range of piezoelectric benders is typically limited to a few kilohertz, and inchworm actuators and TWUMs cannot perform at more than a few tens of hertz. • Energetic Efficiency.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Piezoelectric actuators are generally very efficient in converting from electrical to mechanical energy. Piezoelectric stacks, benders and inchworm actuators (whose operational characteristics bring them very close to the concept of direct application of the piezoelectric effect) can attain 70–90% energetic efficiency.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "In the case of piezoelectric actuators that rely on frictional transmission of forces, efficiency drops to 30–40%. This is true, for instance, of TWUMs. The behavior of this technology upon scaling is analyzed in detail in the next section.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-79",
      "title": "2.6.2 Scaling of piezoelectric actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "In view of current trends toward miniaturization, it is worth inquiring how the performance of piezoelectric actuators is affected by reducing their size. We are not concerned here with the domain of microactuators, that is, actuators with sizes in the micrometer range.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "In addition to the intrinsic change of driving characteristics directly related to the actuator, the influence of changes in physical phenomena may be relevant in the domain of microactuators. This is true of surface forces that become dominant as compared to volume forces when the application is scaled to this domain.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "For a detailed discussion on scaling laws, the reader is referred to excellent works by Madou (1997) or Peirs (2001). It has been reported that the piezoelectric effect scales down with the size of the actuators but is expected to have a measurable impact on a microscopic scale. The analysis in this section focuses on four useful parameters for describing the performance of actuators: 1.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Resonance frequency. Resonance frequency is a very important parameter in describing the performance of piezoelectric drives, irrespective of whether they are resonant or nonresonant drives.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "In resonant drives, it is the resonance frequency that is used to drive the actuators; this is closely related to the speed of the linear or rotative motion and defines the characteristics of the electronic driver to a great extent. In nonresonant drives, on the other hand, the resonance frequency is usually the upper limit for the feasible driving frequency. 2.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Stroke. The stroke is an important parameter in the case of nonfrictional transmission of displacement, for example, in piezoelectric stacks and multimorph benders. In the case of frictional transmission of displacement, for example, linear or rotational ultrasonic motors and inchworm motors, the stroke is either unlimited or it is only limited by the rotor length.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "3. Force density. The force density describes the ratio of available force to volume or weight of the actuator.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "It is useful because it is closely related to the time response of the actuator. 4. Power density.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "The power density can be obtained from the previous parameters. It is defined as the ratio of available power to volume or weight. Resonance frequency Manufacturers of piezoelectric drives usually give the following relationship between resonance frequency of the actuator and the size: fr = N L (2.41) 0 20 40 60 80 100 120 140 160",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-80",
      "title": "0 50",
      "blocks": [
        {
          "id": "block-1",
          "en": "PI (P-885.xx Family) PI (P-010.xx Family) PI (P-035.xx Family) Piezomechanik (P St 150/7/xx Family) Piezomechanik (P St 150/20/xx Family) Piezomechanik (HP St 1000/25-15/xx Family) PI (P-007.xx Family) PI (P-025.xx Family) PI (P-045.xx Family) Piezomechanik (P St 150/14/xx Family) Piezomechanik (HP St 150/20-15/xx Family) NECTokin (ASBxxxC801 Family)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-81",
      "title": "100 150 200 250 300",
      "blocks": [
        {
          "id": "block-1",
          "en": "Length of actuator (mm) Resonant frequency (kHz) tric stack actuators. where fr is the resonance frequency of the piezoelectric ceramic, N is an actuatorspecific constant dependent on the vibration mode of the particular ceramic (e.g. longitudinal for stacks, flexure for multimorphs) and L is the actuator length in the direction of the vibration mode (e.g.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "length for stacks, thickness for multimorphs). According to Equation 2.41, all types of piezoelectric drives should exhibit the same tendency for the resonance frequency to increase at a rate inversely proportional to the decrease in size. Figure 2.33 shows the evolution of the resonance frequency of piezoelectric stack actuators from various different manufacturers.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "As the figure shows, the overall trend in piezoelectric stacks conforms to Equation 2.41. This result is also consistent with the scaling analysis of Peirs (2001). According to this analysis, the stiffness of secondorder mechanical systems scales down linearly with the size of the actuator, that is, K ∝ L.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Since the mass of the actuator will scale down according to the volume of the actuator (i.e.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "M ∝ L3 ), the resonance frequency of the actuator (which is a secondorder mechanical system) is fr ∝ √ K M ∝ L−1 (2.42) The result of Figure 2.33 confirms the resonance frequency trend described by Equations 2.41 and 2.42; it also indicates that additional bandwidth is left available for nonresonant drives and that the driving frequency for resonant drives will increase upon miniaturization.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "Stroke As explained earlier, stroke analysis is important for nonfrictiondriven piezoelectric actuators. As in the previous case, the trend of the stroke of piezoelectric actuators is independent of the particular type of nonfrictional actuator.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The stroke is always linearly related to the dominant dimension in the direction of actuation, for example, length in piezoelectric and in multimorphs and diameter in radial expanders. Force density Force density is defined here as the ratio of available force to volume. Force density is closely related to the acceleration that the drive is able to impart to the load and also to the response time of the system.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "Since the mass, M, and the volume, V , of the actuators are proportional, the force density is also proportional to the acceleration, a, of the load: M ∝ V → F V ∝ a (2.43) The experimental relationship between force density and volume is depicted graphically in Figure 2.34. It will be seen that the force density in piezoelectric actuators is inversely proportional to the length in the direction of stroke.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "This again confirms the theoretical result of Peirs (2001), who established the following relationship: F M ∝ F V ∝ 1 L (2.44) where L is the dominant dimension in the actuation displacement. 0.5 1.5 2.5 3.5 4.5 0 1 2 3 4",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-82",
      "title": "0 5000",
      "blocks": [
        {
          "id": "block-1",
          "en": "PI (P-885.xx Family) PI (P-010.xx Family) Piezomechanik (HP St 150/20-15/xx Family PI (P-007.xx Family) Piezomechanik (P St 150/7/xx Family) NECTokin (Series ASB) 10,000 15,000 20,000 25,000 Volume of actuator (mm3 ) Force density (N/mm 3) V , of piezoelectric stack actuators upon miniaturization.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Operational characteristics and scaling trends for piezoelectric actuators Nonresonant actuators Resonant actuators Figures of merit Stack Benders Inchworm TWUM Force, F",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-83",
      "title": "102 –10",
      "blocks": []
    },
    {
      "id": "section-84",
      "title": "5 N",
      "blocks": [
        {
          "id": "block-1",
          "en": "10−2 –10",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-85",
      "title": "2 N",
      "blocks": [
        {
          "id": "block-1",
          "en": "Torque ≤ 104 Nm Displacement, S 0.1–0.6% (dynamic up to 1.7%) 10−2 –10 mm Unlimited Unlimited Work density, W V ≈10−2 J/cm 3 10−4 –10 −2 J/cm 3 ≈10−3 J/cm 3 10−3 –10 −2 J/cm 3 Power density, P V",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-86",
      "title": "102 –10",
      "blocks": []
    },
    {
      "id": "section-87",
      "title": "4 W/cm",
      "blocks": [
        {
          "id": "block-1",
          "en": "3 10−1 –10",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-88",
      "title": "1 W/cm",
      "blocks": [
        {
          "id": "block-1",
          "en": "3 ≈10−4 W/cm 3 ≈10−1 W/cm 3 Bandwidth, f ≤105 Hz ≤103 Hz ≤102 Hz ≤102 Hz Efficiency, η 70–90% Scaling trends Force F ∝ L2 Stroke S ∝ L Work per cycle W ∝ L3 Energy density W V ∝ L0 Bandwidth f ∝ L−1 Power density P V ∝ L−1 A similar analysis can be used to establish the trends in response time of the piezoelectric actuator upon miniaturization. It is clear from Equations 2.43 and",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-89",
      "title": "2.44 that the response time tends to decrease linearly upon miniaturization: a ∝ 1",
      "blocks": [
        {
          "id": "block-1",
          "en": "L ∝ L T 2 → T ≈ L (2.45) This analysis takes only the mechanical characteristics of the active material into account. In the derivation, the volume of the electronic drive was not taken into consideration so that they indicate trends rather than the exact situation. This can be seen again in the case of the response time.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "As explained earlier, one of the factors limiting the response time derives from the charging and discharging time of the capacitor that piezoelectric actuators represent when driven out of resonance. The electrical capacitance of the piezoelectric actuator, C p, is proportional to the capacitor area, A, and inversely proportional to the distance between electrodes, L.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The tendency of the electrical capacitance would be to decrease linearly when the actuator is miniaturized: C p ∝ A L ∝ L (2.46) This will produce an effect on the response time in addition to the effect discussed in the foregoing paragraphs. See Table 2.3 for a summary of the scaling trends and figures of merit of piezoelectric actuators.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-90",
      "title": "2.7 Applications",
      "blocks": []
    },
    {
      "id": "section-91",
      "title": "2.7.1 Applications of resonant piezoelectric actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "Resonant piezoelectric motors have reached a mature stage of development. The most successful implementation is the travelling wave ultrasonic motor. There are several ultrasonic motors available off the shelf on the market.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The first application considered in this section is that of OEM ultrasonic motors from Shinsei Corporation Inc., Japan. This is followed by a brief description of a second application, which is the implementation of ultrasonic drives in the Canon optical lens automatic focus.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Case Study 2.1: OEM Ultrasonic motors, USR-60 and USR-30 (Shinsei Corporation Inc., Japan) The principle of operation of ultrasonic motors was described in detail in Section 2.3.2. The first commercially available ultrasonic motor appeared as early as 1986, with the product name USR-4-100. This was the precursor of USR-60, the current commercial name of Shinsei’s 60-mmdiameter ultrasonic motor.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Practical applications for ultrasonic motors have been developed in a wide range of fields: autofocus optical lenses in cameras, lensmirror actuation in optical devices, positioning in satellite reception devices, windingup function in roll screens, and headrest adjustment in automobiles. (a) (b) As explained earlier, ultrasonic motors present lowspeed operation at high torque.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "This can be beneficial in applications where compact solutions are required (e.g. avoiding transmission stages in a direct drive approach). The ultrasonic driving frequency, always above 20 kHz, ensures silent operation.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "In addition, the static torque serves as a practical selfbraking mechanism owing to the frictional transmission. The USR-30 and USR-60 (see Figure 2.35) share the same motor structure. They are twophase drives.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "The piezoelectric ceramic exciting the microscopic oscillation in the stator is poled in an alternating pattern providing a Sine and a Cosine mode. See Section 2.3.2 for more details. An active sector of the piezoelectric ceramic is used as a feedback sensor for the electronic driver.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The piezoelectric ceramic sector serving as a sensor is poled similarly to the driving sectors. The electrode in the sensor sector picks up an electrical signal, which is proportional to the vibration amplitude in the stator.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Ultrasonic motors are controlled by appropriate modification of the driving frequency, and, therefore, speed variations are directly related to modifications of the vibration amplitude at the stator. The sensor signal is thus compared to the reference velocity and to an error signal, which serves as a control for the driving frequency. See the schematic representation of the driver in Figure 2.36.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "This approach to driving is equivalent to the tracking process for resonant drives described in previous sections. The main difference lies in the use of an additional embedded sensor rather than a phase lag between the driving voltage and the current drawn to track the resonance frequency. Both the USR-30 and the USR-60 come in a number of optional configurations.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "In particular, twinshaft and singleshaft options are available together with versions with optical encoders. Case Study 2.2: Ultrasonic motor focus in EF-28-105 USM Lens Ultrasonic motors provide an elegant and amazingly compact solution to the automated optical focus in reflex cameras.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "Canon was the first company to introduce Oscillator Speed selector Rotation selector (CWCCW) Distributor Trafo (Sine mode) Trafo (Cosine mode) Dualphase motor (USR30-USR60) back signal from the embedded sensors is to keep the output rotation speed close to the reference. ultrasonic motors in their reflex cameras.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "Initially, the 77-mm L–1 ultrasonic motor was used to drive the electronic focus of 50 f/1.0 and 1200 f/5.6 lenses. The next version was the wellknown 62 mm M–1 USM (Ultrasonic motor), which became the driving technology for the automatic focus in 28–105 f/3.5–4.5 and 85 f/1.8, 300 f/4L and 70–200 f/2.8L lenses.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "Yet a third, miniaturized version of the two previous ultrasonic motors, the MicroUSM, is used to drive the 28–80 II, III and IV and the 50 f/1.4. Optical lenses benefit from the simple structure of the TWUM principle. The above three implementations consist in a hollow toothed stator to prevent obstruction of axial optics, and a ring rotor.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "Both are pressed together by a springloaded bayonetmounted plate. The operating principle is wellknown: microscopic travelling vibrations excited at the stator’s teeth are transmitted to the rotor through frictional mechanisms. The low time constant of ultrasonic motors ensures fast, smooth and silent operation.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "depicting the configuration of the 62 mm M–1 USM Ultrasonic Motor.",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-92",
      "title": "2.7.2 Applications of nonresonant piezoelectric actuators",
      "blocks": [
        {
          "id": "block-1",
          "en": "The traditional field of application of piezoelectric actuators is in precision positioning stages. There are very many manufacturers worldwide providing micropositioning and nanopositioning stages for application domains such as astronomy, semiconductor testing systems, medical engineering, biotechnology and telecommunications to mention only a few.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "The application domain of machine tool systems is in the full flow of evolution. At this time, traditional material removal processes are being used to provide Stator Rotor Prestress spring Bayonetmounted plate (a) (b) the lens and (b) schematic view of the 62-mm M–1 USM. surface finishing and dimensional accuracy in the nanometer range.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "In order to achieve such high specular finishes, the machine tool must ensure high stiffness and the high accuracy required for precise positioning between tool and workpiece in all directions.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Case Study 2.3: Stepping piezoelectric motors for highaccuracy, highstiffness machine tools Our first example was developed by the Production, Machine Design and Automation Division of the Department of Mechanical Engineering at the Katholieke Universiteit Leuven (PMAKULeuven). It consists in a nanometerprecision, ultrastiff piezoelectrically driven stage for ELID (Electrolytic Inprocess Dressing) grinding.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The text and pictures illustrating this example are provided courtesy of PMAKULeuven. Existing machine tools provide insufficient stiffness to guarantee highprecision positioning in the presence of varying process forces.",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "To illustrate this problem, consider that where cutting forces perpendicular to the workpiece surface are of the order of 10 N, stiffness must be as high as 1 kN/μm to ensure flatness of the order of 10 nm. The use of piezoelectric stepping motors to provide a system that is able to combine the guiding and actuation requirements (i.e.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "the mechatronic approach: combination of several functions on the same component) for machine tools is an innovative solution that guarantees extreme stiffness between workpiece and tool in all directions. The operational requirements for the driveguide stage are 1. High stiffness 2.",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "Smooth motion. Unit Leaf springs Vacuum preload element Frame layer holding units Spacer layer Damper layer Screws fixing units of frame tesy of Dominiek Reynaerts. Reproduced by permission of PMAKULeuven).",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "Preload nut Body Belleville spring Clamping edges Prestress rod Peizo actuators Place holder for assembly Membrane Plate Force cell Contact element ators (Courtesy of Dominiek Reynaerts. Reproduced by permission of PMAKULeuven). The proposed stage consists of a circular plate supported by six piezoelectric stepping units.",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "The stage shown in Figure 2.38 can be actuated to three degrees of freedom (x, y and C) by moving the six piezoelectric units according to a predefined gait pattern. The structure of each unit is depicted in Figure 2.39.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "This consists of three piezoelectric stack actuators, the elements required to ensure preloading of the actuators, force sensors to provide feedback on the contact force and a spherical contact element with a large radius to establish contact between the unit and the ground.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "The “hammering” effect characteristic of stepping drives can be overcome in the proposed configuration by simultaneously extending all piezoelectric stacks according to the locomotion principle depicted schematically in Figure 2.40. The piezoelectric stacks are driven in a cyclical pattern but well below their resonance frequency, which places them in the category of nonresonant drives.",
          "zh": ""
        },
        {
          "id": "block-13",
          "en": "II I I III IV V Reynaerts, Reproduced by permission of PMAKULeuven). The hammering effect is due to the characteristic discontinuity of the stepping motion. It is chiefly a function of two main parameters: (i) the distance between each spherical contact surface and the ground; and (ii) the load to be supported by the foot.",
          "zh": ""
        },
        {
          "id": "block-14",
          "en": "In order to overcome the hammering problem, a stepping algorithm was implemented on the stepping controller. This stepping algorithm is based on an initial estimate of the distance between driving unit and ground and of the load to be supported. A stepping function is generated on the basis of this estimate.",
          "zh": ""
        },
        {
          "id": "block-15",
          "en": "The stepping function is such that there can be no positional deviation of the stage if the two parameters were estimated correctly. The controller implements an update of the stepping function on the basis of the detected positional error and may thus be described as a feedforward learning controller. The hierarchical control scheme is shown in Figure 2.41.",
          "zh": ""
        },
        {
          "id": "block-16",
          "en": "The main Positioning task Stepping: support algorithm Stepping: traction algorithm Bearing (F mzi) F mxi, Fmyi, F mzi, F dzi I II III IV zci vxi u zi (*) u xi u yi b3i b2i b1i Fmxyzi Unit Stage Γ Σ Σ Σ Γ Γ Fxi vyi Fyi Stepping: support Acutator configuration Stepping: drive x Stepping: drive y Position measurement Interferometer Capacitive probes Bearing Driving Position controller Main controller Timing Force vector Ft, M t F mxi F myi F mzi Bearing Driving • • • • • • • • • Dominiek Reynaerts.",
          "zh": ""
        },
        {
          "id": "block-17",
          "en": "Reproduced by permission of PMAKULeuven). controller implements the control signal on the basis of the reference and actual positions as described in the task programming module. As a result, instructions are broadcast to each unit controller.",
          "zh": ""
        },
        {
          "id": "block-18",
          "en": "The unit controller includes its own amplifier and contains a stepping algorithm for the z direction and two traction algorithms for x and y directions respectively. The hysteresis in the piezoactuator is compensated by an inverse model so that the unit presents a linearized input–output behavior. To illustrate the performance of the ultrastiff precision positioning stage, the xyplane.",
          "zh": ""
        },
        {
          "id": "block-19",
          "en": "Likewise, Table 2.4 shows some of the stiffness and driving characteristics of the machine tool stage. The piezoelectrically driven stepping stage has been tested with the forces resulting from an ELID grinding process.",
          "zh": ""
        },
        {
          "id": "block-20",
          "en": "The ELID grinding process results in a pattern with an average force between 10 and 30 N having a superimposed timevarying component with lower amplitude and low frequency (around 25 Hz and some harmonics). The positional deviation due to this process force is less than",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-93",
      "title": "20 nm when the active stiffness is implemented.",
      "blocks": [
        {
          "id": "block-1",
          "en": "Case Study 2.4: Bending trimorph actuators for needle selection modules in knitting machines One of the leading manufacturers of piezoelectric bending elements is Argillon GmbH, formerly SIEMENS AG, Ceramics GmbH. Their bending elements are 400 200 0 −200 −400 −600 −400 −200 0 Position deviation X100 Y(μm); EY(100*μm) X(μm); EX(100* μm)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-94",
      "title": "200 400 600 tesy of Dominiek Reynaerts. Reproduced by permission of PMA-KULeuven).",
      "blocks": [
        {
          "id": "block-1",
          "en": "stiffness) of the ultrastiff positioning stage (Courtesy of Dominiek Reynaerts, Reproduced by permission of PMAKULeuven) Feature Drive Bearing Positioning Resolution 5 nm 2.5 nm Measurement accuracy 0.3 μm 0.1 μm Stroke 100 mm 5 μm Velocity 2 mm/s – Stiffness Passive (3 units) 55 N/μm 150 N/μm Active (3 units, <50 Hz) 120 N/μm 320 N/μm Passive (5 units, <50 Hz) 70 N/μm 200 N/μm Active (5 units, <50 Hz) 150 N/μm 450 N/μm made to the trimorph concept described above, and they are therefore suitable for fast actuation in the range of attractive blocking forces and relatively high (as compared to stacks) displacements.",
          "zh": "QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS"
        },
        {
          "id": "block-2",
          "en": "Argillon has introduced piezoelectric benders in several industrial sectors. In particular, they are used for Braille equipment, textile machines, pneumatic valves and medical equipment. The case study presented here uses Argillon trimorph actuators (conceptually similar to the bimorph configuration) for fast needle selection modules in knitting machines.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The text and pictures in this application case are courtesy of Argillon GmbH. Traditionally, control of knitting machines is based on punch cards or magnets. Piezoelectric benders offer a number of advantages as compared to traditional control modules.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "In addition to faster and more reliable operation, they provide high efficiency. Faster and more reliable operation results in increased productivity, owing to the shorter switching times achieved with piezoactuators. In addition to improved dynamic performance, the control units are so small that the space requirements on the machine are minimal.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "Since the piezoelectric bender operates on a low energy supply and the overall efficiency is high, no cooling units are required so that even more compact solutions are possible. Argillon’s trimorph technology is conceptually similar to the bimorph configuration described in previous sections. The trimorph bender implemented in the needle selection unit measures 49.95 mm in overall length, 7.20 mm in width and",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-95",
      "title": "0.80 mm in total thickness.",
      "blocks": [
        {
          "id": "block-1",
          "en": "The thickness of the intermediate carbon fiber vane (the carrier) is 0.24 mm. The overall maximum deflection of each piezoelectric bender is 1.70 mm at 200 V (38 mm free length), while the blocked force is just 0.7 N. The trimorph actuator duced by permission of Argillon GmbH).",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "is set up in a parallel configuration direction for both piezoelectric ceramics is opposite and the internal electrode is connected to a reference voltage (ground). ules. Each actuator exhibits a typical capacitive load of 43 nF and can be operated at a maximum voltage of 230 V.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "Case Study 2.5: Precision piezoelectric XYZ scanning mechanism for atomic force microscopy on a spacecraft The MIDAS (Micro Imaging Dust Analysis System) instrument was launched on March 2004 on board the European Space Agency probe ROSETTA (Ariane 5 mission). The ROSETTA/MIDAS system will analyze the dust of the 46/P Churyumov – Gerasimenko comet using an atomic force microscope.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "Cedrat Technologies (Meylan, France) has designed and implemented a piezoelectric XYZ stage that will be used to scan the dust specimen on three axes. The caption and the pictures of this instance of application are courtesy of Cedrat Technologies.",
          "zh": ""
        },
        {
          "id": "block-5",
          "en": "The scanning system, a constituent part of the complete instrument, has been qualified for EQM (engineering and qualifications model), QM (qualification model), FM (flight model) and FSM (flight spare model) standards. The scanning mechanism contains six degrees of freedom. Three of these are actively controlled (positions X, Y and Z), and three passively cancelled (rotations around axes X, Y and Z).",
          "zh": ""
        },
        {
          "id": "block-6",
          "en": "The target functional performance was specified as follows: • Scanning stroke in X, Y directions: 100 μm, tesy of R. Le Letty and F. Claeyssen.",
          "zh": ""
        },
        {
          "id": "block-7",
          "en": "Reproduced by permission of CEDRAT TECHNOLOGIES). • Scanning stroke in Z direction: 8 μm, • Maximum parasitic rotation: θz ≤ 240 μrad, • Maximum parasitic rotation: θx , θy ≤ 20 μrad. The fundamental part of the scanning stage is Cedrat’s standard Amplified Piezoelectric Actuator (APA50S) (see Figure 2.44 for a detailed view of the actuator).",
          "zh": ""
        },
        {
          "id": "block-8",
          "en": "The configuration of the XY stage is symmetrical and it uses eight actuators to achieve a travel of 100 μm. As well as meeting the application requirements in terms of stroke and robustness, amplified piezoelectric actuators APAs were chosen because they are simpler and easier to build than competing technologies. This is important for the possibility of integrating position sensors for each scanning drive direction.",
          "zh": ""
        },
        {
          "id": "block-9",
          "en": "The displacement in each direction is monitored by means of a capacitive sensor. Moreover, the APAs are integrated in a parallelogram configuration and so act additionally as guiding elements. Flexural hinges are implemented to decouple the displacement in X and Y directions (see Figure 2.45).",
          "zh": ""
        },
        {
          "id": "block-10",
          "en": "The scanning motion in the Z direction is provided by a customized parallel prestressed actuator with a stroke of 8 μm. The prestressed actuator is equipped with a full Wheatstone bridge of strain gauges to monitor the Z displacement. A common aspect of spacecraft applications is the strictness of requirements in terms of shock and vibration during the launching stage.",
          "zh": ""
        },
        {
          "id": "block-11",
          "en": "In order to solve this problem, the scanning stage was equipped with a latching mechanism based on shape memory alloys (see Case study 3.1 where the latching mechanism is described). During the testing phase at CEDRAT TECHNOLOGIES’ laboratory, the XY stage was excited using CEDRAT TECHNOLOGIES’ SA75 electronic drivers, F. Claeyssen.",
          "zh": ""
        },
        {
          "id": "block-12",
          "en": "Reproduced by permission of CEDRAT TECHNOLOGIES). XY stage FM 1st functional testX channel 100.0 80.0 60.0 40.0 20.0 0.0 −20.0 −20.0 0.0 20.0 40.0 60.0 Voltage (V) Displacement ( μm) Displacement laser (μm) Cap Sensor (μm)",
          "zh": ""
        }
      ]
    },
    {
      "id": "section-96",
      "title": "80.0 100.0 120.0 140.0 160.0",
      "blocks": [
        {
          "id": "block-1",
          "en": "−40.0 −60.0 and F. Claeyssen, Reproduced by permission of CEDRAT TECHNOLOGIES). instrument (Courtesy of R.",
          "zh": ""
        },
        {
          "id": "block-2",
          "en": "Le Letty and F. Claeyssen, Reproduced by permission of CEDRAT TECHNOLOGIES). and the response from the capacitive sensors was compared to that of a laser interferometer.",
          "zh": ""
        },
        {
          "id": "block-3",
          "en": "The linearity error in the displacement versus voltage characteristic of the scanning stage was less than 0.5% (see Figure 2.46). The ratio between the noload displacement of APAs and the stage displacements was about 0.88 and was related to the increased stiffness of the elastic flexure hinge–based guiding mechanisms. Also, the coupling between X and Y axes was less than 2%.",
          "zh": ""
        },
        {
          "id": "block-4",
          "en": "ROSETTA–MIDAS instrument. The model includes the XYZ positioning stage, the capacitive and strain gauge position sensors and the latching mechanism based on shape memory actuators.",
          "zh": ""
        }
      ]
    }
  ]
}
