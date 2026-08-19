window.CE3111_DATA = {
  "sets": [
    {
      "n": 1,
      "section": "A",
      "title": "Stability & Determinacy + SFD/BMD",
      "tag": "Core structural analysis",
      "frequency": "Annual Core · 8/8 complete regular papers",
      "pdf_page": 30,
      "summary": "Classify structures correctly, obtain reactions, and draw axial/shear/bending-force diagrams without sign confusion.",
      "goals": [
        "Differentiate determinate vs indeterminate and stable vs unstable.",
        "Count support reactions but also inspect geometry, hinges and mechanisms.",
        "Create a clean FBD before equilibrium.",
        "Draw/check SFD and BMD using load–shear–moment relationships."
      ],
      "formulas": [
        [
          "2D equilibrium",
          "ΣFx = 0; ΣFy = 0; ΣM = 0"
        ],
        [
          "Support unknowns",
          "Roller = 1, Pin = 2, Fixed = 3"
        ],
        [
          "Beam relation",
          "dV/dx = w"
        ],
        [
          "Beam relation",
          "dM/dx = V"
        ],
        [
          "Extremum moment",
          "V = 0"
        ],
        [
          "Contraflexure",
          "M = 0 with sign change"
        ]
      ],
      "theory": [
        "Determinate: reactions/internal forces follow from equilibrium alone. Indeterminate: compatibility/deformation relations are additionally required.",
        "Stable: support arrangement and geometry prevent rigid-body motion. Unstable: a mechanism or inadequate restraint permits motion.",
        "Zero-force member rules are useful for simplifying truss calculations before joint analysis."
      ],
      "shortcuts": [
        "Count first, inspect geometry second. A correct count does not guarantee stability.",
        "Force jump → SFD jump. Concentrated couple → BMD jump.",
        "Always check reactions against the total external loading."
      ],
      "traps": [
        "Changing the sign convention midway.",
        "Ignoring internal hinges (M = 0 at a hinge).",
        "Calling a structure stable only because the reaction count looks sufficient."
      ],
      "years": [
        "2016: classification + loaded frame SFD/BMD",
        "2017: difference questions + classification + AFD/SFD/BMD",
        "2018: zero-force member + classification + frame diagrams",
        "2019: classification + frame SFD/BMD from end moments",
        "2021: classification + overhang beam SFD/BMD",
        "2022: zero-force member/classification + frame diagrams",
        "2023: classification + pitched rigid-frame diagrams",
        "2024: classification + frame force-diagram problem",
        "2024 Backlog: differentiate/classify + complete frame AFD/SFD/BMD"
      ],
      "steps": [
        "Draw the full structure FBD and replace supports by reactions.",
        "Check stability/determinacy using both count and geometry.",
        "Solve external reactions from equilibrium.",
        "Cut members/regions in logical order; compute N, V and M.",
        "Plot diagrams with correct jumps/slopes and label key ordinates.",
        "Check hinge moments, end conditions and global equilibrium."
      ],
      "docs": [
        [
          "Question bank",
          "docs/question-bank-2016-2024.pdf"
        ],
        [
          "Formula master",
          "docs/formula-theory-proof.pdf"
        ]
      ]
    },
    {
      "n": 2,
      "section": "A",
      "title": "Plane Truss + Three-Hinged Arch",
      "tag": "Axial force + horizontal thrust",
      "frequency": "Annual Core · 8/8 complete regular papers",
      "pdf_page": 41,
      "summary": "Solve selected truss members efficiently and master the repeated three-hinged parabolic-arch point-force/moment pattern.",
      "goals": [
        "Use method of joints and method of sections.",
        "Identify tension/compression consistently.",
        "Use the parabolic arch equation to find ordinate and tangent at a section.",
        "Find vertical reactions, horizontal thrust H, then M, N and Q at the requested point."
      ],
      "formulas": [
        [
          "Truss equilibrium",
          "At a joint: ΣFx = 0; ΣFy = 0"
        ],
        [
          "Method of section",
          "Use ΣFx = 0; ΣFy = 0; ΣM = 0 on one cut part"
        ],
        [
          "Parabolic arch",
          "y = 4hx(L−x)/L²"
        ],
        [
          "Arch moment",
          "M_arch = M_beam − H y"
        ],
        [
          "Arch slope",
          "dy/dx = (4h/L²)(L−2x)"
        ],
        [
          "Tangent angle",
          "θ = tan⁻¹(dy/dx)"
        ]
      ],
      "theory": [
        "Ideal truss members are pin-connected, loaded at joints and carry axial force only.",
        "A three-hinged arch is statically determinate; two-hinged and fixed arches are indeterminate.",
        "An arch reduces bending because the horizontal thrust term Hy offsets beam-type bending."
      ],
      "shortcuts": [
        "At a truss joint, start where no more than two member forces are unknown.",
        "For method of sections, cut no more than three unknown members and take moments about an intersection of two unknowns.",
        "Arch sequence: y → reactions → H → section BM → θ → N/Q."
      ],
      "traps": [
        "Using the wrong x-origin in y = 4hx(L−x)/L².",
        "Forgetting that hinge moment is zero.",
        "Resolving arch forces before finding the local tangent angle."
      ],
      "years": [
        "2016: joints for FG/GD/CB/CF + arch BM at specified point",
        "2017: selected truss members + arch internal forces at D",
        "2018: method of sections + arch BM 30 m from support",
        "2019: Henneberg/truss forms + arch BM",
        "2021: cantilever truss + arch pure-compression concept",
        "2022: joints + arch advantages/max BM",
        "2023: all-member truss under UDL + beam-vs-arch/internal forces",
        "2024: selected members + three-hinged arch force/moment",
        "2024 Backlog: FG/GD/CB/CF + arch internal forces at D"
      ],
      "steps": [
        "For truss: reactions → zero-force members → joints/section → T/C table.",
        "For arch: write y(x), solve vertical reactions from global equilibrium.",
        "Take moment about crown hinge on one half to obtain H.",
        "At target x, calculate y and beam-type section moment.",
        "Compute M_arch = M_beam − Hy; calculate tangent angle and resolve N/Q if asked.",
        "Check M = 0 at all three hinges."
      ],
      "docs": [
        [
          "Truss worked solution",
          "docs/truss-qb-solution.pdf"
        ],
        [
          "Arch worked solution",
          "docs/arch-qb-solution.pdf"
        ]
      ]
    },
    {
      "n": 3,
      "section": "A",
      "title": "Wind + Earthquake",
      "tag": "Table-driven lateral loads",
      "frequency": "Annual Core · 8/8 complete regular papers",
      "pdf_page": 68,
      "summary": "A highly algorithmic set: calculate floor-wise wind force and distribute equivalent-static earthquake base shear to floors.",
      "goals": [
        "Keep wind coefficients and units consistent.",
        "Use projected tributary area normal to the wind.",
        "Follow the supplied seismic-site and response data.",
        "Verify the distributed floor earthquake forces sum back to base shear."
      ],
      "formulas": [
        [
          "Sustained wind pressure",
          "qz = Cc · CI · Cz · Vb²"
        ],
        [
          "Design wind pressure",
          "pz = CG · Cp · qz"
        ],
        [
          "Wind floor force",
          "Fi = pi · Ai,tributary"
        ],
        [
          "Approximate period",
          "T = Ct · hn^m"
        ],
        [
          "Design spectral acceleration",
          "Sa = (2/3)(Z I / R) Cs"
        ],
        [
          "Base shear",
          "V = Sa W"
        ],
        [
          "Floor seismic force",
          "Fx = V(wx hx^k)/Σ(wi hi^k)"
        ],
        [
          "Storey shear",
          "Vx = ΣFi at and above storey x"
        ]
      ],
      "theory": [
        "Sustained pressure is the computed incident pressure at a height/exposure; design pressure includes gust and pressure coefficients.",
        "Vortex shedding creates alternating vortices and can produce cross-wind oscillation.",
        "Earthquake magnitude measures released energy; intensity describes shaking at a particular site.",
        "Base shear is the total design lateral earthquake force at the base."
      ],
      "shortcuts": [
        "Wind: speed → qz → pz → tributary area → floor force.",
        "Earthquake: T → spectrum Cs → Sa → base shear V → floor distribution.",
        "Make a floor table before calculation; never mix coefficients from a different year/problem."
      ],
      "traps": [
        "Using gross floor area instead of projected wind area.",
        "Mixing Cz and CG roles.",
        "Distributing earthquake force equally instead of wi hi^k weighting.",
        "Failing to check ΣFx = V."
      ],
      "years": [
        "2016: wind theory + 4-storey wind + 4-storey earthquake",
        "2017: 5-storey wind + 6-storey hospital earthquake",
        "2018: 5-storey seismic + 5-storey wind",
        "2019: 4-storey seismic + 4-storey wind",
        "2021: 4-storey wind + 5-storey steel seismic",
        "2022: vortex shedding + 7-storey wind + 5-storey earthquake",
        "2023: site-specific 7-storey wind + 5-storey seismic",
        "2024: wind + equivalent-static earthquake",
        "2024 Backlog: 5-storey wind + 5-storey earthquake"
      ],
      "steps": [
        "Create a floor-level table with elevation, coefficients and tributary dimensions.",
        "Wind: compute qz and pz at required heights, then floor forces.",
        "Earthquake: obtain period and spectral coefficient from supplied data.",
        "Compute design spectral acceleration and base shear.",
        "Distribute V to floors using wi hi^k.",
        "Check total wind-force units and verify Σ earthquake floor forces = V."
      ],
      "docs": [
        [
          "Wind lecture source",
          "docs/question-bank-2016-2024.pdf"
        ],
        [
          "Formula master",
          "docs/formula-theory-proof.pdf"
        ]
      ]
    },
    {
      "n": 4,
      "section": "A",
      "title": "Unit Load / Virtual Work + Conjugate Beam",
      "tag": "Deflection methods",
      "frequency": "Annual Core · 8/8 complete regular papers",
      "pdf_page": 74,
      "summary": "The repeated deflection pair: virtual-work/unit-load calculations and conjugate-beam slope/deflection problems, plus a recurring proof.",
      "goals": [
        "Apply a unit force for translation and a unit moment for rotation.",
        "Construct real-load moment M and virtual-load moment m correctly.",
        "Convert real-beam supports to conjugate-beam supports.",
        "Use conjugate shear for real slope and conjugate moment for real deflection."
      ],
      "formulas": [
        [
          "Beam/frame deflection",
          "Δ = ∫(M m / EI) dx"
        ],
        [
          "Beam/frame rotation",
          "θ = ∫(M mθ / EI) dx"
        ],
        [
          "Truss deflection",
          "Δ = Σ(N n L / AE)"
        ],
        [
          "Conjugate loading",
          "w* = M/EI"
        ],
        [
          "Mapping",
          "V* = θ(real)"
        ],
        [
          "Mapping",
          "M* = Δ(real)"
        ]
      ],
      "theory": [
        "Principle of virtual work: virtual external work equals virtual internal work for a compatible small displacement/deformation.",
        "For translation, place a unit force at the target point in the target direction. For rotation, place a unit moment.",
        "The conjugate beam is loaded by the real beam M/EI diagram."
      ],
      "shortcuts": [
        "Real system gives M; unit/virtual system gives m. Multiply, divide by EI, integrate.",
        "Conjugate memory: Shear → Slope, Moment → Movement (deflection).",
        "Before any conjugate numerical, draw a support-conversion mini-table."
      ],
      "traps": [
        "Applying a unit force when rotation is requested.",
        "Using the wrong sign for M/EI loading.",
        "Incorrect conjugate support conversion."
      ],
      "years": [
        "2016: conjugate definition + unit-load frame + multi-output conjugate",
        "2017: conjugate relations + unit-load frame + conjugate numerical",
        "2018: direct proof of Δ=∫Mm/EI dx + truss deflection",
        "2019: frame rotation/horizontal deflection + conjugate outputs",
        "2021: truss deflection + conjugate moments/max deflection/slope",
        "2022: frame rotation/deflection + conjugate theory/numerical",
        "2023: cantilever unit-load + conjugate slopes/deflections",
        "2024: frame joint virtual work + conjugate definition/numerical",
        "2024 Backlog: unit-load frame + conjugate definition/relationship/numerical"
      ],
      "steps": [
        "Solve reactions under real loading and write M(x) in each region.",
        "Apply unit force/moment at requested DOF and write m(x).",
        "Integrate Σ∫Mm/EI dx (or sum truss member NnL/AE).",
        "For conjugate method: draw M/EI loading and convert supports.",
        "Solve conjugate reactions; at the target, V* gives θ and M* gives Δ.",
        "Check units and expected sign/direction."
      ],
      "docs": [
        [
          "Formula/proof book",
          "docs/formula-theory-proof.pdf"
        ],
        [
          "Complete worked solution",
          "docs/question-bank-solution-complete.pdf#page=74"
        ]
      ]
    },
    {
      "n": 5,
      "section": "B",
      "title": "Influence Line Diagram (ILD)",
      "tag": "Moving unit load",
      "frequency": "Annual Core · 8/8 complete regular papers",
      "pdf_page": 83,
      "summary": "Draw ILDs for reactions, shear and moment in beams/frames with overhangs and internal hinges using a moving 1-unit load.",
      "goals": [
        "Define a coordinate x for the unit load.",
        "Split the motion path into ranges at supports, hinges and target sections.",
        "Derive reaction/shear/moment ordinates piecewise.",
        "Use Müller–Breslau as a fast shape check."
      ],
      "formulas": [
        [
          "Definition",
          "ILD ordinate = response caused by a unit load at position x"
        ],
        [
          "Simple span reaction",
          "RA = (L−x)/L; RB = x/L"
        ],
        [
          "Shear at section",
          "Jump of 1 across the section for a downward moving unit load"
        ],
        [
          "Müller–Breslau",
          "Release the response restraint and impose unit displacement/rotation"
        ]
      ],
      "theory": [
        "An influence line shows how one response quantity varies as a unit load moves across the structure.",
        "For statically determinate structures, ILD segments are straight between discontinuity points because the response expressions are linear in x.",
        "Müller–Breslau gives the qualitative influence-line shape from the deflected shape of the released structure."
      ],
      "shortcuts": [
        "Write the x-ranges first.",
        "At an internal hinge, moment is zero and the equilibrium relation changes.",
        "Shear ILD has a unit jump at the section; moment ILD remains continuous at an ordinary section."
      ],
      "traps": [
        "Using one equation across a support/hinge where the structural condition changes.",
        "Forgetting left/right shear are different at the section.",
        "Drawing shape without labeling key ordinates."
      ],
      "years": [
        "2016: reactions/shear + internal-hinge reaction/shear/moment",
        "2017: reactions B/D/G + reaction moment",
        "2018: beam ordinates + ILD importance",
        "2019: frame ILD reaction/shear/moment",
        "2020: reactions A/C/D + shear at points 1,2",
        "2021: B/E/G reactions + shear C + moment F",
        "2022: detailed beam + separate frame ILD",
        "2023: straight-line theory + beam/frame ILD",
        "2024: beam + frame ILD",
        "2024 Backlog: beam + frame ILD again"
      ],
      "steps": [
        "Place a downward unit load at x and establish x-ranges.",
        "For each range, solve needed reactions from equilibrium.",
        "Express target shear/moment from a consistent cut.",
        "Evaluate ordinates at ends, supports, hinges and just-left/just-right locations.",
        "Plot straight segments for determinate ranges; include required jumps.",
        "Use Müller–Breslau only as a shape/qualitative check unless asked explicitly."
      ],
      "docs": [
        [
          "ILD worked solutions",
          "docs/ild-qb-solution.pdf"
        ],
        [
          "Complete solution set start",
          "docs/question-bank-solution-complete.pdf#page=83"
        ]
      ]
    },
    {
      "n": 6,
      "section": "B",
      "title": "Approximate Frame Analysis: Portal + Cantilever + Factor",
      "tag": "Lateral building frames",
      "frequency": "Annual Core · 8/8 complete regular papers",
      "pdf_page": 101,
      "summary": "Master portal and cantilever methods first; factor method is an important historical backup.",
      "goals": [
        "State assumptions before a numerical.",
        "Portal: distribute storey shear by exterior/interior-column rule.",
        "Cantilever: distribute axial force using column area and distance from storey centroid.",
        "Transfer moments/shears consistently to beams and columns."
      ],
      "formulas": [
        [
          "Portal assumption",
          "Inflection points at mid-height columns and mid-span girders"
        ],
        [
          "Portal shear rule",
          "Interior column shear = 2 × exterior column shear (standard equal-bay idealization)"
        ],
        [
          "Cantilever centroid",
          "x̄ = Σ(Ai xi)/ΣAi"
        ],
        [
          "Cantilever axial pattern",
          "Pi ∝ Ai yi from centroid"
        ],
        [
          "Factor stiffness",
          "Use member stiffness ratios / distribution factors as defined in class method"
        ]
      ],
      "theory": [
        "Portal method suits low/medium-rise frames where storey shear distribution dominates.",
        "Cantilever method models the building like a vertical cantilever; column axial force varies linearly with horizontal distance from the centroid.",
        "Approximate methods reduce indeterminacy by assuming points of inflection and force distribution patterns."
      ],
      "shortcuts": [
        "Portal: floor shear → column shear → column moments → beam end moments/shears.",
        "Cantilever: storey group centroid → axial-force ratios → column forces → moments/shears.",
        "Do not mix portal and cantilever assumptions in one solution."
      ],
      "traps": [
        "Using equal column shear in portal method when interior/exterior rule applies.",
        "Using geometric centroid instead of area-weighted centroid in cantilever method.",
        "Skipping assumed inflection points."
      ],
      "years": [
        "2016: assumptions + full cantilever analysis",
        "2017: cantilever + factor method",
        "2018: cantilever + factor method",
        "2019: cantilever + portal assumptions/factor method",
        "2021: assumptions + cantilever + portal",
        "2022: cantilever + portal paired",
        "2023: portal + cantilever paired",
        "2024: portal + cantilever paired",
        "2024 Backlog: portal + cantilever, modern pattern"
      ],
      "steps": [
        "Compute storey shears/overturning moments from applied lateral loads.",
        "State and mark assumed inflection points.",
        "Portal: distribute storey shear to columns and obtain end moments.",
        "Cantilever: find centroid and distribute axial forces by Ai·distance.",
        "Use joint equilibrium to transfer actions to beams/columns.",
        "Draw requested AFD/SFD/BMD and check story equilibrium."
      ],
      "docs": [
        [
          "Cantilever worked solutions",
          "docs/cantilever-qb-solution.pdf"
        ],
        [
          "Complete solution set start",
          "docs/question-bank-solution-complete.pdf#page=101"
        ]
      ]
    },
    {
      "n": 7,
      "section": "B",
      "title": "Mill Bent / Portal Application + Space Truss",
      "tag": "Industrial frame + 3D truss",
      "frequency": "Annual Core · 8/8 complete regular papers",
      "pdf_page": 134,
      "summary": "Space truss is the stable annual core; mill-bent/portal applications recur as companion problems.",
      "goals": [
        "Use 3D equilibrium and coordinates/direction cosines for a space truss.",
        "Resolve support reactions consistently in x, y, z.",
        "Determine member axial forces from joint equations or tensile-coefficient equations.",
        "Analyze mill-bent legs/girders with the prescribed approximate method."
      ],
      "formulas": [
        [
          "3D equilibrium",
          "ΣFx=0; ΣFy=0; ΣFz=0"
        ],
        [
          "3D moment equilibrium",
          "ΣMx=0; ΣMy=0; ΣMz=0"
        ],
        [
          "Member length",
          "Lij = √[(Δx)²+(Δy)²+(Δz)²]"
        ],
        [
          "Unit vector",
          "eij = (Δx i + Δy j + Δz k)/Lij"
        ],
        [
          "Tensile coefficient",
          "tij = Fij/Lij (when using coefficient method)"
        ]
      ],
      "theory": [
        "A space truss is a three-dimensional pin-jointed system whose ideal members carry axial force only.",
        "Direction cosines/unit vectors are essential because one member force contributes to multiple global axes.",
        "Mill bents/bridge portals are commonly treated with portal-style approximate assumptions for lateral loading."
      ],
      "shortcuts": [
        "Write a coordinate table for every joint before force equations.",
        "Solve global reactions before isolated-joint member forces.",
        "Use one axis orientation throughout plan and elevation."
      ],
      "traps": [
        "Swapping x and z between plan/elevation.",
        "Using a 2D length in a 3D member.",
        "Losing signs when converting a tensile coefficient to force."
      ],
      "years": [
        "2016: full space-truss reactions/member forces",
        "2017: full space truss",
        "2018: theory + space truss; mill-bent leg diagrams",
        "2019: space truss + mill-bent diagrams",
        "2021: full space-truss numerical",
        "2022: determinacy/stability theory + 3D solution",
        "2023: space truss + mill-bent portal application",
        "2024: mill-bent + space truss",
        "2024 Backlog: mill-bent column diagrams + space truss"
      ],
      "steps": [
        "Assign global coordinates to all joints.",
        "Compute member direction vectors/unit vectors.",
        "Solve whole-structure reactions with 3D equilibrium.",
        "At selected joints, write vector equilibrium to solve member forces.",
        "For mill bent, mark portal-method inflection points and solve leg/girder actions.",
        "Check every joint residual in x, y and z."
      ],
      "docs": [
        [
          "Complete solution set start",
          "docs/question-bank-solution-complete.pdf#page=134"
        ],
        [
          "Question bank figures",
          "docs/question-bank-2016-2024.pdf"
        ]
      ]
    },
    {
      "n": 8,
      "section": "B",
      "title": "Three-Moment Equation + Suspension Cable",
      "tag": "Continuous beam + cable",
      "frequency": "Annual Core · 8/8 complete regular papers",
      "pdf_page": 149,
      "summary": "A very stable formulaic pair: continuous-beam analysis by Clapeyron’s three-moment equation and suspension-cable tension/dip/length.",
      "goals": [
        "Write the correct three-moment equation including unequal I and settlement terms when needed.",
        "Solve support moments, reactions, then SFD/BMD.",
        "For cable, keep horizontal thrust H separate from vertical reactions.",
        "Find maximum tension from H and the vertical reaction at the governing support."
      ],
      "formulas": [
        [
          "Three-moment core",
          "MA LA/IA + 2MB(LA/IA+LB/IB) + MC LB/IB = load-area terms + settlement terms"
        ],
        [
          "Same-level UDL cable",
          "H = wL²/(8d)"
        ],
        [
          "Same-level cable ordinate",
          "y = 4d x(L−x)/L²"
        ],
        [
          "Support tension",
          "T = √(H² + R²)"
        ],
        [
          "Approx. parabolic cable length",
          "Lc ≈ L + 8d²/(3L)"
        ]
      ],
      "theory": [
        "Three-moment equation relates bending moments at three consecutive supports of a continuous beam.",
        "Support settlement and different EI values must be included exactly when given.",
        "A flexible cable under UDL per horizontal span takes a parabolic shape; maximum tension generally occurs at a support where the vertical component is largest."
      ],
      "shortcuts": [
        "Before substitution, make a span table: L, I, loads, load positions, settlement.",
        "After support moments, solve each span like a beam for reactions and diagrams.",
        "Cable sequence: vertical reactions → H from dip/zero-moment condition → tension → length."
      ],
      "traps": [
        "Dropping settlement terms.",
        "Using total span load with wrong lever arm in three-moment load term.",
        "Combining H into vertical equilibrium; H is horizontal.",
        "Using same-level cable formulas when supports are at different elevations without adapting equilibrium."
      ],
      "years": [
        "2016: three-moment with settlement + cable/backstay tension",
        "2017: continuous beam + suspension bridge tension",
        "2018: variable I three-moment + cable tension/length",
        "2019: settlement/variable I + unequal-support cable tension/dip/length",
        "2021: three-moment + unequal-level cable",
        "2022: three-moment + cable-supported roof",
        "2023: three-moment + unequal-level UDL cable",
        "2024: three-moment + suspension cable",
        "2024 Backlog: several settlements/variable I + unequal-level cable"
      ],
      "steps": [
        "Prepare span/load/EI/settlement table.",
        "Write one three-moment equation for each consecutive support triplet.",
        "Solve unknown support moments; then obtain span reactions and SFD/BMD.",
        "Cable: use global vertical equilibrium and moment equations for vertical reactions.",
        "Use the dip/zero-BM condition to obtain H; then compute T = √(H²+R²).",
        "If length is needed, use exact segment geometry for point loads or appropriate parabolic approximation for UDL."
      ],
      "docs": [
        [
          "Three-moment worked solutions",
          "docs/three-moment-qb-solution.pdf"
        ],
        [
          "Cable theory & maths",
          "docs/cable-theory-math.pdf"
        ]
      ]
    }
  ],
  "theoryQuestions": [
    [
      "Very High",
      "Differentiate statically determinate and indeterminate structures; stable and unstable structures, with examples."
    ],
    [
      "Very High",
      "Classify a group of beams/frames/trusses as stable/unstable and determinate/indeterminate."
    ],
    [
      "High",
      "What is a zero-force member? State its purpose / identify zero-force members."
    ],
    [
      "High",
      "State advantages of arch construction over a beam / distinguish beam and arch."
    ],
    [
      "High",
      "Define sustained wind pressure and design wind pressure. What factors control wind magnitude?"
    ],
    [
      "Recent",
      "Explain vortex shedding effect."
    ],
    [
      "Very High",
      "Define conjugate beam. State the real-beam ↔ conjugate-beam relationship."
    ],
    [
      "Recent",
      "Why is an influence line a straight line for a statically determinate structure?"
    ],
    [
      "High",
      "State importance/applications of influence line diagrams."
    ],
    [
      "High",
      "Define space truss. State solution methods and discuss determinacy/stability."
    ],
    [
      "Very High",
      "Write assumptions of portal method and cantilever method."
    ],
    [
      "Medium",
      "Which approximate method is more accurate for a laterally loaded frame? Give reasons."
    ],
    [
      "Medium",
      "Draw/identify typical Fink, saw-tooth and crescent trusses."
    ],
    [
      "High",
      "State conjugate-beam sign/response relations: shear → slope, moment → deflection."
    ]
  ],
  "proofs": [
    [
      "MUST KNOW",
      "Unit-load / virtual-work deflection",
      "Prove Δ = ∫(mM/EI) dx. Direct standalone proof repeated in the QB."
    ],
    [
      "HIGH",
      "Conjugate-beam mapping",
      "Show that real M/EI becomes conjugate loading, V* corresponds to real slope, and M* to real deflection."
    ],
    [
      "HIGH",
      "Three-hinged parabolic arch",
      "Use y = 4hx(L−x)/L² and M_arch = M_beam − Hy; under matching parabolic UDL the arch can carry load by axial compression."
    ],
    [
      "HIGH",
      "Suspension cable under UDL",
      "Derive the parabolic cable relation and H = wL²/(8d) for same-level supports."
    ],
    [
      "HIGH",
      "Three-moment equation",
      "Know the general form with unequal I and support-settlement terms; reduce for constant EI/no settlement."
    ],
    [
      "CORE LOGIC",
      "Influence-line piecewise equilibrium",
      "Derive ordinates by moving a unit load and writing equilibrium in each x-range."
    ]
  ],
  "backlog": [
    {
      "printed": "Section A",
      "q": "Q1",
      "set": 5,
      "topic": "Influence Line Diagram",
      "note": "Beam ILD + frame ILD"
    },
    {
      "printed": "Section A",
      "q": "Q2",
      "set": 6,
      "topic": "Portal + Cantilever",
      "note": "Both approximate methods"
    },
    {
      "printed": "Section A",
      "q": "Q3",
      "set": 7,
      "topic": "Mill Bent + Space Truss",
      "note": "Column diagrams + 3D truss"
    },
    {
      "printed": "Section A",
      "q": "Q4",
      "set": 8,
      "topic": "Three-Moment + Cable",
      "note": "Settlement/EI + unequal-level cable"
    },
    {
      "printed": "Section B",
      "q": "Q5",
      "set": 1,
      "topic": "Stability + Frame SFD/BMD",
      "note": "Theory/classification + complete diagrams"
    },
    {
      "printed": "Section B",
      "q": "Q6",
      "set": 2,
      "topic": "Arch + Plane Truss",
      "note": "Internal forces + selected truss members"
    },
    {
      "printed": "Section B",
      "q": "Q7",
      "set": 3,
      "topic": "Wind + Earthquake",
      "note": "Full floor-wise calculations"
    },
    {
      "printed": "Section B",
      "q": "Q8",
      "set": 4,
      "topic": "Virtual Work + Conjugate Beam",
      "note": "Frame deflection + definition/numerical"
    }
  ],
  "downloads": [
    [
      "Section A Class Note",
      "docs/section-a-class-note.pdf",
      "Core/determinate, loads and deflection"
    ],
    [
      "Section B Class Note",
      "docs/section-b-class-note.pdf",
      "ILD, approximate methods, space truss, three-moment/cable"
    ],
    [
      "Question Bank Analysis",
      "docs/question-bank-analysis.pdf",
      "Set distribution + repeated-pattern analysis"
    ],
    [
      "Complete QB Solution",
      "docs/question-bank-solution-complete.pdf",
      "244-page complete worked solution archive"
    ],
    [
      "Formula + Theory + Proof",
      "docs/formula-theory-proof.pdf",
      "30-page revision master"
    ],
    [
      "Original QB 2016–2024",
      "docs/question-bank-2016-2024.pdf",
      "Original exam-paper source"
    ],
    [
      "2024 Backlog Exam",
      "docs/backlog-2024.pdf",
      "Backlog source paper"
    ]
  ]
};
