import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import UnitValue from "../components/UnitValue";

describe('UnitValue', () => {
  it('renders with correct structure', () => {
    const { container } = render(<UnitValue />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('w-70');
    expect(mainDiv.className).toContain('bg-neutral-925');
    expect(mainDiv.className).toContain('p-4');
    expect(mainDiv.className).toContain('flex');
    expect(mainDiv.className).toContain('flex-col');
    expect(mainDiv.className).toContain('gap-4');
  });

  it('renders tab component with correct options', () => {
    const { container } = render(<UnitValue />);
    
    // Find the specific tab container
    const tabContainer = container.querySelector('.bg-neutral-875.rounded-lg.p-0\\.5');
    expect(tabContainer).toBeDefined();
    
    // Find buttons within the tab container
    const buttons = tabContainer?.querySelectorAll('button');
    expect(buttons?.length).toBe(2);
    
    const percentButton = Array.from(buttons || []).find(btn => btn.textContent === '%');
    const pixelButton = Array.from(buttons || []).find(btn => btn.textContent === 'px');
    
    expect(percentButton).toBeDefined();
    expect(pixelButton).toBeDefined();
    expect(percentButton?.getAttribute('aria-pressed')).toBe('true');
    expect(pixelButton?.getAttribute('aria-pressed')).toBe('false');
  });

  it('renders StepInput with correct label and controls', () => {
    const { container } = render(<UnitValue />);
    const stepInput = screen.getByLabelText('Value');
    expect(stepInput).toBeDefined();
    
    // Find the step input container by its class
    const stepContainer = container.querySelector('.bg-neutral-875.rounded-lg.flex.h-9');
    expect(stepContainer).toBeDefined();
    const stepButtons = stepContainer?.querySelectorAll('button');
    expect(stepButtons?.length).toBe(2); // increment and decrement buttons
  });

  it('renders with default unit state as percent', () => {
    const { container } = render(<UnitValue />);
    
    // Find the tab container and get the percent button
    const tabContainer = container.querySelector('.bg-neutral-875.rounded-lg.p-0\\.5');
    const percentButton = tabContainer?.querySelector('button:first-child');
    
    expect(percentButton).toBeDefined();
    expect(percentButton?.getAttribute('aria-pressed')).toBe('true');
  });
});