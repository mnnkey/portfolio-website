---
permalink: /
title: "Justin Chen | Wireless Sensing and Robotic Perception Researcher"
description: "Justin Chen is an electrical engineering researcher at UC San Diego working on wireless sensing, mmWave radar, robotic perception, and metasurfaces."
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a 4th year undergraduate at UC San Diego in the Department of Electrical and Computer Engineering, advised by Professor [Xinyu Zhang](https://xyzhang.ucsd.edu/index.html). I am also working with Professor [Tara Boroushaki](https://www.tara-boroushaki.com/bio) at Yale on applying wireless radar perception to robotics in real time.

My research interests are in wireless sensing and communications, robotic perception, signal processing, systems/networking, and machine learning. My previous works span multi-modal sensor fusion with acoustic sensing and imus as well as passive and dynamic metasurface optimizations for scene coverage expansion. Currently, I am working on closed-form and neural based methods of flexible wireless sensing that can enable better than camera perception with non-line-of-sight and material understanding<a href='https://scholar.google.com/citations?user=vB5uWMYAAAAJ'>.


## 📰 News
- *2026.08*: &nbsp;🎉 MetaVenom has been Accepted to MOBICOM 2026. 
- *2026.05*: &nbsp;🎉 FlowForm has been Accepted to SIGCOMM 2026. 
- *2025.07*: &nbsp;🎉 Ultraposer has been Accepted to UIST 2025. 

## 📝 Publications 

<div class="publication-list">
  <article class="publication-card">
    <div class="publication-card__media">
      <span class="publication-card__venue">MobiCom '26</span>
      <img src="{{ '/images/publication_previews/metavenom_preview.jpg' | relative_url }}" alt="MetaVenom programmable passive metasurface cells" loading="lazy">
    </div>
    <div class="publication-card__body">
      <h3 class="publication-card__title">MetaVenom: Field Programmable Fully Passive Metasurfaces</h3>
      <p class="publication-card__authors">Baicheng Chen, <strong>Justin Chen</strong>, Wuqiong Zhao, Kai Zheng, Xinyu Zhang</p>
      <p class="publication-card__publication"><em>Accepted at ACM MobiCom</em>, 2026</p>
      <p class="publication-card__summary">A field-programmable, fully passive metasurface that uses electrically morphable ferrofluid cells to reconfigure mmWave propagation for beamforming and joint radar-communication applications.</p>
      <div class="publication-card__links">
        <span class="publication-card__status">Paper coming soon</span>
      </div>
    </div>
  </article>

  <article class="publication-card">
    <div class="publication-card__media">
      <span class="publication-card__venue">SIGCOMM '26</span>
      <img src="{{ '/images/publication_previews/flowform_preview.png' | relative_url }}" alt="FlowForm network of passive metasurfaces extending mmWave coverage" loading="lazy">
    </div>
    <div class="publication-card__body">
      <h3 class="publication-card__title">FlowForm: Scalable Passive Metasurface Network for mmWave Coverage Expansion</h3>
      <p class="publication-card__authors">Wuqiong Zhao, Baicheng Chen, Kai Zheng, Xingyu Chen, Wenqian Zhang, Xinyu Zhang</p>
      <p class="publication-card__publication"><em>In Proceedings of ACM SIGCOMM</em>, 2026</p>
      <p class="publication-card__summary">FlowForm optimizes the placement and design of low-cost passive metasurfaces into directional relay chains and wide-area fan beams, expanding mmWave coverage without power, control channels, or runtime coordination.</p>
      <p class="publication-card__note"><strong>Justin Chen</strong> is acknowledged for contributions to this work.</p>
      <div class="publication-card__links">
        <a href="https://flowform.wqzhao.org/">Project</a>
        <a href="https://dl.acm.org/doi/epdf/10.1145/3789240.3829102">PDF</a>
        <a href="https://doi.org/10.1145/3789240.3829102">DOI</a>
      </div>
    </div>
  </article>

  <article class="publication-card">
    <div class="publication-card__media">
      <span class="publication-card__venue">UIST '25</span>
      <img src="{{ '/images/publication_previews/ultraposer_preview.jpg' | relative_url }}" alt="UltraPoser IMU and ultrasound full-body pose estimation overview" loading="lazy">
    </div>
    <div class="publication-card__body">
      <h3 class="publication-card__title">UltraPoser: Pushing the Limits of IMU-based Full-Body Pose Estimation with Ultrasound Sensing on Consumer Wearables</h3>
      <p class="publication-card__authors">Yadong Li, Shuning Wang, Yongjian Fu, <strong>Justin Chen</strong>, Xingyu Chen, Ju Ren, Xinyu Zhang, Akshay Gadre, Ke Sun</p>
      <p class="publication-card__publication"><em>In ACM Symposium on User Interface Software and Technology</em>, 2025</p>
      <p class="publication-card__summary">Full-body pose estimation that combines wearable IMU measurements with ultrasound sensing on consumer devices.</p>
      <div class="publication-card__links">
        <a href="https://dl.acm.org/doi/epdf/10.1145/3746059.3747714">PDF</a>
        <a href="https://doi.org/10.1145/3746059.3747714">DOI</a>
        <a href="https://youtu.be/P93l3j6mSCw">Video</a>
        <a href="https://github.com/leeyadong/UltraPoser">Code &amp; Data</a>
      </div>
    </div>
  </article>
</div>

## 💻 Projects

<div class='paper-box-simple' markdown="1">
mmWaveX (ongoing)
- Cross polarization radars for real time scene reconstruction

</div>

<div class='paper-box-simple' markdown="1">
mmGrasp (ongoing)
- Flexible mmWave FMCW Radar Sparse Array for flexible Tomographic object perception

</div>

<div class='paper-box-simple' markdown="1">
MetaVenom
- Quasi-Dynamic Metasurrfaces with Ferrofluid

</div>

<div class='paper-box-simple' markdown="1">
FlowForm
- mmWave Metasurface scene design and placement joint optimization for coverage expansion and spatial multiplexing

</div>

<div class='paper-box-simple' markdown="1">
Ultraposer
- IMU + Acoustic Sensing Pose Estimation

</div>

## 🎖 Honors and Awards
- *2023.09 - Present*: &emsp; **Provost Honors, UCSD**
- *2023.06*: &emsp; **UC San Diego Jacobs Engineering Scholarship: a merit based full ride scholarship (one of 30)**

## 📖 Education
- *2023.09 - 2027.06 (expected)*, UC San Diego \\
&emsp; B.S. Electrical Engineering \\
&emsp; GPA: 3.94/4.00
