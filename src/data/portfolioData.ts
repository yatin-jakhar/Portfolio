export interface ProjectArchitectureJoint {
  name: string;
  type: string;
  pin: string;
  powerSource: string;
  motion: string;
}

export interface FsmStateStep {
  state: string;
  binary: string;
  action: string;
  storedBit: string;
  nextState: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  leadRole?: string;
  teamSize?: number;
  tools: string[];
  description: string;
  summaryBullets: string[];
  architectureOverview: string;
  workingPrinciple: string[];
  technicalSpecs: { label: string; value: string }[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  schematicDetails?: {
    components: string[];
    connections: { pin: string; target: string; note: string }[];
    servoArchitecture?: ProjectArchitectureJoint[];
  };
  fsmDetails?: {
    condition: string;
    testCases: { input: string; output: string; isPalindrome: boolean }[];
    states: FsmStateStep[];
  };
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  focus: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  highlights: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    levelTag: string; // e.g., "Design & Logic", "Hardware Modeling", "RTL Verification"
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Yatin Singh Jakhar",
    pronouns: "",
    title: "Electronics & Communication Engineering Student",
    specialization: "Very Large Scale Integration (VLSI)",
    tagline: "Building at the intersection of digital logic, RTL design, and embedded systems.",
    location: "Faridabad, Haryana, India",
    pincode: "121004",
    email: "jakharyatin39@gmail.com",
    phone: "+91 70114 77488",
    linkedin: "https://linkedin.com/in/yatinsinghjakhar",
    // In accordance with instructions: If GitHub handle is not explicitly detailed in source files,
    // maintain this clear placeholder for user customization.
    github: "https://github.com/yatin-jakhar/Portfolio", 
    resumeUrl: "/Yatin_Singh_Jakhar_Resume.pdf",
    projectReportsUrl: "/Yatin_Project_Reports.pdf",
    availableFor: "VLSI / RTL Design, Digital Logic & Embedded Systems Internships",
    bio: [
      "I am an Electronics and Communication Engineering undergraduate at Manav Rachna University specializing in Very Large Scale Integration (VLSI).",
      "My core academic and practical interests revolve around digital logic design, Verilog HDL, RTL architecture, and embedded microcontroller systems.",
      "I believe in reinforcing conceptual digital electronics with hands-on hardware implementation — from writing synthesizable state machines in Verilog to assembling multi-axis servo robotics with Arduino."
    ],
    quickFacts: [
      { label: "EDUCATION", value: "B.Tech ECE — VLSI Specialization" },
      { label: "INSTITUTION", value: "Manav Rachna University" },
      { label: "CORE FOCUS", value: "RTL & Digital Logic Design" },
      { label: "HARDWARE", value: "Arduino Uno & Servo Architectures" },
      { label: "SIMULATION", value: "EDA Playground & ModelSim" },
      { label: "LOCATION", value: "Faridabad, Haryana, India" }
    ]
  },

  skills: [
    {
      category: "Hardware & Digital Design",
      description: "Foundational digital circuits, sequential logic, and physical system architecture.",
      skills: [
        {
          name: "Digital Logic Design",
          description: "Boolean algebra, combinational circuits, flip-flops, registers, counters, and synchronous sequential circuits.",
          levelTag: "Digital Systems"
        },
        {
          name: "Circuit Analysis",
          description: "AC/DC circuit behavior, Kirchhoff's laws, impedance, signal timing, and analog sensor interfacing.",
          levelTag: "Electrical Analysis"
        },
        {
          name: "RTL Design",
          description: "Register-Transfer Level architecture, synchronous clocking, state encoding, and datapath/control logic.",
          levelTag: "Hardware Description"
        },
        {
          name: "Embedded Systems",
          description: "Microcontroller architecture, GPIO mapping, analog-to-digital conversion (ADC), and PWM motor control.",
          levelTag: "Hardware Interfacing"
        }
      ]
    },
    {
      category: "HDL / Programming",
      description: "Hardware modeling languages and firmware control algorithms.",
      skills: [
        {
          name: "Verilog HDL",
          description: "Structural and behavioral modeling, non-blocking assignments, testbenches, and Finite State Machines (FSM).",
          levelTag: "HDL Synthesis & Sim"
        },
        {
          name: "Arduino / Embedded C++",
          description: "Hardware interrupt routines, timer PWM generation, deadzone calibration, and non-blocking serial communication.",
          levelTag: "Firmware"
        }
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Industry-standard digital simulation suites and prototyping platforms.",
      skills: [
        {
          name: "EDA Playground",
          description: "Cloud-based Verilog testbench simulation, waveform generation, and RTL synthesis validation.",
          levelTag: "Cloud EDA"
        },
        {
          name: "ModelSim",
          description: "Digital logic simulation, RTL debugging, timing verification, and waveform signal inspection.",
          levelTag: "Logic Simulation"
        }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "robotic-arm-6dof",
      number: "01",
      title: "6 DOF Robotic Arm Using Joystick Control",
      subtitle: "Dual-Joystick Articulated Manipulator with Mixed-Power Servo Architecture",
      category: "Embedded Systems & Hardware",
      leadRole: "Project Lead",
      teamSize: 5,
      tools: ["Arduino Uno", "C++ (Embedded)", "RC Digital Servos (35kg)", "SG90 Servos", "PWM Control", "Dual Joysticks"],
      description: "Engineered and led a multi-disciplinary team of 5 to design and build a 6 Degrees of Freedom (DOF) robotic manipulator powered by an Arduino Uno, featuring mixed-power servo distribution, deadzone filtering, and instant recovery routines.",
      summaryBullets: [
        "Engineered and led a multi-disciplinary team of 5 as Project Lead to design and build a 6 Degrees of Freedom (DOF) robotic arm powered by an Arduino Uno.",
        "Integrated mixed-power servo architectures, combining high-torque RC digital servos (35kg) with external power supplies for major joints and SG90 servos for precision wrist and gripper movements.",
        "Developed custom embedded C++ (Arduino) software featuring joystick-to-servo mapping, deadzone filtering (50 units), step-size smoothing, and instant position reset functionality."
      ],
      architectureOverview: "The manipulator splits power domains into an external high-current power supply for high-load joints and onboard Arduino power for precision end-effector servos to prevent brownout resets.",
      workingPrinciple: [
        "Two dual-axis analog joysticks provide 4 analog voltage channels (0–5V) to Arduino ADC pins A0 through A3.",
        "The firmware samples analog inputs, applies a 50-unit deadzone filter around the 512 center point, and smoothly scales values to servo target angles.",
        "High-torque 35kg RC digital servos manage heavy mechanical leverage at the Base, Shoulder, and Elbow, drawing current directly from an external regulated DC supply.",
        "Low-mass SG90 micro-servos actuate the Wrist pitch, Gripper rotation, and Claw grasping mechanism, powered safely from the Arduino rail.",
        "Joystick 1 push-button toggles the gripper clamp state (0° to 120°) with debounced logic; Joystick 2 push-button triggers a synchronous position reset (90° default)."
      ],
      technicalSpecs: [
        { label: "Degrees of Freedom", value: "6 Axis (Base, Shoulder, Elbow, Wrist, Gripper Rotate, Gripper Claws)" },
        { label: "Microcontroller", value: "Arduino Uno (ATmega328P, 16MHz)" },
        { label: "Heavy Actuators", value: "3x 35kg-cm High-Torque RC Digital Servos" },
        { label: "Precision Actuators", value: "3x SG90 Micro-Servos" },
        { label: "Power Isolation", value: "External Regulated DC Supply for RC Servos, Common GND" },
        { label: "Control Inputs", value: "2x Dual-Axis Analog Joysticks with Integrated Tactile Switches" },
        { label: "Smoothing Algorithm", value: "Incremental moveGradually() with DEADZONE 50 & STEP_SIZE 2" },
        { label: "Wireless Readiness", value: "HC-10 Bluetooth Module interface reserved for future expansion" }
      ],
      schematicDetails: {
        components: [
          "Arduino Uno Microcontroller",
          "3x High-Torque RC Digital Servos (35kg)",
          "3x SG90 Micro Servos",
          "2x Dual-Axis Analog Joysticks (VRX, VRY, SW)",
          "External Regulated DC Power Supply",
          "Common Ground Distribution Rail"
        ],
        connections: [
          { pin: "PWM Pin 3", target: "Base Servo (RC Digital)", note: "External Power Rail" },
          { pin: "PWM Pin 5", target: "Shoulder Servo (RC Digital)", note: "External Power Rail" },
          { pin: "PWM Pin 6", target: "Elbow Servo (RC Digital)", note: "External Power Rail" },
          { pin: "PWM Pin 9", target: "Wrist Servo (SG90)", note: "Arduino 5V Rail" },
          { pin: "PWM Pin 10", target: "Gripper Servo (SG90)", note: "Arduino 5V Rail" },
          { pin: "PWM Pin 11", target: "Gripper Rotation Servo (SG90)", note: "Arduino 5V Rail" },
          { pin: "Analog A0", target: "Joystick 1 VRX", note: "Controls Base Rotation" },
          { pin: "Analog A1", target: "Joystick 1 VRY", note: "Controls Shoulder Elevation" },
          { pin: "Digital Pin 7", target: "Joystick 1 Button", note: "INPUT_PULLUP, Toggles Gripper (0° / 120°)" },
          { pin: "Analog A2", target: "Joystick 2 VRX", note: "Controls Gripper Rotation" },
          { pin: "Analog A3", target: "Joystick 2 VRY", note: "Controls Wrist Articulation" },
          { pin: "Digital Pin 8", target: "Joystick 2 Button", note: "INPUT_PULLUP, Instant Arm Reset to Default" }
        ],
        servoArchitecture: [
          { name: "Base Joint", type: "RC Digital (35kg)", pin: "D3", powerSource: "External Supply", motion: "Horizontal Swivel (0° - 180°)" },
          { name: "Shoulder Joint", type: "RC Digital (35kg)", pin: "D5", powerSource: "External Supply", motion: "Primary Vertical Lift" },
          { name: "Elbow Joint", type: "RC Digital (35kg)", pin: "D6", powerSource: "External Supply", motion: "Forearm Articulation" },
          { name: "Wrist Joint", type: "SG90 Micro Servo", pin: "D9", powerSource: "Arduino 5V", motion: "Wrist Pitch" },
          { name: "Gripper Rotation", type: "SG90 Micro Servo", pin: "D11", powerSource: "Arduino 5V", motion: "End-Effector Roll (0° - 180°)" },
          { name: "Gripper Clamp", type: "SG90 Micro Servo", pin: "D10", powerSource: "Arduino 5V", motion: "Toggle Clamp (Closed: 0°, Open: 120°)" }
        ]
      },
      codeSnippet: {
        language: "cpp",
        filename: "robotic_arm_control.ino",
        code: `#include <Servo.h>

Servo baseServo, shoulderServo, elbowServo, wristServo, gripperServo, gripperRotationServo;

#define VRX1 A0
#define VRY1 A1
#define BUTTON1 7 
#define VRX2 A2
#define VRY2 A3
#define BUTTON2 8 

int baseAngle = 90, shoulderAngle = 90, elbowAngle = 90;
int wristAngle = 90, gripperAngle = 0, gripperRotationAngle = 90;

bool lastButtonState1 = HIGH; 
bool lastButtonState2 = HIGH; 
bool gripperOpen = false; 

#define DEADZONE 50
#define STEP_SIZE 2 

void setup() {
  Serial.begin(115200);
  baseServo.attach(3);
  shoulderServo.attach(5);
  elbowServo.attach(6);
  wristServo.attach(9);
  gripperServo.attach(10);
  gripperRotationServo.attach(11);
  pinMode(BUTTON1, INPUT_PULLUP); 
  pinMode(BUTTON2, INPUT_PULLUP); 
}

void loop() {
  int xValue1 = analogRead(VRX1);
  int yValue1 = analogRead(VRY1);
  int xValue2 = analogRead(VRX2);
  int yValue2 = analogRead(VRY2);
  
  bool buttonState1 = digitalRead(BUTTON1) == LOW; 
  bool buttonState2 = digitalRead(BUTTON2) == LOW; 
  
  // Gripper toggle with debouncing
  if (buttonState1 && !lastButtonState1) { 
    gripperOpen = !gripperOpen;
    gripperAngle = gripperOpen ? 120 : 0; 
    gripperServo.write(gripperAngle);
    Serial.print("Gripper: "); Serial.println(gripperAngle);
    delay(200);
  }
  lastButtonState1 = buttonState1;
  
  // Reset arm position
  if (buttonState2 && !lastButtonState2) { 
    resetPosition();
    Serial.println("Arm position reset!");
    delay(300);
  }
  lastButtonState2 = buttonState2;
  
  // Joystick deadzone filtering and gradual motion
  if (abs(xValue1 - 512) > DEADZONE) {
    int targetAngle = map(xValue1, 0, 1023, 0, 180);
    baseAngle = moveGradually(baseAngle, targetAngle);
  }
  if (abs(yValue1 - 512) > DEADZONE) {
    int targetAngle = map(yValue1, 0, 1023, 0, 180);
    shoulderAngle = moveGradually(shoulderAngle, targetAngle);
  }
  if (abs(xValue2 - 512) > DEADZONE) {
    int targetAngle = map(xValue2, 0, 1023, 0, 180);
    gripperRotationAngle = moveGradually(gripperRotationAngle, targetAngle);
  }
  if (abs(yValue2 - 512) > DEADZONE) {
    int targetAngle = map(yValue2, 0, 1023, 0, 180);
    wristAngle = moveGradually(wristAngle, targetAngle);
  }
  
  moveServos();
  delay(20);
}

void resetPosition() {
  baseAngle = shoulderAngle = elbowAngle = wristAngle = gripperRotationAngle = 90;
  gripperAngle = 0;
  gripperOpen = false;
  moveServos();
}

void moveServos() {
  baseServo.write(baseAngle);
  shoulderServo.write(shoulderAngle);
  elbowServo.write(elbowAngle);
  wristServo.write(wristAngle);
  gripperRotationServo.write(gripperRotationAngle);
  gripperServo.write(gripperAngle);
}`
      }
    },
    {
      id: "palindrome-detector-fsm",
      number: "02",
      title: "4-Bit Palindrome Detector Using FSM & Verilog HDL",
      subtitle: "Synchronous Sequential Logic Circuit with 5-State RTL Architecture",
      category: "VLSI & Digital Logic",
      tools: ["Verilog HDL", "Finite State Machines (FSM)", "ModelSim", "EDA Playground", "RTL Design", "Sequential Logic"],
      description: "Designed a synchronous sequential digital logic circuit using a Finite State Machine (FSM) in synthesizable Verilog HDL to verify 4-bit serial binary sequences for palindromic symmetry.",
      summaryBullets: [
        "Designed a sequential digital logic circuit using a Finite State Machine (FSM) in Verilog HDL to verify 4-bit serial binary sequences for palindromes.",
        "Implemented RTL state transitions across five distinct clock cycles to store and compare bit pairs (B3 = B0 and B2 = B1).",
        "Validated the design successfully through rigorous test-bench simulations covering both valid palindrome and non-palindrome edge cases."
      ],
      architectureOverview: "A 5-state Mealy/Moore synchronous FSM that samples serial incoming bits on rising clock edges, buffers them into an internal 4-bit register, and executes symmetry equality checks at the final state.",
      workingPrinciple: [
        "A binary sequence B3 B2 B1 B0 is considered a palindrome if and only if B3 == B0 AND B2 == B1.",
        "The circuit receives one serial bit per clock cycle synchronized to posedge clk or posedge asynchronous rst.",
        "State S0 (3'b000): Buffers first bit into data[3] and steps to S1.",
        "State S1 (3'b001): Buffers second bit into data[2] and steps to S2.",
        "State S2 (3'b010): Buffers third bit into data[1] and steps to S3.",
        "State S3 (3'b011): Buffers fourth bit into data[0] and steps to S4.",
        "State S4 (3'b100): Evaluates condition: if ((data[3] == data[0]) && (data[2] == data[1])), asserts palindrome = 1'b1; else palindrome = 1'b0, then returns synchronously to S0 for the next frame."
      ],
      technicalSpecs: [
        { label: "Hardware Description", value: "Verilog HDL (IEEE 1364)" },
        { label: "Architecture Type", value: "Synchronous Finite State Machine (FSM)" },
        { label: "Bit Storage Register", value: "reg [3:0] data (Shift/Buffer Register)" },
        { label: "FSM State Encoding", value: "3-bit binary: S0(000), S1(001), S2(010), S3(011), S4(100)" },
        { label: "Clocking", value: "Positive edge triggered (always @(posedge clk or posedge rst))" },
        { label: "Verification Suites", value: "EDA Playground & ModelSim Waveform Analysis" },
        { label: "Evaluation Latency", value: "4 clock cycles capture + 1 cycle evaluation" }
      ],
      fsmDetails: {
        condition: "(B3 == B0) && (B2 == B1)",
        testCases: [
          { input: "0000", output: "1 (Palindrome)", isPalindrome: true },
          { input: "0110", output: "1 (Palindrome)", isPalindrome: true },
          { input: "1001", output: "1 (Palindrome)", isPalindrome: true },
          { input: "1111", output: "1 (Palindrome)", isPalindrome: true },
          { input: "0101", output: "0 (Not Palindrome)", isPalindrome: false },
          { input: "0011", output: "0 (Not Palindrome)", isPalindrome: false }
        ],
        states: [
          { state: "S0", binary: "3'b000", action: "Sample first bit", storedBit: "data[3] <= data_in", nextState: "S1" },
          { state: "S1", binary: "3'b001", action: "Sample second bit", storedBit: "data[2] <= data_in", nextState: "S2" },
          { state: "S2", binary: "3'b010", action: "Sample third bit", storedBit: "data[1] <= data_in", nextState: "S3" },
          { state: "S3", binary: "3'b011", action: "Sample fourth bit", storedBit: "data[0] <= data_in", nextState: "S4" },
          { state: "S4", binary: "3'b100", action: "Compare B3==B0 && B2==B1", storedBit: "palindrome <= (B3==B0 && B2==B1)", nextState: "S0" }
        ]
      },
      codeSnippet: {
        language: "verilog",
        filename: "palindrome_detector.v",
        code: `module palindrome_detector (
  input wire clk,
  input wire rst,
  input wire data_in,
  output reg palindrome
);

  reg [2:0] state;
  reg [3:0] data;

  parameter S0 = 3'b000,
            S1 = 3'b001,
            S2 = 3'b010,
            S3 = 3'b011,
            S4 = 3'b100;

  always @(posedge clk or posedge rst) begin
    if (rst) begin
      state <= S0;
      data <= 4'b0000;
      palindrome <= 1'b0;
    end
    else begin
      case (state)
        S0: begin
          data[3] <= data_in;
          state <= S1;
        end
        S1: begin
          data[2] <= data_in;
          state <= S2;
        end
        S2: begin
          data[1] <= data_in;
          state <= S3;
        end
        S3: begin
          data[0] <= data_in;
          state <= S4;
        end
        S4: begin
          if ((data[3] == data[0]) && (data[2] == data[1]))
            palindrome <= 1'b1;
          else
            palindrome <= 1'b0;
          state <= S0;
        end
        default: begin
          state <= S0;
          palindrome <= 1'b0;
        end
      endcase
    end
  end

endmodule`
      }
    }
  ] as ProjectData[],

  experience: [
    {
      role: "Pritam Singh Memorial (PRISM) Conference Intern",
      organization: "Manav Rachna International Institute of Research and Studies",
      period: "September 2026 – Present",
      type: "Organizational & Conference Logistics",
      description: "Contributing to the execution and operational backbone of a major national academic and corporate management conference.",
      responsibilities: [
        "Coordinated academic and corporate logistics: Assisted in organizing a large-scale national management conference, managing delegate communications, registration desks, and scheduling across multi-day events.",
        "Streamlined event operations: Collaborated with cross-functional committees to manage venue arrangements, technical setups, and hospitality for corporate leaders and academic faculty.",
        "Supported content and proceedings management: Assisted in compiling research paper abstracts, session summaries, and documentation for conference deliverables and post-event reports."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Manav Rachna University",
      period: "Aug 2024 – Present",
      specialization: "Very Large Scale Integration (VLSI)",
      details: "Curriculum focusing on digital logic design, semiconductor physics, RTL architecture, circuit analysis, and embedded microcontrollers."
    },
    {
      degree: "Senior Secondary — 12th (CBSE)",
      institution: "Eicher School, Faridabad",
      period: "Jun 2023 – May 2024",
      details: "Rigorous foundation in mathematics, physics, and chemistry with an orientation toward engineering."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Verilog",
      issuer: "Truechip Solutions PVT. LTD.",
      date: "June 2026",
      focus: "Hardware Description Language syntax, behavioral & structural modeling, digital testbench verification."
    },
    {
      title: "Entrepreneurship Essentials",
      issuer: "NPTEL, Govt. of India",
      date: "Jan – Apr 2026",
      focus: "Core venture planning, engineering economics, resource allocation, and project management fundamentals."
    },
    {
      title: "VHDL (Basics)",
      issuer: "Truechip Solutions PVT. LTD.",
      date: "June 2025",
      focus: "Hardware description fundamentals, entity-architecture paradigms, and sequential digital synthesis concepts."
    }
  ] as CertificationItem[],

  leadership: [
    {
      role: "Clan Coordinator",
      organization: "Student Welfare",
      highlights: "Spearheaded the planning and execution of multiple large-scale student engagement events, managing logistics and team coordination.",
      tags: ["Event Logistics", "Team Leadership", "Operations"]
    },
    {
      role: "Technical Team Member",
      organization: "Digital Nexus",
      highlights: "Organized and facilitated technical workshops and coding events, driving participation and hands-on learning among peers.",
      tags: ["Peer Mentorship", "Technical Workshops", "Community"]
    },
    {
      role: "Performer & Representative",
      organization: "Rudra Dance Society",
      highlights: "Represented the institution in premier inter-college dance competitions, including a high-profile showcase at the Constitution Club of India.",
      tags: ["Creative Discipline", "Inter-College Representation", "Stage Performance"]
    }
  ] as LeadershipItem[]
};
