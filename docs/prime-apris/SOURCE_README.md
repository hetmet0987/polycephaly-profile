# APRIS 0.07 — Water Rendering Engine
Advanced Photorealistic Rendering & Illumination System

APRIS 0.07 is the first complete water-rendering subsystem for APRIS. It is
implemented as one milestone, but internally split into reusable GLSL modules.

## Added
- Dedicated `gbuffers_water` stage
- Multi-layer procedural waves with domain distortion
- Restrained vertex displacement for large waves
- Height-field surface normal reconstruction for medium/micro detail
- Translucent water base layer
- Water normal + mask buffer in `colortex2`
- Fresnel reflection model using water IOR (~1.333)
- Water-specific SSR integration using the existing APRIS 0.05 system
- Procedural sky/horizon reflection fallback
- Sun-glitter/specular highlight driven by wave normals
- Distance-aware water roughness
- Basic optical-depth / absorption tint
- Underwater-ready volume architecture
- Initial caustics/volume hooks reserved for the next rendering stages
- Temporal-friendly wave functions for future 0.10 accumulation

## Water architecture
```text
                WATER GEOMETRY
                       │
                 Wave Height Field
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
      Vertex Displacement    Surface Normal
             │                   │
             └─────────┬─────────┘
                       ▼
                 WATER G-BUFFER
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        Color        Normal       Mask
          │            │            │
          └────────────┼────────────┘
                       ▼
                    COMPOSITE
                       │
          ┌────────────┼─────────────┐
          ▼            ▼             ▼
         SSR        Fresnel      Sky/Sun
          │            │             │
          └────────────┼─────────────┘
                       ▼
                 Water Lighting
                       │
                       ▼
                    APRIS
```

## Wave model
APRIS 0.07 uses several independent directional wave octaves. Each octave
changes frequency, amplitude and speed, while the sampled position is slightly
distorted by previous waves. The result is intentionally not a copy of any
reference shader implementation.

```text
Large waves
    +
Medium waves
    +
Micro waves
    ↓
Height field
    ↓
Dynamic normal
    ↓
Reflection / glitter
```

## Reflection model
Water combines:
- existing APRIS SSR
- Fresnel weighting
- procedural sky/horizon fallback
- sun-glitter lobe
- distance-aware roughness

SSR remains screen-space, so it cannot see geometry outside the screen. Future
APRIS versions can add stronger fallback/temporal accumulation without changing
the 0.07 water module interface.

## Compatibility note
The water pass relies on Iris-style `gbuffers_water` and standard shaderpack
framebuffer semantics. Exact translucent ordering and built-in availability can
vary by Iris/Minecraft version. If a loader reports a compile error, use the
loader's shader log before changing the rendering architecture.

## Roadmap
0.01 Foundation → 0.02 PBR → 0.03 Shadows → 0.04 AO/Contact Shadows
→ 0.05 Reflections → 0.06 Global Illumination → **0.07 Water Engine**
→ 0.08 Weather → 0.09 Atmosphere/Volumetrics → 0.10 TAA/Denoising
→ 1.00 Photorealism

## Reference policy
APRIS may learn from publicly documented rendering concepts and visual goals,
but its implementation remains independently written. No reference shader
source is copied into APRIS.
