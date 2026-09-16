---
layout: home
hero:
  name: "Yakisugi"
  tagline: "A Japanese-inspired mod that adds charred wood planks, traditional blocks, items, and weapons"
  image:
    src: /assets/hero_yakisugi.gif
    alt: Axperty
  actions:
    - theme: alt
      text: Download on CurseForge
      link: https://www.curseforge.com/minecraft/mc-mods/yakisugi
    - theme: alt
      text: Modrinth (waiting approval)
      link: #
features:
  - title: Minecraft Mods
    details: Over 10 projects released on CurseForge and Modrinth with over 40 million downloads.
    link: /projects
    linkText: View Projects
  - title: Open Source
    details: Source code from all projects are under the MIT License.
  - title: Contribute
    details: Code suggestions, bug reports, texture improvements, or translations are always welcome.
    link: https://github.com/axperty
    linkText: See on GitHub
---

## News & Updates

<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<ul style="list-style-type: none; padding: 0;">
  <li v-for="post of posts" :key="post.url" style="margin-bottom: 1rem;">
    <a :href="post.url" style="font-size: 1.2rem; font-weight: bold; text-decoration: none;">{{ post.title }}</a>
    <span style="display: block; font-size: 0.9em; color: var(--vp-c-text-2);">{{ new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
  </li>
</ul>
