# Amide Hydrolysis and Nucleophilic Acyl Substitution

## Scope

This note preserves the mechanism reasoning developed while reviewing Organic Chemistry cards 306–307. It is a clean study layer, not a raw transcript.

Source alignment:

- Kaplan MCAT Organic Chemistry: analyzing reactions and carboxylic acid derivatives
- UWorld MCAT Organic Chemistry: carbonyl reactions, leaving groups, and hydrolysis

---

## 1. Vocabulary that must stay separate

### Ammonia

\[
NH_3
\]

- neutral molecule
- has a lone pair
- commonly behaves as a base

### Ammonium

\[
NH_4^+
\]

- protonated form of ammonia
- conjugate acid of ammonia
- positively charged

### Amine

General pattern:

\[
RNH_2,\quad R_2NH,\quad R_3N
\]

An amine nitrogen is not directly attached to a carbonyl carbon.

### Amide

General pattern:

\[
R-C(=O)-NR_2
\]

An amide nitrogen is directly attached to a carbonyl carbon. Its lone pair is resonance-delocalized into the carbonyl, making an amide much less basic than a comparable amine.

### Naming caution

The ending **-ium** does not universally mean “ion.” In names such as **ammonium**, **hydronium**, and **pyridinium**, it commonly marks a cationic form, but many neutral elements also end in **-ium**.

---

## 2. What is an acyl group?

An acyl group is:

\[
R-C(=O)-
\]

A carboxylic acid derivative can be written as:

\[
R-C(=O)-Z
\]

The group \(Z\) determines the derivative:

- \(Z=OH\): carboxylic acid
- \(Z=OR\): ester
- \(Z=NR_2\): amide
- \(Z=OC(=O)R\): anhydride
- \(Z=Cl\): acid chloride

In **nucleophilic acyl substitution**, the nucleophile attacks the acyl carbonyl and ultimately replaces \(Z\). The acyl group itself is retained.

---

## 3. Why protonate the carbonyl oxygen?

Starting amide:

\[
R-C(=O)-NH_2
\]

Acid protonates the carbonyl oxygen:

\[
R-C(=OH^+)-NH_2
\]

This does **not** increase oxygen's nuclear charge or effective nuclear charge. The nucleus has not changed.

Instead, protonation makes oxygen electron-deficient and increases polarization of the carbonyl. A resonance contributor places positive charge on carbon:

\[
R-C^+(-OH)-NH_2
\]

This makes the carbonyl carbon more electrophilic and easier for water to attack.

**Best wording:** protonation increases carbonyl electrophilicity by increasing electron withdrawal and stabilizing a resonance contributor with a more electron-poor carbonyl carbon.

---

## 4. Why does water attack through oxygen?

Water acts as a nucleophile because its oxygen has lone pairs.

Electron flow:

\[
H_2O:\rightarrow C_{carbonyl}
\]

As the new C–O sigma bond forms, carbon would exceed an octet unless another bond changes. Therefore:

\[
\pi(C=O)\rightarrow O
\]

The C=O pi electrons move to the **original carbonyl oxygen** because those electrons belong to the C=O pi bond.

The incoming water oxygen is already donating a lone pair to form the new bond; it is not the destination of the original carbonyl pi electrons.

---

## 5. Why does the pi bond open first?

A carbonyl double bond contains:

- one strong sigma bond
- one weaker, more exposed pi bond

During nucleophilic attack, the pi bond is the flexible electron-density component. Opening the pi bond preserves the C–O sigma framework while allowing carbon to maintain an octet.

Memory model:

**Sigma bond = skeleton. Pi bond = movable electron cloud.**

This is a useful model, but it should not be interpreted as “pi bonds always break first” in every possible reaction. It is the correct carbonyl-addition logic here.

---

## 6. The tetrahedral intermediate

Immediately after water attacks, the carbonyl carbon changes from approximately sp2 trigonal planar to sp3 tetrahedral.

A simplified acidic intermediate is:

\[
R-C(OH)(OH_2^+)-NH_2
\]

After proton transfers, it may be represented as:

\[
R-C(OH)(OH)-NH_3^+
\]

### Is it a geminal diol?

Structurally, the intermediate can contain **two oxygen substituents on the same carbon**, including two OH groups after proton transfer. That gives it a geminal-diol-like feature.

However, the most useful mechanistic name is **tetrahedral intermediate** because:

- it identifies the stage of nucleophilic acyl substitution
- the carbon has four single-bond electron domains
- the species still contains the group that will be expelled

A simple geminal diol from aldehyde or ketone hydration lacks that acyl leaving-group context.

---

## 7. Intermediate vs transition state

### Intermediate

- occupies a local minimum on a reaction-coordinate diagram
- has a definable bonding arrangement
- may exist briefly
- may sometimes be detected or isolated if sufficiently stable

### Transition state

- occupies an energy maximum
- contains partially forming and partially breaking bonds
- cannot be isolated
- is represented with a double dagger, \(\ddagger\)

A tetrahedral intermediate is a real local-energy minimum. The transition states occur during attack and during collapse on either side of that intermediate.

---

## 8. Why must the amide nitrogen be protonated?

Without protonation, collapse would require the nitrogen group to leave as:

\[
NH_2^-
\]

That is a very strong base and a terrible leaving group.

Acid protonates the attached amide nitrogen:

\[
-NH_2\rightarrow -NH_3^+
\]

When the C–N bond breaks, nitrogen takes the bonding electrons and leaves as neutral ammonia:

\[
NH_3
\]

This is much more favorable than producing \(NH_2^-\).

---

## 9. Why is chloride a good leaving group but amide anion is not?

General rule:

**Good leaving group = relatively weak base after departure.**

### Chloride

\[
HCl\rightarrow H^+ + Cl^-
\]

- HCl is a strong acid
- \(Cl^-\) is therefore a weak conjugate base
- \(Cl^-\) is stable after departure

### Amide anion

\[
NH_3\rightleftharpoons H^+ + NH_2^-
\]

- \(NH_3\) is an extremely weak acid
- \(NH_2^-\) is therefore a very strong conjugate base
- \(NH_2^-\) is unstable and strongly seeks a proton

The comparison is not based only on electronegativity. It is based on the stability/basicity of the species after leaving.

---

## 10. Why does the carbonyl reform?

The tetrahedral intermediate can collapse when a suitable leaving group has been prepared.

Electron flow:

\[
O:\rightarrow C
\]

The oxygen lone pair reforms the C=O pi bond while the C–N sigma bond breaks:

\[
C-N\rightarrow N
\]

This is favorable because it:

- restores a strong carbonyl pi bond
- relieves excess electron density or positive-charge imbalance on oxygen
- converts the high-energy tetrahedral intermediate into a lower-energy carbonyl product
- expels a leaving group that has been converted into neutral \(NH_3\)

Do not say that sp2 is always more stable than sp3. The favorable feature is the specific restoration of the carbonyl and loss of an acceptable leaving group.

Memory rule:

**A carbonyl can close again only when something else can leave without creating a disastrously unstable species.**

---

## 11. Why does the final oxygen lose H+?

Collapse may produce a protonated carboxylic acid:

\[
R-C(=OH^+)-OH
\]

A water molecule or another base removes the extra proton:

\[
R-C(=OH^+)-OH\rightarrow R-C(=O)-OH+H^+
\]

This:

- restores neutral oxygen
- gives the carboxylic acid product
- regenerates the acid catalyst

The ammonia formed during departure is also protonated in the acidic solution:

\[
NH_3+H^+\rightarrow NH_4^+
\]

Ammonia is a weaker base than \(NH_2^-\), but it is still basic enough to be protonated under strongly acidic conditions.

---

## 12. Complete acid-catalyzed mechanism map

1. Protonate the carbonyl oxygen.
2. Water attacks the carbonyl carbon.
3. The C=O pi electrons move to the original oxygen.
4. A tetrahedral intermediate forms.
5. Proton transfers deprotonate the incoming water group and protonate nitrogen.
6. The original oxygen lone pair reforms C=O.
7. The C–N bond breaks and \(NH_3\) leaves.
8. The protonated carboxylic acid loses H+.
9. \(NH_3\) becomes \(NH_4^+\) in the acidic medium.

Overall:

\[
RCONH_2+H_2O\rightarrow RCOOH+NH_3
\]

Under acidic conditions, the nitrogen-containing product is predominantly ammonium:

\[
NH_4^+
\]

---

## 13. Carbonyl protection correction

A **geminal diol** has two OH groups on the same carbon:

\[
R_2C(OH)_2
\]

It is usually a reversible hydrated form of a carbonyl and is not the standard protecting group.

The standard carbonyl-protection sequence is:

\[
carbonyl\rightarrow hemiacetal/hemiketal\rightarrow acetal/ketal
\]

Acetals and ketals contain two OR groups on the same carbon and are comparatively inert under many basic and nucleophilic conditions. They can be hydrolyzed back to the carbonyl under aqueous acidic conditions.

Correct terminology:

- **acetal**, not acetyl
- **ketal**, not ketol

---

## MCAT traps

- Formal positive charge does not increase nuclear charge or \(Z_{eff}\).
- Water attacks because oxygen has a nucleophilic lone pair, not merely because oxygen is electronegative.
- The nucleophile replaces \(Z\), not the acyl group.
- The leaving species is best viewed as \(NH_3\), which becomes \(NH_4^+\) in acid.
- \(NH_2^-\) is not a good leaving group.
- A tetrahedral intermediate can have geminal-diol-like structure without being best classified as a simple geminal diol.
- Acetal/ketal, not geminal diol, is the standard carbonyl protecting group.
- Carbonyl reformation is not explained by “sp2 is always better than sp3.”

## Final memory line

**Acid activates the carbonyl and prepares nitrogen to leave: protonate, attack, open the pi bond, transfer protons, reform C=O, expel NH3, and regenerate acid.**