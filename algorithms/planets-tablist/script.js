// Cache DOM elements
const tabs = document.querySelectorAll(`[role="tab"]`);
const panels = document.querySelectorAll(`[role="tabpanel"]`);

// Enable tab functionality 
tabs.forEach(tab => { 
  tab.addEventListener("click", () => {
    
    // Reset state
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));
    panels.forEach(p => p.hidden = true);
    
    // Update State
    tab.setAttribute("aria-selected", "true");

    // Identify and select the matching panel
    const associatedPanel = tab.getAttribute("aria-controls");
    const panel = document.getElementById(associatedPanel);

    // Reveal active panel
    panel.hidden = false;
  });
});
