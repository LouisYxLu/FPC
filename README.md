# FPC
Title: From Perception to Cognition: LLM-empowered Maritime Situational Awareness via AIS-UAV Cross-modal Fusion

Our code will be made available upon acceptance of the paper.

Abstract: Unmanned aerial vehicles (UAVs) and the automatic identification system (AIS) provide complementary information for maritime intelligent transportation systems. However, fusing UAV visual observations with AIS data in complex inland waterways faces severe challenges, including trajectory fragmentation from UAV ego-motion, cross-modal matching ambiguities from AIS latency and numerical asymmetry, and a profound semantic gap between low-level trajectory data and high-level navigational rules. To tackle these challenges, this work proposes an LLM-empowered situational awareness framework via AIS-UAV cross-modal fusion, structured as a progressive perception-association-cognition pipeline. At the perception stage, an anti-ego-motion visual tracking module with low-overhead global motion compensation and confidence-aware feature updating ensures long-term visual trajectory continuity under severe UAV jitter. At the association stage, a training-free, multi-dimensional trajectory-level association mechanism evaluates spatial residuals and shape similarities over temporal windows, resolving cross-modal ambiguities and identifying non-cooperative vessels. Finally, at the cognition stage, a lightweight LLM-driven reasoning engine grounded in Endsley's situation awareness model embeds COLREGs-based geometric constraints and macro-micro kinematic features to interpret behavioral anomalies and generate real-time, rule-compliant navigational advice. Experiments on our AIS-UAV fusion dataset (AUF-Dataset) demonstrate that the framework mitigates spatiotemporal misalignments and handles complex interactions, enhancing maritime situational awareness and risk warning.

## Case studies

[View the 15 cases](https://louisyxlu.github.io/FPC/)

Each case includes twelve observation images and three event analyses.

To view locally, open `index.html`. To publish, choose **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
