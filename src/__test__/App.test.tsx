import { render } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import App from "../App";

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it('renders with correct background and layout classes', () => {
    const { container } = render(<App />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('w-screen');
    expect(mainDiv.className).toContain('h-screen');
    expect(mainDiv.className).toContain('bg-neutral-850');
    expect(mainDiv.className).toContain('flex');
    expect(mainDiv.className).toContain('items-center');
    expect(mainDiv.className).toContain('justify-center');
  });

  it('renders UnitValue component', () => {
    const { container } = render(<App />);
    
    // Check if UnitValue component is rendered with its unique class combinations
    const unitValueContainer = container.querySelector('.bg-neutral-925.p-4.flex.flex-col');
    expect(unitValueContainer).toBeDefined();

    // Find the tab container
    const tabContainer = container.querySelector('.bg-neutral-875.rounded-lg.p-0\\.5');
    expect(tabContainer).toBeDefined();
    
    // Verify the unit options are present
    const buttons = tabContainer?.querySelectorAll('button');
    expect(buttons?.length).toBe(2);
    const buttonTexts = Array.from(buttons || []).map(btn => btn.textContent);
    expect(buttonTexts).toContain('%');
    expect(buttonTexts).toContain('px');
  });
});
