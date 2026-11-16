# Bitruvius Puppyt – Consolidated Asset Library & Proportional Spec (`pyxl`)

All spatial dimensions in this document use **`pyxl`** units, where **`1 pyxl` = 1 canonical figure-space coordinate unit** on the Bitruvius Puppyt master canvas (`2,500 × 8,742 pyxl`, centerline `MX = 1,257.0 pyxl`).

Symmetric Left/Right pairs are consolidated into **singular master assets** (rendered with horizontal mirror `flip: 1` where needed), and modular extremity kits are mapped both in their **kit-native pixel space** and their **assembled full-figure `pyxl` scale** for complete proportional consistency from the **small toe tips** up to the **whole body**.

---

## 1. Whole-Body Proportional Ladder (`Small Toe Tip → Fingertip → Head → Whole Body`)

Canonical Head Height (**`1H = 1,240.0 pyxl`**) acts as the anatomical ruler (`1.00 H`).

| Scale Level / Anatomical Milestone | Master Asset / Span | Assembled Size (`w × h` or length in `pyxl`) | Ratio to Head (`1,240 pyxl`) | % of Body Height (`7,626 pyxl`) |
| --- | --- | --- | --- | --- |
| **Whole Figure Canvas** | Master stage (`D.W × D.H`) | `2,500.0 × 8,742.0 pyxl` | `2.02 × 7.05 H` | `114.6%` |
| **Whole Body (Assembled Rest)** | Crown (`y = -3`) to Sole (`y = 7,623`) | `2,154.0 × 7,626.0 pyxl` | **`6.15 H` tall** | **`100.00%`** |
| **Upper Body Span (Shoulder Width)** | `acromionR` ↔ `acromionL` pivots | `1,128.4 pyxl` | `0.91 H` | `14.80%` |
| **Pelvic Span (Hip Sockets)** | `femurR` ↔ `femurL` pivots | `676.0 pyxl` | `0.55 H` | `8.86%` |
| **Whole Arm (Shoulder to Fingertip)** | `acromion → humerus → forearm → hand bone` | `3,388.1 pyxl` | `2.73 H` | `44.43%` |
| **Whole Leg (Hip Socket to Toe Tip)** | `femur → shin → foot bone` | `4,285.7 pyxl` | `3.46 H` | `56.20%` |
| **Head / Skull (Front & Back)** | `head` (`img 0`, `img 91`) | **`882.0 × 1,240.0 pyxl`** | **`1.00 H`** | **`16.26%`** |
| **Head / Skull (Side Profile)** | `head` (`img 92`) | `930.0 × 930.0 pyxl` | `0.75 H` | `12.20%` |
| **Whole Hand (Assembled)** | `handL` / `handR` (`img 14`) | `247.0 × 878.0 pyxl` (`797.8` bone) | `0.71 H` (`0.64 H` bone) | `11.51%` (`10.46%` bone) |
| **Whole Foot (Assembled)** | `footL` / `footR` (`img 17`) | `806.0 × 681.0 pyxl` (`859.4` bone) | `0.55 H` (`0.69 H` bone) | `8.93%` (`11.27%` bone) |
| **Thumb Distal Tip** | Gotz `img 43` (scaled `0.3633×`) | `89.4 × 106.1 pyxl` | `0.09 H` | `1.39%` |
| **Middle Fingertip (Distal Phalange)** | Gotz `img 48` (scaled `0.3633×`) | `54.1 × 164.6 pyxl` | `0.13 H` | `2.16%` |
| **Pinky Fingertip (Smallest Fingertip)** | Gotz `img 56` (scaled `0.3633×`) | **`54.5 × 145.7 pyxl`** | **`0.12 H`** | **`1.91%`** |
| **Big / Market Toe Distal Tip** | Piggies `img 84` (scaled `0.3154×`) | `88.0 × 117.6 pyxl` | `0.09 H` | `1.54%` |
| **Small Toe Middle Phalange** | Piggies `img 79` (scaled `0.3154×`) | `44.5 × 43.2 pyxl` | `0.03 H` | `0.57%` |
| **Small Toe Tip (Pinky Toebone)** | Piggies `img 80` (scaled `0.3154×`) | **`58.0 × 55.8 pyxl`** | **`0.045 H`** | **`0.73%`** |

### Kit-to-Body Scale Conversions (No Stretching / Uniform Scale Factors)

| Source Asset Kit | Native Kit Dimensions | Target Figure Anchor | Exact Scale Factor (`figure pyxl / kit px`) |
| --- | --- | --- | --- |
| **Skull PNGs (Front / Back)** (`img 0, 91`) | `3,000 × 4,219 px` | `head` (`882 × 1,240 pyxl`) | **`0.2940×`** (`882/3000 = 0.2940`, `1240/4219 = 0.2939`) |
| **Skull PNG (Side)** (`img 92`) | `3,000 × 3,000 px` | `head` (`930 × 930 pyxl`) | **`0.3100×`** (`930/3000`) |
| **Hand Kit (Gotz 2)** (`img 40–59`) | `680 × 2,417 px` | `handL/R` (`247 × 878 pyxl`) | **`0.3633×`** (`247/680 = 0.3632`, `878/2417 = 0.3633`) |
| **Foot Kit (Piggies)** (`img 71–90`) | `1,663 × 2,741 px` (`2,725` heel-to-toe) | `footL/R` (`859.4 pyxl` ankle-to-toe) | **`0.3154×`** (`859.4 / 2725`) |

---

## 2. Core Skeletal & Limb Master Assets (Consolidated Singular Assets)

All symmetric pairs share a single canonical image index (`img`) and mirror horizontally across `MX = 1,257.0 pyxl`. Under rigid-body rules, pieces maintain **`1:1` sprite proportion** (zero stretching or skewing).

| Master Asset Name | Img ID | Node(s) | Qty | Size (`w × h` in `pyxl`) | Rest Pivot (`[x, y] pyxl`) | Parent Joint & Role |
| --- | --- | --- | --- | --- | --- | --- |
| **Front Skull** | `0` | `head` | `1` | `882 × 1,240 pyxl` | `[1,260.0, 873.5]` | Child of `neck` (Front view) |
| **Back Skull** | `91` | `head` | `1` | `882 × 1,240 pyxl` | `[1,260.0, 873.5]` | Child of `neck` (Back view + z-flip) |
| **Side Skull** | `92` | `head` | `1` | `930 × 930 pyxl` | `[1,260.0, 873.5]` | Child of `neck` (Side profile; flip for `270°`) |
| **Cervical Column (Neck V)** | `1` | `neck` | `1` | `211 × 352 pyxl` | `[1,258.0, 1,140.5]` | Child of `thorax` |
| **Thorax Neckring** | `4` | `thorax` | `1` | `531 × 531 pyxl` | `[1,257.5, 2,377.5]` | Collar ring on `thorax` |
| **Spine Segment (Upper / Lower)** | `2` | `thorax`, `lumbar` | **`2`** | `181 × 1,319 pyxl` | `thorax [1,257.5, 2,377.5]` / `lumbar [1,257.0, 3,382.0]` | Single master spine column shared by `thorax` & `lumbar` |
| **Navel Brace** | `9` | `swivelL`, `swivelR` | **`2`** (Pair) | `680 × 964 pyxl` | `L [1,249.0, 2,378.0]` / `R [1,254.0, 2,434.0]` | Attached to `swivel`; pivots at navel on `thorax` |
| **Ribcage Half** | `3` | `swivelL`, `swivelR` | **`2`** (Pair) | `719 × 1,505 pyxl` | `L [1,249.0, 2,378.0]` / `R [1,254.0, 2,434.0]` | Short-click activates ribcage swivel |
| **Neck Tendon (Clavicle)** | `5` | `braceL`, `braceR` | **`2`** (Pair) | `714 × 393 pyxl` | `L [1,236.0, 1,109.0]` / `R [1,266.0, 1,165.0]` | Rotates rigidly at neck; bridges triangle to `acromion` |
| **Shoulder Wing / Paddle** | `6` | `braceL`, `braceR` | **`2`** (Pair) | `724 × 953 pyxl` | `L [1,236.0, 1,109.0]` / `R [1,266.0, 1,165.0]` | Long-click ribs activates wing; flips front-of-thorax in back view |
| **Shoulderbone Cap (Acromion)** | `7` | `acromionL`, `acromionR` | **`2`** (Pair) | `499 × 407 pyxl` | `L [1,815.0, 1,334.0]` / `R [688.0, 1,390.0]` | Rotates at `swivel` parent; closes neck–shoulder–rib triangle |
| **Humerus (Upper Arm)** | `8` | `humerusL`, `humerusR` | **`2`** (Pair) | `258 × 1,353 pyxl` | `L [1,936.5, 1,372.5]` / `R [566.5, 1,428.5]` | Child of `acromion` (`1,203.3 pyxl` to elbow) |
| **Ulna (Forearm Bone A)** | `10` | `forearmL`, `forearmR` | **`2`** (Pair) | `94 × 1,300 pyxl` | `L [2,011.5, 2,573.5]` / `R [491.5, 2,629.5]` | Paired on `forearm` (`1,259.5 pyxl` to wrist) |
| **Radius (Forearm Bone B)** | `11` | `forearmL`, `forearmR` | **`2`** (Pair) | `116 × 1,354 pyxl` | `L [2,011.5, 2,573.5]` / `R [491.5, 2,629.5]` | Paired on `forearm` |
| **Hand Kit Silhouette (Gotz)** | `14` | `handL`, `handR` | **`2`** (Pair) | `247 × 878 pyxl` | `L [2,009.5, 3,833.0]` / `R [493.5, 3,889.0]` | Terminal arm piece (`797.8 pyxl` bone tip) |
| **Hip Bone & Femur Socket** | `12` | `hipL`, `hipR` | **`2`** (Pair) | `647 × 828 pyxl` | `L [1,317.0, 3,382.0]` / `R [1,197.0, 3,382.0]` | Child of `body`; static socket ball at `[1,583.5 / 907.5, 3,588]` |
| **Femur (Thigh)** | `13` | `femurL`, `femurR` | **`2`** (Pair) | `385 × 2,125 pyxl` | `L [1,583.5, 3,588.0]` / `R [907.5, 3,588.0]` | Child of `hip` (`1,948.5 pyxl` to knee) |
| **Tibia (Shin Main)** | `15` | `shinL`, `shinR` | **`2`** (Pair) | `235 × 1,579 pyxl` | `L [1,626.0, 5,536.0]` / `R [865.0, 5,536.0]` | Paired on `shin` (`1,477.8 pyxl` to ankle) |
| **Fibula (Shin Lateral)** | `16` | `shinL`, `shinR` | **`2`** (Pair) | `101 × 1,516 pyxl` | `L [1,626.0, 5,536.0]` / `R [865.0, 5,536.0]` | Paired on `shin` |
| **Foot Kit Silhouette (Piggies)** | `17` | `footL`, `footR` | **`2`** (Pair) | `806 × 681 pyxl` | `L [1,658.0, 7,013.5]` / `R [833.0, 7,013.5]` | Terminal leg piece (`859.4 pyxl` ankle-to-toetip) |

---

## 3. Extremity Kits (Consolidated Modular Sub-Assets in Kit & Figure `pyxl`)

### 3A. Hand Kit (`handL` / `handR` — Gotz Kit, Scale Factor `0.3633×`)

Consolidated to **1 master hand structure** (`247 × 878 pyxl` assembled; `680 × 2,417` kit px). Digits are grouped into canonical phalange classes below:

| Consolidated Asset Role | Source Img(s) | Qty / Hand | Kit-Native Size (`w × h` px) | Assembled Figure Size (`w × h` `pyxl`) | Notes |
| --- | --- | --- | --- | --- | --- |
| **Carpal / Wrist Plate** | `40` (Gotz 2) / `68` (Gotz 1) | `1` | `283 × 453` (`215 × 455`) | `102.8 × 164.6 pyxl` | Base wrist anchor (`y = 2,247` kit bottom) |
| **Metacarpal (Thumb)** | `47` | `1` | `275 × 978` | `99.9 × 355.3 pyxl` | Opposable thumb base column |
| **Metacarpal (Finger Canonical)** | `51` (canonical), `55, 59, 63, 67` | **`4`** | `207 × 1,062` (range `207–280 × 939–1,062`) | **`75.2 × 385.8 pyxl`** (range `75.2–101.7 × 341.1–385.8`) | Palm span (`51, 59` shared across Gotz 1 & 2) |
| **Proximal Phalange (Thumb)** | `41` (`68` in Gotz 1) | `1` | `282 × 453` (`215 × 455`) | `102.4 × 164.6 pyxl` | Thumb basal phalange |
| **Proximal Phalange (Finger Canonical)** | `50` (canonical), `46, 54, 58, 62, 66` | **`4`** | `183 × 725` (range `183–220 × 640–725`) | **`66.5 × 263.4 pyxl`** (range `66.5–79.9 × 232.5–263.4`) | Base finger knuckle to PIP |
| **Middle Phalange (Thumb / Broad)** | `42` (`69` in Gotz 1) | `1` | `267 × 362` (`216 × 359`) | `97.0 × 131.5 pyxl` | Thumb intermediate / sesamoid span |
| **Middle Phalange (Finger Canonical)** | `49` (canonical), `45, 53, 57, 61, 65` | **`4`** | `111 × 262` (range `111–125 × 233–262`) | **`40.3 × 95.2 pyxl`** (range `40.3–45.4 × 84.6–95.2`) | PIP to DIP finger segment |
| **Distal Phalange / Fingertip (Thumb)** | `43` (`70` in Gotz 1) | `1` | `246 × 292` (`209 × 294`) | `89.4 × 106.1 pyxl` | Broad thumb distal pad |
| **Distal Phalange / Fingertip (Finger Canonical)** | `48` (middle), `44, 52, 56` (pinky), `60, 64` | **`4`** | `149 × 453` (pinky `150 × 401`) | **`54.1 × 164.6 pyxl`** (pinky tip **`54.5 × 145.7 pyxl`**) | Longest tip (`48`) to smallest fingertip (`56`) |

---

### 3B. Foot Kit (`footL` / `footR` — Piggies / Market Foot, Scale Factor `0.3154×`)

Consolidated to **1 master foot structure** (`806 × 681 pyxl` bounding box; `859.4 pyxl` ankle-to-toe reach; `1,663 × 2,741` kit px). Smallest anatomy in the rig is the **Pinky Small Toe Tip (`58.0 × 55.8 pyxl`)** and **Pinky Middle Toe (`44.5 × 43.2 pyxl`)**.

| Consolidated Asset Role | Source Img(s) | Qty / Foot | Kit-Native Size (`w × h` px) | Assembled Figure Size (`w × h` `pyxl`) | Notes |
| --- | --- | --- | --- | --- | --- |
| **Heelbone (Calcaneus Crown & Shafts)** | `81` (upper), `73, 90` | `1` (3 sub-layers) | `913 × 778` / `374 × 1,108` / `340 × 1,217` | `288.0 × 245.4` / `107.2–118.0 × 349.5–383.8 pyxl` | Posterior heel assembly |
| **Ankle / Cuboid Plate** | `82` (Ankle), `71` (Cuboid), `72` (Footbone) | `1–2` (3 sub-layers) | `869 × 781` / `473 × 508` / `888 × 780` | `274.1 × 246.3` / `149.2 × 160.2` / `280.1 × 246.0 pyxl` | Tarsal bridge to tibia/fibula |
| **Metacarpal / Metatarsal (Big / Market)** | `83` | `1` | `596 × 1,148` | `188.0 × 362.1 pyxl` | Primary big-toe ("Market") arch column |
| **Metacarpal / Metatarsal (Inner & Outer)** | `86` (canonical), `77` (outer) | `2` | `385 × 1,273` / `461 × 1,081` | `121.4 × 401.5` / `145.4 × 340.9 pyxl` | Mid-arch & lateral metatarsal span |
| **Proximal Toe (Canonical Digits 2–4)** | `87` (shared×2), `76` | `1` master (3 slots) | `189 × 357` (`211 × 324`) | `59.6 × 112.6 pyxl` (`66.5 × 102.2`) | Reused canonical toe base (`img 87` shared by digits 2 & 3) |
| **Proximal Toe (Small / Pinky Digit 5)** | `78` | `1` | `197 × 310` | `62.1 × 97.8 pyxl` | Lateral pinky toe base |
| **Middle Toe (Big / Market Digit 1)** | `85` | `1` | `351 × 446` | `110.7 × 140.7 pyxl` | Market toe proximal/middle block |
| **Middle Toe (Canonical Digits 2–4)** | `88` (shared×2), `74` | `1` master (3 slots) | `165 × 254` (`186 × 232`) | `52.0 × 80.1 pyxl` (`58.7 × 73.2`) | Reused canonical middle phalange (`img 88` ×2) |
| **Middle Toe (Small / Pinky Digit 5)** | `79` | `1` | `141 × 137` | **`44.5 × 43.2 pyxl`** | **Smallest bone segment in entire rig** |
| **Toebone / Distal Tip (Big / Market)** | `84` | `1` | `279 × 373` | `88.0 × 117.6 pyxl` | Big toe ("Market Distal") tip |
| **Toebone / Distal Tip (Canonical Digits 2–4)** | `89` (shared×2), `75` | `1` master (3 slots) | `212 × 204` (`192 × 185`) | `66.9 × 64.3 pyxl` (`60.6 × 58.3`) | Reused canonical distal tip (`img 89` ×2) |
| **Toebone / Distal Tip (Small / Pinky Digit 5)** | `80` | `1` | `184 × 177` | **`58.0 × 55.8 pyxl`** | **Small toe tip** (`0.73%` of body height) |

---

## 4. Head Views & Consolidated Skull Architecture (`head`)

The active rig head (`882 × 1,240 pyxl` front/back; `930 × 930 pyxl` side profile) consolidates the legacy sub-layered Yorrick skull plates (deprecated slots `img 18–39`) into **3 view-synced master skull assets**:

| Skull View / Layer Assembly | Source Img | Native Asset Size (`px`) | Placed Head Size (`pyxl`) | Scale to Head (`1,240 pyxl`) | Consolidated Layer Coverage (`Yorrick` Spec) |
| --- | --- | --- | --- | --- | --- |
| **Front Skull** | `0` | `3,000 × 4,219` | `882 × 1,240 pyxl` | `1.00 H` (`100%`) | Crown & Skull Plate (`1`), Forehead & Nose (`1`), Eyeball Assemblies (`2`), Cheek & Jowl Plates (`2`), Jaw & Teeth Set (`1`) |
| **Back Skull** | `91` | `3,000 × 4,219` | `882 × 1,240 pyxl` | `1.00 H` (`100%`) | Occipital cranium, mastoid & posterior mandible base (auto-activates when z-order back view is flipped) |
| **Side Skull** | `92` | `3,000 × 3,000` | `930 × 930 pyxl` | `0.75 H` (`75%` H, `1.05×` Front W) | Lateral cranium, zygomatic arch, profile jaw & teeth (flips horizontally for `270°` left-facing turnaround) |

---

## 5. Joint Hierarchy & Proportional Segment Lengths (`pyxl`)

Every skeletal linkage measured center-to-center between rest joint pivots:

| Joint Pair (`Parent → Child / Tip`) | Rest Segment Length (`pyxl`) | Head Units (`H`) | `% of Body Height` | Kinematic Rule |
| --- | --- | --- | --- | --- |
| `body → lumbar` | `380.0 pyxl` | `0.31 H` | `4.98%` | Pelvic-lumbar root offset |
| `lumbar → thorax` | `1,004.5 pyxl` | `0.81 H` | `13.17%` | Torso spine column (`±35°` constrained) |
| `thorax → neck` | `1,237.0 pyxl` | `1.00 H` | `16.22%` | Upper thoracic spine (`brace` pivots near neck) |
| `neck → head` | `267.0 pyxl` | `0.22 H` | `3.50%` | Cervical pivot (`±40°` constrained) |
| `head → crown bone` | `825.1 pyxl` | `0.67 H` | `10.82%` | Cranial apex pointer |
| `swivel → acromion` (Triangle Rib Leg) | `1,187.6 pyxl` | `0.96 H` | `15.57%` | Navel-to-shoulder rigid leg; snaps across `MX` |
| `brace → acromion` (Triangle Paddle Leg) | `621.2 pyxl` | `0.50 H` | `8.15%` | Neck-to-shoulder rigid brace (`+10%` axial slide max, `0%` scale/skew) |
| `acromion → humerus` | `127.5 pyxl` | `0.10 H` | `1.67%` | Glenohumeral offset (`acromion` rotates on `swivel`) |
| `humerus → forearm` | `1,203.3 pyxl` | `0.97 H` | `15.78%` | Upper arm span |
| `forearm → hand` | `1,259.5 pyxl` | `1.02 H` | `16.52%` | Forearm span |
| `hand → fingertip bone` | `797.8 pyxl` | `0.64 H` | `10.46%` | Wrist to middle fingertip |
| `hip → femur` | `336.8 pyxl` | `0.27 H` | `4.42%` | Pelvis to femur socket (`femurR/L`) |
| `femur → shin` | `1,948.5 pyxl` | `1.57 H` | `25.55%` | Thigh span |
| `shin → foot` | `1,477.8 pyxl` | `1.19 H` | `19.38%` | Lower leg span |
| `foot → toetip bone` | `859.4 pyxl` | `0.69 H` | `11.27%` | Ankle to toe tip |
