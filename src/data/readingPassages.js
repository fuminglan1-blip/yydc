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
          "zh": "机电一体化一词于 20 世纪 70 年代中期在日本创造，表示涉及研究、分析、设计和实施由机械、电气和控制（智能）组件或子系统组成的混合系统的工程学科。 从那时起，机电一体化就被理解为用于研究此类混合系统的工程学科的集成和并行方法。"
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
          "zh": "本书通篇使用系统分析的黑盒惯例。 那么，系统被认为是一个带有输入和输出端口的黑匣子。 系统可以相互交互以建立具有更多复杂性和功能的系统。"
        },
        {
          "id": "block-2",
          "en": "A mechatronic system is thus a hybrid system including sensor subsystems, control subsystems and actuator subsystems. Subsystems can be connected in a cascade configuration. In this configuration, there is always an interaction between the output port of one subsystem and the input port of the consecutive one.",
          "zh": "因此，机电系统是一个包括传感器子系统、控制子系统和执行器子系统的混合系统。 子系统可以级联配置连接。 在此配置中，一个子系统的输出端口与连续子系统的输入端口之间始终存在交互。"
        },
        {
          "id": "block-3",
          "en": "As discussed earlier, the state of the interaction between two cascaded systems is defined according to conjugated variables. Mechatronic systems are in many instances synonymous of motion control systems. As such, they include different functional subsystems as introduced in Section 1.3.",
          "zh": "如前所述，两个级联系统之间的相互作用状态是根据共轭变量定义的。 在许多情况下，机电系统是运动控制系统的同义词。 因此，它们包括 1.3 节中介绍的不同功能子系统。"
        },
        {
          "id": "block-4",
          "en": "A very interesting feature of mechatronic systems is the combination of functions in the same component. Here, we are especially interested in the possible combination of sensing and actuation functions in a subsystem. This aspect is analyzed in more detail in Section 1.5, when dealing with concomitant sensing and actuation.",
          "zh": "机电一体化系统的一个非常有趣的特征是同一组件中的功能组合。 在这里，我们对子系统中传感和驱动功能的可能组合特别感兴趣。 第 1.5 节在处理伴随传感和驱动时对此方面进行了更详细的分析。"
        },
        {
          "id": "block-5",
          "en": "The combination of functions by means of mechatronic integration of disciplines in the design of actuators has clear functional benefits. The miniaturization of systems can be seen as a direct consequence of this combination of functions. Yet, the paradox of opposite rationales in the design of sensors and actuators must be addressed, see Section 1.5.",
          "zh": "通过执行器设计中的机电一体化学科进行功能组合具有明显的功能优势。 系统的小型化可以被视为这种功能组合的直接结果。 然而，必须解决传感器和执行器设计中相反原理的悖论，请参见第 1.5 节。"
        },
        {
          "id": "block-6",
          "en": "This book focuses particularly on analysis of the actuator subsystem within a mechatronic system. The actuator subsystem itself can be shown to exhibit the same mechatronic characteristics as a motion control system. This means that the actuator can be analyzed as a mechatronic system, and it will benefit from the intrinsic crossfertilization between engineering disciplines (Reynaerts et al.",
          "zh": "本书特别关注机电一体化系统中执行器子系统的分析。 执行器子系统本身可以表现出与运动控制系统相同的机电特性。 这意味着执行器可以作为机电一体化系统进行分析，并且它将受益于工程学科之间内在的交叉融合（Reynaerts 等，2017）。"
        },
        {
          "id": "block-7",
          "en": "(1998)). The concept of an actuator as a true mechatronic system will be illustrated with the example of a resonant piezoelectric drive. A piezoelectric actuator is an electromechanical device in which the converse piezoelectric effect is used to transduce from electrical to mechanical energy domains (see Chapter 2).",
          "zh": "（1998））。 执行器作为真正的机电一体化系统的概念将通过谐振压电驱动器的示例进行说明。 压电执行器是一种机电设备，其中逆压电效应用于将电能域转换为机械能域（参见第 2 章）。"
        },
        {
          "id": "block-8",
          "en": "A piezoelectric ceramic is characterized electrically by a capacitive load that is out of resonance and a resistive electrical load that is at resonance (local minimum in mechanical impedance) and antiresonance (local maximum in electrical impedance). Piezoelectric resonators are driven close to their resonance or antiresonance frequencies.",
          "zh": "压电陶瓷的电气特征在于，处于非谐振状态的电容性负载以及处于谐振（机械阻抗局部最小值）和反谐振（电阻抗局部最大值）状态的电阻性电气负载。 压电谐振器被驱动到接近其谐振或反谐振频率。"
        },
        {
          "id": "block-9",
          "en": "In such a driving condition, the electrical load is resistive, and so input voltage and current will exhibit a phase lag close to zero. In actuators of this type, an applied external load or temperature change will lead to a shift in the resonance frequency (see Figure 1.11). If this is not compensated for, the operating point of the piezoelectric drive will generally not be perfectly tuned.",
          "zh": "在这种驱动条件下，电负载是电阻性的，因此输入电压和电流将表现出接近零的相位滞后。在这种类型的执行器中，施加的外部负载或温度变化将导致共振频率的偏移（见图1.11 ）。如果没有补偿，压电驱动的工作点通常不会被完美调谐。"
        },
        {
          "id": "block-10",
          "en": "Note the relative position of the original operating point (light grey dot at f1 in Figure 1.11) with respect to the resonance as compared to the new relative position (grey dot at f1 ).",
          "zh": "注意与新的相对位置（f1 处的灰点）相比，原始工作点（图 1.11 中 f1 处的浅灰点）相对于谐振的相对位置。"
        },
        {
          "id": "block-11",
          "en": "With a mechatronic approach, a selftuning electrical driver can be designed, which will track any possible fluctuation in the resonance characteristics of the actuator, and, thus, the new operating point will be tuned to the new resonance curve (see grey dot at f2 in Figure 1.11). In so doing, the phase between voltage and current can be used as an indicator of the electrical impedance of the actuator.",
          "zh": "通过机电一体化方法，可以设计自调谐电驱动器，该驱动器将跟踪执行器共振特性的任何可能波动，因此，新的工作点将被调谐到新的共振曲线（参见图1.11中f2处的灰点）。在这样做时，电压和电流之间的相位可以用作致动器的电阻抗的指示器。"
        },
        {
          "id": "block-12",
          "en": "This can then be used to close the loop, for instance, by means of a phase locked loop (PLL). The resonant piezoelectric actuator as described above includes an actuator system (the voltagedriven piezoelectric resonator), a sensor system (monitoring Frequency Shift due to temperature or load changes f1 f2 Impedance teristics of piezoelectric actuators and corresponding modification of the operating point.",
          "zh": "然后，这可以用于闭合环路，例如通过锁相环（PLL）。 如上所述的谐振压电致动器包括致动器系统（电压驱动压电谐振器）、传感器系统（监测由于温度或负载变化引起的频移f1 f2压电致动器的阻抗特性以及操作点的相应修改。"
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
          "zh": "例如，图 1.12 显示了在直升机桨叶和飞机机翼开发过程中通常用作模型的生物结构。 机电一体化作为一门工程学科也可能受益于在大自然中寻找灵感来源。 如前所述，机电一体化系统在大多数情况下等同于运动控制系统。"
        },
        {
          "id": "block-3",
          "en": "As such, the motor control structure of upper mammalians is a perfect model in which to find inspiration. Hierarchical motor control in mammalians as a model Hierarchical control schemes are common in motion control systems. There is sufficient evidence to support the view that the structure of the motor control system in mammalians is hierarchically organized.",
          "zh": "因此，上层哺乳动物的运动控制结构是寻找灵感的完美模型。哺乳动物中的分层运动控制作为模型分层控制方案在运动控制系统中很常见。有足够的证据支持哺乳动物运动控制系统的结构是分层组织的观点。"
        },
        {
          "id": "block-4",
          "en": "This follows from the excellent performance of both human and nonhuman primates in manipulation tasks. This performance in manipulation comprises, among other functions, superb response to disturbance, for example, increased prehensile force following slippage of grasped objects, and perfect modulation of upper limb (impedance controlled) interaction with the environment.",
          "zh": "这是因为人类和非人类灵长类动物在操作任务中都表现出色。 除其他功能外，这种操纵性能包括对干扰的极好响应，例如，在抓取的物体滑动后增加抓握力，以及上肢（阻抗控制）与环境相互作用的完美调节。"
        },
        {
          "id": "block-5",
          "en": "In these particular manipulative tasks, feedback control schemes involving structures in the central nervous system (CNS) do not seem feasible. In fact, the shortest loop delay involving neural transmission from skin receptors to the CNS and back is in the region of 100–150 ms.",
          "zh": "在这些特定的操作任务中，涉及中枢神经系统（ CNS ）结构的反馈控制方案似乎不可行。事实上，涉及从皮肤受体到中枢神经系统和背部的神经传输的最短循环延迟在100–150 ms范围内。"
        },
        {
          "id": "block-6",
          "en": "If these feedback loops involve computing at the brain level (for instance, in visual feedback operations) the loop delay can reach up to 200–250 ms. With loop delays of this magnitude, the effectiveness Lowlevel controller Mechanical port Actuator Environment Sensor Actuator Environment of feedback modulation of impedance or the response to disturbance would be very much compromised.",
          "zh": "如果这些反馈循环涉及大脑级别的计算（例如，在视觉反馈操作中），则循环延迟可能高达 200-250 毫秒。 对于这种幅度的环路延迟，阻抗反馈调制或对干扰的响应的有效性将受到很大影响。"
        },
        {
          "id": "block-7",
          "en": "Hierarchical control schemes mimicking the structure of the human motor control system are a common approach. Figure 1.13 shows a schematic representation of such a hierarchical control scheme. An upperlevel task planner is in charge of sending motion commands (reference trajectories) to lowlevel controllers.",
          "zh": "模仿人体运动控制系统结构的分层控制方案是一种常见的方法。图1.13显示了这种分层控制方案的示意图。上级任务规划师负责向低级控制器发送运动命令（参考轨迹）。"
        },
        {
          "id": "block-8",
          "en": "The lowlevel controllers interact with the plant through sensors and actuators (including the corresponding impedancematching stages). As seen from the upperlevel controller, the process is an open loop. Switching control of muscle contraction as a model to modulate the input power in actuators The human musculoskeletal system is driven through switched techniques.",
          "zh": "低级控制器通过传感器和执行器（包括相应的阻抗匹配级）与设备交互。 从上层控制器来看，该过程是一个开环。 肌肉收缩的开关控制作为调节执行器输入功率的模型人类肌肉骨骼系统是通过开关技术驱动的。"
        },
        {
          "id": "block-9",
          "en": "Motor stimuli reach the various different muscles through motoneurons. Each muscular stimulus leads in the first instance to muscle contraction followed by relaxation. The time constants of the contraction and relaxation processes are very different.",
          "zh": "运动刺激通过运动神经元到达各种不同的肌肉。每种肌肉刺激首先导致肌肉收缩，然后是放松。收缩和放松过程的时间常数非常不同。"
        },
        {
          "id": "block-10",
          "en": "The muscle contraction time constant is much lower than the relaxation time constant; as a result, the musculoskeletal system responses during contraction and relaxation exhibit different dynamics (see the different dynamics in a muscle twitch inset in If repeated stimuli reach the muscle prior to total relaxation, summation occurs, and the result is increasing contraction.",
          "zh": "肌肉收缩时间常数远低于松弛时间常数；因此，肌肉骨骼系统在收缩和放松期间的反应表现出不同的动态（请参见如果重复的刺激在完全放松之前到达肌肉，则肌肉抽搐中插入的不同动态，则会发生求和，结果是增加收缩。"
        },
        {
          "id": "block-11",
          "en": "Overall muscle contraction is a combination of increased contraction of individual fibers due to summation and increased recruiting of additional motoneurons, and, consequently, muscle fibers. See Figure 1.14 for a schematic representation of the switched control of muscle contraction.",
          "zh": "整体肌肉收缩是由于附加运动神经元的累加和募集增加而导致的单个纤维收缩增加的组合，从而增加了肌纤维的收缩。 肌肉收缩切换控制的示意图见图 1.14。"
        },
        {
          "id": "block-12",
          "en": "In addition to position control of the human musculoskeletal system, there is sufficient evidence to believe that the modulation of the motor activity in antagonistic muscles is one of the mechanisms that mammalians use to modulate the impedance around an equilibrium position (Hogan (1985b)).",
          "zh": "除了人类肌肉骨骼系统的位置控制之外，还有足够的证据表明，拮抗肌运动活动的调节是哺乳动物用来调节平衡位置周围阻抗的机制之一（Hogan（1985b））。"
        },
        {
          "id": "block-13",
          "en": "Switching techniques as an approach to modulation of the flow of energy in actuators is of particular interest when actuators exhibit different dynamics in both directions (like in the case of muscle contraction–relaxation). This is generally true Muscle contraction Time Motoneuron stimuli Twitch Summation τR τC Tetanus energy in actuators. of thermal actuators, and, in particular, of SMA actuators.",
          "zh": "当执行器在两个方向上表现出不同的动态时（例如肌肉收缩-放松的情况），开关技术作为执行器中能量流的调制方法特别令人感兴趣。 这通常是真实的 肌肉收缩 时间 运动神经元刺激 抽搐总和 τR τC 执行器中的破伤风能量。 热致动器，特别是 SMA 致动器。"
        },
        {
          "id": "block-14",
          "en": "In these systems, the time constant for the heating process is generally much lower than for the cooling process (which is limited by thermal inertia and heat dissipation). Wherever a discontinuity occurs in the change in length of an actuator (see Chapter 4), switching techniques may be the only possible solution for accurate positioning tasks.",
          "zh": "在这些系统中，加热过程的时间常数通常远低于冷却过程的时间常数（受热惯性和散热的限制）。 当执行器长度变化发生不连续时（参见第 4 章），切换技术可能是精确定位任务的唯一可能解决方案。"
        },
        {
          "id": "block-15",
          "en": "The discontinuity, as depicted in Figure 1.15, leads to mechanical states that are not attainable in equilibrium. In such a case, switching techniques can maintain the mechanical state without equilibrium within the margin of mechanical state error allowed by the application (Mitwalli (1998)). Stimuli Range of volumes not attainable in equilibrium Volume able mechanical states.",
          "zh": "如图 1.15 所示，这种不连续性会导致无法达到平衡的机械状态。 在这种情况下，切换技术可以在应用允许的机械状态误差范围内保持机械状态而不平衡（Mitwalli（1998））。 刺激 在平衡容量机械状态下无法达到的容量范围。"
        },
        {
          "id": "block-16",
          "en": "Actuation modes based on biological models The previous two examples of biomimesis are more closely related to the way actuators can be driven and how the energy flow is modulated. Nature is full of models for establishing actuation principles.",
          "zh": "基于生物模型的驱动模式 仿生的前两个例子与驱动器的驱动方式以及能量流的调制方式更为密切相关。 大自然充满了建立驱动原理的模型。"
        },
        {
          "id": "block-17",
          "en": "Here, we will briefly describe two locomotion models that inspired the development of the socalled inchworm actuators and travelling wave linear and rotational ultrasonic motors (see Chapter 2). The first model is the locomotion process of some earth worms as depicted in rear and front legs of the worm are fixed alternately to the terrain.",
          "zh": "在这里，我们将简要描述两种运动模型，它们激发了所谓的尺蠖执行器以及行波线性和旋转超声波电机的开发（参见第 2 章）。 第一个模型是一些蚯蚓的运动过程，图中描绘了蚯蚓的后腿和前腿交替固定在地形上。"
        },
        {
          "id": "block-18",
          "en": "In the second cycle, the intermediate segments of the worm elongate and contract alternately. Both cycles are nested to provide the locomotion. The same principle is followed in the development of inchworm piezoelectric motors (see Section 2.4.3).",
          "zh": "在第二个周期中，蠕虫的中间节段交替伸长和收缩。 两个循环都嵌套以提供运动。 尺蠖压电电机的开发遵循相同的原理（见第 2.4.3 节）。"
        },
        {
          "id": "block-19",
          "en": "Here, three independent piezoelectric ceramics are used to mimic the operation of rear and front legs (ceramics 1 and 3), and the intermediate segments (ceramic 2). The piezoelectric actuators 1 and 3 are driven according to the first cycle so that they clamp the rotor (displacer) alternately.",
          "zh": "这里，使用三个独立的压电陶瓷来模拟后腿和前腿（陶瓷 1 和 3）以及中间段（陶瓷 2）的操作。 压电致动器1和3根据第一周期被驱动，使得它们交替地夹紧转子(置换器)。"
        },
        {
          "id": "block-20",
          "en": "The piezoelectric actuator 2 is driven according to the second cycle, mimicking the elongation and contraction of the intermediate segments of the worm. The second locomotion principle is found in some millipedes and centipedes (see Figure 1.17a). The motion of the different legs is coordinated to produce an approximate sinusoidal pattern in both the elevation and the forward–backward movement.",
          "zh": "压电致动器2根据第二循环被驱动，模拟蜗杆中间段的伸长和收缩。第二个运动原理见于一些千足虫和蜈蚣（见图1.17 a ）。协调不同支腿的运动，在仰角和前后运动中产生近似的正弦图案。"
        },
        {
          "id": "block-21",
          "en": "These sinusoidal movements in perpendicular directions produce an elliptic movement of each leg. This elliptic movement (which is implemented in successive legs with a small delay) provides incremental traction to the millipede. The same principle is exploited in travelling wave ultrasonic motors.",
          "zh": "这些垂直方向的正弦运动使每条腿产生椭圆运动。 这种椭圆运动（以较小的延迟在连续的腿中实现）为千足虫提供了增量牵引力。 行波超声波电机也采用了相同的原理。"
        },
        {
          "id": "block-22",
          "en": "The case of linear piezoelectric motors based on this principle is described in Section 2.3.3, while the case of rotational drives is described in Section 2.3.2.",
          "zh": "基于该原理的线性压电电机的情况在第 2.3.3 节中描述，而旋转驱动器的情况在第 2.3.2 节中描述。"
        },
        {
          "id": "block-23",
          "en": "In both the approaches, a laminate structure composed of an elastic substrate and a piezoelectric ceramic is driven in resonance to produce (through superposition of sinusoidal perpendicular Rotor Elastic substrate Wave propagation (a) (b) Piezoelectric ceramic motors. motions) an effective elliptic displacement at the interface between rotor and stator (see Figure 1.17b).",
          "zh": "在这两种方法中，由弹性基板和压电陶瓷组成的层压结构被驱动共振以产生（通过叠加正弦垂直转子弹性基板波传播（a）（b））压电陶瓷电机。 运动）转子和定子之间界面处的有效椭圆位移（见图 1.17b）。"
        },
        {
          "id": "block-24",
          "en": "This provides traction through a frictional transmission.",
          "zh": "这通过摩擦传动提供牵引力。"
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
          "zh": "在某些特殊情况下，传感器既可以用作传感器，也可以用作执行器。以直流电磁电机为例。旋转电磁电机既可以用作执行器（即"
        },
        {
          "id": "block-3",
          "en": "rotational mechanical energy is produced by the application of a driving voltage), and as generators (i.e. the rotation of the output shaft produces a voltage, proportional to the rotation rate, at the electrical terminals). Let us consider the case of a permanent magnet DC electromagnetic motor.",
          "zh": "旋转机械能由施加驱动电压产生） ，以及作为发电机（即输出轴的旋转在电气端子处产生与旋转速率成比例的电压）。让我们以永磁直流电磁电机为例。"
        },
        {
          "id": "block-4",
          "en": "DC electromagnetic actuators make use of Lorentz’s electromagnetic interaction between a permanent magnetic flux, B, and an electrical current, i, flowing in a coil (see Figure 1.3). In an appropriate configuration, if the coil is allowed to rotate, the magnetic interaction produces a torque, T , on the coil, causing rotation.",
          "zh": "直流电磁执行器利用永磁通量 B 和线圈中流动的电流 i 之间的洛伦兹电磁相互作用（见图 1.3）。 在适当的配置中，如果允许线圈旋转，则磁相互作用会在线圈上产生扭矩 T ，从而引起旋转。"
        },
        {
          "id": "block-5",
          "en": "The torque developed by the electromagnetic interaction can be expressed as: T = kT i (1.13) where kT is the socalled torque constant of the DC motor. Similarly, since the DC motor coil is rotating in a magnetic field, induction will take place and a (back) electromagnetic voltage (EMF) will be induced.",
          "zh": "由电磁相互作用产生的扭矩可以表示为： T = kT i (1.13) 其中kT 是所谓的直流电机的扭矩常数。 同样，由于直流电机线圈在磁场中旋转，因此会发生感应并感应出（反）电磁电压（EMF）。"
        },
        {
          "id": "block-6",
          "en": "The expression for the back EMF is: VEMB = kV ω (1.14) where ω is the angular rate of the coil and kV is the voltage constant or backEMF constant of the motor. When the DC electromagnetic motor is driven by an input voltage, an angular rate will be developed.",
          "zh": "反电动势的表达式为： VEMB = kV ω (1.14) 其中，ω 是线圈的角速率，kV 是电机的电压常数或反电动势常数。 当直流电磁电机由输入电压驱动时，将产生角速率。"
        },
        {
          "id": "block-7",
          "en": "It can be demonstrated, in a first approximation, that the angular velocity of the motor obeys the following differential equation when no external load is applied to the shaft: dω dt = − 1 J kF ω(t) + 1 J kM i(t) (1.15) where J is the motor’s rotational inertia and, kF is the viscous damping constant equivalent to the frictional forces in the motor.",
          "zh": "可以在第一近似中证明，当轴上没有施加外部负载时，电机的角速度遵循以下微分方程： dω dt = − 1 J kF ω(t) + 1 J kM i(t) (1.15) 其中 J 是电机的转动惯量，kF 是相当于电机中摩擦力的粘性阻尼常数。"
        },
        {
          "id": "block-8",
          "en": "Likewise, when no voltage is applied to the DC motor terminals and the shaft is rotated at a constant velocity, ω, a voltage will be developed between the terminals according to Equation 1.14. This means that the motor works either as an actuator or as a sensor.",
          "zh": "同样，当没有电压施加到直流电机端子并且轴以恒定速度 ω 旋转时，根据公式 1.14，端子之间将产生电压。 这意味着电机既可以用作执行器，也可以用作传感器。"
        },
        {
          "id": "block-9",
          "en": "A transducer cannot be operated both as a sensor and as an actuator simultaneously unless a model of the transduction is available; in other words, the device can only be used for one of its functions at a time.",
          "zh": "除非有可用的换能器模型，否则换能器不能同时用作传感器和执行器；换句话说，该设备一次只能用于其功能之一。"
        },
        {
          "id": "block-10",
          "en": "For practical purposes, this means, in the case of the previous example, that if a rotational velocity is being imposed by means of a DC electromagnetic motor, the same motor cannot be used to sense the rotational velocity that is being imposed. The previous discussion is true and holds for all transducers; however, some sensing and actuation functions can still be implemented concomitantly.",
          "zh": "出于实际目的，这意味着，在上述示例的情况下，如果旋转速度是通过直流电磁马达施加的，则不能使用相同的马达来感测所施加的旋转速度。前面的讨论是正确的，适用于所有传感器；然而，一些传感和致动功能仍然可以同时实现。"
        },
        {
          "id": "block-11",
          "en": "Equations 1.13 and 1.14 can be rewritten according to the following expression: [V i ] = [0 kV kT 0 ] [T ω ] (1.16) It can be shown that kV = −1/kT ; thus, the motor can be classified as a gyrating transducer. As discussed previously, in gyrating transducers, there is a causal relationship between the effort at one port and the flow at the other port.",
          "zh": "方程1.13和1.14可以根据以下表达式重写： [V i ] = [0 kV kT 0 ] [T ω ] (1.16) 可以看出，kV = -1/kT ；因此，电机可以归类为回转传感器。 如前所述，在回转传感器中，一个端口的作用力与另一端口的流量之间存在因果关系。"
        },
        {
          "id": "block-12",
          "en": "If the torque (effort) is selected as the independent variable, the current (flow) is causally determined. The motor can be used to sense the load (torque) by monitoring the electrical current. Piezoelectric actuators are a similar case.",
          "zh": "如果选择扭矩（力）作为自变量，则因果确定电流（流量）。电机可用于通过监控电流来感测负载（扭矩）。压电执行器是类似的情况。"
        },
        {
          "id": "block-13",
          "en": "A piezoelectric actuator establishes a flow of energy from the electrical to the mechanical domain according to the constitutive equations of the piezoelectric effect (see Chapter 2). When no external load is applied to a piezoelectric stack actuator, the displacement (strain) will be a nonlinear, hysteretic function, S1(V ), of the voltage applied at the input port.",
          "zh": "压电致动器根据压电效应的本构方程建立从电域到机械域的能量流（参见第 2 章）。 当没有外部负载施加到压电堆栈致动器时，位移（应变）将是输入端口处施加的电压的非线性、迟滞函数 S1(V )。"
        },
        {
          "id": "block-14",
          "en": "Wherever an external force is applied to the actuator, it will act as a disturbance to the output displacement. The complete relationship between strain, voltage and load will take the form of Equation 1.17 and is commonly called an operatorbased actuator model of the piezoelectric stack transducer (Kuhnen and Janocha (1998)). S(t) = S1(V ) + kf (t) (1.17) where k is the piezoelectric stack stiffness.",
          "zh": "无论外力施加到执行器何处，它都将作为对输出位移的干扰。应变、电压和负载之间的完整关系将采用公式1.17的形式，通常称为压电堆换能器的基于操作员的执行器模型（ Kuhnen和Janocha （ 1998 ） ）。S (t) = S1 (V) + kf (t) (1.17)其中k是压电叠层刚度。"
        },
        {
          "id": "block-15",
          "en": "Similarly, the charge developed in the piezoelectric stack, Q(t), will be a direct function of the load applied to the transducer, f (t). This time, the voltageinduced charge during operation will act as a disturbance to the operatorbased sensor model described by Equation 1.18. Q(t) = df (t) + Q1(V ) (1.18) where d is the piezoelectric coefficient and Q1(V ) is a nonlinear, hysteretic function of the voltage.",
          "zh": "类似地，压电叠堆中产生的电荷 Q(t) 将是施加到传感器上的负载 f (t) 的直接函数。 这次，操作期间的电压感应电荷将对公式 1.18 描述的基于操作员的传感器模型产生干扰。 Q(t) = df (t) + Q1(V ) (1.18) 其中 d 是压电系数，Q1(V ) 是电压的非线性迟滞函数。"
        },
        {
          "id": "block-16",
          "en": "Again, even though the piezoelectric stack cannot be used to impose a displacement (strain) and to concomitantly sense it, the sensor model of Equation 1.18 can be used to estimate the load on the actuator, that is, the piezoelectric stack is being used concomitantly to impose a displacement and to sense the load.",
          "zh": "同样，即使压电叠层不能用于施加位移（应变）并伴随地感测它，方程1.18的传感器模型也可以用于估计致动器上的负载，即压电叠层被伴随地用于施加位移并感测负载。"
        },
        {
          "id": "block-17",
          "en": "The estimated load can then be used to compensate for its disturbing effect on the displacement of Equation 1.17 (Kuhnen and Janocha (1998)). A model of the transduction process can be used to implement both functions (sensing and actuation) at a time.",
          "zh": "然后可以使用估计的载荷来补偿其对方程 1.17 位移的干扰影响（Kuhnen 和 Janocha (1998)）。 转导过程的模型可用于同时实现两种功能（传感和驱动）。"
        },
        {
          "id": "block-18",
          "en": "Before discussing this possibility in detail, let us recall here Equation 1.10, which describes the relationship between effort and flow variables in the electriccircuit analogy: V = Ze I + Tem v and F = Tme I + Zm v The first equation describes the transducer as an actuator, that is, the application of a voltage, V , leads to a current drawn, I , and to an output velocity, v.",
          "zh": "在详细讨论这种可能性之前，让我们在这里回顾一下方程1.10 ，它描述了电路类比中努力和流量变量之间的关系： V = Ze I + Tem v和F = Tme I + Zm v第一个方程将传感器描述为执行器，即施加电压V ，导致汲取电流I和输出速度v。"
        },
        {
          "id": "block-19",
          "en": "The Laplace transform of this first equation is: V (j ω) = Ze I (j ω) + Tem U (j ω) (1.19) The overall electrical voltage includes a term dependent on the current drawn, Ze I (j ω), and a term related to the output velocity, Tem U (j ω).",
          "zh": "第一个方程的拉普拉斯变换为： V (j ω) = Ze I (j ω) + Tem U (j ω) (1.19) 总电压包括依赖于电流的项 Ze I (j ω) 和与输出速度相关的项 Tem U (j ω)。"
        },
        {
          "id": "block-20",
          "en": "This equation indicates that the output velocity could be estimated by measuring the overall voltage, V , and subtracting the voltage drop, VZ e , across the actuator’s blocked impedance, VZ e = Ze I (j ω). The above result provides the basis for estimation of the actuator’s motion from a bridge circuit configuration, as shown in Figure 1.18.",
          "zh": "该等式表明，输出速度可以通过测量整体电压V并减去致动器阻塞阻抗VZ e = Ze I (j ω)上的电压降VZ e来估计。上述结果为从桥接电路配置估计执行器运动提供了基础，如图1.18所示。"
        },
        {
          "id": "block-21",
          "en": "This result is important in that it could lead to: (i) modification of the actuator’s behavior (for instance its damping characteristics) through the implementation of feedback control loops based on the estimation of the velocity and (ii) collocated and concomitant sensing and actuation. Actuator Ze Vv V R R velocity in concomitant sensing and actuation.",
          "zh": "这一结果很重要，因为它可能导致：（i）通过基于速度估计实施反馈控制回路来修改执行器的行为（例如其阻尼特性），以及（ii）并置和伴随的传感和驱动。 执行器 Ze Vv V R R 伴随传感和驱动的速度。"
        },
        {
          "id": "block-22",
          "en": "If a copy of the actuator’s blocked impedance is used in the bridge circuit branch as depicted in Figure 1.18, the voltage across the bridge, Vv , is proportional to the actuator’s velocity. The first approach, that is, modification of the actuator’s damping properties, has been studied in the context of voice coil loudspeakers (de Boer (1961)).",
          "zh": "如果如图 1.18 所示在电桥电路分支中使用执行器阻塞阻抗的副本，则电桥两端的电压 Vv 与执行器的速度成正比。 第一种方法，即修改执行器的阻尼特性，已经在音圈扬声器的背景下进行了研究（de Boer (1961)）。"
        },
        {
          "id": "block-23",
          "en": "In this case, the feedback from the unbalanced bridge voltage is utilized to increase damping around the resonance frequencies. The second approach has been implemented in collocated and concomitant position and velocity feedback in piezoelectric actuators (see Dosch et al. (1992) and Hagwood and Anderson (1991)).",
          "zh": "在这种情况下，来自不平衡电桥电压的反馈被用来增加谐振频率附近的阻尼。 第二种方法已在压电执行器中的并置和伴随位置和速度反馈中实现（参见 Dosch 等人，2017）。 （1992）以及哈格伍德和安德森（1991））。"
        },
        {
          "id": "block-24",
          "en": "The main problem in this approach is measurement of the actuator’s blocked impedance. It has been found that in most implementations the blocked impedance, rather than being constant and independent of the actuator’s motion, is a nonlinear function of the current drawn.",
          "zh": "这种方法的主要问题是执行器阻塞阻抗的测量。 已经发现，在大多数实现中，阻塞阻抗不是恒定的且独立于执行器的运动，而是所汲取的电流的非线性函数。"
        },
        {
          "id": "block-25",
          "en": "Ideally, if output velocity could be estimated from the voltage across the bridge, the sensing part of the electriccircuit analogy (see Equation 1.20) could then be used to produce an estimate of the mechanical conjugate variable (the force).",
          "zh": "理想情况下，如果可以从桥梁上的电压估计输出速度，则可以使用电路类比的传感部分（见公式1.20 ）来产生机械共轭变量（力）的估计。"
        },
        {
          "id": "block-26",
          "en": "F (j ω) = Tme I (j ω) + Zm U (j ω) (1.20) In some instances, twodirectional transduction of the same conjugated variable can be achieved when a transducing material is used to develop an actuator. This is only possible where the actuation process is accompanied by a concomitant change in any of the material properties of the transducer. This is true of shape memory alloy actuators (SMAs) (see Chapter 3).",
          "zh": "F (j ω) = Tme I (j ω) + Zm U (j ω) (1.20) 在某些情况下，当使用换能材料开发致动器时，可以实现同一共轭变量的双向换能。 只有当致动过程伴随着换能器的任何材料特性的伴随变化时，这才是可能的。 形状记忆合金执行器 (SMA) 也是如此（参见第 3 章）。"
        },
        {
          "id": "block-27",
          "en": "In SMAs, thermal input energy is used to promote a phase change in the material. This phase change is accompanied by recovery of the shape induced by deformation. A number of physical properties of the material are altered during the process of shape recovery.",
          "zh": "在 SMA 中，热输入能量用于促进材料的相变。 这种相变伴随着变形引起的形状恢复。 在形状恢复过程中，材料的许多物理特性发生改变。"
        },
        {
          "id": "block-28",
          "en": "In particular, the electrical resistivity of the material is modified by the thermally driven shape change. The electrical resistance can be used to monitor the shape recovery. The actuator can be used to impose a displacement (strain) and simultaneously to sense this displacement.",
          "zh": "特别是，材料的电阻率通过热驱动的形状变化而改变。 电阻可用于监测形状恢复。 致动器可用于施加位移（应变）并同时感测该位移。"
        },
        {
          "id": "block-29",
          "en": "Concomitant sensing and actuation is a very powerful phenomenon in mechatronic system design (see Section 1.4). As shown above, it allows functions to be shared on a single component. When properly exploited, this can result in very compact and smart solutions.",
          "zh": "同步传感和驱动是机电系统设计中一个非常强大的现象（参见第 1.4 节）。 如上所示，它允许在单个组件上共享功能。 如果利用得当，这可以产生非常紧凑和智能的解决方案。"
        },
        {
          "id": "block-30",
          "en": "On the basis of the use of concomitant sensing and actuation is the concept of a smart actuator. When a twodirectional transducer of this type is embedded in a structure, the combination is usually referred to as a smart structure. The term active structures is also commonly found in the literature.",
          "zh": "智能致动器的概念基于同时传感和致动的使用。 当这种类型的双向传感器嵌入到结构中时，这种组合通常被称为智能结构。 术语“活性结构”也常见于文献中。"
        },
        {
          "id": "block-31",
          "en": "The main difference between a smart and an active structure is more a matter of the degree of integration than of the functionality of the embedded smart actuators. In smart structures, a higher degree of integration is assumed: that is, twodirectional transducers are highly integrated in the structure so that the whole structure can be considered a functional continuum.",
          "zh": "智能结构和主动结构之间的主要区别更多地在于集成程度，而不是嵌入式智能执行器的功能。 在智能结构中，假定了更高程度的集成：也就是说，双向换能器在结构中高度集成，使得整个结构可以被认为是功能连续体。"
        },
        {
          "id": "block-32",
          "en": "In smart actuators, two functions are combined on a single component. When analyzing smart actuators, particular attention must be paid to the rationale behind the development of monitoring transducers (sensors) and acting transducers (actuators). As noted earlier, sensors are intrinsically lowpower transducers.",
          "zh": "在智能执行器中，两个功能被组合在一个组件上。 在分析智能执行器时，必须特别注意监测传感器（传感器）和作用传感器（执行器）的开发原理。 如前所述，传感器本质上是低功耗传感器。"
        },
        {
          "id": "block-33",
          "en": "A minimum energy interaction with the plant must be ensured so that the monitoring process does not interfere with the plant. Miniaturization is therefore a logical and desirable trend. On the other hand, actuators are intrinsically highpower transducers and as such should impose a state without being disturbed by the plant.",
          "zh": "必须确保与工厂的能量相互作用最小化，以便监测过程不会干扰工厂。 因此，小型化是一个合乎逻辑且可取的趋势。 另一方面，执行器本质上是高功率传感器，因此应该施加一种不受设备干扰的状态。"
        },
        {
          "id": "block-34",
          "en": "In actuators, the trend toward miniaturization is not a logical consequence of their interaction with the plant. There are two opposite design goals driving the development of sensors and actuators. The former are lowpower devices, best approached in a miniaturized fashion, while the latter are intrinsically highpower devices, conceptually the opposite of miniaturized components.",
          "zh": "在执行器中，小型化的趋势并不是它们与设备相互作用的逻辑结果。 有两个相反的设计目标推动着传感器和执行器的发展。 前者是低功耗设备，最好以小型化方式实现，而后者本质上是高功率设备，在概念上与小型化组件相反。"
        },
        {
          "id": "block-35",
          "en": "These apparently opposing requirements can only be met by highpower density transducing materials. Power density in emerging actuators is considered throughout this book as one of the driving forces in the development of new technologies.",
          "zh": "这些明显相反的要求只能通过高功率密度换能材料来满足。 在本书中，新兴执行器中的功率密度被认为是新技术发展的驱动力之一。"
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
          "zh": "输入信号和施加的系统变量之间的单义对应关系。理想情况下，应该有一个与系统参数相对应的唯一输出值。 2."
        },
        {
          "id": "block-3",
          "en": "Linearity. Even though the above univocal correspondence will not generally be linear, linearity is always desirable. 3.",
          "zh": "线性。尽管上述单义对应关系通常不是线性的，但线性总是理想的。 3."
        },
        {
          "id": "block-4",
          "en": "Stability. The correspondence between input and output should not be influenced by drifts. The intrinsic highpower characteristics of actuators usually leads to thermal drift.",
          "zh": "稳定。输入和输出之间的对应关系不应受到漂移的影响。执行器固有的高功率特性通常会导致热漂移。"
        },
        {
          "id": "block-5",
          "en": "In selecting actuators for a particular application, a number of requirements may arise. These include power or force density, efficiency, size and weight, and cost. The following paragraphs briefly describe the figures of merit of actuators.",
          "zh": "在为特定应用选择执行器时，可能会出现许多要求。 这些包括功率或力密度、效率、尺寸和重量以及成本。 以下段落简要描述了执行器的品质因数。"
        },
        {
          "id": "block-6",
          "en": "In some instances, these figures of merit are perfectly quantifiable (e.g. force or power density); in other cases, quantification is not possible, and a thorough analysis of the application and the actuator characteristics for matching will be required.",
          "zh": "在某些情况下，这些品质因数是完全可以量化的（例如 力或功率密度）；在其他情况下，量化是不可能的，需要对应用和执行器特性进行彻底分析以进行匹配。"
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
          "zh": "一般来说，执行器在动态操作条件下使用。 动态操作需要参考轨迹以及输出端口处与环境的机械相互作用所施加的负载条件的连续变化。"
        },
        {
          "id": "block-2",
          "en": "Dynamic operation usually produces changing conditions in the amount of energy flow across the actuator (power requirements), in the relative value of the conjugate variables (velocity and force) at the mechanical port and in the efficiency of transduction between input and output energy. There are several indicators that can be used to measure the dynamic performance of actuators.",
          "zh": "动态操作通常会在流过执行器的能量流（功率需求）、机械端口处的共轭变量（速度和力）的相对值以及输入和输出能量之间的转换效率中产生变化的条件。 有多种指标可用于衡量执行器的动态性能。"
        },
        {
          "id": "block-3",
          "en": "Some of these are analyzed in the coming sections.",
          "zh": "其中一些将在接下来的部分中进行分析。"
        },
        {
          "id": "block-4",
          "en": "Power density and specific power density Power density, P V , is the ratio of the maximum available mechanical output power, Pout , to the volume of the actuator, V : P V = Pout V (1.21) If the ratio of output mechanical power to the weight, ρV , of the actuator is considered, this defines specific power density, P ρ : P ρ = Pout ρV (1.22) Power density and specific power density are measures of the rate of energy delivery at the mechanical port.",
          "zh": "功率密度和比功率密度 功率密度 P V 是最大可用机械输出功率 Pout 与执行器体积 V : P V = Pout V 的比率 (1.21) 如果考虑输出机械功率与执行器重量 ρV 的比率，则定义比功率密度 P ρ : P ρ = Pout ρV (1.22) 功率密度和比功率密度是机械端口处能量传输速率的度量。"
        },
        {
          "id": "block-5",
          "en": "They are also a measure of how suitable a transducing technology is as a smart actuator that is also for simultaneous use as a sensor.",
          "zh": "它们也是衡量传感技术作为智能执行器（也可同时用作传感器）的合适程度的指标。"
        },
        {
          "id": "block-6",
          "en": "Work density and specific work density per cycle Like power density, Work Density per cycle, W V , is defined as the amount of mechanical work that an actuator can deliver during an actuation cycle and is defined by the ratio of output work to volume: W V = Wout V (1.23) Likewise, specific work density per cycle, Wρ , is defined as the ratio of maximum available output mechanical work per actuation cycle to the weight of the actuator: W ρ = Wout ρV (1.24) In practice, both power and work densities are difficult to standardize as indicators for dynamic performance.",
          "zh": "每个周期的工作密度和特定工作密度 与功率密度一样，每个周期的工作密度 W V 定义为执行器在执行周期内可以提供的机械功量，并由输出功与体积的比率定义： W V = Wout V (1.23) 同样，每个周期的特定工作密度 Wρ 定义为每个执行周期的最大可用输出机械功与执行器重量的比率： W ρ = Wout ρV (1.24) 在实践中，功率和工作密度都很难标准化为动态性能指标。"
        },
        {
          "id": "block-7",
          "en": "This is basically due to uncertainty as to what should be considered the actuator volume or weight. Taking for example the case of traditional pneumatic linear actuators, if the volume or weight of the pneumatic cylinder is considered, the resulting work density is high as compared, for instance, to electromagnetic drives.",
          "zh": "这主要是由于执行器体积或重量的不确定性。 以传统气动线性致动器的情况为例，如果考虑气缸的体积或重量，则与例如电磁驱动器相比，所产生的工作密度较高。"
        },
        {
          "id": "block-8",
          "en": "However, if the accompanying components (power source, proportional or “on–off” valves, fluidfiltering components) are considered, the situation may be the reverse. Power and work per cycle density and specific density are related through the actuator’s available working frequency, f .",
          "zh": "然而，如果考虑附带的组件（电源、比例阀或“开关”阀、流体过滤组件），情况可能相反。 每个周期的功率和功密度以及比密度通过执行器的可用工作频率 f 相关。"
        },
        {
          "id": "block-9",
          "en": "Thus, P V = W V f (1.25) P ρ = W ρ f (1.26) Time constant and frequency bandwidth The Time constant, τ , of a firstorder system is the time taken for the output parameter of the system to reach 63.2% of its final value upon the application of a step input.",
          "zh": "因此， P V = W V f (1.25) P ρ = W ρ f (1.26) 时间常数和频率带宽 一阶系统的时间常数 τ 是在应用阶跃输入时系统的输出参数达到其最终值的 63.2% 所需的时间。"
        },
        {
          "id": "block-10",
          "en": "In actuator systems, the mechanical time constant, τ m, is usually defined as the time required for the output velocity of the actuator to reach 63.2% of its final value under no external load. Owing to the inherent power limitations of any actuator system, the frequency response of the actuator will take the form of a low pass filter. This was illustrated in Figure 1.6.",
          "zh": "在执行器系统中，机械时间常数τ m 通常定义为在无外部负载的情况下执行器的输出速度达到其最终值的63.2%所需的时间。 由于任何执行器系统固有的功率限制，执行器的频率响应将采取低通滤波器的形式。 图 1.6 对此进行了说明。"
        },
        {
          "id": "block-11",
          "en": "The cutoff frequency is defined as the frequency at which a decay of 3 dB in the output velocity of the actuator is observed. The available bandwidth of the actuator is then defined by the cutoff frequency.",
          "zh": "截止频率定义为观察到执行器输出速度衰减 3 dB 时的频率。然后，执行器的可用带宽由截止频率定义。"
        },
        {
          "id": "block-12",
          "en": "Both the time constant and the maximum available frequency of an actuator are related by the following expression: f = 1 2π τ (1.27) Energetic efficiency The efficiency, η, in the transduction process in an actuator is defined as the ratio of the output mechanical energy, W m, to the input electrical energy, W e.",
          "zh": "执行器的时间常数和最大可用频率通过以下表达式相关： f = 1 2π τ (1.27) 能量效率 执行器中转换过程中的效率 η 定义为输出机械能 W m 与输入电能 W e 的比率。"
        },
        {
          "id": "block-13",
          "en": "In most emerging actuators, an extension of the actuator concept will be necessary in order to apply this definition, as the input of the transducer usually is in a nonelectrical domain: for example, magnetostrictive (magnetic domain), SMA (thermal domain), polymer gels (chemical domain). η = W m W e (1.28) Ideally, actuators are lossless devices, and, thus, efficiency in an ideal situation should be close to 100%.",
          "zh": "在大多数新兴的执行器中，为了应用这个定义，需要对执行器概念进行扩展，因为传感器的输入通常位于非电域：例如，磁致伸缩（磁域）、SMA（热域）、聚合物凝胶（化学域）。 η = W m We e (1.28) 理想情况下，执行器是无损设备，因此理想情况下的效率应接近 100%。"
        },
        {
          "id": "block-14",
          "en": "In practice, various different dissipative phenomena take place in the transducer or accompanying components, producing lower efficiency. The transduction efficiency of all actuator technologies is a dynamic parameter. In general, the efficiency of the actuator is a function of the actuation conditions.",
          "zh": "在实践中，换能器或附属部件中会发生各种不同的耗散现象，从而产生较低的效率。 所有执行器技术的转换效率都是一个动态参数。 一般来说，执行器的效率是执行条件的函数。"
        },
        {
          "id": "block-15",
          "en": "The maximum efficiency is usually taken as the figure of merit.",
          "zh": "最大效率通常被视为品质因数。"
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
          "zh": "当前小型化的技术趋势对执行器提出了严格的要求。执行器本质上是高功率设备。它们可以提供的功率越高，其性能就越优化。"
        },
        {
          "id": "block-2",
          "en": "Higherpower availability is an indication for instance of higherfrequency bandwidth or higher rejection of load disturbances. Miniaturization does not therefore logically lead to optimization of actuator performance. Rather, miniaturization of actuators must be seen as an application requirement.",
          "zh": "更高的功率可用性表明更高的频率带宽或更高的负载干扰抑制能力。 因此，小型化在逻辑上并不会导致执行器性能的优化。 相反，执行器的小型化必须被视为应用要求。"
        },
        {
          "id": "block-3",
          "en": "The behavior of an actuator upon scaling is a characteristic of each technology and can be assessed by analyzing how the various different performance parameters (efficiency, power and work density, response time, force and stroke) evolve upon scaling. The analysis of scaling of actuators is a complex task. The reader is referred to Madou (1997) and Peirs (2001) for a detailed study of scaling.",
          "zh": "执行器在缩放时的行为是每种技术的特征，可以通过分析各种不同的性能参数（效率、功率和工作密度、响应时间、力和行程）在缩放时如何演变来评估。 执行器缩放分析是一项复杂的任务。 读者可以参考 Madou (1997) 和 Peirs (2001) 对尺度的详细研究。"
        },
        {
          "id": "block-4",
          "en": "Here, we will only give some theoretical background with experimental examples where possible. For direct transducing operations, finding the available force, stroke and work density upon scaling is straightforward. If we let L be the dominant dimension of the actuator, the following can be said: • Force upon scaling.",
          "zh": "在这里，我们将仅提供一些理论背景，并尽可能提供实验示例。 对于直接换能操作，在缩放时找到可用的力、行程和工作密度非常简单。 如果我们让 L 为执行器的主要尺寸，则可以得出以下结论： • 缩放时的力。"
        },
        {
          "id": "block-5",
          "en": "When analyzing the available force of an actuator, the relevant dimension, L, for most technologies (e.g. piezoelectric actuators, shape memory alloy actuators, magnetostrictive actuators and most electroactive actuators) is the dimension of the cross section. The force, F , is then easily found following the scaling law of Equation 1.29.",
          "zh": "在分析执行器的可用力时，大多数技术（例如， 压电致动器、形状记忆合金致动器、磁致伸缩致动器和大多数电活性致动器）是横截面的尺寸。 然后，根据公式 1.29 的比例定律，可以轻松找到力 F 。"
        },
        {
          "id": "block-6",
          "en": "F ∝ L2 (1.29) Upon scaling the dominant dimension, L, the available force scales as L2 . Dimensions multiplied by 10 lead to available force multiplied by 100. The opposite occurs when scaling down the actuator’s dimensions.",
          "zh": "F ∝ L2 (1.29) 在缩放主尺寸 L 后，可用力缩放为 L2 。 尺寸乘以 10 得出可用力乘以 100。 当按比例缩小执行器的尺寸时，会发生相反的情况。"
        },
        {
          "id": "block-7",
          "en": "• Stroke upon scaling. In this case, the stroke, S, of the actuator is usually given as a percentage of its length. Thus, the dominant dimension is the length of the actuator, L.",
          "zh": "• 缩放时的行程。在这种情况下，执行器的行程 S 通常以其长度的百分比给出。因此，主要尺寸是执行器的长度 L。"
        },
        {
          "id": "block-8",
          "en": "The stroke scales linearly with the scaling of the actuator: S ∝ L (1.30) When the dimensions of the actuator are multiplied or divided by 10, so is the stroke. • Work density and specific work density upon scaling. Work can be readily determined as the product of displacement and force, Wm = F · S.",
          "zh": "行程与执行器的缩放比例呈线性关系： S ∝ L (1.30) 当执行器的尺寸乘以或除以 10 时，行程也会随之变化。 • 缩放时的工作密度和比工作密度。 功可以很容易地确定为位移和力的乘积，Wm = F·S。"
        },
        {
          "id": "block-9",
          "en": "In addition, the volume of an actuator obeys a scaling law proportional to the third power of the dominant dimension, V ∝ L3 . It follows, then, that the work density, defined as the ratio of work to volume, scales according to the following expression: W V ∝ L0 (1.31) The above equation indicates that for most actuator technologies, the available work density per cycle remains roughly constant upon scaling.",
          "zh": "此外，执行器的体积遵循与主尺寸的三次方 V ∝ L3 成比例的比例定律。 因此，定义为功与体积之比的功密度根据以下表达式进行缩放： W V ∝ L0 (1.31) 上式表明，对于大多数执行器技术来说，每个周期的可用功密度在缩放时保持大致恒定。"
        },
        {
          "id": "block-10",
          "en": "When considering the effect of scaling on dynamic properties (power density, time constant, frequency), the analysis becomes more complex. This entails identifying what particular factors will become dominant upon scaling, so that they effectively limit the dynamic performance of the actuator. Once the dominant factor is identified, its evolution upon scaling is estimated.",
          "zh": "当考虑缩放对动态特性（功率密度、时间常数、频率）的影响时，分析变得更加复杂。 这需要确定哪些特定因素在缩放时将成为主导，以便它们有效地限制执行器的动态性能。 一旦确定了主导因素，就可以估计其在缩放过程中的演变。"
        },
        {
          "id": "block-11",
          "en": "In particular, the time constant of the actuator (which can be used to work out all the other dynamic properties from the static ones) may be limited by a variety of factors for a single actuator technology. In the case of piezoelectric actuators in particular, the time constant (maximum frequency) can be limited by: 1. The resonance frequency of the actuator, which in most cases imposes the driving bandwidth, 2.",
          "zh": "特别是，对于单个致动器技术来说，致动器的时间常数（可用于从静态特性中计算出所有其他动态特性）可能受到多种因素的限制。 特别是在压电致动器的情况下，时间常数（最大频率）可以受到以下限制： 1. 执行器的谐振频率，在大多数情况下会施加驱动带宽 2。"
        },
        {
          "id": "block-12",
          "en": "The heating of the piezoelectric ceramic, which can lead to depolarization if the Curie temperature is reached, 3. The charging time of the capacitor. In other actuator technologies, the limiting factors for the time response may be very different: heat dissipation (conduction or convection) in thermal actuators; mass transport or diffusion in ionictype EAPs.",
          "zh": "压电陶瓷的加热，如果达到居里温度，会导致去极化，3。 电容器的充电时间。 在其他执行器技术中，时间响应的限制因素可能非常不同：热执行器中的散热（传导或对流）；离子型 EAP 中的质量传递或扩散。"
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
          "zh": "执行器技术对于特定应用的适用性很难量化，但它通常是为应用采用特定技术时考虑的方面之一。 适用性可能涉及多个方面，但通常取决于与应用条件本质上匹配的特定驱动特性。 有两个例子可以说明这一点。"
        },
        {
          "id": "block-2",
          "en": "Let us first consider the temperature control in a process for mixing two fluids. The resulting fluid must remain between upper and lower temperatures of T u and T l respectively. In these conditions, a thermal actuator may be the right choice.",
          "zh": "让我们首先考虑混合两种流体过程中的温度控制。 所得流体必须分别保持在 T u 和 T l 的上限温度和下限温度之间。 在这些条件下，热执行器可能是正确的选择。"
        },
        {
          "id": "block-3",
          "en": "If, for example, an SMA actuator is chosen, it can be made to open and close the hot fluid valve directly in response to the temperature of the mixed fluid in which it is immersed. A similar application to this example is described in more detail in Case Study 3.2, page 135. For our second example, let us consider conducting polymers in biomedical applications (see Chapter 6).",
          "zh": "例如，如果选择 SMA 致动器，则可以直接响应其所浸入的混合流体的温度来打开和关闭热流体阀。 案例研究 3.2，第 135 页更详细地描述了与此示例类似的应用。 对于我们的第二个例子，让我们考虑生物医学应用中的导电聚合物（参见第 6 章）。"
        },
        {
          "id": "block-4",
          "en": "Conducting polymers are soft ionic actuators. In order to actuate, they have to be immersed in an aqueous electrolyte. This requirement is usually a shortcoming rather than an advantage; in most applications, they require packaging solutions to keep the actuator wet during operation.",
          "zh": "导电聚合物是软离子执行器。 为了启动，它们必须浸入水性电解质中。 这个要求通常是一个缺点而不是一个优点；在大多数应用中，它们需要包装解决方案来保持执行器在运行期间保持湿润。"
        },
        {
          "id": "block-5",
          "en": "In the biomedical field, most applications are naturally realized in aqueous electrolytes (blood, urine, etc.). If other actuator technologies are to be applied under these conditions, they must be protected against these corrosive environments. However, it is the ideal environment for CP actuators.",
          "zh": "在生物医学领域，大多数应用自然是在水性电解质（血液、尿液等）中实现的。 如果要在这些条件下应用其他执行器技术，则必须保护它们免受这些腐蚀环境的影响。 然而，它是 CP 执行器的理想环境。"
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
          "zh": "执行器的静态性能通常根据其可用的最大作用力（力或扭矩）及其最大输出速度或行程来评估。 阻挡作用力 阻挡作用力定义为执行器可以提供的最大作用力（力或扭矩）。 该作用将阻止执行器，从而无法针对该负载实现进一步的位移。"
        },
        {
          "id": "block-2",
          "en": "In the case of rotational actuators, the blocking effort is usually referred to as stall torque. Maximum stroke The maximum stroke (if any) of an actuator is the maximum available displacement that the actuator can deliver. It is the value of the displacement when no external load is applied on the actuator.",
          "zh": "在旋转执行器的情况下，阻挡作用通常称为失速扭矩。 最大行程 执行器的最大行程（如果有）是执行器可以提供的最大可用位移。 它是执行器上没有施加外部负载时的位移值。"
        },
        {
          "id": "block-3",
          "en": "For most emerging actuators, the maximum stroke is given as a percentage of its length. In other actuators (pneumatic and hydraulic), it is limited by the particular configuration of the piston and is given as an absolute value. Other actuators present no limit on the displacement they can attain.",
          "zh": "对于大多数新兴执行器，最大行程以其长度的百分比给出。 在其他执行器（气动和液压）中，它受到活塞的特定配置的限制并且以绝对值给出。 其他执行器对其所能达到的位移没有限制。"
        },
        {
          "id": "block-4",
          "en": "This is true of most rotational actuators (electromagnetic motors, ultrasonic motors, etc.). In these cases, the maximum rotational speed is commonly given.",
          "zh": "大多数旋转执行器（电磁电机、超声波电机等）都是如此。在这些情况下，通常给出最大转速。"
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
          "zh": "如前所述，为了获得最佳使用效果，执行器应尽可能对外部参数不敏感。这些通常涉及温度波动、湿度变化和其他外部因素。"
        },
        {
          "id": "block-2",
          "en": "Temperature and temperature fluctuations have a direct undesired effect on most actuator technologies: there are upper limits on the temperatures that piezoelectric actuators can sustain because of depolarization; the electrical conductivity characteristics of ERF actuators can change as a result of temperature fluctuations.",
          "zh": "温度和温度波动对大多数致动器技术产生直接的不良影响：由于去极化，压电致动器可以承受的温度存在上限； ERF 执行器的电导率特性可能会因温度波动而发生变化。"
        },
        {
          "id": "block-3",
          "en": "Humidity has a direct effect on wet EAPs, so that there are strict packaging technology requirements unless the application is intrinsically wet.",
          "zh": "湿度对湿 EAP 有直接影响，因此除非应用本质上是湿的，否则有严格的封装技术要求。"
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
          "zh": "执行器作为一类特定的传感器，可以根据多种标准进行分类。 由于机电系统中执行器的主要功能是在输入域和输出域之间建立能量流，因此第一类标题是功率传输的符号。 当能量从换能器流向设备时，功率被假定为正，反之则不然。"
        },
        {
          "id": "block-2",
          "en": "This classification, which categorizes actuators as semiactive or active devices, was introduced in an earlier section.",
          "zh": "这种分类将执行器分类为半主动或主动设备，已在前面的部分中介绍过。"
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
          "zh": "执行器输出端口的功率可表示为共轭变量的函数：对于平移输出机械能，PTrans = F·v (1.32)；对于旋转机械能，PRot = T·ω (1.33)。 半主动执行器是指输出机械功率不为正的执行器：PTrans ≤ 0 或 PRot ≤ 0。 这意味着植物中的能量水平降低。"
        },
        {
          "id": "block-2",
          "en": "Semiactive actuators dissipate the energy of the plant they are coupled to. Semiactive actuators can actively modulate power dissipation, but the effort they supply (whether a force or a torque) can only oppose the flow in the plant (whether a velocity or an angular rate). Where semiactive actuators are used in motion control systems, these are known as Semiactive motion control systems.",
          "zh": "半主动执行器会消耗与其耦合的设备的能量。 半主动执行器可以主动调节功耗，但它们提供的作用（无论是力还是扭矩）只能对抗设备中的流动（无论是速度还是角速率）。 当半主动致动器用于运动控制系统时，这些被称为半主动运动控制系统。"
        },
        {
          "id": "block-3",
          "en": "They are particular implementations of mechatronic systems in which the objective is to maintain the energy level of the plant within a bounded region. A typical example of a semiactive motion control system is the use of ER or MR fluid actuators for vibration isolation of delicate or fragile equipment from noise sources.",
          "zh": "它们是机电一体化系统的特定实现，其目标是将工厂的能量水平维持在有限区域内。 半主动运动控制系统的典型示例是使用 ER 或 MR 流体执行器将精密或易碎设备与噪声源隔振。"
        },
        {
          "id": "block-4",
          "en": "Semiactive control of vibrations, as the paradigmatic application of these systems, is analyzed in detail in Section 6.3. In addition, several instances of application to semiactive vibration isolation are analyzed in Case Studies 6.1 to 6.3. Active actuators can either increase or decrease the energy level of the plant to which they are coupled.",
          "zh": "振动的半主动控制作为这些系统的典型应用，在 6.3 节中进行了详细分析。 此外，案例研究 6.1 至 6.3 还分析了半主动隔振的几个应用实例。 主动执行器可以增加或减少与其耦合的设备的能量水平。"
        },
        {
          "id": "block-5",
          "en": "The power flow can be either positive or negative: PTrans ≷ 0 or PRot ≷ 0. Of the various different emerging actuators discussed in the book, only ERF and MRF actuators are classified as semiactive.",
          "zh": "功率流可以是正的，也可以是负的：PTrans ≷ 0 或 PRot ≷ 0。在本书讨论的各种不同的新兴执行器中，只有 ERF 和 MRF 执行器被归类为半主动。"
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
          "zh": "用于定义平移执行器中功率输出的共轭变量是线速度 v 和力 f 。 旋转执行器的共轭变量是角速率 ω 和扭矩 T 。 平移执行器将电能转换为平移机械能，而旋转执行器将电能转换为旋转机械能。"
        },
        {
          "id": "block-2",
          "en": "Rotational actuators are always obtained from geometrical transducers, for example, an electromagnetic DC motor. On the other hand, transducing materials generally produce translational actuators, for example, magnetostrictive actuators, unless some geometrical concept is added.",
          "zh": "旋转致动器总是由几何传感器获得，例如电磁直流电机。 另一方面，除非添加一些几何概念，否则换能材料通常产生平移致动器，例如磁致伸缩致动器。"
        },
        {
          "id": "block-3",
          "en": "Depending on the type of motion resulting from the transduction process, bending actuators may also be considered (for instance, piezoelectric multimorph actuators). However, bending actuators are most often used in the context of driving linear plants. In general, actuators of both types can be developed from geometrical concepts for all transducing materials.",
          "zh": "根据换能过程产生的运动类型，也可以考虑弯曲致动器（例如，压电多晶致动器）。 然而，弯曲执行器最常用于驱动线性设备。 一般来说，这两种类型的致动器都可以根据所有换能材料的几何概念来开发。"
        },
        {
          "id": "block-4",
          "en": "This applies particularly to piezoelectric actuators. Piezoelectric actuators lead, through different geometrical concepts, to rotational, translational and bending actuators.",
          "zh": "这尤其适用于压电致动器。压电致动器通过不同的几何概念导致旋转、平移和弯曲致动器。"
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
          "zh": "根据换能原理的分类（参见第 1.2 节）给出了根据输入能量域的分类的概念。这里，对执行机构的分类进行总结。"
        },
        {
          "id": "block-2",
          "en": "Type Power flow Output energy Input energy domain Force flow Active Semiactive Linear Rotational Electric Thermal Magnetic Chemical Fluid Soft Hard Piezoelectric actuators TWUM X X X X TWLUM X X X X Stacks X X X X Inchworm X X X X Multimorph X Bending X X Shape memory actuators Mass load X X X X X X Spring load X X X X X X Antagonistic X X X X X X Wet EAP actuators Polymer gels X X X X X X IPMC actuators X Bending X X CP actuators X Bending X X Carbon nanotubes X X X X Dry EAP actuators Electrostrictive X X X X Dielectric elastomers X X X X Field responsive fluid actuators MRF actuators X X X X X X ERF actuators X X X X X X Magnetostrictive actuators Magnetostriction X X X X MSM actuators X X X X output energy domain is restricted to the mechanical domain, without any further separation of energy types (rotational and translational).",
          "zh": "类型 功率流 输出能量 输入能量域 力流 主动 半主动 线性 旋转 电热磁 化学流体 软 硬 压电执行器 TWUM X X X X TWLUM X X X X 堆栈 X X X X 尺蠖 X X X X 多态 X 弯曲 X X 形状记忆执行器 质量负载 X X X X X X 弹簧负载 X X X X X X 对抗性 X X X X X X 湿 EAP 执行器 聚合物凝胶 X X X X X X IPMC执行器 X 弯曲 X X CP 执行器 X 弯曲 X X 碳纳米管 X X X X 干 EAP 执行器 电致伸缩 X X X X 介电弹性体 X X X X 场响应流体执行器 MRF 执行器 X X X X X X ERF 执行器 X X X X X X 磁致伸缩执行器 磁致伸缩 X X X X MSM 执行器 X X X X 输出能量域仅限于机械域，无需进一步分离能量类型（旋转和能量）翻译）。"
        },
        {
          "id": "block-3",
          "en": "There are five main input domains: 1. Input electrical energy. Most actuators belong to this category, particularly all piezoelectric actuators, electrostatic actuators, dry EAPs and ERF actuators.",
          "zh": "主要有五个输入域： 1. 输入电能。大多数执行器都属于这一类，特别是所有压电执行器、静电执行器、干式 EAP 和 ERF 执行器。"
        },
        {
          "id": "block-4",
          "en": "2. Thermal electrical energy. This category includes SMA actuators, some wet EAP actuators (in particular, some Polymer Gels) and thermal bimetallic actuators.",
          "zh": "2.热电能。此类别包括 SMA 执行器、一些湿式 EAP 执行器（特别是一些聚合物凝胶）和热双金属执行器。"
        },
        {
          "id": "block-5",
          "en": "3. Magnetic electrical energy. This category includes magnetostrictive actuators, MRF actuators and magnetic shape memory (MSM) actuators.",
          "zh": "3.磁电能。该类别包括磁致伸缩执行器、MRF 执行器和磁形状记忆 (MSM) 执行器。"
        },
        {
          "id": "block-6",
          "en": "4. Chemical input energy. This category includes some wet (ionic) EAPs.",
          "zh": "4.化学输入能量。此类别包括一些湿（离子）EAP。"
        },
        {
          "id": "block-7",
          "en": "5. Fluid input energy. The pressure of a fluid in a chamber is used to provide the actuator force.",
          "zh": "5.流体输入能量。腔室中流体的压力用于提供致动器力。"
        },
        {
          "id": "block-8",
          "en": "This category includes pneumatic and hydraulic actuators. This domain, together with the thermal domain, is considered a particularization of the mechanical energy domain.",
          "zh": "该类别包括气动和液压执行器。该域与热域一起被认为是机械能域的特殊化。"
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
          "zh": "软执行器，也称为拉力执行器，基于配置为薄片或电线的传感材料，因此它们只能承受牵引力。"
        },
        {
          "id": "block-2",
          "en": "The operative principle restricts the available forces to pulling: fSof t ≥ 0 (1.34) Hard actuators, also known as push–pull actuators, have the ability to sustain both traction and compression forces: fHard ≷ 0 (1.35) Hard actuators are inherently twodirectional actuators. Soft actuators are inherently unidirectional actuators but can be configured in antagonistic pairs to provide twoway actuation.",
          "zh": "工作原理将可用力限制为拉力： fSof t ≥ 0 (1.34) 硬执行器，也称为推拉执行器，能够承受牵引力和压缩力： fHard ≷ 0 (1.35) 硬执行器本质上是双向执行器。 软致动器本质上是单向致动器，但可以配置成对抗对以提供双向致动。"
        },
        {
          "id": "block-3",
          "en": "This is commonly true of SMA actuators. There are other possible classification criteria for actuators and transducers. For instance, actuators can also be classified according to whether the output motion is continuous or discontinuous.",
          "zh": "SMA 执行器通常都是如此。 执行器和传感器还有其他可能的分类标准。 例如，执行器还可以根据输出运动是连续的还是不连续的进行分类。"
        },
        {
          "id": "block-4",
          "en": "A classical example of discontinuous operation is electromagnetic or piezoelectric steppers. Table 1.2 summarizes the classification convention followed in this book.",
          "zh": "不连续操作的一个典型例子是电磁或压电步进器。表 1.2 总结了本书遵循的分类约定。"
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
          "zh": "传统执行器在上个世纪已广泛应用于所有应用领域。 传统执行器类别包括电磁电机、气动执行器和液压执行器三大技术。 电磁电机利用了电荷和其运动的磁场之间的洛伦兹相互作用。"
        },
        {
          "id": "block-2",
          "en": "In the case of a rotational motor, the transducer equation for this technology is [V i ] = [0 g −1/g 0 ] [T ω ] (1.36) These may be considered as gyrating transducers. In general, the applied voltage, V , will determine the rotational or translational velocity, ω or v, respectively. The current drawn is an indication of the torque or force applied at the mechanical port.",
          "zh": "在旋转电机的情况下，该技术的换能器方程为 [V i ] = [0 g -1/g 0 ] [T ω ] (1.36) 这些可以被视为回转换能器。 一般来说，施加的电压 V 将分别确定旋转或平移速度 ω 或 v。 汲取的电流指示机械端口处施加的扭矩或力。"
        },
        {
          "id": "block-3",
          "en": "There are many different types of electromagnetic motors, but an exhaustive discussion of this technology lies outside the scope of this book. The reader is referred to any of the countless reference books on motion control hardware. Q P v, f matic and hydraulic actuators.",
          "zh": "电磁电机有许多不同类型，但对该技术的详尽讨论超出了本书的范围。 读者可以参考无数有关运动控制硬件的参考书。 Q P v、f 机械和液压执行器。"
        },
        {
          "id": "block-4",
          "en": "Traditional actuators Emerging actuators Based on geometrical transducers Based on transducing materials (possibly in combination with geometrical concept) Offtheshelf availability Designed for the application Good performance at normal scale Good for meeting miniaturization demands Lumped approach: discrete components in MCS Integrated and embedded approach: open to smart structure concepts Used in combination with external sensors Pursuit of the smart actuator concept Conventional mechanical transmissions for (output) impedance matching New transmission designs based on hinges and friction Incompatible with biomedical applications Technologies (in some cases) ideally suited to biomedical applications Pneumatic actuators exploit the power of a fluid (a gas, usually air) flowing into a chamber to develop a force (see Figure 1.19).",
          "zh": "传统执行器 新兴执行器 基于几何换能器 基于换能材料（可能与几何概念相结合） 现成可用 专为应用而设计 正常规模下性能良好 适合满足小型化需求 集总方法：MCS 中的分立元件 集成和嵌入式方法：对智能结构概念开放 与外部传感器结合使用 追求智能执行器概念 传统机械传动（输出）阻抗匹配 基于铰链和摩擦的新传动设计 与生物医学应用不兼容 技术（在某些情况下）非常适合生物医学应用 气动执行器利用流入腔室的流体（气体，通常是空气）的动力来产生力（见图 1.19）。"
        },
        {
          "id": "block-5",
          "en": "The input energy is in the fluid domain. The power is defined by the volume flow rate, Q, and the pressure, P , as conjugate variables. Hydraulic actuators are equivalent to pneumatic actuators in that the input energy is also in the fluid domain.",
          "zh": "输入能量位于流体域。 功率由体积流量 Q 和压力 P 定义为共轭变量。 液压执行器与气动执行器等效，因为输入能量也在流体域中。"
        },
        {
          "id": "block-6",
          "en": "The fluid is, however, an incompressible liquid (usually oil). For a linear actuator, the equation of the transducer is ideally [P Q ] = [k 0",
          "zh": "然而，该流体是不可压缩的液体（通常是油）。对于线性执行器，理想情况下传感器的方程为 [P Q ] = [k 0"
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
          "zh": "] [f v ] (1.37) 其中 k 是气缸的有效面积。 新兴执行器是那些由新型（或旧的、新开发的）换能器材料开发的驱动技术。 本书对它们进行了详细分析。"
        },
        {
          "id": "block-2",
          "en": "Table 1.3 compares traditional and emerging actuators.",
          "zh": "表 1.3 比较了传统和新兴执行器。"
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
          "zh": "本书致力于分析新兴执行器作为运动控制机电系统的组成部分以及其本身的机电系统。 因此，对每种技术的机电设计、特定控制概念和智能执行器方法的利用进行了分析。"
        },
        {
          "id": "block-2",
          "en": "The analysis is divided into five chapters dealing with five transduction technologies and the actuator concepts based on these technologies. The transducing materials are the following: 1. Piezoelectric ceramics, Chapter 2.",
          "zh": "分析分为五章，涉及五种转换技术以及基于这些技术的执行器概念。 转导材料如下： 1. 压电陶瓷，第 2 章。"
        },
        {
          "id": "block-3",
          "en": "2. Shape memory alloys, Chapter 3. 3.",
          "zh": "2. 形状记忆合金，第 3 章。 3."
        },
        {
          "id": "block-4",
          "en": "Electroactive polymers, Chapter 4. 4. Magnetostrictive materials, Chapter 5.",
          "zh": "电活性聚合物，第 4 章。 4. 磁致伸缩材料，第 5 章。"
        },
        {
          "id": "block-5",
          "en": "5. Electroand magnetorheological fluids, Chapter 6.",
          "zh": "5. 电流变液和磁流变液，第 6 章。"
        },
        {
          "id": "block-6",
          "en": "The following aspects are addressed for each transducing material: • detailed description of transduction principles and characteristics; • analysis of constitutive equations for the transducer and the actuator concepts; • mechatronic aspects of actuator design; • control aspects of particular relevance for each technology; • figures of merit and scaling properties; and • relevant illustrative applications.",
          "zh": "每种转导材料都涉及以下几个方面： • 转导原理和特性的详细描述； • 传感器和执行器概念的本构方程分析； • 执行器设计的机电一体化方面； • 控制与每种技术特别相关的方面； • 品质因数和缩放特性； • 相关的说明性应用。"
        },
        {
          "id": "block-7",
          "en": "The last chapter of this book summarizes the most salient issues of each emerging actuator technology and presents the comparative position of the various different actuator technologies. Here, traditional actuators are discussed for reference purposes. Particular emphasis is placed on trends in applications and on open research issues.",
          "zh": "本书的最后一章总结了每种新兴执行器技术的最突出问题，并介绍了各种不同执行器技术的比较地位。 这里讨论传统执行器以供参考。 特别强调应用趋势和开放研究问题。"
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
          "zh": "静电致动器是相对新颖的设备，其工作原理基于电荷之间的静电吸引力和排斥力。 因此，它们具有与介电弹性体执行器相同的工作原理（参见第 4 章）。 静电相互作用和致动器的基础知识 静电致动器的基本配置是可变电容 C 的电容器。"
        },
        {
          "id": "block-2",
          "en": "The capacitance of a flat, parallel plate capacitor is: C = ε A d (1.38) The constitutive equations for the electrostatic actuator can be developed from the expression of the electrical power, P , stored in the capacitor. The power can be obtained from the time rate change of the stored electrical energy, P = dW/dt. The electrical energy for a capacitor with an applied electric field E is W = q2 2C = 1",
          "zh": "平板平行板电容器的电容为： C = ε A d (1.38) 静电致动器的本构方程可以根据电容器中存储的电功率 P 的表达式得出。 功率可由储存电能随时间的变化率得出，P = dW/dt。 施加电场 E 的电容器的电能为 W = q2 2C = 1"
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
          "zh": "板间电介质及其他尺寸如图1.20所示。 如果考虑可变间隙电容器，则功率的表达式将为 P = dW dt = ∂W ∂x dx dt + ∂W ∂q dq dt (1.40) 在公式 1.40 中，术语 dx/dt 是移动板的速度，dq/dt 是用于为电容器充电的电流。"
        },
        {
          "id": "block-2",
          "en": "Since the result of the two terms at the righthand side of the equation must be a power, it follows that ∂W ∂x must be the electrostatic force on the moving plate, F⊥, and ∂W ∂q must be the voltage across the capacitor, U . If we use Equation 1.39 together with the previous results, it follows that F⊥ = ∂W ∂x = 1",
          "zh": "由于方程右侧两项的结果必须是幂，因此 ∂W ∂x 必须是移动板 F⊥ 上的静电力，并且 ∂W ∂q 必须是电容器两端的电压 U 。 如果我们将方程 1.39 与前面的结果一起使用，则可以得出 F⊥ = ∂W ∂x = 1"
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
          "zh": "x U a 垂直力 平行力 y x 因子。 且 U = ∂W ∂q = q C (1.42) 这里，让我们考虑通过在保持间隙的同时修改电容器的有效面积来获得可变电容配置的情况。 如果这是通过沿 y 方向横向滑动其中一块板来实现的（见图 1.20），则力的表达式为 F = ∂W ∂y = 1"
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
          "zh": "方程 1.41 和 1.43 可以根据所施加的电压重写： F = 1"
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
          "zh": "对公式 1.44 进行简单检查后，将很容易得出以下结果。 1.静电相互作用是短程的。"
        },
        {
          "id": "block-2",
          "en": "The magnitude of the electrostatic forces decrease rapidly when the actuator is scaled up. 2. Perpendicular forces are much higher than parallel forces.",
          "zh": "当致动器按比例放大时，静电力的大小迅速减小。 2.垂直力远大于平行力。"
        },
        {
          "id": "block-3",
          "en": "In most, F⊥ ≈ 103F\u0001. 3. Electrostatic interaction is appropriate for microapplications.",
          "zh": "大多数情况下，F⊥ ≈ 103F 。 3. 静电相互作用适用于微应用。"
        },
        {
          "id": "block-4",
          "en": "4. Complementarity in force and stroke. Actuators based on perpendicular and parallel forces are complementary in force and stroke.",
          "zh": "4、力与行程的互补。基于垂直力和平行力的致动器在力和行程上是互补的。"
        },
        {
          "id": "block-5",
          "en": "In perpendicular actuators, the stroke is limited at most to the size of the gap. Actuator configurations Electrostatic actuators exploit either perpendicular, F⊥, or parallel forces, F\u0001. In parallel configurations, the most common developments are the ones known as comb drives.",
          "zh": "在垂直执行器中，行程最多受限于间隙的大小。 执行器配置 静电执行器利用垂直力 F⊥ 或平行力 F 。 在并行配置中，最常见的开发是梳状驱动器。"
        },
        {
          "id": "block-6",
          "en": "In comb drives, two comblike structures are used. The pins in each comb structure are used as electrodes in a layered capacitor configuration. The paralleltype electrostatic forces tend to pull both combs together.",
          "zh": "在梳状驱动器中，使用两个梳状结构。每个梳状结构中的引脚用作分层电容器配置中的电极。平行型静电力倾向于将两个梳子拉到一起。"
        },
        {
          "id": "block-7",
          "en": "The combination of multiple layers and the symmetry of the structure is used to balance out the perpendicular interaction so that F⊥ on each pin would ideally cancel out. Comb drives can be used to develop both linear and rotational actuators. ated by the electrostatic interaction results in interdigital rotational and translational movements.",
          "zh": "多层的组合和结构的对称性用于平衡垂直相互作用，以便每个引脚上的 F⊥ 理想地抵消。 梳状驱动器可用于开发线性和旋转执行器。 静电相互作用导致指间旋转和平移运动。"
        },
        {
          "id": "block-8",
          "en": "The other typical configuration for electrostatic actuators is one that exploits perpendicular forces. This configuration is illustrated by the tilt mechanism of microscope mirrors as depicted in Figure 1.22. The mirrors can be rotated around a torsional hinge (light white in Figure 1.22b) as a consequence of the electrostatic force of perpendicular force actuators.",
          "zh": "静电致动器的另一种典型配置是利用垂直力的配置。 这种配置通过显微镜镜的倾斜机制来说明，如图 1.22 所示。 由于垂直力执行器的静电力，镜子可以绕扭转铰链（图 1.22b 中的浅白色）旋转。"
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
          "zh": "热执行器基于固体或气体材料的热膨胀。 SMA 致动器（参见第 3 章）和一些聚合物凝胶致动器（参见第 4 章）可以被视为热致动器以及基于热膨胀的致动器。 然而，术语热致动器通常指多晶型热激活致动器。"
        },
        {
          "id": "block-2",
          "en": "These actuators exploit the difference in thermal expansion coefficients of two dissimilar metals bonded together to produce bending deformations of the composite structure. (a) (b) nation with a ratchet and (b) detailed view of a linear actuator structure. (a) (b)",
          "zh": "这些执行器利用两种粘合在一起的异种金属的热膨胀系数差异来产生复合结构的弯曲变形。 (a) (b) 带有棘轮的国家和 (b) 线性致动器结构的详细视图。 (一) (二)"
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
          "zh": "热致动器受到致动所需的热传输过程的长响应时间的限制。 热执行器中可用的力与 L2 成正比，其中 L 是执行器的主要尺寸。 同样，可用行程通常表示为执行器长度的百分比，因此以 L 为单位。"
        },
        {
          "id": "block-2",
          "en": "From the force and stroke, it follows that the available work per cycle and the available work density per cycle scale in proportion to L3 and L0 respectively. In thermal systems, the time taken to transport the heat and actuate the system is proportional to the mass of the actuator, L3 , and inversely proportional to the heat rate. According to Peirs (2001), the heat rate scales proportionally to L.",
          "zh": "根据力和行程，每个周期的可用功和每个周期的可用功密度分别与 L3 和 L0 成比例。 在热系统中，传输热量和驱动系统所需的时间与驱动器的质量 L3 成正比，与热耗率成反比。 根据 Peirs (2001) 的说法，热耗率与 L 成正比。"
        },
        {
          "id": "block-3",
          "en": "Therefore, the time constant of thermal systems scales in proportion to L2 . This means that reducing the scale of the actuator by a factor of 10 will produce systems that are 100 times faster. As calculated above, the power density is proportional to L−2 and thus also increases by a factor of 100 when the actuator is scaled down by a factor of 10.",
          "zh": "因此，热系统的时间常数与 L2 成比例。 这意味着将执行器的尺寸减小 10 倍将使系统速度提高 100 倍。 如上所述，功率密度与 L−2 成正比，因此当执行器缩小 10 倍时，功率密度也会增加 100 倍。"
        },
        {
          "id": "block-4",
          "en": "All these results suggest that thermal actuators are an appropriate technology for integration in microsystems. Figure 1.23 shows a thermal actuator in a microsystems application.",
          "zh": "所有这些结果表明热执行器是一种适合微系统集成的技术。图 1.23 显示了微系统应用中的热执行器。"
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
          "zh": "马氏体转变是一些合金（铁、铜和钛合金）表现出的一级无扩散转变。 马氏体转变受到各种外部场（温度、单轴应力、静水压力和磁场）的影响，并且是各种不同的新兴致动器机构的基础。"
        },
        {
          "id": "block-2",
          "en": "In the context of thermally triggered martensitic transformations in Tibased alloys in particular, we would highlight the case of shape memory alloy actuators (see Chapter 3 for a detailed discussion of SMA actuators and martensitic transformations). grated micromirror.",
          "zh": "特别是在钛基合金中热触发马氏体转变的背景下，我们将重点介绍形状记忆合金致动器的情况（有关 SMA 致动器和马氏体转变的详细讨论，请参阅第 3 章）。 磨碎的微镜。"
        },
        {
          "id": "block-3",
          "en": "The application of a current to the actuator arm produces vertical motion of the mirror, which can either reflect an optical beam or allow it to be transmitted (Photograph courtesy of Joseph N. Mitchell, Southwest Research Institute).",
          "zh": "对致动器臂施加电流会产生镜子的垂直运动，从而可以反射光束或允许光束传输（照片由 Joseph N. 米切尔，西南研究所）。"
        },
        {
          "id": "block-4",
          "en": "In this section, we will briefly address the case of actuators based on martensitic transformations triggered by magnetic fields, which are known as ferromagnetic shape memory alloy actuators, FSMAs or magnetic shape memory actuators, MSMAs.",
          "zh": "在本节中，我们将简要介绍基于磁场触发的马氏体转变的致动器的情况，这些致动器被称为铁磁形状记忆合金致动器（FSMA）或磁性形状记忆致动器（MSMA）。"
        },
        {
          "id": "block-5",
          "en": "As in the case of thermally triggered shape memory actuators, the transformation is possible because of the difference in magnetic moment between the parent and the martensite variants. The mechanism of actuation with MSMAs is similar to the mechanism with thermal shape memory actuators.",
          "zh": "与热触发形状记忆执行器的情况一样，由于母体和马氏体变体之间的磁矩差异，这种转变是可能的。 MSMA 的驱动机制与热形状记忆执行器的机制类似。"
        },
        {
          "id": "block-6",
          "en": "The ferromagnetic shape memory alloy consists of internal domains and twin variants, which have different crystallographic and magnetic orientations. In the martensite phase, when no external magnetic field is applied, the twin variants are preferentially aligned (by means of a bias load).",
          "zh": "铁磁形状记忆合金由内部磁域和孪晶变体组成，它们具有不同的晶体学和磁性取向。 在马氏体相中，当不施加外部磁场时，孪晶变体优先排列（通过偏置负载）。"
        },
        {
          "id": "block-7",
          "en": "The shortest, magnetically active axis in the crystallographic lattice is generally oriented in the direction of actuation (see Figure 1.24, left). When a magnetic field is applied perpendicular to the magnetically active axis, the other twin variants appear and grow.",
          "zh": "晶格中最短的磁活性轴通常沿驱动方向取向（见图 1.24，左）。 当垂直于磁活性轴施加磁场时，其他孪生变体就会出现并生长。"
        },
        {
          "id": "block-8",
          "en": "As a direct consequence, the magnetically active axis (which is the shortest in the lattice) of these new variants is aligned perpendicular to the direction of actuation and the length of the specimen increases (see Figure 1.24, right). The maximum attainable stroke is defined by the ratio of the length of the long to the short axis in the lattice, α/c.",
          "zh": "直接的结果是，这些新变体的磁活性轴（晶格中最短的）垂直于驱动方向排列，并且样本的长度增加（见图 1.24，右）。 可达到的最大行程由晶格中长轴与短轴的长度之比 α/c 定义。"
        },
        {
          "id": "block-9",
          "en": "For the magnetic shape memory effect to materialize, the magnetic anisotropy energy of these alloys must be larger than the elastic or frictional energy associated with the conversion of variants. As in the case of thermally triggered shape memory actuators, MSMAs are oneway actuators and must be configured against bias c a H H H MSMA rod Magnetic flux Reluctance circuit Parallel prestress spring Φ tance circuit.",
          "zh": "为了实现磁性形状记忆效应，这些合金的磁各向异性能量必须大于与变体转换相关的弹性或摩擦能量。 与热触发形状记忆执行器的情况一样，MSMA 是单向执行器，必须针对偏压进行配置。 H H H MSMA 杆 磁通 磁阻电路 并联预应力弹簧 Φ 坦斯电路。"
        },
        {
          "id": "block-10",
          "en": "loading in order to complete the actuation cycle. Again, magnetic SMAs can be made to change their shape in response to axial, bending or torsional loading. The basic structure of a magnetic shape memory actuator is depicted in specimen (usually based on linear springs as shown in the figure) and components to set up the magnetic field perpendicular to the direction of actuation.",
          "zh": "加载以完成驱动循环。 同样，磁性 SMA 可以根据轴向、弯曲或扭转载荷改变其形状。 磁性形状记忆致动器的基本结构在样本（通常基于如图所示的线性弹簧）和用于建立垂直于致动方向的磁场的组件中进行了描述。"
        },
        {
          "id": "block-11",
          "en": "The reader is referred to Chapter 6 for more details regarding the design of reluctance circuits to set up the magnetic field. Magnetic shape memory actuators are a special class of giant magnetostrictive actuators, which can therefore be classified into two broad categories: Joule magnetostrictive actuators and twininduced magnetostrictive actuators.",
          "zh": "读者可参阅第 6 章，了解有关设置磁场的磁阻电路设计的更多详细信息。 磁形状记忆致动器是一类特殊的超磁致伸缩致动器，因此可分为两大类：焦耳磁致伸缩致动器和双感应磁致伸缩致动器。"
        },
        {
          "id": "block-12",
          "en": "On the one hand, magnetostriction based on the Joule effect has been known since the nineteenth century and is dealt with in detail in Chapter 5. On the other hand, the property known as twininduced magnetostriction was discovered much more recently (in the 1960s, see Kakeshita and Ullakko (2002)) and is only now gaining some momentum.",
          "zh": "一方面，基于焦耳效应的磁致伸缩自 19 世纪以来就已为人所知，并在第 5 章中详细讨论。 另一方面，被称为双诱导磁致伸缩的特性是最近才发现的（在 20 世纪 60 年代，参见 Kakeshita 和 Ullakko (2002)），并且现在才获得一些动力。"
        },
        {
          "id": "block-13",
          "en": "Joulebased magnetostriction is characterized by higher forces (only a few N have been achieved in MSMAs so far) and frequency of actuation, higher Curie temperatures (about 380 C as compared to only 100 C in twininduced magnetostrictive materials) and smaller driving magnetic fields (usually half that required in MSMAs), fatigue and hysteresis.",
          "zh": "基于焦耳的磁致伸缩的特点是更高的力（迄今为止在 MSMA 中仅实现了几个 N）和驱动频率、更高的居里温度（大约 380°C，而双感应磁致伸缩材料中的居里温度仅为 100°C）和更小的驱动磁场（通常是 MSMA 所需的一半）、疲劳和磁滞。"
        },
        {
          "id": "block-14",
          "en": "Twininduced magnetostriction is characterized by a higher stroke (up to 50,000 ppm, as compared to 1700 ppm in Terfenol–D, see Chapter 5) and higher energy output per cycle (three times that of Terfenol–D). The first prototypes of MSMAs were not developed until recently; they are currently at a promising experimental stage.",
          "zh": "双感应磁致伸缩的特点是更高的冲程（高达 50,000 ppm，而 Terfenol–D 为 1700 ppm，请参见第 5 章）和每个周期更高的能量输出（Terfenol–D 的三倍）。 直到最近，MSMA 的第一个原型才被开发出来。他们目前正处于一个有希望的实验阶段。"
        },
        {
          "id": "block-15",
          "en": "Some of these prototype implementations will be introduced in more detail in a case study in Chapter 5. 2 Piezoelectric actuators Actuators based on piezoelectric materials probably represent the most mature and best established of the different emerging technologies. The physical phenomenon of piezoelectricity provides the foundation for the transduction process upon which all piezoelectric actuators are based.",
          "zh": "其中一些原型实现将在第 5 章的案例研究中更详细地介绍。 2 压电致动器 基于压电材料的致动器可能代表了不同新兴技术中最成熟和最成熟的技术。 压电物理现象为所有压电致动器所基于的转换过程提供了基础。"
        },
        {
          "id": "block-16",
          "en": "The category of piezoelectric actuators encompasses a number of different configurations. It is common to find both stepping and continuous piezoelectric actuators, rotational and translational drives, micropositioning piezoelectric stages with subnanometer resolution, large stroke positioning stages and also fast drives. This chapter provides an analysis of piezoelectric actuators.",
          "zh": "压电致动器的类别包含许多不同的配置。 常见的有步进式和连续式压电执行器、旋转和平移驱动器、具有亚纳米分辨率的微定位压电平台、大行程定位平台以及快速驱动器。 本章对压电执行器进行分析。"
        },
        {
          "id": "block-17",
          "en": "After a short historical note, there is an introduction to the basics of piezoelectricity, piezoelectric materials and their constitutive equations. These driving technologies are classified for analysis into resonant and nonresonant piezoelectric actuators. Various different configurations within these two categories are discussed and the main driving characteristics are highlighted.",
          "zh": "在简短的历史说明之后，介绍了压电性、压电材料及其本构方程的基础知识。 这些驱动技术被分类为谐振和非谐振压电执行器进行分析。 讨论了这两类中的各种不同配置，并强调了主要的驾驶特性。"
        },
        {
          "id": "block-18",
          "en": "In line with the mechatronic focus of this book, we highlight the possibility of using piezoelectric actuators concomitantly as sensors, in the context of developing control strategies for achieving optimal operation points in resonant drives and reduced hysteresis in non resonant drives. A whole section is devoted to a comparative analysis of the various different piezoelectric actuator configurations.",
          "zh": "根据本书的机电一体化重点，我们强调在开发控制策略以实现谐振驱动器中的最佳操作点并减少非谐振驱动器中的磁滞现象的背景下，同时使用压电执行器作为传感器的可能性。 整个部分致力于对各种不同压电致动器配置的比较分析。"
        },
        {
          "id": "block-19",
          "en": "In particular, there is a detailed note on the scaling properties of this technology. The last part of this chapter addresses the application of piezoelectric actuators, through an analysis of five case studies. Two of these concern resonant piezoelectric actuators, presenting the development of OEM drives and the integration of ultrasonic motors in the optical automatic focus of reflex cameras.",
          "zh": "特别是，对该技术的缩放特性进行了详细说明。 本章的最后部分通过五个案例研究的分析来讨论压电执行器的应用。 其中两个涉及谐振压电执行器，展示了 OEM 驱动器的开发以及反射相机光学自动对焦中超声波电机的集成。"
        },
        {
          "id": "block-20",
          "en": "The three last application examples concern nonresonant drives. Here, three very different application domains are analyzed, which lead to three different actuator configurations: piezoelectric benders for needle selection modules in knitting Emerging Actuator Technologies: A Micromechatronic Approach J. L.",
          "zh": "最后三个应用示例涉及非谐振驱动器。 这里，分析了三个截然不同的应用领域，从而产生了三种不同的致动器配置：用于针织中选针模块的压电弯曲器新兴致动器技术：微机电一体化方法 J. L。"
        },
        {
          "id": "block-21",
          "en": "Pons  2005 John Wiley & Sons, Ltd., ISBN 0-470-09197-5 equipment; piezoelectric stepping motors for ultrastiff positioning in machine tools; and lastly, modified piezoelectric stack actuators for precise scanning in atomic force microscopy in spacecraft applications.",
          "zh": "Pons  2005 John Wiley & Sons, Ltd.，ISBN 0-470-09197-5 设备；用于机床中超刚性定位的压电步进电机；最后，改进了压电堆栈致动器，用于航天器应用中原子力显微镜的精确扫描。"
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
          "zh": "压电现象首先在一些天然材料（石英、电气石和罗谢尔盐）中观察到，它们由于施加机械负载而表现出电极化。 历史上，皮埃尔·居里和雅克·居里于 1880 年观察到了压电性。"
        },
        {
          "id": "block-2",
          "en": "The mathematical formulation of the governing constitutive equations for the piezoelectric effect were then developed in the decades following this discovery. The first engineering application of piezoelectricity was devised by Langevin, who laid the foundations of ultrasonic submarine detection in 1916.",
          "zh": "在这一发现之后的几十年里，压电效应控制本构方程的数学公式得到了发展。 压电的第一个工程应用是由 Langevin 设计的，他于 1916 年奠定了超声波潜艇探测的基础。"
        },
        {
          "id": "block-3",
          "en": "The piezoelectric effect can be described as modification of the polarization of a dielectric arising from the mechanical energy of the stress. Materials exhibiting such an effect are said to be piezoelectric materials. The piezoelectric effect is reversible in the sense that when an electric field is applied, a mechanical strain will arise.",
          "zh": "压电效应可以描述为由应力的机械能引起的电介质极化的改变。 表现出这种效应的材料被称为压电材料。 压电效应是可逆的，即当施加电场时，会产生机械应变。"
        },
        {
          "id": "block-4",
          "en": "This is the converse piezoelectric effect. In what are called dielectric materials, the application of an external electric field leads to electric dipoles. This phenomenon is known as electric polarization and is usually characterized by the vector magnitude \u0001 P .",
          "zh": "这就是逆压电效应。 在所谓的介电材料中，施加外部电场会产生电偶极子。 这种现象称为电极化，通常用矢量幅度 P 来表征。"
        },
        {
          "id": "block-5",
          "en": "In these materials, the electrical charge per unit area is known as electric displacement and is denoted by the vector magnitude \u0001 D. The electrical state of a dielectric is then determined according to the following expression: \u0001D = \u00010 \u0001E + \u0001P = \u0001\u00010 \u0001E (2.1) where \u00010 is the vacuum electric permittivity and \u0001 is the relative permittivity of the dielectric material.",
          "zh": "在这些材料中，单位面积的电荷称为电位移，用矢量大小 D 表示。 然后根据以下表达式确定电介质的电状态： D = 0 E + P = 0 E (2.1) 其中 0 是真空介电常数，是电介质材料的相对介电常数。"
        },
        {
          "id": "block-6",
          "en": "When the crystal structure of the dielectric material is such that in the absence of external electric fields the centers of positive and negative electrical charges do not coincide, the material is said to exhibit spontaneous polarization. If this polarization can be modified when an external electric field is applied, the material is said to be ferroelectric. Ferroelectric materials are not generally piezoelectric.",
          "zh": "当介电材料的晶体结构使得在没有外部电场的情况下正电荷和负电荷的中心不重合时，该材料被认为表现出自发极化。 如果在施加外部电场时可以改变这种极化，则该材料被称为铁电材料。 铁电材料一般不是压电材料。"
        },
        {
          "id": "block-7",
          "en": "This is mainly because they are isotropic materials; that is, there is no dominant direction for polarization. In order to serve as piezoelectric materials, ferroelectric materials must be subject to an external electric field, the poling field. Therefore, it is the poling process that is responsible for the appearance of piezoelectric properties in ferroelectric materials.",
          "zh": "这主要是因为它们是各向同性材料；也就是说，极化没有主导方向。 为了用作压电材料，铁电材料必须受到外部电场，即极化场的作用。 因此，正是极化过程导致了铁电材料中压电特性的出现。"
        },
        {
          "id": "block-8",
          "en": "This process can take place either at room temperature, once the ferroelectric material is obtained, or in what is called the paraelectric phase. The latter approach involves sustained application of an external electric field while the material is cooled to below the Curie temperature, so that the resulting ferroelectric domains have a dominant orientation for the polarization.",
          "zh": "一旦获得铁电材料，这个过程就可以在室温下进行，也可以在所谓的顺电相中进行。 后一种方法涉及持续施加外部电场，同时将材料冷却至居里温度以下，以便所得铁电域具有极化的主导方向。"
        },
        {
          "id": "block-9",
          "en": "The Curie temperature becomes the upper limit for the operational range of piezoelectric ceramics; polarization is lost for higher temperatures (see Most current piezoelectric materials are ceramics with a crystalline structure of the perovskite type, ABO3. In particular, the wellknown PZT and PLZT ceramics are solid solutions obtained from Ti, Zr and Pb oxides.",
          "zh": "居里温度成为压电陶瓷工作范围的上限；温度越高，极化就会消失（参见大多数当前压电材料是具有钙钛矿型晶体结构的陶瓷，ABO3。 特别地，众所周知的PZT和PLZT陶瓷是由Ti、Zr和Pb氧化物获得的固溶体。"
        },
        {
          "id": "block-10",
          "en": "A classic example of perovskitetype materials is barium titanate, B a T i O3 (see Figure 2.2). In this particular case, the T 4+ i is slightly shifted toward one of the six faces of the cubic structure. When the ceramic is poled, a dominant direction for the shift of the T 4+ i will develop, and there will be a piezoelectric effect.",
          "zh": "钙钛矿型材料的一个典型例子是钛酸钡，B a T i O3（见图 2.2）。 在这种特殊情况下，T 4+ i 稍微向立方结构的六个面之一偏移。 当陶瓷被极化时，T 4+ i 移动的主导方向将发展，并且将出现压电效应。"
        },
        {
          "id": "block-11",
          "en": "Temperature Permittivity Spontaneous Polarization Property Tc temperature: spontaneous polarization in ferroelectric materials is lost at more than the Curie temperature, T c. Ba2+ Ti4+ O2−",
          "zh": "温度介电常数自发极化特性 Tc 温度：铁电材料中的自发极化在高于居里温度 T c 时消失。 Ba2+ Ti4+ O2−"
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
          "zh": "压电 PZT 陶瓷中施加的电场和相应材料应变之间的函数关系可以用图形方式描述，如当对压电材料施加低幅度电场循环时，会生成准线性机械应变。 这就是上面介绍的逆压电效应，其特征是低水平的迟滞行为。"
        },
        {
          "id": "block-2",
          "en": "When the applied electric field is increased, the hysteresis level is also increased until there is a coercitive electric field. At this level, a degenerated butterflylike relationship develops between the applied electric field and the resulting mechanical strain.",
          "zh": "当施加的电场增加时，磁滞水平也增加，直到出现矫顽电场。 在这个水平上，所施加的电场和由此产生的机械应变之间形成退化的蝴蝶状关系。"
        },
        {
          "id": "block-3",
          "en": "Piezoelectric ceramics are classified into soft and hard ceramics, according to the relative value of the coercitive electric field: • Hard Piezoelectric Ceramics are characterized by relatively high coercitive electric fields (≥20 kV/cm), a relatively wide linear piezoelectric region, moderate piezoelectric coefficients and high quality factors, Q.",
          "zh": "根据矫顽电场的相对值，压电陶瓷分为软陶瓷和硬陶瓷： • 硬压电陶瓷的特点是具有较高的矫顽电场（≥20 kV/cm）、较宽的线性压电区域、适中的压电系数和较高的品质因数 Q。"
        },
        {
          "id": "block-4",
          "en": "• Soft Piezoelectric Ceramics exhibit low coercitive electric fields (≈14–16 kV/cm), relatively higher electrically driven mechanical strain and lower hysteresis levels. When dealing with actuator applications, particularly in the case of resonanttype piezoelectric actuators, hard piezoelectric ceramics are preferred. This is basically due to the higher quality factor.",
          "zh": "• 软压电陶瓷具有低矫顽电场（约14–16 kV/cm）、相对较高的电驱动机械应变和较低的磁滞水平。 在处理致动器应用时，特别是在谐振型压电致动器的情况下，优选硬质压电陶瓷。 这主要是由于更高的品质因数。"
        },
        {
          "id": "block-5",
          "en": "High quality factors are an indication of high efficiency in the transduction between electrical and mechanical energy, the basis for actuator design. The quasilinear, low hysteresis piezoelectric effect can be mathematically described by what are known as constitutive equations.",
          "zh": "高品质因数表明电能和机械能之间的转换效率高，这是执行器设计的基础。 准线性、低磁滞压电效应可以通过所谓的本构方程进行数学描述。"
        },
        {
          "id": "block-6",
          "en": "The constitutive equations Ec E Low hysteretic piezoelectric effect e for the piezoelectric effect are described in terms of the relationship between electrical and mechanical variables. The formulation of the piezoelectric constitutive equations can be derived from a number of thermodynamic energy density functions involving both elastic and electrical energy (Rosen et al. (1992)).",
          "zh": "压电效应的本构方程 Ec E 低滞回压电效应 e 根据电变量和机械变量之间的关系来描述。 压电本构方程的公式可以从涉及弹性能和电能的许多热力学能量密度函数导出（Rosen 等人，2014）。 （1992））。"
        },
        {
          "id": "block-7",
          "en": "The particular set of constitutive equations depends on the choice of dependent and independent variables. As we saw earlier in Equation 2.1, a complete definition of the electrical state in the dielectric requires the specification of two independent variables of the set { \u0001 E, \u0001 D and \u0001 P }.",
          "zh": "特定的本构方程组取决于因变量和自变量的选择。 正如我们之前在方程 2.1 中看到的，电介质中电状态的完整定义需要指定集合 { E、D 和 P } 中的两个自变量。"
        },
        {
          "id": "block-8",
          "en": "In the following equations, { \u0001 E} has been taken as the electrical independent variable and { \u0001 D} as the electrical dependent variable. For the case of elastic energy, the strain, S, and the stress, T , are commonly used.",
          "zh": "在下面的方程中，{E}被视为电气自变量，{D}被视为电气因变量。 对于弹性能的情况，通常使用应变 S 和应力 T 。"
        },
        {
          "id": "block-9",
          "en": "If strain and electric field are selected as independent variables and the electric displacement, \u0001 D, is selected as the dependent electrical variable, the constitutive equation of the piezoelectric actuator can be expressed in tensor notation as follows: Sij = c E ij kl T kl + dmij E m D k = dkij T ij + \u0001 T km E m (2.2) The above tensor notation can be compacted into a matrix notation following the contraction criteria described in Table 2.1.",
          "zh": "如果选择应变和电场作为自变量，选择电位移 D 作为因电变量，则压电致动器的本构方程可以用张量表示法表示如下： Sij = c E ij kl T kl + dmij E m D k = dkij T ij + T km E m (2.2) 上述张量表示法可以按照表 2.1 中描述的收缩标准压缩为矩阵表示法。"
        },
        {
          "id": "block-10",
          "en": "When this contraction criterion is followed, directions 1, 2 and 3 generally represent normal strains, while directions 4, 5 and 6 represent shear strain. In addition, direction 3 is usually associated with the poling direction. See Figure 2.4 for a schematic representation of the axes convention.",
          "zh": "当遵循该收缩准则时，方向 1、2 和 3 通常代表法向应变，而方向 4、5 和 6 代表剪切应变。 另外，方向3通常与极化方向相关。 轴约定的示意图见图 2.4。"
        },
        {
          "id": "block-11",
          "en": "Tensor notation (ij , kl) 11 22 33 23, 32 31, 13 12, 21 Matrix notation (p, q) 1 2 3 4 5 6 1 Poling direction 2 3 6 4 5 tion “3” is defined as the poling direction. In general, according to the rank of all the tensors in the constitutive equations, the electromechanical relationship in a piezoelectric will be completely specified by 21 independent elastic coefficients, 18 independent piezoelectric constants and",
          "zh": "张量表示法 (ij , kl) 11 22 33 23, 32 31, 13 12, 21 矩阵表示法 (p, q) 1 2 3 4 5 6 1 极化方向 2 3 6 4 5 “3”定义为极化方向。 一般来说，根据本构方程中所有张量的排序，压电体中的机电关系将由21个独立的弹性系数、18个独立的压电常数和"
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
          "zh": "和介电系数。 特别是在极化铁电陶瓷的情况下，只有 5 个独立的弹性常数、3 个压电系数和 2 个介电常数可以充分描述材料的机电行为。"
        },
        {
          "id": "block-2",
          "en": "In compact notation, the full set of constitutive equations can be described using the following expression: { S D } = [[s] [d]T [d] [ε] ] {T E } (2.3) where, [s] =         s11 s12 s13 0 0 0 s12 s22 s23 0 0 0 s13 s23 s33 0 0 0",
          "zh": "在紧凑的表示法中，完整的本构方程组可以使用以下表达式来描述： { S D } = [[s] [d]T [d] [ε] ] {T E } (2.3) 其中， [s] =         s11 s12 s13 0 0 0 s12 s22 s23 0 0 0 s13 s23 s33 0 0 0"
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
          "zh": "        (2.4) [d]T =        "
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
          "zh": "        (2.5) 且 [ε] =   ε11 0 0"
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
          "zh": "  (2.6)"
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
          "zh": "机电特性 压电电机的谐振操作可以用图 2.5 所示的等效电路的电气参数来表示。 C0为压电振子的钳位电容，即固定电极边界条件下压电陶瓷的电容。"
        },
        {
          "id": "block-2",
          "en": "Parallel to the clamped capacitance is the motional impedance, which consists of the Cm C0 L m Rm motional capacitance C m, the motional inductance L m and the resistance Rm. Rm accounts for the power losses within the piezoelectric vibrator, friction losses at the rotor–stator interface (if any) and the mechanical output power delivered to the shaft.",
          "zh": "与钳位电容并联的是运动阻抗，它由 Cm C0 L m Rm 运动电容 C m、运动电感 L m 和电阻 Rm 组成。 Rm 考虑了压电振动器内的功率损耗、转子-定子界面处的摩擦损耗（如果有）以及传递到轴的机械输出功率。"
        },
        {
          "id": "block-3",
          "en": "In resonanttype piezoelectric motors, in order to get the maximum mechanical output power, the excitation frequency is tuned to the resonance or antiresonance frequency of the device. A piezoelectric ceramic, as a mechanical continuum, is electrically characterized by an infinity of resonance modes.",
          "zh": "在谐振型压电电机中，为了获得最大机械输出功率，将激励频率调谐到装置的谐振或反谐振频率。 压电陶瓷作为机械连续体，其电学特征是具有无限的谐振模式。"
        },
        {
          "id": "block-4",
          "en": "See Figure 2.6a, b and c for the electromechanical characterization of resonance modes of a piezoelectric motor in a frequency range of 35 to 70 kHz. A resonance mode is characterized electromechanically by a local minimum of both the electrical and the mechanical impedance.",
          "zh": "压电电机在 35 至 70 kHz 频率范围内谐振模式的机电特性见图 2.6a、b 和 c。 谐振模式的机电特征在于电气阻抗和机械阻抗的局部最小值。"
        },
        {
          "id": "block-5",
          "en": "While the electrical impedance is defined as the vector ratio (magnitude and phase) of applied voltage to current drawn, the mechanical impedance is defined as the ratio of vibration velocity to applied exciting force. As a vector magnitude, the electrical impedance of a piezoelectric actuator depends on its magnitude and phase along the frequency axis.",
          "zh": "电阻抗定义为施加电压与电流的矢量比（幅度和相位），而机械阻抗定义为振动速度与施加激振力的比值。 作为矢量幅度，压电致动器的电阻抗取决于其沿频率轴的幅度和相位。"
        },
        {
          "id": "block-6",
          "en": "Figure 2.6 shows the electromechanical characterization of a resonanttype piezoelectric motor. The figure shows the particular electromechanical characterization for the operational frequency range. frequency.",
          "zh": "图 2.6 显示了谐振型压电电机的机电特性。该图显示了工作频率范围的特定机电特性。频率。"
        },
        {
          "id": "block-7",
          "en": "Every mechanical vibration mode (see Figure 2.6c) is electrically characterized by a resonance and an antiresonance mode. The resonance mode exhibits a local minimum of the magnitude of the impedance, while the antiresonance mode represents a local maximum of the magnitude (see Figure 2.6a). Resonance and antiresonance modes are also characterized by abrupt changes in the phase of the electrical impedance.",
          "zh": "每个机械振动模式（见图 2.6c）的电气特征都是谐振和反谐振模式。 谐振模式表现出阻抗幅值的局部最小值，而反谐振模式则表现出阻抗幅值的局部最大值（见图 2.6a）。 谐振和反谐振模式的特征还在于电阻抗相位的突变。"
        },
        {
          "id": "block-8",
          "en": "The electrical equivalent of a piezoelectric ceramic is approximately a capacitive load in a frequency range outside the",
          "zh": "压电陶瓷的电等效值近似为在频率范围之外的容性负载。"
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
          "zh": "35 -100 -80 -60 -40 200 300 400 500 0 000 1500 500 600 (b) (c) (a)"
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
          "zh": "频率 (kHz) Am (Ω) Ze (Ω) Φe (度)"
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
          "zh": "压电陶瓷的频率 −p/2 p/2 Φ f a f r 范围。 共振范围。 在谐振-反谐振模式附近，压电负载表现出接近方井相位角函数的电气行为（见图 2.7）。"
        },
        {
          "id": "block-2",
          "en": "The phase takes values of ±π/2, with discontinuity at the resonance and antiresonance frequencies. In other words, the electrical equivalent in the frequency range between resonance and antiresonance is inductive, and hence the piezoelectric load represents a resistive load at resonance and antiresonance. The quality factor, Q One important electromechanical parameter of mechatronic systems is the quality factor, Q.",
          "zh": "相位取值为±π/2，在谐振和反谐振频率处具有不连续性。 换句话说，谐振和反谐振之间的频率范围内的电等效是感性的，因此压电负载代表谐振和反谐振时的电阻负载。 品质因数 Q 机电一体化系统的一个重要机电参数是品质因数 Q。"
        },
        {
          "id": "block-3",
          "en": "The quality factor is a measure of the actuator’s efficiency in transduction from electrical to mechanical energy. The quality factor is a magnitude closely related to the shape of the resonance and antiresonance peaks. It is also related to the intrinsic structural damping of the piezoelectric ceramic.",
          "zh": "品质因数是执行器从电能转换为机械能的效率的衡量标准。 品质因数是与谐振和反谐振峰的形状密切相关的量值。 它还与压电陶瓷的固有结构阻尼有关。"
        },
        {
          "id": "block-4",
          "en": "In particular, the sharper and the narrower the resonance (the antiresonance) peak, the higher will be the quality factor and the lower the system damping. The quality factor can be practically derived from the motional impedance of the resonant piezoelectric ceramic.",
          "zh": "特别是，谐振（反谐振）峰值越尖锐和越窄，品质因数越高，系统阻尼越低。 品质因数实际上可以从谐振压电陶瓷的运动阻抗导出。"
        },
        {
          "id": "block-5",
          "en": "In particular, a good approximation of the quality factor is given by: Q = √L m /C m Rm (2.7) Piezoelectric transducers differ in their operation point according to whether they are conceived as sensors or as actuators. Resonant piezoelectric actuators are usually driven in a frequency range close to the antiresonance frequency of the device.",
          "zh": "特别是，品质因数的良好近似值由下式给出： Q = √L m /C m Rm (2.7) 压电传感器根据其被设计为传感器还是执行器而在其工作点上有所不同。 谐振压电致动器通常在接近设备的反谐振频率的频率范围内驱动。"
        },
        {
          "id": "block-6",
          "en": "As proposed by Uchino, Uchino and Hirose (2001), antiresonance modes (Btype modes) are better for actuators since their quality factor is higher than Atype modes (resonance modes) over the entire range of vibration frequency (see As a consequence, the driving situation for resonance piezoelectric actuators is as shown in Figure 2.9.",
          "zh": "正如 Uchino、Uchino 和 Hirose (2001) 提出的，反谐振模式（B 型模式）更适合执行器，因为它们的品质因数在整个振动频率范围内高于 A 型模式（谐振模式）（参见）。因此，谐振压电执行器的驱动情况如图 2.9 所示。"
        },
        {
          "id": "block-7",
          "en": "The lower limit of the range of frequencies used to drive 0 500 1000 1500 2000 30 40 20 10",
          "zh": "用于驱动的​​频率范围下限 0 500 1000 1500 2000 30 40 20 10"
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
          "zh": "QA QB TA TB 振动速度 (m/s) Q ΔT 振动速度。请注意 B 型模式（反谐振模式）由于较高的相对品质因数而具有卓越的性能。由 K 提供"
        },
        {
          "id": "block-2",
          "en": "Uchino. Frequency f min fmax Impedance impedance decay after antiresonance. the actuator is usually set at a frequency close to antiresonance.",
          "zh": "内野。频率 f min fmax 阻抗 反谐振后的阻抗衰减。执行器通常设置在接近反谐振的频率。"
        },
        {
          "id": "block-3",
          "en": "The smoothly decreasing impedance curve after antiresonance is therefore used to define the range of frequencies allowed for motor speed control. Frictional transmission in resonant drives Resonanttype piezoelectric motors can be classified according to a number of criteria. Several of these classifications are briefly introduced in Section 2.3.2.",
          "zh": "因此，反谐振后平滑下降的阻抗曲线用于定义电机速度控制所允许的频率范围。 谐振驱动器中的摩擦传动 谐振型压电电机可以根据多种标准进行分类。 第 2.3.2 节简要介绍了其中的几种分类。"
        },
        {
          "id": "block-4",
          "en": "In this section, we shall focus on the way the microscopic resonant vibration of the piezoelectric ceramic is transmitted and transformed into a macroscopic linear or rotary motion. In general, the transmission of microscopic vibrational motion into macroscopic motion is based on a friction mechanism between the motor stator and rotor.",
          "zh": "在本节中，我们将重点讨论压电陶瓷的微观谐振振动如何传递并转化为宏观直线或旋转运动。 一般来说，微观振动运动转化为宏观运动是基于电机定子和转子之间的摩擦机制。"
        },
        {
          "id": "block-5",
          "en": "This is usually achieved in two steps: first, the vibrational motion is transformed to a microscopic elliptic motion of the stator; then, this elliptic motion is transmitted to the rotor through friction or impact mechanisms. The first step is usually based on a combination of two linear motions on orthogonal axes.",
          "zh": "这通常分两步实现：首先，将振动运动转化为定子的微观椭圆运动；然后，这种椭圆运动通过摩擦或冲击机构传递到转子。 第一步通常基于正交轴上两个线性运动的组合。"
        },
        {
          "id": "block-6",
          "en": "The combination of harmonic motion in two mutually orthogonal directions leads to the wellknown Lissajous loci. Joules Lissajous (1822–1880) was the first to observe and describe these curves during his experiments on optics of vibrational movements.",
          "zh": "两个相互正交方向上的简谐运动的组合产生了众所周知的利萨如轨迹。 Joules Lissajous（1822-1880）是第一个在振动运动光学实验中观察和描述这些曲线的人。"
        },
        {
          "id": "block-7",
          "en": "They are obtained by superposition of orthogonal movements of the form: y = Ay sin(ω y t + ϕy ) (2.8) x = Ax sin(ω x t + ϕx ) (2.9) The exact shape of the Lissajous loci depends on the particular frequencies of the orthogonal movements, ω y and ω x .",
          "zh": "它们是通过叠加以下形式的正交运动而获得的： y = Ay sin(ω y t + phiy ) (2.8) x = Ax sin(ω x t + phix ) (2.9) Lissajous 轨迹的确切形状取决于正交运动 ω y 和 ω x 的特定频率。"
        },
        {
          "id": "block-8",
          "en": "The condition for a closed Lissajous locus wx = wy wx = 2wy wx = 3wy wx = 2/3wy −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x (a) (c) (b) (d) orthogonal movements, ω x /ω y . is given by ω y = ny ω0 (2.10) ω x = nx ω0 (2.11) where ny and nx are integers. For the particular situation in which nx = ny , and ϕx − ϕy = π",
          "zh": "闭李萨如轨迹的条件 wx = wy wx = 2wy wx = 3wy wx = 2/3wy −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x −1−1 1 1 −0.5 −0.5 0.5 0.5 0 0 y x (a) (c) (b) (d) 正交运动，ω x /ω y 。 由下式给出 ω y = ny ω0 (2.10) ω x = nx ω0 (2.11) 其中 ny 和 nx 是整数。 对于 nx = ny 且 phix − phiy = π 的特定情况"
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
          "zh": "电机。 不同频率组合的情况也显示在压电谐振驱动器的实际应用中，涉及相同频率下两个正交振动模式的组合或使用所谓的模式转换原理（参见第 2.3.2 节）。"
        },
        {
          "id": "block-2",
          "en": "Resonanttype piezoelectric motors can be classified into linear or rotational motors, depending on the resulting macroscopic movement. In either case, the travelling waves are normally used as a means of exciting the Lissajous locus at the stator–rotor interface. The next section deals specifically with rotational resonant piezoelectric motors, and in particular with travelling wave ultrasonic motors, TWUMs.",
          "zh": "根据产生的宏观运动，谐振型压电电机可以分为线性电机或旋转电机。 在任何一种情况下，行波通常用作激励定子-转子界面处的李萨如轨迹的手段。 下一节专门讨论旋转谐振压电电机，特别是行波超声波电机 TWUM。"
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
          "zh": "关于谁对旋转超声波电机进行了最初的研究，目前还没有明确的共识，但最有可能的是 20 世纪 60 年代初的苏联。 早在 1964 年，Lavrinenko 就推出了基于压电陶瓷转换器的旋转电机。"
        },
        {
          "id": "block-2",
          "en": "In the early 1970s, a number of implementations of rotational ultrasonic motors based on resonant piezoceramics were known (for instance, Siemens and Matsushita Electric Industries). The next steps towards the development of highperformance ultrasonic motors were taken in Japan. In 1980, Toshiiku Sashida presented an ultrasonic motor with practical industrial applications (driving frequency 27.8 kHz, output torque",
          "zh": "20 世纪 70 年代初期，基于谐振压电陶瓷的旋转超声波电机的多种实现方式已为人所知（例如，西门子和松下电气工业）。 日本采取了下一步开发高性能超声波电机的措施。 1980年，Toshiiku Sashida提出了具有实际工业应用的超声波电机（驱动频率27.8kHz，输出扭矩"
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
          "zh": "后来他推出了行波超声波电机TWUM。 旋转谐振压电电机有多种分类。 所有分类都共享由此产生的旋转宏观运动的概念以及在共振中激发的至少一种振动模式的使用。"
        },
        {
          "id": "block-2",
          "en": "According to the definition of actuators as twoport transducers, rotational piezoelectric motors have an electrical input port and a mechanical output port. The input port can be configured as a singlephase electrical port, as a twophase port or as a multiplephase input port.",
          "zh": "根据执行器作为双端口传感器的定义，旋转压电电机具有电输入端口和机械输出端口。 输入端口可以配置为单相电端口、两相端口或多相输入端口。"
        },
        {
          "id": "block-3",
          "en": "According to this criterion, a first classification of rotational piezoelectric motors relates to the number of electrical phases at the input port. A more useful classification of resonant piezoelectric motors takes into consideration the vibration modes used to produce the elliptic microscopic motion.",
          "zh": "根据该标准，旋转压电电机的第一分类与输入端口处的电相的数量相关。 谐振压电电机的更有用的分类考虑了用于产生椭圆形微观运动的振动模式。"
        },
        {
          "id": "block-4",
          "en": "Generally speaking, a combination of the following resonance modes can be used to excite an elliptic motion at the rotor–stator interface: • Flexural Vibration Mode. The stator of a piezoelectric resonant motor can be considered a laminate elastic structure. The laminate structure is composed of an elastic metal substrate and an exciting piezoelectric ceramic.",
          "zh": "一般来说，以下共振模式的组合可用于在转子-定子界面处激发椭圆运动： • 弯曲振动模式。 压电谐振电机的定子可以认为是叠片弹性结构。 该叠层结构由弹性金属基板和激励压电陶瓷组成。"
        },
        {
          "id": "block-5",
          "en": "This diskshaped laminate structure is usually thin, in the sense that the diameter of the disk is much larger than its thickness, and it therefore meets the Kirchhoff’s assumption. For structures of this type, the Kirchhoff’s assumption established that when a flexural vibration mode is excited, the planes orthogonal to the neutral plane remain orthogonal after the flexural strain is excited.",
          "zh": "这种盘状层压结构通常很薄，因为盘的直径远大于其厚度，因此它满足基尔霍夫的假设。 对于此类结构，基尔霍夫假设成立，当激发弯曲振动模式时，与中性面正交的平面在激发弯曲应变后仍保持正交。"
        },
        {
          "id": "block-6",
          "en": "In this type of vibration mode, the axial displacement is a function of the circumferential Z r φ in the circumferential direction. variable, φ, and the radial variable (see Figure 2.11). u(φ, r) = A cos(kφ)F (r) (2.12) In this equation, k defines the mode order.",
          "zh": "在这种类型的振动模式中，轴向位移是圆周方向上的圆周Z r φ 的函数。 变量、φ 和径向变量（见图 2.11）。 u(φ, r) = A cos(kφ)F (r) (2.12) 在此等式中，k 定义模态阶数。"
        },
        {
          "id": "block-7",
          "en": "The higher the value of k, the larger is the number of nodal diameters. In Equation 2.12, F (r) is a function of the radial variable. The particular shape of F (r) is also a function of the mode order; here again, the higher the mode order, the higher is the number of nodal circumferences.",
          "zh": "k值越高，节点直径的数量越大。 在公式 2.12 中，F (r) 是径向变量的函数。 F (r) 的特定形状也是模阶的函数；同样，模态阶数越高，节点周长的数量就越多。"
        },
        {
          "id": "block-8",
          "en": "• Radial Vibration Mode. In this type of vibration mode, the stator displacement is predominantly radial. This vibration mode is depicted graphically in modes to achieve microscopic elliptic motion.",
          "zh": "• 径向振动模式。在这种类型的振动模式中，定子位移主要是径向的。这种振动模式以图形方式描绘，以实现微观椭圆运动。"
        },
        {
          "id": "block-9",
          "en": "• Longitudinal Vibration Mode. The predominant component in the longitudinal vibration mode is an axial displacement. Figure 2.13 shows this vibration Z r along r axis.",
          "zh": "• 纵向振动模式。纵向振动模式的主要分量是轴向位移。图 2.13 显示了沿 r 轴的振动 Z r 。"
        },
        {
          "id": "block-10",
          "en": "Z r along z axis. Z r upper part of the disk with respect to the lower part along the θ axis. mode schematically.",
          "zh": "Z r 沿 z 轴。 Z r 圆盘上部相对于下部沿 θ 轴的关系。模式示意性地。"
        },
        {
          "id": "block-11",
          "en": "Longitudinal vibration modes are commonly used either in combination with torsional and flexural modes or in what is known as the mode conversion approach. • Torsional Vibration Mode. A torsional vibration mode is predominantly a shear strain resonance mode (see Figure 2.14).",
          "zh": "纵向振动模式通常与扭转和弯曲模式结合使用，或者用于所谓的模式转换方法。 • 扭转振动模式。 扭转振动模式主要是剪切应变共振模式（见图 2.14）。"
        },
        {
          "id": "block-12",
          "en": "As in the previous case, torsional modes are usually combined with other orthogonal modes to obtain the required Lissajous loci. There is a further classification of rotational piezoelectric motors based on the way the different modes are combined to achieve elliptic motion at the stator–rotor interface. 1.",
          "zh": "与前面的情况一样，扭转模式通常与其他正交模式组合以获得所需的利萨如轨迹。 根据不同模式组合以在定子-转子界面实现椭圆运动的方式，旋转压电电机还有进一步的分类。 1."
        },
        {
          "id": "block-13",
          "en": "Motors using resonance modes of the same type. We know that because of the axial symmetry of disk type piezoelectric motors there are two degenerate modal shapes for each outofplane vibration mode. These degenerate modal shapes are shifted by a magnitude equal to λ/4 in the circumferential direction, where λ is the circumferential wavelength.",
          "zh": "使用相同类型共振模式的电机。 我们知道，由于盘式压电电机的轴对称性，每种面外振动模式都有两种简并模态形状。 这些简并模态形状在圆周方向上偏移了等于 λ/4 的幅度，其中 λ 是圆周波长。"
        },
        {
          "id": "block-14",
          "en": "Flexural vibration modes as described above are typical examples of this situation. For this type of vibration mode, it is relatively easy to excite both degenerate modal shapes at the same resonance frequency. The wellknown travelling wave ultrasonic motors belong to this category.",
          "zh": "上述弯曲振动模式是这种情况的典型例子。 对于这种类型的振动模式，在相同的共振频率下激发两种简并模态振型相对容易。 众所周知的行波超声波电机就属于这一类。"
        },
        {
          "id": "block-15",
          "en": "2. Motors using resonance modes of different types at the same frequency. In piezoelectric motors, it is possible to excite an elliptic motion at the rotor–stator interface by a combination of two vibration modes of different types.",
          "zh": "2. 在相同频率下使用不同类型谐振模式的电机。 在压电电机中，可以通过两种不同类型振动模式的组合在转子-定子界面处激发椭圆运动。"
        },
        {
          "id": "block-16",
          "en": "Since different vibration modes will generally occur at different resonance frequencies, the geometry of the stator in this type of motors is designed in such a way that both modes are brought together at the same resonance frequency. This is true of a twopiezoelectric ceramic stator in which the first longitudinal and the first transversal vibration modes are used (see Figure 2.15a).",
          "zh": "由于不同的振动模式通常会在不同的共振频率下出现，因此此类电机中的定子的几何形状被设计为使得两种模式在相同的共振频率下聚集在一起。 对于使用第一纵向和第一横向振动模式的双压电陶瓷定子来说也是如此（见图 2.15a）。"
        },
        {
          "id": "block-17",
          "en": "In such a stator, the frequency of these two vibration modes can be made to coincide by a proper selection of the mass’ length, L0 . Under this condition, both vibration modes are excited and the corresponding Lissajous locus is achieved for the same driving frequency.",
          "zh": "在这样的定子中，通过适当选择质量块长度 L0 可以使这两种振动模式的频率一致。 在此条件下，两种振动模式都被激发，并在相同的驱动频率下获得相应的李萨如轨迹。"
        },
        {
          "id": "block-18",
          "en": "Langevin exciter Rotor Longitudinal Torsional fr Y f f f r f r1 f r2 f s Y (a) (d) (c) (b) (a) different modes at the same resonance frequency, (b) modes of different types at different frequencies, (c) mode separation and (d) mode conversion. 3. Motors using resonance modes of different types at different frequencies.",
          "zh": "Langevin 励磁机转子纵向扭转 fr Y f f f r f r1 f r2 f s Y (a) (d) (c) (b) (a) 相同谐振频率下的不同模式，(b) 不同频率下的不同类型模式，(c) 模式分离和 (d) 模式转换。 3. 电机在不同频率下使用不同类型的谐振模式。"
        },
        {
          "id": "block-19",
          "en": "An approach similar to the above is when two orthogonal vibration modes are combined but one of them is excited out of resonance. As mentioned before, different vibration modes generally occur at different frequencies. In this type of motor, two electrically independent piezoelectric ceramics are used to drive both orthogonal vibrations.",
          "zh": "与上述类似的方法是将两种正交振动模式组合在一起，但其中一种振动模式被激发出共振。 如前所述，不同的振动模式通常发生在不同的频率下。 在这种类型的电机中，使用两个电气独立的压电陶瓷来驱动两个正交振动。"
        },
        {
          "id": "block-20",
          "en": "Both ceramics are excited at the same driving frequency, but owing to the separation of modes, only one of them is driven in resonance. Since the generation of Lissajous loci requires the excitation of orthogonal vibration with a phase lag of 90◦ , the driving electrical signals for both vibration modes are used in quadrature. 4.",
          "zh": "两种陶瓷都以相同的驱动频率激发，但由于模式的分离，只有其中一种被驱动为谐振。 由于李沙如轨迹的产生需要激发相位滞后90°的正交振动，因此两种振动模式的驱动电信号均采用正交。 4."
        },
        {
          "id": "block-21",
          "en": "Motors using mode separation. As discussed earlier, two degenerate modal shapes coexist at the same frequency in outofplane vibration modes of structures exhibiting axial symmetry. In such cases, a small geometrical perturbation of the structure is sufficient to produce nonsymmetric geometry, and this in turn will separate the two degenerate modal shapes.",
          "zh": "使用模式分离的电机。 如前所述，在轴对称结构的面外振动模式中，两种简并模态振型以相同频率共存。 在这种情况下，结构的微小几何扰动足以产生非对称几何形状，这反过来将分离两个简并模态形状。"
        },
        {
          "id": "block-22",
          "en": "In this situation, the use of a frequency of the driving electrical signal within the range bounded by the new resonance peaks corresponding to the separate degenerate modes would result in combined excitation of the two modes (see 5. Motors using mode conversion. In this type of motor, the stator is excited in a single longitudinal vibration mode.",
          "zh": "在这种情况下，使用由对应于单独简并模式的新谐振峰所限定的范围内的驱动电信号的频率将导致两种模式的组合激励（参见5. 使用模式转换的电机。 在这种类型的电机中，定子以单一纵向振动模式激励。"
        },
        {
          "id": "block-23",
          "en": "The longitudinal vibrator is a Langevin transducer (Ueha et al. (1993)), which is placed nearly perpendicular (≈85◦) to a disk rotor. The longitudinal displacement of the Langevin vibration produces an impact, and, thus, the longitudinal displacement is converted to a transversal displacement (see Figure 2.15d).",
          "zh": "纵向振动器是 Langevin 传感器（Ueha 等人，2017）。 (1993))，它几乎垂直于（约 85°）圆盘转子放置。 朗之万振动的纵向位移产生冲击，从而将纵向位移转换为横向位移（见图2.15d）。"
        },
        {
          "id": "block-24",
          "en": "Some of the limiting factors in this kind of motor are the heavy wear at the interface and the difficulty in reversing the rotation direction. Travelling wave ultrasonic motors One of the most successful implementations among the various different resonanttype rotational piezoelectric motors has been what is known as the travelling wave ultrasonic motor, TWUM.",
          "zh": "此类电机的一些限制因素是接口处的严重磨损以及难以反转旋转方向。 行波超声波电机 行波超声波电机 TWUM 是各种不同谐振型旋转压电电机中最成功的实现之一。"
        },
        {
          "id": "block-25",
          "en": "The term ultrasonic refers to the fact that the driving frequency used to excite these motors lies in a frequency range above 20 kHz and is, hence, well beyond the limits of human hearing. TWUMs make use of two degenerate flexural vibration modes at the same frequency to achieve elliptic motion at the rotor–stator interface. Therefore, they belong to the first type of motors as described above (see Figure 2.16).",
          "zh": "超声波一词指的是用于激励这些电机的驱动频率位于 20 kHz 以上的频率范围内，因此远远超出了人类听觉的极限。 TWUM 利用相同频率下的两种简并弯曲振动模式在转子-定子界面处实现椭圆运动。 因此，它们属于上述第一类电机（见图2.16）。"
        },
        {
          "id": "block-26",
          "en": "Wave propagation Elastic substrate Rotor Piezoelectric ceramic A travelling wave is generally described by a mathematical function having the form: u(φ, t) = Af (kφ ± wt) (2.13) In rotational motors, φ is the circumferential variable, k defines the mode order, w is the frequency of the driving electrical signal and t is the time.",
          "zh": "波传播 弹性基板 转子 压电陶瓷 行波通常用数学函数来描述，其形式如下： u(φ, t) = Af (kφ ± wt) (2.13) 在旋转电机中，φ 是周向变量，k 定义模阶，w 是驱动电信号的频率，t 是时间。"
        },
        {
          "id": "block-27",
          "en": "In Equation 2.13, the minus sign leads to a wave travelling in the direction of increasing φ, while the positive sign leads to a wave travelling in the negative direction of φ. The mathematical expression of a travelling wave can be expanded as a sum of two standing waves.",
          "zh": "在公式 2.13 中，负号导致波沿 φ 增加的方向传播，而正号导致波沿 φ 的负方向传播。 行波的数学表达式可以展开为两个驻波之和。"
        },
        {
          "id": "block-28",
          "en": "By assuming a sinusoidal function for the travelling wave and taking into account that the axial displacement, R(r), is a function of the radial distance, Equation 2.13 can be written as u(φ, r, t) = AR(r) cos(kφ) cos(wt) ∓ AR(r) sin(kφ) sin(wt) (2.14) where the function R(r) describes the axial displacement of the stator as a function of the radial variable r.",
          "zh": "假设行波为正弦函数，并考虑到轴向位移 R(r) 是径向距离的函数，方程 2.13 可写为 u(φ, r, t) = AR(r) cos(kφ) cos(wt) ∓ AR(r) sin(kφ) sin(wt) (2.14)，其中函数 R(r) 将定子的轴向位移描述为径向变量 r 的函数。"
        },
        {
          "id": "block-29",
          "en": "Equation 2.14 suggests how a travelling wave can be excited in the ultrasonic motor stator. At a first glance, Equation 2.14 will show the presence of a cosine, and a sine geometrical pattern. The wavelength of these patterns, λ, is defined by k, the mode order, so that λ = 2π/k.",
          "zh": "公式 2.14 说明了如何在超声波电机定子中激发行波。 乍一看，方程 2.14 将显示余弦和正弦几何图案的存在。 这些图案的波长 λ 由模式阶数 k 定义，因此 λ = 2π/k。"
        },
        {
          "id": "block-30",
          "en": "It is common practice to fix both geometrical patterns in the stator’s structure during poling of the piezoelectric ceramic used to drive the travelling wave. In practice, this is done by an alternating poling pattern in the direction of the thickness of the piezoelectric ceramic. Usually, half of the piezoelectric disk is used to define what is called the sine mode while the other half is used for the cosine mode.",
          "zh": "在用于驱动行波的压电陶瓷的极化过程中，通常的做法是将这两种几何图案固定在定子结构中。 实际上，这是通过压电陶瓷厚度方向上的交替极化图案来完成的。 通常，压电盘的一半用于定义所谓的正弦模式，而另一半用于定义余弦模式。"
        },
        {
          "id": "block-31",
          "en": "Each mode is obtained by alternating the poling direction in adjacent circumferential angular sectors of an arc of λ/2. Both modes are circumferentially shifted apart by a magnitude of π/2k, which corresponds to λ/4. The poling pattern is described schematically in Figure 2.17a.",
          "zh": "每个模式是通过交替 λ/2 弧的相邻圆周角扇区中的极化方向来获得的。 两种模式均沿圆周偏移 π/2k，相当于 λ/4。 极化模式如图 2.17a 所示。"
        },
        {
          "id": "block-32",
          "en": "Once the piezoelectric ceramic is poled according to the sine and cosine modes, a twophase electrical excitation circuit is configured. In this way, one of the sides 3λ/4 λ/4 Poling pattern λ Electrode Sinemode electrode Cosinemode electrode (a) (b) poling sine and cosine modes in the piezoelectric ceramic and (b) use of independent electrodes for both modes.",
          "zh": "一旦压电陶瓷根据正弦和余弦模式极化，就配置了两相电激励电路。 这样，一侧 3λ/4 λ/4 极化模式 λ 电极 正弦模式电极 余弦模式电极 (a) (b) 极化压电陶瓷中的正弦和余弦模式，以及 (b) 对两种模式使用独立电极。"
        },
        {
          "id": "block-33",
          "en": "of the piezoelectric ceramic becomes the reference electrode. Independent electrodes are used on the other side of the ceramic for both modes (see Figure 2.17b). By selecting the appropriate phase of the electrical signals applied to both phases, it is possible to select the turning direction of the travelling wave, and, thus, the direction of rotation of the TWUM.",
          "zh": "压电陶瓷的电极成为参比电极。 对于两种模式，陶瓷的另一侧均使用独立电极（见图 2.17b）。 通过选择施加到两个相位的电信号的适当相位，可以选择行波的转向方向，从而选择 TWUM 的旋转方向。"
        },
        {
          "id": "block-34",
          "en": "Let us analyze the case of a thin laminate structure in which a travelling wave is excited (see Figure 2.18). As noted earlier, Kirchhoff’s assumption for flexural vibration of thin structures posits a motion in which planes perpendicular to the neutral plane remain perpendicular after bending. In Kirchhoff’s theory, points on the neutral plane exhibit pure axial displacement in flexion.",
          "zh": "让我们分析一下激发行波的薄层压结构的情况（见图 2.18）。 如前所述，基尔霍夫对薄结构弯曲振动的假设假定垂直于中性平面的平面在弯曲后保持垂直的运动。 在基尔霍夫的理论中，中性面上的点在弯曲时表现出纯轴向位移。"
        },
        {
          "id": "block-35",
          "en": "According to this assumption, the displacement of a point Q at the rotor–stator interface is described by the following expression: \u0001u Q = u(r, ϕ, t)\u0001e z − au ,r (r, ϕ, t)\u0001e r − (a/r)u ,ϕ (r, ϕ, t)\u0001e ϕ (2.15) where u ,r (r, ϕ, t) = ∂u ∂r , u ,ϕ (r, ϕ, t) = ∂u ∂ϕ , \u0001e z, \u0001e r and \u0001e ϕ are unit vectors in axial, radial and circumferential directions respectively and a is the distance from the rotor–stator interface to the neutral plane.",
          "zh": "根据这一假设，转子-定子界面处 Q 点的位移由以下表达式描述： u Q = u(r, phi, t) e z − au ,r (r, phi, t) e r − (a/r)u , phi (r, phi, t) e phi (2.15) 其中 u ,r (r, phi, t) = ∂u ∂r , u , phi (r, Φ, t) = ∂u ∂Φ , e z, e r 和 e Φ 分别为轴向、径向和周向的单位矢量，a 为转子-定子界面到中性面的距离。"
        },
        {
          "id": "block-36",
          "en": "It can readily be shown that the projection of the trajectory of point Q described by Equation 2.15 onto a tangential plane is an ellipse. It can further be demonstrated Neutral plane e z O a er ej that the velocity of point Q in the upper part of the trajectory has a horizontal component only. In TWUMs, both rotor and stator are prestressed against each other by a compressive force.",
          "zh": "很容易证明，方程 2.15 描述的 Q 点轨迹在切平面上的投影是椭圆。 进一步证明中性面 e z O a er ej 轨迹上部 Q 点的速度仅具有水平分量。 在 TWUM 中，转子和定子都通过压缩力相互施加预应力。"
        },
        {
          "id": "block-37",
          "en": "The tangential motion of point Q in the upper part of the trajectory is then transmitted through friction to the rotor. The rotor’s angular velocity can be estimated on the assumption that there is no sliding at the interface.",
          "zh": "轨迹上部Q点的切向运动然后通过摩擦力传递到转子。 转子的角速度可以在界面处没有滑动的假设下估计。"
        },
        {
          "id": "block-38",
          "en": "The linear velocity of the stator’s contact point Q is v t = − a r B kR(r B ) (2.16) where is the rotational frequency of point Q while describing the elliptic trajectory depicted in Figure 2.19, r B is the radius at the point of contact between stator and rotor and R(r B ) is the axial displacement at radius r B .",
          "zh": "定子接触点 Q 的线速度为 v t = − a r B kR(r B ) (2.16) 其中 是 Q 点的旋转频率，同时描述图 2.19 所示的椭圆轨迹，r B 是定子和转子之间接触点的半径，R(r B ) 是半径 r B 处的轴向位移。"
        },
        {
          "id": "block-39",
          "en": "R(r) Z Q Ω j a/r m R(r) Assuming there is no sliding, the angular velocity of the rotor becomes ˙ Rotor = − a r B m R(r B ) r B (2.17) A first glance shows that some qualitative conclusions can be drawn from the analysis of Equation 2.17: 1. The equation suggests a high transmission (reduction) ratio between the driving frequency and the motor’s angular velocity ˙ Rotor .",
          "zh": "R(r) Z Q Ω j a/r m R(r) 假设没有滑动，转子的角速度变为 ˙ Rotor = − a r B m R(r B ) r B (2.17) 乍一看，可以从公式 2.17 的分析中得出一些定性结论： 1。 该方程表明驱动频率和电机角速度 ˙ 转子 之间存在较高的传输（减速）比。"
        },
        {
          "id": "block-40",
          "en": "In fact, since the disk is thin, the ratio a r B is small, typically of the order of 0.01. However, the ratio R(r B ) r B is even smaller, since R(r B ) is of the order of a few microns. The combination of these reduction ratios leads to an aggregate reduction of approximately 1:50,000.",
          "zh": "事实上，由于盘很薄，因此比率 a r B 很小，通常约为 0.01。 然而，比率 R(r B ) r B 甚至更小，因为 R(r B ) 约为几微米。 这些减少比率的组合导致总减少量约为 1:50,000。"
        },
        {
          "id": "block-41",
          "en": "The TWUM can therefore be said to have a large intrinsic transmission ratio. This in turn means that motor operation is characterized by a low rotational speed (a few hundred rotations per minute) and a high torque. 2.",
          "zh": "因此，TWUM 可以说具有很大的固有传动比。这又意味着电机运行的特点是低转速（每分钟几百转）和高扭矩。 2."
        },
        {
          "id": "block-42",
          "en": "Equation 2.17 suggests various different ways in which the TWUMs can be controlled. It can readily be appreciated that the motor’s angular velocity is proportional to the driving electrical frequency, , and to the amplitude of the axial vibration at the contact point R(r B ).",
          "zh": "公式 2.17 提出了控制 TWUM 的各种不同方式。 很容易看出，电机的角速度与驱动电频率 和接触点处的轴向振动幅度 R(r B ) 成正比。"
        },
        {
          "id": "block-43",
          "en": "This suggests that both the amplitude and the frequency of the driving electrical signal could be used to control the angular velocity of the TWUMs. Even though the above consideration is correct, care has to be taken since operation in the proximity of resonance or antiresonance peaks leads to hidden secondary effects that become dominant when the driving frequency is selected as the input control variable.",
          "zh": "这表明驱动电信号的幅度和频率都可以用来控制 TWUM 的角速度。 尽管上述考虑是正确的，但必须小心，因为在谐振或反谐振峰值附近运行会导致隐藏的次级效应，当选择驱动频率作为输入控制变量时，这些次级效应将变得占主导地位。"
        },
        {
          "id": "block-44",
          "en": "In fact, as noted in Section 2.3, the frequency operation range for TWUMs is commonly the region of smooth impedance decay immediately above the antiresonance peak. In this region, a low frequency means proximity to the antiresonance peak, and this in turn means high amplification of the mechanical vibration, R(r B ). The latter is dominant, and the motor’s angular velocity is maximum at low frequency.",
          "zh": "事实上，如第 2.3 节所述，TWUM 的频率工作范围通常是紧邻反谐振峰值上方的平滑阻抗衰减区域。 在此区域中，低频意味着接近反谐振峰值，这又意味着机械振动 R(r B ) 的高放大率。 后者占主导地位，电机的角速度在低频时最大。"
        },
        {
          "id": "block-45",
          "en": "This is the opposite of what one might expect from a first glance at equation 2.17.",
          "zh": "这与乍看方程 2.17 时的预期相反。"
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
          "zh": "上一节包含对旋转谐振压电驱动器的分析，并根据用于在转子-定子界面处激发椭圆运动的特定振动模式对它们进行分类。 随后对这些振动模式组合产生驱动椭圆运动的方式进行了类似的分析。"
        },
        {
          "id": "block-2",
          "en": "Linear resonant piezoelectric drives can be analyzed in a similar way. In order to avoid unnecessary duplication in the analysis of resonant drives, this is restricted to the case of travelling wave linear motors, TWLMs. Travelling wave linear motors, TWLMs TWLMs have specific particularities whose analysis is relevant at this stage.",
          "zh": "线性谐振压电驱动器可以用类似的方式进行分析。 为了避免谐振驱动器分析中不必要的重复，这仅限于行波线性电机（TWLM）的情况。 行波直线电机，TWLM TWLM 具有特定的特性，其分析与现阶段相关。"
        },
        {
          "id": "block-3",
          "en": "In the case of rotational travelling waves, the elastic substrate supporting the travelling wave is an infinite continuum. In the particular case of linear travelling wave motors, the elastic substrate is per se finite.",
          "zh": "在旋转行波的情况下，支撑行波的弹性基底是无限连续体。在线性行波电机的特殊情况下，弹性基底本身是有限的。"
        },
        {
          "id": "block-4",
          "en": "The governing equation for the transverse motion of a beam or rod can be obtained from the statement of equilibrium conditions for a small element of the rod (Graff (1975)): ∂4v ∂x4 + ρA EI ∂2v ∂t2 = q(x, t) (2.18) where v is the transversal displacement of the rod points, x is the longitudinal variable describing the linear position in the rod, ρ is the density of the elastic substrate, A is the section area, E is the Young’s modulus of the substrate, I is the moment of inertia of the cross section, and q(x, t) is a distributed load on the rod in the direction of y.",
          "zh": "梁或杆的横向运动的控制方程可以从杆的小单元的平衡条件的陈述中获得（Graff (1975)）： ∂4v ∂x4 + ρA EI ∂2v ∂t2 = q(x, t) (2.18) 其中 v 是杆点的横向位移，x 是描述杆中线性位置的纵向变量，ρ 是杆的密度弹性基材，A 为截面面积，E 为基材的杨氏模量，I 为截面惯性矩，q(x, t) 为杆上 y 方向的分布载荷。"
        },
        {
          "id": "block-5",
          "en": "If we assume that no load is being applied to the rod, Equation 2.18 becomes ∂4v ∂x4 + ρA EI ∂2v ∂t2 = 0 (2.19) Equation 2.19 can be solved for the transversal displacement v(x, t): v(x, t) = a sin(kx − wt) (2.20) Equation 2.20 represents a sinusoidal wave travelling in the positive direction of x.",
          "zh": "如果我们假设杆上没有施加载荷，则方程 2.18 变为 ∂4v ∂x4 + ρA EI ∂2v ∂t2 = 0 (2.19) 方程 2.19 可以解出横向位移 v(x, t)： v(x, t) = a sin(kx − wt) (2.20) 方程 2.20表示沿 x 正方向传播的正弦波。"
        },
        {
          "id": "block-6",
          "en": "The longitudinal displacement of the rod, u(x, y, t), can be derived by means of the following expression: u(x, y, t) = −y ∂v ∂x = −ayk cos(kx − wt) (2.21) The linear combination of the transverse and longitudinal displacement of Equations 2.20 and 2.21 results in an elliptic motion of the points in the rod (conforming to the Lissajous loci described in previous sections).",
          "zh": "杆的纵向位移 u(x, y, t) 可通过以下表达式得出： u(x, y, t) = −y ∂v ∂x = −ayk cos(kx − wt) (2.21) 方程 2.20 和 2.21 的横向和纵向位移的线性组合导致杆中点的椭圆运动（符合利萨如方程）前面章节中描述的位点）。"
        },
        {
          "id": "block-7",
          "en": "In finite beams or rods, the travelling wave, v(x, t), will be subject to a reflection process at the free end of the elastic domain. As a consequence of this process, a travelling wave is also generated in the opposite direction, v o (x, t).",
          "zh": "在有限梁或杆中，行波 v(x, t) 将在弹性域的自由端经历反射过程。 这一过程的结果是，也会在相反方向生成行波 v o (x, t)。"
        },
        {
          "id": "block-8",
          "en": "The mathematical expression for the latter is v o (x, t) = a sin(kx + wt) (2.22) The linear combination of the travelling waves represented by Equations 2.20 and 2.22 results in a standing wave, u s (x, t), in the beam or rod: v s (x, t) = a cos(kx) cos(wt) (2.23) Langevin exciter Langevin absorber Direction of wave propagation Direction of linear displacement Contact force The longitudinal displacement corresponding to this situation is u s (x, y, t) = −y ∂v s ∂x = −ayk sin(kx) cos(wt) (2.24) For a particular point (x1, y1) in the rod elastic domain, the expression for the transversal and longitudinal displacement in the rod reduces to u s (t) = Ku cos(wt) v s (t) = Kv cos(wt) (2.25) The combination of u s and v s according to Equation 2.25 results in a linear displacement of the points in the elastic domain.",
          "zh": "后者的数学表达式为 v o (x, t) = a sin(kx + wt) (2.22) 方程 2.20 和 2.22 表示的行波的线性组合会在梁或杆中产生驻波 u s (x, t)： v s (x, t) = a cos(kx) cos(wt) (2.23) 朗之万激励器 朗之万吸收器 方向波传播 线性位移方向 接触力 这种情况对应的纵向位移为 u s (x, y, t) = −y ∂v s ∂x = −ayk sin(kx) cos(wt) (2.24) 对于杆弹性域中的特定点 (x1, y1)，杆内横向和纵向位移的表达式可简化为 u s (t) = Ku cos(wt) v s (t) = Kv cos(wt) (2.25) 根据公式 2.25，u s 和 v s 的组合会导致弹性域中的点发生线性位移。"
        },
        {
          "id": "block-9",
          "en": "No elliptic motion is established as a consequence; friction transmission to a linear slider cannot be realized using this scheme. What this analysis indicates in practice is the need for a mechanism of absorption of the travelling wave at the opposite end of the finite elastic domain. In common practice, Langevin vibrators are used at either end of the elastic domain (see Figure 2.20).",
          "zh": "结果，没有建立椭圆运动；使用该方案无法实现线性滑块的摩擦传递。 该分析实际上表明在有限弹性域的另一端需要一种吸收行波的机制。 在通常的实践中，朗之万振动器用在弹性域的任意一端（见图 2.20）。"
        },
        {
          "id": "block-10",
          "en": "One of the Langevin vibrators is used to excite a wave travelling in the direction of the other vibrator. The latter then acts as a vibration absorber. If the situation is reversed, the wave travels in the opposite direction, as does the linear slider.",
          "zh": "其中一个朗之万振动器用于激发沿另一个振动器方向传播的波。 后者则充当振动吸收器。 如果情况相反，波就会沿相反方向传播，线性滑块也是如此。"
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
          "zh": "“bimorph”一词是 Morgan Electro Ceramic 的注册商标，但它已成为由两块粘合陶瓷板组成的弯曲压电元件的常用名称。 包括多个粘合陶瓷板的弯曲压电元件被称为多晶型体。 粘合到弹性基板的单个压电元件的特殊情况通常被称为单压电晶片。"
        },
        {
          "id": "block-2",
          "en": "Bimorphs are thin bending piezoelectric elements made up of a combination of two very thin piezoceramic plates bonded together to a thin metal beam. The poling directions of the ceramic plates in the bimorph and the selection of electrodes are so configured that when electrically powered, one of the ceramics will expand while the other contracts.",
          "zh": "双压电晶片是薄的弯曲压电元件，由粘合在一起的两个非常薄的压电陶瓷板和薄金属梁组合而成。 双压电晶片中陶瓷板的极化方向和电极的选择被配置为当通电时，其中一个陶瓷将膨胀，而另一个陶瓷将收缩。"
        },
        {
          "id": "block-3",
          "en": "The combined mechanical interaction between the two ceramics causes bending of the bimorph. Also, when the bimorph structure is bent, a voltage is developed across the electrodes, as one might expect given the reversibility of the piezoelectric effect. Piezoelectric bimorphs can be poled and configured to operate in series or in parallel.",
          "zh": "两种陶瓷之间的联合机械相互作用导致双压电晶片弯曲。 此外，当双压电晶片结构弯曲时，电极上会产生电压，正如人们所期望的压电效应的可逆性一样。 压电双压电晶片可以极化并配置为串联或并联运行。"
        },
        {
          "id": "block-4",
          "en": "See Figure 2.21 for a schematic representation of both configurations. The parallel configuration has the ceramic plates poled in opposite directions, while the series configuration has them poled in the same direction. In the electrical connections for the parallel configuration, one electrode is connected to the central metal beam, while the second electrode is connected to both outer sides of the ceramics.",
          "zh": "两种配置的示意图见图 2.21。 并联配置的陶瓷板极化方向相反，而串联配置的陶瓷板极化方向相同。 在并联配置的电连接中，一个电极连接到中心金属梁，而第二个电极连接到陶瓷的两个外侧。"
        },
        {
          "id": "block-5",
          "en": "In the series configuration, each electrode is connected to each outer side of the ceramics and no electrical connection is established with the central metal vane. As to the applicability of bimorphs as actuators, the parallel configuration gives twice as much deflection as the series configuration. This follows from the fact that the full driving voltage is applied to each ceramic plate.",
          "zh": "在串联配置中，每个电极都连接到陶瓷的每个外侧，并且与中心金属叶片没有建立电连接。 至于双压电晶片作为致动器的适用性，并联配置提供的偏转是串联配置的两倍。 这是因为每个陶瓷板都施加了全驱动电压。"
        },
        {
          "id": "block-6",
          "en": "The intrinsic characteristics of bimorphs as actuators are 1. High deflection and low force with a relatively low driving voltage (as compared to direct piezoelectric extenders). 2.",
          "zh": "双压电晶片作为致动器的固有特性是： 1.高偏转和低力，驱动电压相对较低（与直接压电延长器相比）。 2."
        },
        {
          "id": "block-7",
          "en": "Voltagelimited operation for both DC and AC applications of the driving voltage. This is because in both series and parallel configurations, one of the ceramic plates is always subject to an electric field opposite to the original polarization. 3.",
          "zh": "适用于驱动电压的直流和交流应用的电压限制操作。 这是因为在串联和并联配置中，其中一个陶瓷板始终受到与原始极化相反的电场。 3."
        },
        {
          "id": "block-8",
          "en": "Stresslimited operation in resonance, resulting in driving voltages about one order of magnitude less than for nonresonance driving. (a) (b) ration.",
          "zh": "谐振时的应力受限操作，导致驱动电压比非谐振驱动低约一个数量级。 (a) (b) 口粮。"
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
          "zh": "堆叠式压电致动器由薄的压电薄片堆叠而成，公共电极沉积在两个连续的薄片之间。 经过这个堆叠过程后，所有交替位置的电极都电连接，从而有两个电端子。 堆叠过程的示意图见图 2.22。"
        },
        {
          "id": "block-2",
          "en": "Each lamina in the stack piezoelectric structure is a few tens of micrometers thick. All the laminae are poled in the direction of the thickness. In addition, the laminae are stacked in such a way that consecutive laminae have opposite poling directions.",
          "zh": "堆叠压电结构中的每个薄片都有几十微米厚。 所有薄层均沿厚度方向极化。 此外，层板以连续层板具有相反极化方向的方式堆叠。"
        },
        {
          "id": "block-3",
          "en": "The result of the electrode disposition described above and the process of alternating lamina poling directions is a device that acts electrically in parallel and mechanically in series. One direct consequence of this is that a high mechanical displacement is achieved for a low applied electric field.",
          "zh": "上述电极布置和交替层板极化方向的过程的结果是产生电并联作用和机械串联作用的装置。 这样做的一个直接后果是，在低施加电场的情况下实现了高机械位移。"
        },
        {
          "id": "block-4",
          "en": "If a voltage V is applied to the stack piezoelectric actuator, every single lamina will respond according to the following equation: li = V d33 (2.26) where d33 is the piezoelectric coefficient and li is the mechanical displacement for the lamina.",
          "zh": "如果将电压 V 施加到堆叠压电致动器，则每个薄片将根据以下等式做出响应： li = V d33 (2.26) 其中 d33 是压电系数，li 是薄片的机械位移。"
        },
        {
          "id": "block-5",
          "en": "The total displacement for the particular configuration of the piezoelectric stack is l = n ∑ i=1 li = nV d33 (2.27) In the event that higher range displacements are required, piezoelectric stacks can be combined in turn. Piezoelectric stacks are commercial devices. Table 2.2 shows a comparative list of several commercial piezoelectric stacks, with particular reference to the operational data for these devices.",
          "zh": "压电叠堆特定配置的总位移为 l = n Σ i=1 li = nV d33 (2.27) 如果需要更高范围的位移，可以依次组合压电叠堆。 压电堆栈是商业设备。 表 2.2 显示了几种商用压电堆栈的比较列表，特别参考了这些设备的运行数据。"
        },
        {
          "id": "block-6",
          "en": "The force level is comparatively Matroc Matroc Ferroperm Ferroperm 7111-03031 7111-05051 Pz27-40x033 Pz29-27x067 Dimensions, mm 3.5 × 3.5 × 3.5 5 × 5 × 3.5 6.8 × 4.7 × 1.7 6.7 × 4.6 × 2.2 Capacitance, nF 70 120 – – Voltage, V +150–−20 +150–−20 100 200 Maximum stroke, μm",
          "zh": "力水平相对 Matroc Matroc Ferroperm Ferroperm 7111-03031 7111-05051 Pz27-40x033 Pz29-27x067 尺寸，mm 3.5 × 3.5 × 3.5 5 × 5 × 3.5 6.8 × 4.7 × 1.7 6.7 × 4.6 × 2.2 电容，nF 70 120 – – 电压，V +150–−20 +150–−20 100 200 最大行程，μm"
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
          "zh": "最大力，N"
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
          "zh": "与压电单压电晶片或双压电晶片相比，最高温度 C <75 <75 <250 <150 更高，而可用位移约为几微米。 使用堆叠式压电致动器可以产生两个重要的结果。"
        },
        {
          "id": "block-2",
          "en": "First, because of the low stroke availability, the application of stacks may require the use of mechanical transmission stages for increased displacement; secondly, the positioning accuracy of piezoelectric stacks can be very high, of the order of nanometers. Because of their operational characteristics, these actuators are normally used in micropositioning stages of vibration suppression systems.",
          "zh": "首先，由于行程可用性较低，堆栈的应用可能需要使用机械传​​动级来增加排量；其次，压电叠堆的定位精度可以非常高，达到纳米量级。 由于其操作特性，这些执行器通常用于振动抑制系统的微定位阶段。"
        },
        {
          "id": "block-3",
          "en": "Piezoelectric stacks belong to the nonresonant category of piezoelectric actuators. This means, in practice, that they can be driven in a frequency range starting from static application of driving voltages. This kind of actuator cannot take advantage of intrinsic mechanical amplification at resonance, and, therefore, high displacements require high electric fields.",
          "zh": "压电堆栈属于压电致动器的非谐振类别。 这意味着，实际上，它们可以在从驱动电压的静态应用开始的频率范围内被驱动。 这种致动器无法利用共振时固有的机械放大，因此高位移需要高电场。"
        },
        {
          "id": "block-4",
          "en": "As noted earlier, in the process of poling, the material of piezoelectric ceramics is cooled down from a high temperature while the poling electric field is being applied. Under operational conditions, there is a threshold for the applicable driving voltage.",
          "zh": "如前所述，在极化过程中，压电陶瓷材料在施加极化电场的同时从高温冷却下来。 在工作条件下，适用的驱动电压存在一个阈值。"
        },
        {
          "id": "block-5",
          "en": "This threshold is imposed to prevent depolarization of the piezoelectric ceramic as a result of high voltages being applied in the opposite direction to the poling voltage. In order to minimize the chance of depolarization of the ceramic, an offset is usually applied to the driving voltage to ensure that there is no depolarization.",
          "zh": "施加该阈值是为了防止由于沿与极化电压相反的方向施加高电压而导致压电陶瓷去极化。 为了尽量减少陶瓷去极化的机会，通常会对驱动电压施加偏移以确保不出现去极化。"
        },
        {
          "id": "block-6",
          "en": "When piezoelectric actuators are driven at alternating voltages, there is an increase in the material temperature, that is, part of the reactive power required to drive a capacitive electrical load is converted to heat.",
          "zh": "当压电执行器在交流电压下驱动时，材料温度会升高，也就是说，驱动电容性电负载所需的部分无功功率会转化为热量。"
        },
        {
          "id": "block-7",
          "en": "This has two main drawbacks: first, the temperature rise must be limited so that the material does not reach its Curie temperature, T c (to prevent depolarization); second, there may be alteration of the adhesive layers between consecutive ceramic laminae. The time response of piezoelectric actuators is highly dependent on the electrical capacitance of the device, which is usually large.",
          "zh": "这有两个主要缺点：首先，必须限制温升，使材料不会达到其居里温度 T c （以防止去极化）；其次，连续陶瓷薄片之间的粘合剂层可能会发生变化。 压电致动器的时间响应高度依赖于设备的电容，该电容通常很大。"
        },
        {
          "id": "block-8",
          "en": "The charge time for the stack actuators is limited by the power source being used, but the discharging time will mainly depend on the actuator capacitance, and this will impose a very strict limit on the response time. Piezoelectric stack manufacturers usually provide maximum charge and discharge electrical currents in their data sheets.",
          "zh": "堆栈执行器的充电时间受到所使用电源的限制，但放电时间主要取决于执行器电容，这将对响应时间施加非常严格的限制。 压电堆栈制造商通常在其数据表中提供最大充电和放电电流。"
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
          "zh": "尺蠖压电执行器的概念工作原理的灵感来自于生物学，特别是一些蚯蚓的运动。 压电尺蠖执行器的特点是能够实现长行程；这些通常受到转子长度的限制。 线性尺蠖致动器由三个独立驱动的压电陶瓷组成。"
        },
        {
          "id": "block-2",
          "en": "The three piezoelectric ceramics can be configured for a variety of implementations, but the most typical one is depicted in Figure 2.23. In this configuration, ceramics 1 and 3 are used in a radial actuation mode to clamp the rotor, while ceramic 2 is driven in an axial mode to effectively produce the displacement. The axial displacement of the rotor is then transformed into a cycle: 1.",
          "zh": "三种压电陶瓷可配置用于多种实现方式，但最典型的一种如图 2.23 所示。 在此配置中，陶瓷1和3用于径向驱动模式以夹紧转子，而陶瓷2以轴向模式驱动以有效地产生位移。 转子的轴向位移则转化为一个循环： 1."
        },
        {
          "id": "block-3",
          "en": "The first ceramic (1) is driven so that it deforms radially in order to clamp the rotor. 2. The second piezoelectric ceramic (2) is actuated in axial mode.",
          "zh": "第一陶瓷 (1) 被驱动，使其径向变形，以夹紧转子。 2. 第二压电陶瓷（2）以轴向模式驱动。"
        },
        {
          "id": "block-4",
          "en": "If the mid position of the second piezoelectric ceramic is taken as the reference position for the axial displacement of the rotor, this step leads to an axial displacement that is half the displacement of the second piezoelectric ceramic. 3. The third ceramic (3) is then actuated in a manner similar to the first one.",
          "zh": "如果以第二压电陶瓷的中间位置作为转子轴向位移的参考位置，则该步骤导致的轴向位移为第二压电陶瓷位移的一半。 3. 然后以与第一个陶瓷类似的方式致动第三个陶瓷(3)。"
        },
        {
          "id": "block-5",
          "en": "It clamps the rotor while the second ceramic is still actuated. 4. At this stage, the first ceramic (1) is relaxed so that it releases the rotor.",
          "zh": "当第二个陶瓷仍然被驱动时，它会夹紧转子。 4. 在此阶段，第一陶瓷 (1) 松弛，从而释放转子。"
        },
        {
          "id": "block-6",
          "en": "3 1",
          "zh": "3 1"
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
          "zh": "2 个电动机。 5. 第二陶瓷 (2) 现在松弛，结果转子再次轴向位移，位移量为第二压电陶瓷总松弛量的一半。"
        },
        {
          "id": "block-2",
          "en": "6. This last step completes the cycle as the third ceramic (3) is relaxed. If this operation sequence is repeated, the resulting operational behavior is similar to that of “stepping” motors.",
          "zh": "6. 当第三个陶瓷 (3) 松弛时，最后一步完成循环。如果重复该操作顺序，所产生的操作行为类似于“步进”电机的操作行为。"
        },
        {
          "id": "block-3",
          "en": "The rate of axial displacement will range from a few nanometers per second to a few meters per second, depending on the duration of the entire cycle and the voltage applied.",
          "zh": "轴向位移的速率范围从每秒几纳米到每秒几米，具体取决于整个周期的持续时间和所施加的电压。"
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
          "zh": "机电一体化教科书中的常见做法是将传感器、执行器和控制器显示为控制运动系统的组成部件。 第 1 章在讨论执行器在机电一体化系统中的作用时已经强调了这一点。 如前所述，执行器本身可以被视为机电一体化系统。"
        },
        {
          "id": "block-2",
          "en": "In the particular case of resonanttype piezoelectric motors, this is apparent from the analysis of their operation conditions. During normal operation of a resonant piezoelectric motor, the driving voltage, the system temperature or the actuator load will be subject to variations. Consequently, the resonant characteristics of the system will be altered.",
          "zh": "在谐振型压电电机的特殊情况下，通过对其运行条件的分析可以明显看出这一点。 谐振压电电机正常工作时，驱动电压、系统温度或执行器负载都会发生变化。 因此，系统的谐振特性将被改变。"
        },
        {
          "id": "block-3",
          "en": "This is commonly sufficient to cause alterations in the operation point. Optimum tracking of the operation point is therefore required to overcome temperature, voltage or load changes. The adaptation of driving conditions can be optimized for tracking the operation point following a threefold approach: 1.",
          "zh": "这通常足以引起操作点的改变。 因此，需要对工作点进行最佳跟踪以克服温度、电压或负载变化。 可以通过三重方法优化驾驶条件的适应以跟踪操作点： 1."
        },
        {
          "id": "block-4",
          "en": "Selection of efficient driving signals. Because piezoelectric motors are resonant, a wise selection of driving signals would aim at providing pure tones or at least at shifting harmonics apart. 2.",
          "zh": "选择有效的驱动信号。由于压电电机是谐振的，因此明智地选择驱动信号将旨在提供纯音或至少将谐波分开。 2."
        },
        {
          "id": "block-5",
          "en": "Signal amplification and tuning. Switching signals used to drive capacitive loads usually cause unacceptable current spikes. This can only be overcome by proper design of a resonant driving circuit suitably attuned to the mechanical resonance characteristics of the piezoelectric motor.",
          "zh": "信号放大和调谐。 用于驱动容性负载的开关信号通常会导致不可接受的电流尖峰。 这只能通过适当设计适合压电电机机械谐振特性的谐振驱动电路来克服。"
        },
        {
          "id": "block-6",
          "en": "3. Resonance tracking. The shift in the mechanical resonance characteristics of the piezoelectric motor must be tracked to ensure an optimum operation point.",
          "zh": "3.共振追踪。必须跟踪压电电机机械共振特性的变化，以确保最佳工作点。"
        },
        {
          "id": "block-7",
          "en": "In the coming paragraphs, we focus on an analysis of the three different steps for optimum operation of resonant piezoelectric motors.",
          "zh": "在接下来的段落中，我们将重点分析谐振压电电机最佳运行的三个不同步骤。"
        },
        {
          "id": "block-8",
          "en": "The threestep approach is a typical example of a mechatronic approach to system design: the analysis of the mechanical characteristics of the plant (piezoelectric motor) leads to the formulation of control strategies (which are based on tuning electronic drivers) to track the operation point and thus enhance overall operation and performance.",
          "zh": "三步法是机电一体化系统设计方法的典型示例：对设备（压电电机）机械特性的分析导致制定控制策略（基于调谐电子驱动器）来跟踪操作点，从而提高整体操作和性能。"
        },
        {
          "id": "block-9",
          "en": "Selection of efficient driving signals The piezoelectric motor is a resonant structure that behaves as a mechanical filter. The optimum driving signal for a piezoelectric ceramic is a pure sinusoidal signal tuned to the resonance frequency of the mechanical part. Any undesired harmonic in the driving signal will be filtered by the piezoelectric ceramic, causing overall heating and loss of efficiency.",
          "zh": "选择有效的驱动信号压电电机是一种谐振结构，充当机械滤波器。 压电陶瓷的最佳驱动信号是调谐到机械部件谐振频率的纯正弦信号。 驱动信号中任何不需要的谐波都会被压电陶瓷过滤，导致整体发热和效率损失。"
        },
        {
          "id": "block-10",
          "en": "Digital electronic circuits are preferred to their analog counterparts. The solution is usually to use switching techniques to set up the driving signal. Switched signals can be configured to reduce the undesirable effects of harmonics of the fundamental resonance frequency.",
          "zh": "数字电子电路优于模拟电子电路。 解决方案通常是使用开关技术来设置驱动信号。 开关信号可以被配置为减少基本谐振频率的谐波的不良影响。"
        },
        {
          "id": "block-11",
          "en": "According to Schaaf and van der Broeck (1995), if, for instance, bipolar symmetrical voltage pulses are used in particular, the frequency spectrum can be demonstrated to be Vn = 4 π V sin nπ w n [1 − (−1) n]",
          "zh": "根据 Schaaf 和 van der Broeck (1995)，如果特别使用双极对称电压脉冲，则频谱可以证明为 Vn = 4 π V sin nπ w n [1 − (−1) n]"
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
          "zh": "信号的占空比。选择双极性对称信号会导致零偶次谐波。此外，如果驱动信号的占空比为 1/3，则三次谐波消失（见图 2.24）。"
        },
        {
          "id": "block-2",
          "en": "The combination of these two conditions produces an acceptable driving signal that is practically equivalent to a pure tone at the resonance frequency. Signal amplification and tuning The inverter output voltage of the previous stage cannot be applied directly to the motor since the switched voltage would cause high current spikes at the clamped capacitance C0 .",
          "zh": "这两个条件的组合产生了可接受的驱动信号，该信号实际上相当于谐振频率下的纯音。 信号放大和调谐 前级逆变器输出电压不能直接施加到电机，因为开关电压会在钳位电容C0 处产生高电流尖峰。"
        },
        {
          "id": "block-3",
          "en": "In order to overcome this problem, an inductor has to be placed in series to the motor. The inductor will cause a slight drop in the fundamental voltage. This must be limited by means of an additional serial capacitor.",
          "zh": "为了克服这个问题，必须在电机上串联一个电感器。电感会导致基波电压略有下降。这必须通过额外的串联电容器来限制。"
        },
        {
          "id": "block-4",
          "en": "The inductor and the capacitor together form a serial resonant filter (see Schaaf and van der Broeck (1995)) whose resonant frequency must be tuned to that of the motional impedance of the motor. The inverter voltage is adapted to the required voltage at the motor by means of an inductive transformer.",
          "zh": "电感器和电容器一起形成串联谐振滤波器（参见 Schaaf 和 van der Broeck (1995)），其谐振频率必须调谐到电机运动阻抗的频率。 逆变器电压通过感应变压器适应电机所需的电压。"
        },
        {
          "id": "block-5",
          "en": "In an optimum situation, the leakage inductance of the transformer can be used as the reactive component of the resonant series filter (see Schaaf and van der Broeck (1995)). The transformer’s secondary inductance is used to compensate for the clamped capacitance of the motor. Again, the parallel resonance frequency must be tuned to the resonant frequency of the motional",
          "zh": "在最佳情况下，变压器的漏感可以用作谐振串联滤波器的无功分量（参见Schaaf和van der Broeck（1995））。 变压器的次级电感用于补偿电机的钳位电容。 同样，并联谐振频率必须调谐到运动的谐振频率。"
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
          "zh": "−0.2 −0.1 0.1 0 0.2 0.3 0.4 0.5 0.6 0.7 0.8 占空比为 1/3 的双极对称 1/3 占空比切换双极对称信号的频率谐波幅度频谱。 V0 Lm Cm Rm Co Cr Ve Ve Ve C1 逆变器驱动电压 并联谐振转换器 压电谐振器 串联谐振转换器 L1 L2 t1 t1 t t cuit。"
        },
        {
          "id": "block-2",
          "en": "Proper selection of the various different electric parameters produces resonance matching and parasitic resonance rejection. impedance of the motor. The design of the resonant electrical circuit must fulfill the condition of matching the resonant frequency of the motional impedance, the series resonant filter and the parallel resonant filter.",
          "zh": "正确选择各种不同的电参数可以产生谐振匹配和寄生谐振抑制。 电机的阻抗。 谐振电路的设计必须满足动阻抗、串联谐振滤波器和并联谐振滤波器的谐振频率匹配的条件。"
        },
        {
          "id": "block-3",
          "en": "Following the nomenclature of Figure 2.25, the condition for matching the series and parallel filters to the motional impedance of the piezoelectric motor is formulated mathematically by the following expression: L m C m = L s C1 = L2(C0 + C2) (2.29) In addition, care must be taken to avoid excessive reactive currents due to parasitic resonance in the circuit.",
          "zh": "按照图 2.25 的命名法，串联和并联滤波器与压电电机的运动阻抗相匹配的条件可以通过以下表达式进行数学表述： L m C m = L s C1 = L2(C0 + C2) (2.29) 此外，必须注意避免由于电路中的寄生谐振而产生过大的无功电流。"
        },
        {
          "id": "block-4",
          "en": "The first parasitic resonance, wp1 , (involving the path comprising C1 and L1 ) affects transient situations when switching on because its resonance frequency is relatively lower. The second parasitic resonance, wp2 , is due to the serial connection of clamped capacitance, compensation capacitors and the leakage inductance.",
          "zh": "第一寄生谐振wp1（涉及包括C1和L1的路径）在接通时影响瞬态情况，因为其谐振频率相对较低。 第二个寄生谐振wp2 是由于串联的钳位电容、补偿电容和漏感造成的。"
        },
        {
          "id": "block-5",
          "en": "Since this second parasitic resonance frequency is relatively higher than the motional resonance frequency, care must be taken not to let this parasitic component come into proximity with harmonics of the fundamental frequency. Here, we can profitably select bipolar symmetrical switched signals with a duty cycle of 1/3. For this particular signal, the first nonzero harmonic is 5wr .",
          "zh": "由于该第二寄生谐振频率相对高于运动谐振频率，因此必须注意不要让该寄生分量接近基频的谐波。 在这里，我们可以有利地选择占空比为 1/3 的双极对称开关信号。 对于这个特定信号，第一个非零谐波是 5wr 。"
        },
        {
          "id": "block-6",
          "en": "It would be sufficient to limit this second parasitic resonance, for instance, to wp2 ≤ 3wr . The effect of unmatched power drives is twofold: first, unadapted impedances produce a decrease in the driving voltage; second, they also result in a phase shift with respect to the reference phase shift. This can be seen particularly in Ideally, both signals should exhibit a phase lag of 90◦ and similar amplitudes when",
          "zh": "例如，将第二寄生谐振限制为 wp2 ≤ 3wr 就足够了。 不匹配的功率驱动会产生双重影响：首先，不匹配的阻抗会导致驱动电压下降；其次，它们还会导致相对于参考相移的相移。 这尤其可以在理想情况下看到，当"
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
          "zh": "−200 −150 −100 −50 50 0 100 150 200"
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
          "zh": "时间 (μs) 电压 (V)"
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
          "zh": "实现了完美的阻抗匹配。 在这种情况下，第一相阻抗匹配，但第二相不匹配。 因此，第二驱动信号的电压电平降低并且相位滞后移动，使得两个信号几乎异相。"
        },
        {
          "id": "block-2",
          "en": "Resonance tracking As explained in previous sections, a piezoelectric resonator is characterized by a capacitive electrical load in a frequency range below the resonance frequency and above the antiresonance frequency. In between, the electrical equivalent to the piezoelectric ceramic is inductive. This means that the piezoelectric ceramic becomes a pure resistive electrical load at resonance and antiresonance.",
          "zh": "谐振跟踪 如前几节所述，压电谐振器的特征在于电容性电负载处于低于谐振频率和高于反谐振频率的频率范围内。 在这两者之间，压电陶瓷的电气等效性是电感性的。 这意味着压电陶瓷在谐振和反谐振时变成纯阻性电负载。"
        },
        {
          "id": "block-3",
          "en": "This is consistent with the fact that at resonance and antiresonance the reactive part of the electrical impedance vanishes, thus producing peak efficiency. The resonance and antiresonance frequency of a piezoelectric actuator is generally subject to perturbations during operation. For optimal operation, a tracking electronic drive is required.",
          "zh": "这与以下事实一致：在谐振和反谐振时，电阻抗的电抗部分消失，从而产生峰值效率。 压电致动器的谐振和反谐振频率在操作期间通常会受到扰动。 为了实现最佳操作，需要跟踪电子驱动器。"
        },
        {
          "id": "block-4",
          "en": "The functional characteristics of such a tracking drive are depicted in the block diagram of Figure 2.27. The blocks in the tracking system are as follows: 1. Error phase detector.",
          "zh": "这种跟踪驱动器的功能特性如图 2.27 的框图所示。跟踪系统中的模块如下： 1. 误差相位检测器。"
        },
        {
          "id": "block-5",
          "en": "The role of this block is to provide an error signal proportional to the phase error between driving voltage and current drawn. 2. Loop controller.",
          "zh": "该模块的作用是提供与驱动电压和电流之间的相位误差成比例的误差信号。 2.循环控制器。"
        },
        {
          "id": "block-6",
          "en": "The loop controller receives the phase error between current and voltage as an input and provides a control signal that asymptotically tracks the resonance frequency of the piezoelectric actuator. 3. The plant.",
          "zh": "环路控制器接收电流和电压之间的相位误差作为输入，并提供渐近跟踪压电致动器的谐振频率的控制信号。 3. 植物。"
        },
        {
          "id": "block-7",
          "en": "This block represents the piezoelectric actuator itself. It receives the control action and performs at resonance independently of external perturbations. In practical terms, the design of a resonance frequency–tracking electronic drive is commonly based on a phaselocked loop, PLL, technique.",
          "zh": "该块代表压电致动器本身。 它接收控制动作并独立于外部扰动以共振方式执行。 实际上，谐振频率跟踪电子驱动器的设计通常基于锁相环 PLL 技术。"
        },
        {
          "id": "block-8",
          "en": "A PLL consists of two main building blocks, namely the phase detector, PD, and the voltage controlled oscillator, VCO. In a common implementation, a phase detector works as an up–down counter, in which the up count is edge triggered by the first input signal (the current; see Error phase detector fr f Loop controller Piezoactuator (Plant) antiresonance operation.",
          "zh": "PLL 由两个主要构建块组成，即相位检测器 PD 和压控振荡器 VCO。 在常见的实现中，相位检测器用作可逆计数器，其中向上计数由第一个输入信号（电流；请参阅误差相位检测器 fr f 环路控制器压电致动器（植物）反谐振操作）边沿触发。"
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
          "zh": "时间（微秒）"
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
          "zh": "消耗的电流；中线为开关驱动电压；下面的线是鉴相器的开关输出信号。 图 2.28 中的上线），向下计数也是由第二个输入信号（电压；参见图 2.28 中的中线）边沿触发。"
        },
        {
          "id": "block-2",
          "en": "According to this description, the phase detector output is made up of a train of pulses, whose width is proportional to the phase lag between voltage and current drawn (see the lower line in Figure 2.28). The phase detector provides an output signal proportional to the difference in phase between current drawn and voltage: v e = Kd (θi − θo ) = Kd ε (2.30) Ve (s) ε(s) = Kd (2.31) where Kd is the phase detector gain.",
          "zh": "根据此描述，相位检测器输出由一系列脉冲组成，其宽度与电压和电流之间的相位滞后成正比（参见图 2.28 中的下线）。 鉴相器提供与电流和电压之间的相位差成比例的输出信号： v e = Kd (θi − θo ) = Kd ε (2.30) Ve (s) ε(s) = Kd (2.31) 其中 Kd 是鉴相器增益。"
        },
        {
          "id": "block-3",
          "en": "In order to obtain the desired performance from the error phase detector in The combination of the phase detector and the low pass filter will produce an analog error signal proportional to the phase difference between voltage and current. The VCO generates a switching signal with a fundamental frequency proportional to its input voltage.",
          "zh": "为了从误差相位检测器获得期望的性能，相位检测器和低通滤波器的组合将产生与电压和电流之间的相位差成比例的模拟误差信号。 VCO 生成基频与其输入电压成比例的开关信号。"
        },
        {
          "id": "block-4",
          "en": "The duty cycle of the switching signal can generally be selected to suit the requirements of the application and will not interfere with the phase detector described above. As explained at the beginning of this section, a suitable choice for the duty cycle would be around 1/3.",
          "zh": "通常可以选择开关信号的占空比以适应应用的要求并且不会干扰上述相位检测器。 正如本节开头所解释的，占空比的合适选择约为 1/3。"
        },
        {
          "id": "block-5",
          "en": "The VCO will provide a deviation from the central frequency, which is proportional to the analog error signal from the phase detector and loop filter, v f .",
          "zh": "VCO 将提供与中心频率的偏差，该偏差与来自鉴相器和环路滤波器的模拟误差信号 v f 成正比。"
        },
        {
          "id": "block-6",
          "en": "This is mathematically expressed as ω = K0v f (2.32) Since frequency is a derivative of phase, the above formulation for the functional characteristics of the VCO can be described as s\u000evco (s) = K0 Vp (s) (2.33) It can readily be appreciated that Equation 2.33 describes the VCO as a pure integrator. As a result, the closed loop transfer function of the tracking loop is always a Type I loop.",
          "zh": "这在数学上表示为 ω = K0v f (2.32) 由于频率是相位的导数，因此 VCO 功能特性的上述公式可以描述为 s vco (s) = K0 Vp (s) (2.33) 可以容易地理解，公式 2.33 将 VCO 描述为纯积分器。 因此，跟踪环路的闭环传递函数始终是 I 型环路。"
        },
        {
          "id": "block-7",
          "en": "If the tracking circuit implements an appropriate controller together with the VCO in a cascade configuration, this will give the functionality of the loop controller in Figure 2.27. To be able to reject permanent DC components in the error signal, the appropriate low pass filter must be selected. In the simplest configuration, a classic passive low pass filter can be implemented.",
          "zh": "如果跟踪电路在级联配置中与 VCO 一起实现适当的控制器，则将提供图 2.27 中环路控制器的功能。 为了能够抑制误差信号中的永久直流分量，必须选择适当的低通滤波器。 在最简单的配置中，可以实现经典的无源低通滤波器。"
        },
        {
          "id": "block-8",
          "en": "As discussed by Gardner (1979), a passive low pass filter gives good results in most tracking applications. The transfer function for the low pass filter is Vf (s) Ve (s) = 1 + sτ2",
          "zh": "正如 Gardner (1979) 所讨论的，无源低通滤波器在大多数跟踪应用中都能给出良好的结果。低通滤波器的传递函数为 Vf (s) Ve (s) = 1 + sτ2"
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
          "zh": "(2.34) 跟踪电路的开环传递函数可写为 G(s) = Kd K0 s"
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
          "zh": "(2.35) 与包含相位检测器（公式 2.31）、环路低通滤波器（公式 2.34）和 VCO（公式 2.33）的跟踪电路相对应的闭环传递函数为 H (s) = G(s)"
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
          "zh": "(2.36) 跟踪系统的稳定性可以很容易地用终值定理来表示，其数学公式为 lim t→∞ h(t) = lim s→0 sH (s) (2.37) 对于经典低通无源滤波器的特殊情况，系统是类型 I，即跟踪环路中有一个完美的积分器——由 VCO 提供的积分器。"
        },
        {
          "id": "block-2",
          "en": "When directly applied, the final value theorem predicts that the system will track step changes in the phase error without permanent phase error in the steady state. However, the system will lead to permanent constant error in the steady state if a ramp phase error is introduced.",
          "zh": "当直接应用时，终值定理预测系统将跟踪相位误差的阶跃变化，而在稳定状态下不会出现永久相位误差。 然而，如果引入斜坡相位误差，系统将导致稳定状态下的永久恒定误差。"
        },
        {
          "id": "block-3",
          "en": "If we wish to ensure zero tracking error upon application of ramp phase errors, the looptracking circuit should be completed either by a classic PI controller or by making use of active filters with a transfer function: Vf (s) Ve (s) = 1 + sτ2 sτ1 (2.38) In that case, the tracking loop would be converted to a Type II system comprising two perfect integrators.",
          "zh": "如果我们希望在应用斜坡相位误差时确保零跟踪误差，则应通过经典 PI 控制器或使用具有传递函数的有源滤波器来完成环路跟踪电路： Vf (s) Ve (s) = 1 + sτ2 sτ1 (2.38) 在这种情况下，跟踪环路将转换为包含两个完美积分器的 II 类系统。"
        },
        {
          "id": "block-4",
          "en": "Consequently, ramp changes in the phase error would be perfectly tracked without permanent steady state errors.",
          "zh": "因此，相位误差的斜坡变化将被完美地跟踪，而不会产生永久的稳态误差。"
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
          "zh": "正如我们在前面几节中讨论的，在谐振-反谐振区域之外的频带中驱动的压电致动器的电等效负载是电容器。 对于堆叠式压电致动器来说，该电容负载更大。"
        },
        {
          "id": "block-2",
          "en": "For a capacitive load, the following approximate electromechanical relations apply: l ≈ Q (2.39) v p ≈ i ap ≈ di dt Hysteretic behavior of voltagedriven applications It is known (see for instance D¨orlemann et al. (2002)) that in open loop control of piezoelectric actuators the relationship between displacement and driving voltage is nonlinear and hysteretic.",
          "zh": "对于容性负载，适用以下近似机电关系： l ≈ Q (2.39) v p ≈ i ap ≈ di dt 电压驱动应用的迟滞行为 已知（例如，参见 Dorlemann 等人，2014 年）。 (2002))指出，在压电致动器的开环控制中，位移和驱动电压之间的关系是非线性和滞后的。"
        },
        {
          "id": "block-3",
          "en": "On the other hand, the relationship between displacement and charge or current drawn is quasilinear and nearly nonhysteretic. This situation is illustrated in Figure 2.29. The effect of the nonlinear, hysteretic behavior in the voltage–strain relationship produces what is called multimode excitation of voltagedriven piezoelectric actuators.",
          "zh": "另一方面，位移与电荷或电流之间的关系是准线性且几乎非滞后的。 这种情况如图 2.29 所示。 电压-应变关系中的非线性、迟滞行为的影响产生了所谓的电压驱动压电执行器的多模式激励。"
        },
        {
          "id": "block-4",
          "en": "The situation can be summarized as follows: when a pure tone voltage excitation is applied to the actuator, the corresponding mechanical vibration will exhibit a nonzero spectrum at the different harmonics of the fundamental voltage frequency. Then again, if a pure tone current signal is applied to the actuator, the resulting mechanical vibration will also be a pure tone.",
          "zh": "这种情况可以概括如下：当对执行器施加纯音电压激励时，相应的机械振动将在基波电压频率的不同谐波处呈现非零频谱。 再说一遍，如果将纯音电流信号施加到致动器，则产生的机械振动也将是纯音。"
        },
        {
          "id": "block-5",
          "en": "As a result, there is increased heating when voltagedriven actuators are used, and thus the dynamic range of the system is reduced. This situation is summarized in Figure 2.29b. e (a) (b) e i, q V by means of current or charge control.",
          "zh": "因此，当使用电压驱动执行器时，发热会增加，从而系统的动态范围会减小。 图 2.29b 总结了这种情况。 e (a) (b) e i, q V 通过电流或电荷控制。"
        },
        {
          "id": "block-6",
          "en": "Control of actuator stiffness In normal, passive materials, the mechanical stiffness, K, is defined as the ratio of applied force to deformation: K = dF dl (2.40) In the case of piezoelectric actuators, because of the active nature of the material there is the possibility of programmable stiffness.",
          "zh": "执行器刚度的控制 在正常的无源材料中，机械刚度 K 定义为施加的力与变形的比率： K = dF dl (2.40) 在压电执行器的情况下，由于材料的主动性质，存在可编程刚度的可能性。"
        },
        {
          "id": "block-7",
          "en": "The forcedeformation ratio for piezoelectric actuators is highly dependent on the electrical boundary conditions applied to the actuator electrodes. In this context, there are three possible situations, depending on the electrical boundary conditions: 1. Shortcircuited or voltagecontrolled actuators.",
          "zh": "压电致动器的受迫变形比高度依赖于施加到致动器电极的电边界条件。 在这种情况下，根据电气边界条件，存在三种可能的情况： 1. 短路或电压控制执行器。"
        },
        {
          "id": "block-8",
          "en": "In this situation, a “low” stiffness is achieved. Under deformation, the charge generated by the piezoelectric effect is free to flow and equilibrate. 2.",
          "zh": "在这种情况下，实现了“低”刚度。在变形下，压电效应产生的电荷可以自由流动并达到平衡。 2."
        },
        {
          "id": "block-9",
          "en": "Open circuit or charge-/currentcontrolled actuators. In this situation, the charge is blocked at the electrodes of the actuator when a force is applied. Blocking of the charge (either because the circuit is open or because the control fixes its value) results in an electric field that will oppose the force.",
          "zh": "开路或充电/电流控制执行器。 在这种情况下，当施加力时，电荷被阻挡在致动器的电极处。 电荷的阻塞（或者因为电路开路或者因为控制器固定其值）会产生与力相反的电场。"
        },
        {
          "id": "block-10",
          "en": "The outcome of this situation is greater stiffness (twice as much as in case 1). 3. Impedancecontrolled drives.",
          "zh": "这种情况的结果是更大的刚度（是情况 1 的两倍）。 3. 阻抗控制驱动器。"
        },
        {
          "id": "block-11",
          "en": "In this case, the control loop applied to the piezoelectric actuator sets the reference impedance for the piezoelectric drive. At the upper limit, when the reference impedance is very high, the control strategy is equivalent to a position control of the piezoelectric motor, and the apparent stiffness of the actuator is virtually infinite.",
          "zh": "在这种情况下，应用于压电致动器的控制环路设置压电驱动器的参考阻抗。 在上限，当参考阻抗非常高时，控制策略相当于压电电机的位置控制，并且执行器的表观刚度实际上是无限的。"
        },
        {
          "id": "block-12",
          "en": "In this case again, the charge or current control of piezoelectric drives opens up the possibility of dynamic modulation of piezoelectric drive stiffness.",
          "zh": "在这种情况下，压电驱动器的充电或电流控制开启了动态调制压电驱动器刚度的可能性。"
        },
        {
          "id": "block-13",
          "en": "Current control of piezoelectric actuators It is clear from the above analysis that current control of piezoelectric drives offers significant advantages over voltage control: • hysteretic behavior is reduced to a minimum, • the displacement to drive signal relationship is linearized, • heat losses are reduced, leading to better dynamic driving and • the stiffness of the actuator can be modulated.",
          "zh": "压电执行器的电流控制 从上述分析中可以清楚地看出，压电驱动器的电流控制比电压控制具有显着优势： • 迟滞行为降至最低， • 位移与驱动信号关系线性化， • 热损失减少，从而实现更好的动态驱动，以及 • 可以调节执行器的刚度。"
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
          "zh": "压电致动器的各种不同类型和致动原理涵盖了广泛的操作特性。 它们可以提供短行程操作（几微米），包括旋转和平移，具有亚纳米分辨率（压电堆栈），但它们也可以在线性和旋转执行器中提供无限行程操作（尺蠖和行波概念）。"
        },
        {
          "id": "block-2",
          "en": "The following sections analyze the main operational characteristics of piezoelectric actuators and their behavior upon scaling.",
          "zh": "以下部分分析了压电执行器的主要操作特性及其在缩放时的行为。"
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
          "zh": "静态性能压电陶瓷中的压电效应会导致 0.1-0.6% 的静态应变，具体取决于材料的特性。 对于单晶压电陶瓷，这些数字高达 1.5-1.7%。"
        },
        {
          "id": "block-2",
          "en": "Similarly, in the case of direct application of the piezoelectric effect, blocked forces are subject to an upper pressure limit of the order of 100–110 MPa; for single crystals, however, the maximum pressure is as high as 130–140 MPa. Direct application of the piezoelectric effect is not common.",
          "zh": "同样，在直接应用压电效应的情况下，阻挡力的压力上限为 100-110 MPa 量级；然而，对于单晶来说，最大压力高达130-140 MPa。 直接应用压电效应并不常见。"
        },
        {
          "id": "block-3",
          "en": "Actuators generally employ specific geometrical configurations to achieve output mechanical energy, and the available stroke and force will be highly dependent on the configuration. We would note a number of characteristics of static performance of nonresonant piezoelectric actuators: 1. Stack piezoelectric actuators.",
          "zh": "执行器通常采用特定的几何配置来实现输出机械能，并且可用的行程和力将高度依赖于配置。 我们会注意到非谐振压电执行器的静态性能的一些特征： 1. 堆叠压电执行器。"
        },
        {
          "id": "block-4",
          "en": "These provide high force and low stroke. The maximum stroke may vary in absolute terms from a few micrometers to a few millimeters. The blocked force varies within the range of 102 –105 N.",
          "zh": "这些提供了高力和低行程。最大行程绝对值可以从几微米到几毫米变化。阻挡力在 102 –105 N 范围内变化。"
        },
        {
          "id": "block-5",
          "en": "2. Piezoelectric benders. Multimorph configurations produce a medium stroke and very limited force.",
          "zh": "2.压电弯曲器。多晶型配置产生中等行程和非常有限的力。"
        },
        {
          "id": "block-6",
          "en": "In absolute terms, the stroke can vary between 10−2 and 10 mm and thus occupies the range between stacks and inchworm actuators (see next item). This configuration produces virtually no force, and values tend to be situated in a range of 10−2 –102 N. Bender (Circular) Bender (Rectangular) Inchworm Stacks 10−2 10−2 10−1 100 101 102 103 104 105 10−3 10−1 100 101 102 Stroke (mm) Force (N) actuators.",
          "zh": "从绝对值来看，行程可以在 10−2 和 10 mm 之间变化，因此占据堆栈和尺蠖执行器之间的范围（参见下一项）。 这种配置实际上不产生力，并且值往往位于 10−2 –102 N 的范围内。 弯曲机（圆形） 弯曲机（矩形） Inchworm 堆栈 10−2 10−2 10−1 100 101 102 103 104 105 10−3 10−1 100 101 102 行程 (mm) 力 (N) 执行器。"
        },
        {
          "id": "block-7",
          "en": "3. Inchworm actuators. The force delivered by these actuators is in the same range as benders, but the stroke can be very high and may even be unlimited in some configurations.",
          "zh": "3.尺蠖执行器。这些执行器传递的力与弯曲机的范围相同，但行程可能非常高，在某些配置中甚至可能是无限的。"
        },
        {
          "id": "block-8",
          "en": "These are stepper motors and may present resolutions down to the nanometer scale. The relative positions of piezoelectric actuators in terms of stroke and force are shown in Figure 2.30. They complement each other in both actuation indicators and span a suitably wide area on the stroke versus force plane.",
          "zh": "这些是步进电机，可以提供低至纳米级的分辨率。 压电执行器在行程和力方面的相对位置如图 2.30 所示。 它们在两个致动指示器中相互补充，并在行程与力平面上跨越适当宽的区域。"
        },
        {
          "id": "block-9",
          "en": "Resonant piezoelectric actuators are characterized by unlimited travel or stroke, and so their static performance is best characterized in terms of maximum speed (either rotational or translational) and stall torque or force respectively. The data for rotational and translational actuators is scanty.",
          "zh": "谐振压电执行器的特点是无限行程或行程，因此它们的静态性能最好分别用最大速度（旋转或平移）和失速扭矩或力来表征。 旋转和平移执行器的数据很少。"
        },
        {
          "id": "block-10",
          "en": "There are only a few implementations commercially available, but interesting conclusions can be derived from a comparison of the performances of resonant piezoelectric drives and their electromagnetic counterparts, which have become the principal actuator technology. Travelling wave ultrasonic (rotational) motors, TWUMs, complement electromagnetic DC motors in terms of both torque and (rotational) speed.",
          "zh": "目前商用的实现方案只有少数，但通过谐振压电驱动器及其电磁驱动器的性能比较，可以得出有趣的结论，这些驱动器已成为主要的执行器技术。 行波超声波（旋转）电机 TWUM 在扭矩和（旋转）速度方面对电磁直流电机进行了补充。"
        },
        {
          "id": "block-11",
          "en": "For output mechanical power up to 7–8 W, TWUMs can be driven at a maximum speed of the order of 1000 rpm while the stall torque can be up to 1 Nm. Compare this to DC motors (with the same power limitation), which are usually driven at rotational speeds in the region of 10 4 rpm with maximum stall torque of 10–100 mNm.",
          "zh": "对于高达 7-8 W 的输出机械功率，TWUM 可以以 1000 rpm 的最大速度驱动，同时失速扭矩可达 1 Nm。 与直流电机（具有相同功率限制）相比，直流电机通常以 10 4 rpm 范围内的转速驱动，最大失速扭矩为 10–100 mNm。"
        },
        {
          "id": "block-12",
          "en": "This situation, depicted in Figure 2.31, indicates that mechanical impedance matching is typically better in the piezoelectric technology.",
          "zh": "这种情况如图 2.31 所示，表明压电技术中的机械阻抗匹配通常更好。"
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
          "zh": "100 101 102 103"
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
          "zh": "速度 (rpm) 扭矩 (mNm) 旋转超声波电机 直流电机 直流无刷高扭矩和直流（高速低扭矩）电机，功率高达 7–8 W。 动态性能 本节讨论执行器的时间响应及其能量特性。 当涉及压电效应的直接应用时，耦合因子可以很好地指示换能效率。"
        },
        {
          "id": "block-2",
          "en": "The coupling factor is defined as the square root of the energy ratio between stored mechanical energy and input electrical energy. For piezoelectric ceramics, again depending on their piezoelectric parameters, the coupling factor is of the order of 0.7–0.75. As in the previous case, particular actuator configurations determine very different dynamic properties.",
          "zh": "耦合因子定义为存储的机械能与输入电能之间的能量比的平方根。 对于压电陶瓷，耦合系数约为 0.7-0.75，这同样取决于其压电参数。 与前一种情况一样，特定的执行器配置决定了非常不同的动态特性。"
        },
        {
          "id": "block-3",
          "en": "• Energy Density and Specific Energy Density. These are defined as the ratio of output mechanical energy per cycle to actuator size or weight, respectively. From theoretical considerations of maximum breakdown electric field sustained by dielectric ceramics, values of up to about 50 Jcm−3 have been reported for the maximum energy density of piezoelectric actuators (Madou (1997)).",
          "zh": "• 能量密度和比能量密度。 这些分别定义为每个周期的输出机械能与执行器尺寸或重量的比率。 根据介电陶瓷维持的最大击穿电场的理论考虑，压电致动器的最大能量密度已报道高达约 50 Jcm−3 (Madou (1997))。"
        },
        {
          "id": "block-4",
          "en": "In the case of specific actuator configurations, the theoretical figures are one or two orders of magnitude lower. Depending on the type of actuator, the energy density falls within the range 10−3 –10−1 Jcm−3 (see Figure 2.32). • Power Density and Specific Power Density.",
          "zh": "在特定执行器配置的情况下，理论数字要低一到两个数量级。 根据执行器的类型，能量密度在 10−3 –10−1 Jcm−3 范围内（见图 2.32）。 • 功率密度和比功率密度。"
        },
        {
          "id": "block-5",
          "en": "Owing to the high dynamic range of piezoelectric actuators, the power density can also be high; however, this depends very much on the actuator configuration.",
          "zh": "由于压电致动器的高动态范围，功率密度也可以很高；然而，这很大程度上取决于执行器的配置。"
        },
        {
          "id": "block-6",
          "en": "For stack piezoelectric actuators (which most resemble direct application of the piezoelectric effect), 10−4 10−5 10−4 10−3 10−2 10−1 100 101 102 103 104 10−3 10−2 10−1 10 0 Work density (J/cm3) Power density (W/cm 3) Stacks Benders Inchworm TWUMs and TWUMs on the energy–power density plane. the power density is in the range 10 3 –104 Wcm−3 . However, for inchworm actuators, it can be as low as 10−1 Wcm−3 .",
          "zh": "对于堆栈压电执行器（最类似于压电效应的直接应用）， 10−4 10−5 10−4 10−3 10−2 10−1 100 101 102 103 104 10−3 10−2 10−1 10 0 工作密度 (J/cm3) 功率密度 (W/cm 3) 堆栈 弯曲机 Inchworm TWUM 和能量-功率密度平面上的 TWUM。 功率密度在 10 3 –104 Wcm−3 范围内。 然而，对于尺蠖执行器，它可以低至 10−1 Wcm−3 。"
        },
        {
          "id": "block-7",
          "en": "Other piezoelectric actuators lie in between these upper and lower limits; for instance, benders perform with a power density of the order of 10 Wcm−3 , while TWUMs perform in the range 10−1 –1 Wcm−3 (see Figure 2.32). • Time Constant and Frequency Bandwidth. As indicated in chapter 1, both time constant and frequency bandwidth are inversely related and to a large extent define the dynamic properties of an actuator.",
          "zh": "其他压电致动器位于这些上限和下限之间；例如，弯曲机的功率密度约为 10 Wcm−3，而 TWUM 的功率密度为 10−1 –1 Wcm−3（见图 2.32）。 • 时间常数和频率带宽。 如第一章所述，时间常数和频率带宽成反比，并在很大程度上定义了执行器的动态特性。"
        },
        {
          "id": "block-8",
          "en": "Piezoelectric stacks present time constants ranging from microseconds to milliseconds and producing maximum frequency bandwidths up to hundreds of kilohertz. The frequency range of piezoelectric benders is typically limited to a few kilohertz, and inchworm actuators and TWUMs cannot perform at more than a few tens of hertz. • Energetic Efficiency.",
          "zh": "压电堆栈的时间常数范围从微秒到毫秒，并产生高达数百千赫兹的最大频率带宽。 压电弯曲器的频率范围通常限制在几千赫兹，而尺蠖执行器和 TWUM 的工作频率不能超过几十赫兹。 • 能源效率。"
        },
        {
          "id": "block-9",
          "en": "Piezoelectric actuators are generally very efficient in converting from electrical to mechanical energy. Piezoelectric stacks, benders and inchworm actuators (whose operational characteristics bring them very close to the concept of direct application of the piezoelectric effect) can attain 70–90% energetic efficiency.",
          "zh": "压电致动器通常在将电能转换为机械能方面非常有效。 压电堆栈、弯曲器和尺蠖执行器（其工作特性使它们非常接近直接应用压电效应的概念）可以达到 70-90% 的能量效率。"
        },
        {
          "id": "block-10",
          "en": "In the case of piezoelectric actuators that rely on frictional transmission of forces, efficiency drops to 30–40%. This is true, for instance, of TWUMs. The behavior of this technology upon scaling is analyzed in detail in the next section.",
          "zh": "对于依靠摩擦力传递的压电执行器，效率下降至 30-40%。 例如，TWUM 就是如此。 下一节将详细分析该技术在扩展时的行为。"
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
          "zh": "鉴于当前的小型化趋势，值得探究的是压电致动器的性能如何通过减小尺寸而受到影响。 我们在这里不关心微执行器领域，即尺寸在微米范围内的执行器。"
        },
        {
          "id": "block-2",
          "en": "In addition to the intrinsic change of driving characteristics directly related to the actuator, the influence of changes in physical phenomena may be relevant in the domain of microactuators. This is true of surface forces that become dominant as compared to volume forces when the application is scaled to this domain.",
          "zh": "除了与执行器直接相关的驱动特性的内在变化之外，物理现象变化的影响也可能与微执行器领域相关。 当应用程序扩展到该域时，与体积力相比，表面力成为主导，这是事实。"
        },
        {
          "id": "block-3",
          "en": "For a detailed discussion on scaling laws, the reader is referred to excellent works by Madou (1997) or Peirs (2001). It has been reported that the piezoelectric effect scales down with the size of the actuators but is expected to have a measurable impact on a microscopic scale. The analysis in this section focuses on four useful parameters for describing the performance of actuators: 1.",
          "zh": "对于缩放定律的详细讨论，读者可以参考 Madou (1997) 或 Peirs (2001) 的优秀著作。 据报道，压电效应随着执行器的尺寸而减小，但预计会在微观尺度上产生可测量的影响。 本节的分析重点关注四个用于描述执行器性能的有用参数： 1."
        },
        {
          "id": "block-4",
          "en": "Resonance frequency. Resonance frequency is a very important parameter in describing the performance of piezoelectric drives, irrespective of whether they are resonant or nonresonant drives.",
          "zh": "共振频率。谐振频率是描述压电驱动器性能的一个非常重要的参数，无论它们是谐振驱动器还是非谐振驱动器。"
        },
        {
          "id": "block-5",
          "en": "In resonant drives, it is the resonance frequency that is used to drive the actuators; this is closely related to the speed of the linear or rotative motion and defines the characteristics of the electronic driver to a great extent. In nonresonant drives, on the other hand, the resonance frequency is usually the upper limit for the feasible driving frequency. 2.",
          "zh": "在谐振驱动器中，谐振频率用于驱动执行器；这与直线或旋转运动的速度密切相关，并在很大程度上决定了电子驱动器的特性。 另一方面，在非谐振驱动器中，谐振频率通常是可行驱动频率的上限。 2."
        },
        {
          "id": "block-6",
          "en": "Stroke. The stroke is an important parameter in the case of nonfrictional transmission of displacement, for example, in piezoelectric stacks and multimorph benders. In the case of frictional transmission of displacement, for example, linear or rotational ultrasonic motors and inchworm motors, the stroke is either unlimited or it is only limited by the rotor length.",
          "zh": "中风。 在位移非摩擦传递的情况下，例如在压电叠堆和多晶硅弯曲器中，行程是一个重要参数。 在摩擦传动位移的情况下，例如线性或旋转超声波电机和尺蠖电机，行程要么不受限制，要么仅受转子长度的限制。"
        },
        {
          "id": "block-7",
          "en": "3. Force density. The force density describes the ratio of available force to volume or weight of the actuator.",
          "zh": "3.力密度。力密度描述了可用力与执行器的体积或重量的比率。"
        },
        {
          "id": "block-8",
          "en": "It is useful because it is closely related to the time response of the actuator. 4. Power density.",
          "zh": "它很有用，因为它与执行器的时间响应密切相关。 4.功率密度。"
        },
        {
          "id": "block-9",
          "en": "The power density can be obtained from the previous parameters. It is defined as the ratio of available power to volume or weight. Resonance frequency Manufacturers of piezoelectric drives usually give the following relationship between resonance frequency of the actuator and the size: fr = N L (2.41) 0 20 40 60 80 100 120 140 160",
          "zh": "功率密度可以从前面的参数获得。 它被定义为可用功率与体积或重量的比率。 谐振频率 压电驱动器的制造商通常给出执行器谐振频率与尺寸之间的以下关系： fr = N L (2.41) 0 20 40 60 80 100 120 140 160"
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
          "zh": "PI (P-885.xx 系列) PI (P-010.xx 系列) PI (P-035.xx 系列) 压电机械 (P St 150/7/xx 系列) 压电机械 (P St 150/20/xx 系列) 压电机械 (HP St 1000/25-15/xx 系列) PI (P-007.xx 系列) PI （P-025.xx 系列） PI （P-045.xx 系列） 压电机械（P St 150/14/xx 系列） 压电机械（HP St 150/20-15/xx 系列） NECTokin（ASBxxxC801 系列）"
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
          "zh": "执行器长度 (mm) 谐振频率 (kHz) tric stack 执行器。 其中 fr 是压电陶瓷的谐振频率，N 是取决于特定陶瓷振动模式的致动器特定常数（例如 堆叠的纵向长度，多晶型的弯曲长度），L 是振动模式方向上的执行器长度（例如"
        },
        {
          "id": "block-2",
          "en": "length for stacks, thickness for multimorphs). According to Equation 2.41, all types of piezoelectric drives should exhibit the same tendency for the resonance frequency to increase at a rate inversely proportional to the decrease in size. Figure 2.33 shows the evolution of the resonance frequency of piezoelectric stack actuators from various different manufacturers.",
          "zh": "堆叠的长度，多晶型的厚度）。 根据公式 2.41，所有类型的压电驱动器都应表现出相同的谐振频率以与尺寸减小成反比的速率增加的趋势。 图 2.33 显示了来自不同制造商的压电堆栈执行器的谐振频率的演变。"
        },
        {
          "id": "block-3",
          "en": "As the figure shows, the overall trend in piezoelectric stacks conforms to Equation 2.41. This result is also consistent with the scaling analysis of Peirs (2001). According to this analysis, the stiffness of secondorder mechanical systems scales down linearly with the size of the actuator, that is, K ∝ L.",
          "zh": "如图所示，压电堆栈的总体趋势符合公式 2.41。 这一结果也与 Peirs (2001) 的标度分析一致。 根据该分析，二阶机械系统的刚度随着执行器的尺寸线性减小，即 K ∝ L。"
        },
        {
          "id": "block-4",
          "en": "Since the mass of the actuator will scale down according to the volume of the actuator (i.e.",
          "zh": "由于执行器的质量将根据执行器的体积（即，"
        },
        {
          "id": "block-5",
          "en": "M ∝ L3 ), the resonance frequency of the actuator (which is a secondorder mechanical system) is fr ∝ √ K M ∝ L−1 (2.42) The result of Figure 2.33 confirms the resonance frequency trend described by Equations 2.41 and 2.42; it also indicates that additional bandwidth is left available for nonresonant drives and that the driving frequency for resonant drives will increase upon miniaturization.",
          "zh": "M ∝ L3 )，执行器（二阶机械系统）的谐振频率为 fr ∝ √ K M ∝ L−1 (2.42) 图 2.33 的结果证实了方程 2.41 和 2.42 描述的谐振频率趋势；它还表明，为非谐振驱动器留下了额外的带宽，并且谐振驱动器的驱动频率将随着小型化而增加。"
        },
        {
          "id": "block-6",
          "en": "Stroke As explained earlier, stroke analysis is important for nonfrictiondriven piezoelectric actuators. As in the previous case, the trend of the stroke of piezoelectric actuators is independent of the particular type of nonfrictional actuator.",
          "zh": "行程 如前所述，行程分析对于非摩擦驱动压电执行器非常重要。 与前面的情况一样，压电致动器的冲程趋势与非摩擦致动器的特定类型无关。"
        },
        {
          "id": "block-7",
          "en": "The stroke is always linearly related to the dominant dimension in the direction of actuation, for example, length in piezoelectric and in multimorphs and diameter in radial expanders. Force density Force density is defined here as the ratio of available force to volume. Force density is closely related to the acceleration that the drive is able to impart to the load and also to the response time of the system.",
          "zh": "冲程始终与致动方向上的主要尺寸线性相关，例如，压电和多压电体中的长度以及径向扩张器中的直径。 力密度 力密度在此定义为可用力与体积的比率。 力密度与驱动器能够施加给负载的加速度以及系统的响应时间密切相关。"
        },
        {
          "id": "block-8",
          "en": "Since the mass, M, and the volume, V , of the actuators are proportional, the force density is also proportional to the acceleration, a, of the load: M ∝ V → F V ∝ a (2.43) The experimental relationship between force density and volume is depicted graphically in Figure 2.34. It will be seen that the force density in piezoelectric actuators is inversely proportional to the length in the direction of stroke.",
          "zh": "由于执行器的质量 M 和体积 V 成正比，因此力密度也与负载的加速度 a 成正比： M ∝ V → F V ∝ a (2.43) 力密度和体积之间的实验关系如图 2.34 所示。 可以看出，压电致动器中的力密度与行程方向上的长度成反比。"
        },
        {
          "id": "block-9",
          "en": "This again confirms the theoretical result of Peirs (2001), who established the following relationship: F M ∝ F V ∝ 1 L (2.44) where L is the dominant dimension in the actuation displacement. 0.5 1.5 2.5 3.5 4.5 0 1 2 3 4",
          "zh": "这再次证实了 Peirs (2001) 的理论结果，Peirs 建立了以下关系： F M ∝ F V ∝ 1 L (2.44) 其中 L 是驱动位移的主要尺寸。 0.5 1.5 2.5 3.5 4.5 0 1 2 3 4"
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
          "zh": "PI (P-885.xx 系列) PI (P-010.xx 系列) 压电机械 (HP St 150/20-15/xx 系列) PI (P-007.xx 系列) 压电机械 (P St 150/7/xx 系列) NECTokin (ASB 系列) 10,000 15,000 20,000 25,000 执行器体积(mm3 ) 压电堆栈致动器小型化时的力密度 (N/mm 3) V 。"
        },
        {
          "id": "block-2",
          "en": "Operational characteristics and scaling trends for piezoelectric actuators Nonresonant actuators Resonant actuators Figures of merit Stack Benders Inchworm TWUM Force, F",
          "zh": "压电执行器的工作特性和缩放趋势 非谐振执行器 谐振执行器 品质因数 Stack Benders Inchworm TWUM 力，F"
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
          "zh": "10−2 –10"
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
          "zh": "扭矩 ≤ 104 Nm 位移，S 0.1–0.6%（动态高达 1.7%） 10−2 –10 mm 无限制 无限制 工作密度，W V ≈10−2 J/cm 3 10−4 –10 −2 J/cm 3 ≈10−3 J/cm 3 10−3 –10 −2 J/cm 3 功率密度，P V"
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
          "zh": "3 10−1 –10"
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
          "zh": "3 ≈10−4 W/cm 3 ≈10−1 W/cm 3 带宽，f ≤105 Hz ≤103 Hz ≤102 Hz ≤102 Hz 效率，η 70–90% 缩放趋势 力 F ∝ L2 行程 S ∝ L 每周期做功 W ∝ L3 能量密度 W V ∝ L0 带宽 f ∝ L−1 功率密度 P V ∝ L−1 类似的分析可用于确定压电致动器小型化后响应时间的趋势。 从方程 2.43 和"
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
          "zh": "L ∝ L T 2 → T ≈ L (2.45) 该分析仅考虑活性材料的机械特性。 在推导中，没有考虑电子驱动器的体积，因此它们指示的是趋势而不是确切的情况。 从响应时间的情况可以再次看出这一点。"
        },
        {
          "id": "block-2",
          "en": "As explained earlier, one of the factors limiting the response time derives from the charging and discharging time of the capacitor that piezoelectric actuators represent when driven out of resonance. The electrical capacitance of the piezoelectric actuator, C p, is proportional to the capacitor area, A, and inversely proportional to the distance between electrodes, L.",
          "zh": "如前所述，限制响应时间的因素之一源自压电致动器在脱离谐振时所代表的电容器的充电和放电时间。 压电致动器的电容 C p 与电容器面积 A 成正比，与电极之间的距离 L 成反比。"
        },
        {
          "id": "block-3",
          "en": "The tendency of the electrical capacitance would be to decrease linearly when the actuator is miniaturized: C p ∝ A L ∝ L (2.46) This will produce an effect on the response time in addition to the effect discussed in the foregoing paragraphs. See Table 2.3 for a summary of the scaling trends and figures of merit of piezoelectric actuators.",
          "zh": "当致动器小型化时，电容的趋势将是线性减小： C p ∝ A L ∝ L (2.46) 除了前面段落中讨论的效果之外，这还将对响应时间产生影响。 有关压电执行器的缩放趋势和品质因数的总结，请参见表 2.3。"
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
          "zh": "谐振压电电机已达到成熟的发展阶段。 最成功的实施是行波超声波电机。 市场上有多种现成的超声波电机。"
        },
        {
          "id": "block-2",
          "en": "The first application considered in this section is that of OEM ultrasonic motors from Shinsei Corporation Inc., Japan. This is followed by a brief description of a second application, which is the implementation of ultrasonic drives in the Canon optical lens automatic focus.",
          "zh": "本节考虑的第一个应用是日本 Shinsei Corporation Inc. 的 OEM 超声波电机。 接下来简单介绍第二个应用，即超声波驱动器在佳能光学镜头自动对焦中的实现。"
        },
        {
          "id": "block-3",
          "en": "Case Study 2.1: OEM Ultrasonic motors, USR-60 and USR-30 (Shinsei Corporation Inc., Japan) The principle of operation of ultrasonic motors was described in detail in Section 2.3.2. The first commercially available ultrasonic motor appeared as early as 1986, with the product name USR-4-100. This was the precursor of USR-60, the current commercial name of Shinsei’s 60-mmdiameter ultrasonic motor.",
          "zh": "案例研究 2.1：OEM 超声波电机，USR-60 和 USR-30（Shinsei Corporation Inc.，日本） 超声波电机的工作原理已在第 2.3.2 节中详细描述。 第一个商用超声波电机早在1986年就出现了，产品名称为USR-4-100。 这是 USR-60 的前身，USR-60 是 Shinsei 60 毫米直径超声波电机的当前商业名称。"
        },
        {
          "id": "block-4",
          "en": "Practical applications for ultrasonic motors have been developed in a wide range of fields: autofocus optical lenses in cameras, lensmirror actuation in optical devices, positioning in satellite reception devices, windingup function in roll screens, and headrest adjustment in automobiles. (a) (b) As explained earlier, ultrasonic motors present lowspeed operation at high torque.",
          "zh": "超声波电机的实际应用已广泛应用于：相机中的自动对焦光学镜头、光学设备中的镜头镜驱动、卫星接收设备中的定位、卷帘中的卷绕功能以及汽车中的头枕调节。 (a) (b) 如前所述，超声波电机在高扭矩下呈现低速运行。"
        },
        {
          "id": "block-5",
          "en": "This can be beneficial in applications where compact solutions are required (e.g. avoiding transmission stages in a direct drive approach). The ultrasonic driving frequency, always above 20 kHz, ensures silent operation.",
          "zh": "这对于需要紧凑解决方案的应用非常有用（例如，避免直接驱动方法中的传输级）。超声波驱动频率始终高于 20 kHz，确保静音运行。"
        },
        {
          "id": "block-6",
          "en": "In addition, the static torque serves as a practical selfbraking mechanism owing to the frictional transmission. The USR-30 and USR-60 (see Figure 2.35) share the same motor structure. They are twophase drives.",
          "zh": "此外，由于摩擦传动，静扭矩可作为实用的自制动机构。 USR-30和USR-60（见图2.35）具有相同的电机结构。它们是双相驱动器。"
        },
        {
          "id": "block-7",
          "en": "The piezoelectric ceramic exciting the microscopic oscillation in the stator is poled in an alternating pattern providing a Sine and a Cosine mode. See Section 2.3.2 for more details. An active sector of the piezoelectric ceramic is used as a feedback sensor for the electronic driver.",
          "zh": "激发定子中微观振动的压电陶瓷以交替模式极化，提供正弦和余弦模式。 更多详细信息，请参见第 2.3.2 节。 压电陶瓷的有源部分用作电子驱动器的反馈传感器。"
        },
        {
          "id": "block-8",
          "en": "The piezoelectric ceramic sector serving as a sensor is poled similarly to the driving sectors. The electrode in the sensor sector picks up an electrical signal, which is proportional to the vibration amplitude in the stator.",
          "zh": "用作传感器的压电陶瓷部分的极化方式与驱动部分类似。 传感器部分的电极接收电信号，该信号与定子的振动幅度成正比。"
        },
        {
          "id": "block-9",
          "en": "Ultrasonic motors are controlled by appropriate modification of the driving frequency, and, therefore, speed variations are directly related to modifications of the vibration amplitude at the stator. The sensor signal is thus compared to the reference velocity and to an error signal, which serves as a control for the driving frequency. See the schematic representation of the driver in Figure 2.36.",
          "zh": "超声波电机是通过适当修改驱动频率来控制的，因此，速度变化与定子振动幅度的修改直接相关。 因此，传感器信号与参考速度和误差信号进行比较，该误差信号用作驱动频率的控制。 请参见图 2.36 中的驱动器原理图。"
        },
        {
          "id": "block-10",
          "en": "This approach to driving is equivalent to the tracking process for resonant drives described in previous sections. The main difference lies in the use of an additional embedded sensor rather than a phase lag between the driving voltage and the current drawn to track the resonance frequency. Both the USR-30 and the USR-60 come in a number of optional configurations.",
          "zh": "这种驱动方法相当于前面几节中描述的谐振驱动器的跟踪过程。 主要区别在于使用了额外的嵌入式传感器，而不是驱动电压和用于跟踪谐振频率的电流之间的相位滞后。 USR-30 和 USR-60 都有多种可选配置。"
        },
        {
          "id": "block-11",
          "en": "In particular, twinshaft and singleshaft options are available together with versions with optical encoders. Case Study 2.2: Ultrasonic motor focus in EF-28-105 USM Lens Ultrasonic motors provide an elegant and amazingly compact solution to the automated optical focus in reflex cameras.",
          "zh": "特别是，双轴和单轴选项可与带光学编码器的版本一起使用。 案例研究 2.2：EF-28-105 USM 镜头中的超声波电机对焦 超声波电机为反射相机中的自动光学对焦提供了优雅且极其紧凑的解决方案。"
        },
        {
          "id": "block-12",
          "en": "Canon was the first company to introduce Oscillator Speed selector Rotation selector (CWCCW) Distributor Trafo (Sine mode) Trafo (Cosine mode) Dualphase motor (USR30-USR60) back signal from the embedded sensors is to keep the output rotation speed close to the reference. ultrasonic motors in their reflex cameras.",
          "zh": "佳能是第一家推出振荡器速度选择器旋转选择器（CCCCW）分配器Trafo（正弦模式）Trafo（余弦模式）双相电机（USR30-USR60）来自嵌入式传感器的反馈信号是为了保持输出旋转速度接近参考值。 反射相机中的超声波电机。"
        },
        {
          "id": "block-13",
          "en": "Initially, the 77-mm L–1 ultrasonic motor was used to drive the electronic focus of 50 f/1.0 and 1200 f/5.6 lenses. The next version was the wellknown 62 mm M–1 USM (Ultrasonic motor), which became the driving technology for the automatic focus in 28–105 f/3.5–4.5 and 85 f/1.8, 300 f/4L and 70–200 f/2.8L lenses.",
          "zh": "最初，77毫米L-1超声波电机用于驱动50 f/1.0和1200 f/5.6镜头的电子对焦。 下一个版本是著名的 62 mm M–1 USM（超声波马达），它成为 28–105 f/3.5–4.5 和 85 f/1.8、300 f/4L 和 70–200 f/2.8L 镜头自动对焦的驱动技术。"
        },
        {
          "id": "block-14",
          "en": "Yet a third, miniaturized version of the two previous ultrasonic motors, the MicroUSM, is used to drive the 28–80 II, III and IV and the 50 f/1.4. Optical lenses benefit from the simple structure of the TWUM principle. The above three implementations consist in a hollow toothed stator to prevent obstruction of axial optics, and a ring rotor.",
          "zh": "然而，前两个超声波电机的第三个小型化版本 MicroUSM 用于驱动 28-80 II、III 和 IV 以及 50 f/1.4。 光学镜头受益于 TWUM 原理的简单结构。 上述三种实施方式包括用于防止轴向光学器件阻塞的空心齿定子和环形转子。"
        },
        {
          "id": "block-15",
          "en": "Both are pressed together by a springloaded bayonetmounted plate. The operating principle is wellknown: microscopic travelling vibrations excited at the stator’s teeth are transmitted to the rotor through frictional mechanisms. The low time constant of ultrasonic motors ensures fast, smooth and silent operation.",
          "zh": "两者通过弹簧卡口安装板压在一起。 其工作原理众所周知：定子齿处激发的微观行进振动通过摩擦机制传递到转子。 超声波电机的低时间常数确保了快速、平稳和安静的运行。"
        },
        {
          "id": "block-16",
          "en": "depicting the configuration of the 62 mm M–1 USM Ultrasonic Motor.",
          "zh": "描述 62 mm M–1 USM 超声波电机的配置。"
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
          "zh": "压电致动器的传统应用领域是精密定位阶段。 全球有很多制造商为天文学、半导体测试系统、医学工程、生物技术和电信等应用领域提供微米定位和纳米定位平台。"
        },
        {
          "id": "block-2",
          "en": "The application domain of machine tool systems is in the full flow of evolution. At this time, traditional material removal processes are being used to provide Stator Rotor Prestress spring Bayonetmounted plate (a) (b) the lens and (b) schematic view of the 62-mm M–1 USM. surface finishing and dimensional accuracy in the nanometer range.",
          "zh": "机床系统的应用领域正在全面演变。 此时，使用传统的材料去除工艺来提供定子、转子、预应力弹簧、卡口安装板 (a)、(b) 透镜和 (b) 62 毫米 M–1 USM 示意图。 纳米范围内的表面精加工和尺寸精度。"
        },
        {
          "id": "block-3",
          "en": "In order to achieve such high specular finishes, the machine tool must ensure high stiffness and the high accuracy required for precise positioning between tool and workpiece in all directions.",
          "zh": "为了实现如此高的镜面光洁度，机床必须确保刀具和工件之间在各个方向上精确定位所需的高刚度和高精度。"
        },
        {
          "id": "block-4",
          "en": "Case Study 2.3: Stepping piezoelectric motors for highaccuracy, highstiffness machine tools Our first example was developed by the Production, Machine Design and Automation Division of the Department of Mechanical Engineering at the Katholieke Universiteit Leuven (PMAKULeuven). It consists in a nanometerprecision, ultrastiff piezoelectrically driven stage for ELID (Electrolytic Inprocess Dressing) grinding.",
          "zh": "案例研究 2.3：用于高精度、高刚度机床的步进压电电机 我们的第一个示例是由天主教鲁汶大学 (PMAKULeuven) 机械工程系生产、机械设计和自动化部门开发的。 它由一个纳米精度、超硬压电驱动平台组成，用于 ELID（电解在线修整）研磨。"
        },
        {
          "id": "block-5",
          "en": "The text and pictures illustrating this example are provided courtesy of PMAKULeuven. Existing machine tools provide insufficient stiffness to guarantee highprecision positioning in the presence of varying process forces.",
          "zh": "说明此示例的文本和图片由 PMAKULeuven 提供。 现有机床的刚度不足，无法保证在存在变化的加工力的情况下实现高精度定位。"
        },
        {
          "id": "block-6",
          "en": "To illustrate this problem, consider that where cutting forces perpendicular to the workpiece surface are of the order of 10 N, stiffness must be as high as 1 kN/μm to ensure flatness of the order of 10 nm. The use of piezoelectric stepping motors to provide a system that is able to combine the guiding and actuation requirements (i.e.",
          "zh": "为了说明这个问题，考虑一下垂直于工件表面的切削力约为 10 N 的情况，刚度必须高达 1 kN/μm 以确保平整度达到 10 nm 的量级。 使用压电步进电机提供能够结合引导和驱动要求的系统（即"
        },
        {
          "id": "block-7",
          "en": "the mechatronic approach: combination of several functions on the same component) for machine tools is an innovative solution that guarantees extreme stiffness between workpiece and tool in all directions. The operational requirements for the driveguide stage are 1. High stiffness 2.",
          "zh": "机床的机电一体化方法（即同一部件上的多种功能的组合）是一种创新的解决方案，可保证工件和刀具之间在各个方向上的极高刚度。 驱动引导级的操作要求是 1. 高刚度2."
        },
        {
          "id": "block-8",
          "en": "Smooth motion. Unit Leaf springs Vacuum preload element Frame layer holding units Spacer layer Damper layer Screws fixing units of frame tesy of Dominiek Reynaerts. Reproduced by permission of PMAKULeuven).",
          "zh": "运动平稳。单元 板簧 真空预紧元件 框架层固定单元 间隔层 阻尼层 Dominiek Reynaerts 的框架固定单元螺钉。经 PMAKULeuven 许可转载）。"
        },
        {
          "id": "block-9",
          "en": "Preload nut Body Belleville spring Clamping edges Prestress rod Peizo actuators Place holder for assembly Membrane Plate Force cell Contact element ators (Courtesy of Dominiek Reynaerts. Reproduced by permission of PMAKULeuven). The proposed stage consists of a circular plate supported by six piezoelectric stepping units.",
          "zh": "预紧螺母 主体 碟形弹簧 夹紧边缘 预应力杆 Peizo 执行器 用于组装的定位支架 膜板 力传感器 接触元件（由 Dominiek Reynaerts 提供） 经 PMAKULeuven 许可转载）。 所提出的平台由一个由六个压电步进单元支撑的圆板组成。"
        },
        {
          "id": "block-10",
          "en": "The stage shown in Figure 2.38 can be actuated to three degrees of freedom (x, y and C) by moving the six piezoelectric units according to a predefined gait pattern. The structure of each unit is depicted in Figure 2.39.",
          "zh": "通过根据预定义的步态模式移动六个压电单元，可以将图 2.38 所示的平台驱动到三个自由度（x、y 和 C）。各个单元的结构如图2.39所示。"
        },
        {
          "id": "block-11",
          "en": "This consists of three piezoelectric stack actuators, the elements required to ensure preloading of the actuators, force sensors to provide feedback on the contact force and a spherical contact element with a large radius to establish contact between the unit and the ground.",
          "zh": "它由三个压电堆栈执行器、确保执行器预加载所需的元件、提供接触力反馈的力传感器以及用于在设备和地面之间建立接触的大半径球形接触元件组成。"
        },
        {
          "id": "block-12",
          "en": "The “hammering” effect characteristic of stepping drives can be overcome in the proposed configuration by simultaneously extending all piezoelectric stacks according to the locomotion principle depicted schematically in Figure 2.40. The piezoelectric stacks are driven in a cyclical pattern but well below their resonance frequency, which places them in the category of nonresonant drives.",
          "zh": "在所提出的配置中，可以通过根据图 2.40 示意性描述的运动原理同时延伸所有压电堆栈来克服步进驱动器的“锤击”效应特性。 压电堆栈以循环模式驱动，但远低于其谐振频率，这将它们归入非谐振驱动器类别。"
        },
        {
          "id": "block-13",
          "en": "II I I III IV V Reynaerts, Reproduced by permission of PMAKULeuven). The hammering effect is due to the characteristic discontinuity of the stepping motion. It is chiefly a function of two main parameters: (i) the distance between each spherical contact surface and the ground; and (ii) the load to be supported by the foot.",
          "zh": "II I I III IV V Reynaerts，经 PMAKULeuven 许可转载）。 锤击效应是由于步进运动的特征不连续性造成的。 它主要是两个主要参数的函数：（i）每个球形接触面与地面之间的距离； (ii) 脚所支撑的负载。"
        },
        {
          "id": "block-14",
          "en": "In order to overcome the hammering problem, a stepping algorithm was implemented on the stepping controller. This stepping algorithm is based on an initial estimate of the distance between driving unit and ground and of the load to be supported. A stepping function is generated on the basis of this estimate.",
          "zh": "为了克服锤击问题，在步进控制器上实现了步进算法。 该步进算法基于对驱动单元与地面之间的距离以及要支撑的负载的初始估计。 根据该估计生成步进函数。"
        },
        {
          "id": "block-15",
          "en": "The stepping function is such that there can be no positional deviation of the stage if the two parameters were estimated correctly. The controller implements an update of the stepping function on the basis of the detected positional error and may thus be described as a feedforward learning controller. The hierarchical control scheme is shown in Figure 2.41.",
          "zh": "如果正确估计两个参数，步进函数就不会出现平台的位置偏差。 该控制器基于检测到的位置误差实现步进函数的更新，因此可以被描述为前馈学习控制器。 分层控制方案如图2.41所示。"
        },
        {
          "id": "block-16",
          "en": "The main Positioning task Stepping: support algorithm Stepping: traction algorithm Bearing (F mzi) F mxi, Fmyi, F mzi, F dzi I II III IV zci vxi u zi (*) u xi u yi b3i b2i b1i Fmxyzi Unit Stage Γ Σ Σ Σ Γ Γ Fxi vyi Fyi Stepping: support Acutator configuration Stepping: drive x Stepping: drive y Position measurement Interferometer Capacitive probes Bearing Driving Position controller Main controller Timing Force vector Ft, M t F mxi F myi F mzi Bearing Driving • • • • • • • • • Dominiek Reynaerts.",
          "zh": "主要定位任务 步进：支持算法 步进：牵引算法 轴承 (F mzi) F mxi, Fmyi, F mzi, F dzi I II III IV zci vxi u zi (*) u xi u yi b3i b2i b1i Fmxyzi Unit Stage Γ Σ Σ Σ Г Γ Fxi vyi Fyi 步进：支持 执行器配置 步进：驱动 x 步进：驱动 y 位置测量 干涉仪电容式探头 轴承驱动 位置控制器 主控制器 定时 力矢量 Ft, M t F mxi F myi F mzi 轴承驱动 • • • • • • • • • Dominiek Reynaerts。"
        },
        {
          "id": "block-17",
          "en": "Reproduced by permission of PMAKULeuven). controller implements the control signal on the basis of the reference and actual positions as described in the task programming module. As a result, instructions are broadcast to each unit controller.",
          "zh": "经 PMAKULeuven 许可转载）。 控制器根据任务编程模块中描述的参考位置和实际位置来实现控制信号。 结果，指令被广播到每个单元控制器。"
        },
        {
          "id": "block-18",
          "en": "The unit controller includes its own amplifier and contains a stepping algorithm for the z direction and two traction algorithms for x and y directions respectively. The hysteresis in the piezoactuator is compensated by an inverse model so that the unit presents a linearized input–output behavior. To illustrate the performance of the ultrastiff precision positioning stage, the xyplane.",
          "zh": "单元控制器包括其自己的放大器，并包含用于 z 方向的步进算法以及分别用于 x 和 y 方向的两种牵引算法。 压电执行器中的迟滞通过逆模型进行补偿，以便该单元呈现线性化的输入输出行为。 为了说明超刚性精密定位平台 xyplane 的性能。"
        },
        {
          "id": "block-19",
          "en": "Likewise, Table 2.4 shows some of the stiffness and driving characteristics of the machine tool stage. The piezoelectrically driven stepping stage has been tested with the forces resulting from an ELID grinding process.",
          "zh": "同样，表 2.4 显示了机床平台的一些刚度和驱动特性。压电驱动步进平台已经通过 ELID 研磨工艺产生的力进行了测试。"
        },
        {
          "id": "block-20",
          "en": "The ELID grinding process results in a pattern with an average force between 10 and 30 N having a superimposed timevarying component with lower amplitude and low frequency (around 25 Hz and some harmonics). The positional deviation due to this process force is less than",
          "zh": "ELID 研磨过程产生平均力在 10 到 30 N 之间的图案，具有较低振幅和低频（大约 25 Hz 和一些谐波）的叠加时变分量。 由该过程力引起的位置偏差小于"
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
          "zh": "案例研究 2.4：用于针织机选针模块的弯曲三压电晶片执行器 压电弯曲元件的领先制造商之一是 Argillon GmbH（原 SIEMENS AG, Ceramics GmbH）。 它们的弯曲元件为 400 200 0 −200 −400 −600 −400 −200 0 位置偏差 X100 Y(μm)； EY(100*μm) X(μm); EX(100*微米)"
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
          "zh": "Argillon 已在多个工业领域推出压电弯曲机。 特别是，它们用于盲文设备、纺织机、气动阀和医疗设备。 这里介绍的案例研究使用 Argillon 三压电晶片执行器（概念上类似于双压电晶片配置）来实现针织机中的快速选针模块。"
        },
        {
          "id": "block-3",
          "en": "The text and pictures in this application case are courtesy of Argillon GmbH. Traditionally, control of knitting machines is based on punch cards or magnets. Piezoelectric benders offer a number of advantages as compared to traditional control modules.",
          "zh": "本应用案例中的文字和图片由 Argillon GmbH 提供。 传统上，针织机的控制基于打孔卡或磁铁。 与传统控制模块相比，压电弯曲器具有许多优点。"
        },
        {
          "id": "block-4",
          "en": "In addition to faster and more reliable operation, they provide high efficiency. Faster and more reliable operation results in increased productivity, owing to the shorter switching times achieved with piezoactuators. In addition to improved dynamic performance, the control units are so small that the space requirements on the machine are minimal.",
          "zh": "除了更快、更可靠的运行之外，它们还提供高效率。 由于压电执行器实现了更短的切换时间，更快、更可靠的操作可以提高生产率。 除了改进的动态性能之外，控制单元非常小，因此机器上的空间要求也很小。"
        },
        {
          "id": "block-5",
          "en": "Since the piezoelectric bender operates on a low energy supply and the overall efficiency is high, no cooling units are required so that even more compact solutions are possible. Argillon’s trimorph technology is conceptually similar to the bimorph configuration described in previous sections. The trimorph bender implemented in the needle selection unit measures 49.95 mm in overall length, 7.20 mm in width and",
          "zh": "由于压电弯曲机在低能量供应下运行并且整体效率很高，因此不需要冷却装置，因此可以实现更紧凑的解决方案。 Argillon 的三压电晶片技术在概念上类似于前面章节中描述的双压电晶片配置。 选针装置中采用的 Trimorph 弯曲器的总长度为 49.95 毫米，宽度为 7.20 毫米，"
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
          "zh": "中间碳纤维叶片（载体）的厚度为0.24毫米。 每个压电弯曲器在 200 V 电压下的总体最大偏转为 1.70 mm（自由长度为 38 mm），而阻挡力仅为 0.7 N。 Trimorph 执行器经 Argillon GmbH 许可推出）。"
        },
        {
          "id": "block-2",
          "en": "is set up in a parallel configuration direction for both piezoelectric ceramics is opposite and the internal electrode is connected to a reference voltage (ground). ules. Each actuator exhibits a typical capacitive load of 43 nF and can be operated at a maximum voltage of 230 V.",
          "zh": "两个压电陶瓷的平行配置方向相反，内部电极连接到参考电压（地）。 规则。 每个执行器的典型电容负载为 43 nF，可在最大 230 V 电压下运行。"
        },
        {
          "id": "block-3",
          "en": "Case Study 2.5: Precision piezoelectric XYZ scanning mechanism for atomic force microscopy on a spacecraft The MIDAS (Micro Imaging Dust Analysis System) instrument was launched on March 2004 on board the European Space Agency probe ROSETTA (Ariane 5 mission). The ROSETTA/MIDAS system will analyze the dust of the 46/P Churyumov – Gerasimenko comet using an atomic force microscope.",
          "zh": "案例研究 2.5：航天器上用于原子力显微镜的精密压电 XYZ 扫描机构 MIDAS（微成像灰尘分析系统）仪器于 2004 年 3 月在欧洲航天局 ROSETTA 探测器（阿丽亚娜 5 号任务）上发射。 ROSETTA/MIDAS 系统将使用原子力显微镜分析 46/P Churyumov – Gerasimenko 彗星的尘埃。"
        },
        {
          "id": "block-4",
          "en": "Cedrat Technologies (Meylan, France) has designed and implemented a piezoelectric XYZ stage that will be used to scan the dust specimen on three axes. The caption and the pictures of this instance of application are courtesy of Cedrat Technologies.",
          "zh": "Cedrat Technologies（法国梅兰）设计并实现了压电 XYZ 平台，用于在三个轴上扫描灰尘样本。 此应用实例的标题和图片由 Cedrat Technologies 提供。"
        },
        {
          "id": "block-5",
          "en": "The scanning system, a constituent part of the complete instrument, has been qualified for EQM (engineering and qualifications model), QM (qualification model), FM (flight model) and FSM (flight spare model) standards. The scanning mechanism contains six degrees of freedom. Three of these are actively controlled (positions X, Y and Z), and three passively cancelled (rotations around axes X, Y and Z).",
          "zh": "扫描系统是整机的组成部分，已通过EQM（工程和资格模型）、QM（资格模型）、FM（飞行模型）和FSM（飞行备用模型）标准的认证。 扫描机构包含六个自由度。 其中三个是主动控制的（位置 X、Y 和 Z），三个是被动控制的（绕轴 X、Y 和 Z 旋转）。"
        },
        {
          "id": "block-6",
          "en": "The target functional performance was specified as follows: • Scanning stroke in X, Y directions: 100 μm, tesy of R. Le Letty and F. Claeyssen.",
          "zh": "目标功能性能指定如下： • X、Y 方向的扫描行程：100 μm，R. Le Letty 和 F. Claeyssen 的测试。"
        },
        {
          "id": "block-7",
          "en": "Reproduced by permission of CEDRAT TECHNOLOGIES). • Scanning stroke in Z direction: 8 μm, • Maximum parasitic rotation: θz ≤ 240 μrad, • Maximum parasitic rotation: θx , θy ≤ 20 μrad. The fundamental part of the scanning stage is Cedrat’s standard Amplified Piezoelectric Actuator (APA50S) (see Figure 2.44 for a detailed view of the actuator).",
          "zh": "经 CEDRAT TECHNOLOGIES 许可转载）。 • Z 方向扫描行程：8 µm， • 最大寄生旋转：θz ≤ 240 µrad， • 最大寄生旋转：θx 、θy ≤ 20 µrad。 扫描台的基本部分是 Cedrat 的标准放大压电执行器 (APA50S)（有关执行器的详细视图，请参见图 2.44）。"
        },
        {
          "id": "block-8",
          "en": "The configuration of the XY stage is symmetrical and it uses eight actuators to achieve a travel of 100 μm. As well as meeting the application requirements in terms of stroke and robustness, amplified piezoelectric actuators APAs were chosen because they are simpler and easier to build than competing technologies. This is important for the possibility of integrating position sensors for each scanning drive direction.",
          "zh": "XY平台的配置是对称的，它使用八个执行器来实现100μm的行程。 除了满足行程和鲁棒性方面的应用要求外，我们还选择了放大压电执行器 APA，因为它们比竞争技术更简单、更容易构建。 这对于为每个扫描驱动方向集成位置传感器的可能性非常重要。"
        },
        {
          "id": "block-9",
          "en": "The displacement in each direction is monitored by means of a capacitive sensor. Moreover, the APAs are integrated in a parallelogram configuration and so act additionally as guiding elements. Flexural hinges are implemented to decouple the displacement in X and Y directions (see Figure 2.45).",
          "zh": "每个方向的位移通过电容传感器监测。 此外，APA 集成在平行四边形配置中，因此还可以充当引导元件。 弯曲铰链用于解耦 X 和 Y 方向的位移（见图 2.45）。"
        },
        {
          "id": "block-10",
          "en": "The scanning motion in the Z direction is provided by a customized parallel prestressed actuator with a stroke of 8 μm. The prestressed actuator is equipped with a full Wheatstone bridge of strain gauges to monitor the Z displacement. A common aspect of spacecraft applications is the strictness of requirements in terms of shock and vibration during the launching stage.",
          "zh": "Z 方向的扫描运动由行程为 8 μm 的定制平行预应力执行器提供。 预应力执行器配备了完整的惠斯通应变仪电桥来监测 Z 位移。 航天器应用的一个共同点是发射阶段对冲击和振动的严格要求。"
        },
        {
          "id": "block-11",
          "en": "In order to solve this problem, the scanning stage was equipped with a latching mechanism based on shape memory alloys (see Case study 3.1 where the latching mechanism is described). During the testing phase at CEDRAT TECHNOLOGIES’ laboratory, the XY stage was excited using CEDRAT TECHNOLOGIES’ SA75 electronic drivers, F. Claeyssen.",
          "zh": "为了解决这个问题，扫描台配备了基于形状记忆合金的锁定机构（参见案例研究 3.1，其中描述了锁定机构）。 在 CEDRAT TECHNOLOGIES 实验室的测试阶段，XY 平台使用 CEDRAT TECHNOLOGIES 的 SA75 电子驱动器 F. 克莱森。"
        },
        {
          "id": "block-12",
          "en": "Reproduced by permission of CEDRAT TECHNOLOGIES). XY stage FM 1st functional testX channel 100.0 80.0 60.0 40.0 20.0 0.0 −20.0 −20.0 0.0 20.0 40.0 60.0 Voltage (V) Displacement ( μm) Displacement laser (μm) Cap Sensor (μm)",
          "zh": "经 CEDRAT TECHNOLOGIES 许可转载）。 XY 平台 FM 第一功能测试 X 通道 100.0 80.0 60.0 40.0 20.0 0.0 −20.0 −20.0 0.0 20.0 40.0 60.0 电压 (V) 位移 (μm) 位移激光 (μm) 盖传感器 (μm)"
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
          "zh": "−40.0 −60.0 和 F. Claeyssen，经 CEDRAT TECHNOLOGIES 许可转载）。仪器（由 R. 提供）"
        },
        {
          "id": "block-2",
          "en": "Le Letty and F. Claeyssen, Reproduced by permission of CEDRAT TECHNOLOGIES). and the response from the capacitive sensors was compared to that of a laser interferometer.",
          "zh": "Le Letty 和 F. Claeyssen，经 CEDRAT TECHNOLOGIES 许可转载）。并将电容传感器的响应与激光干涉仪的响应进行比较。"
        },
        {
          "id": "block-3",
          "en": "The linearity error in the displacement versus voltage characteristic of the scanning stage was less than 0.5% (see Figure 2.46). The ratio between the noload displacement of APAs and the stage displacements was about 0.88 and was related to the increased stiffness of the elastic flexure hinge–based guiding mechanisms. Also, the coupling between X and Y axes was less than 2%.",
          "zh": "扫描台位移与电压特性的线性误差小于0.5%（见图2.46）。 APA 的空载位移与平台位移之比约为 0.88，这与基于弹性弯曲铰链的导向机构的刚度增加有关。 此外，X 轴和 Y 轴之间的耦合小于 2%。"
        },
        {
          "id": "block-4",
          "en": "ROSETTA–MIDAS instrument. The model includes the XYZ positioning stage, the capacitive and strain gauge position sensors and the latching mechanism based on shape memory actuators.",
          "zh": "ROSETTA-MIDAS 仪器。该模型包括 XYZ 定位台、电容式和应变计位置传感器以及基于形状记忆执行器的锁定机构。"
        }
      ]
    }
  ]
}
