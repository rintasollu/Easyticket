# TODO: Make HeroSection Responsive for Mobile

## Steps from Approved Plan

1. **[ ] Update Header for Mobile**
   - Hide social icons (hidden sm:flex).
   - Add hamburger icon (from /icons/Hamburger.svg) visible only on mobile (block sm:hidden), positioned right.
   - Reduce header padding on mobile (p-4 sm:p-6).

2. **[ ] Hide Decorative Images on Mobile**
   - Add `hidden sm:block` to Ellipse, Rectangle, Vector images to prevent overlap/clutter.

3. **[ ] Adjust Trusted By Section for Mobile**
   - Container: Add `overflow-x-auto` and `flex-nowrap` on mobile for horizontal scroll.
   - Reduce logo sizes: w-12 h-8 on mobile, gap-x-2.
   - Adjust "Trustedby.svg" position and container padding (px-4 sm:px-8).

4. **[ ] Stack Action Buttons Vertically on Mobile**
   - Change flex to `flex-col sm:flex-row`.
   - Center "Atau" image.
   - Reduce button image widths: w-44 h-auto on mobile, sm:w-220.
   - Ensure label ("Free registration fee!") is visible and centered above button on mobile.

5. **[ ] Handle Ticket Cards on Mobile**
   - Hide on mobile (hidden sm:block) to match screenshot (no visible cards).
   - If shown, stack vertically without rotations.

6. **[ ] Overall Section Adjustments**
   - Reduce padding: pt-12 pb-24 sm:pt-20 sm:pb-40.
   - Ensure hero image: max-w-full sm:max-w-2xl.
   - Verify z-index and positioning.

## Followup Steps
- Run `npm run dev` to start server.
- Use browser to test on mobile viewport (e.g., 375x667).
- Check for overlaps, scrolling, and touch interactions.
- Update this TODO as steps complete.
