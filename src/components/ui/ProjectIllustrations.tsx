import React from "react";

export function EventlyIllustration() {
  return (
    <div className="w-full h-full bg-[#F4F2EE] p-4 text-[#0D0D0D] font-sans flex flex-col justify-between select-none">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0D0D0D] flex items-center justify-center text-[10px] text-white font-mono font-bold">
            E
          </div>
          <span className="text-xs font-semibold tracking-tight">Evently Campus</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-[#77756F]">Active Feed</span>
        </div>
      </div>

      {/* Campus Map & Event Cards Grid */}
      <div className="grid grid-cols-12 gap-3 my-3 grow items-stretch">
        {/* Left: Event Details & Schedule */}
        <div className="col-span-7 bg-white p-3 rounded-lg border border-black/8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase bg-[#E9E6E0] px-1.5 py-0.5 rounded text-[#0D0D0D]">
                Annual Symposium
              </span>
              <span className="text-[9px] font-mono text-[#77756F]">Auditorium A</span>
            </div>
            <h5 className="text-xs font-bold text-[#0D0D0D] mt-1.5 line-clamp-1">
              Tech Innovation Summit 2026
            </h5>
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-[10px] text-[#3A3A3A] bg-[#F4F2EE] px-2 py-1 rounded">
                <span>09:30 AM · Keynote Address</span>
                <span className="font-mono text-[9px] text-[#77756F]">Main Hall</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#3A3A3A] bg-[#F4F2EE] px-2 py-1 rounded">
                <span>11:00 AM · Project Demos</span>
                <span className="font-mono text-[9px] text-[#77756F]">Lab 03</span>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-black/5 flex items-center justify-between text-[10px]">
            <span className="font-mono text-[9px] text-emerald-700">Digital Reg: Open</span>
            <span className="font-semibold text-[#0D0D0D]">320 Registered</span>
          </div>
        </div>

        {/* Right: QR Ticketing & Mini Map */}
        <div className="col-span-5 flex flex-col gap-2">
          {/* QR Pass Box */}
          <div className="bg-white p-2 rounded-lg border border-black/8 flex items-center gap-2">
            {/* SVG QR Code Graphic */}
            <div className="w-10 h-10 bg-[#0D0D0D] p-1 rounded shrink-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-0.5 w-full h-full bg-white p-0.5">
                <div className="bg-black col-span-2 row-span-2" />
                <div className="bg-black" />
                <div className="bg-black" />
                <div className="bg-black" />
                <div className="bg-black col-span-2 row-span-2" />
                <div className="bg-black" />
              </div>
            </div>
            <div className="overflow-hidden">
              <span className="text-[9px] font-mono text-[#77756F] uppercase block">
                QR Ticket
              </span>
              <span className="text-[10px] font-bold text-[#0D0D0D] block truncate">
                #EV-2026-981
              </span>
            </div>
          </div>

          {/* Interactive Campus Map Mock */}
          <div className="bg-[#E9E6E0] rounded-lg border border-black/8 p-2 grow relative flex flex-col justify-between overflow-hidden">
            <span className="text-[9px] font-mono text-[#77756F] uppercase block z-10">
              Campus Map
            </span>
            {/* Subtle Map Paths */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 60">
              <path d="M 10 30 Q 50 10 90 40" stroke="#0D0D0D" strokeWidth="2" fill="none" strokeDasharray="3 3" />
              <rect x="25" y="15" width="20" height="15" fill="#0D0D0D" />
              <rect x="65" y="25" width="25" height="20" fill="#0D0D0D" />
            </svg>
            <div className="flex items-center gap-1 z-10 mt-auto">
              <span className="w-2 h-2 rounded-full bg-[#0D0D0D]" />
              <span className="text-[9px] font-mono text-[#0D0D0D]">Auditorium Pin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative UI Disclaimer */}
      <div className="flex items-center justify-between text-[9px] font-mono text-[#77756F] pt-2 border-t border-black/8">
        <span>Framework: Next.js + Tailwind</span>
        <span className="uppercase font-semibold text-[#0D0D0D]">Illustrative UI</span>
      </div>
    </div>
  );
}

export function RoomifyIllustration() {
  return (
    <div className="w-full h-full bg-[#F4F2EE] p-4 text-[#0D0D0D] font-sans flex flex-col justify-between select-none">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0D0D0D] flex items-center justify-center text-[10px] text-white font-mono font-bold">
            R
          </div>
          <span className="text-xs font-semibold tracking-tight">Roomify Planner</span>
        </div>
        <div className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-black/10">
          Budget: <span className="font-bold text-[#0D0D0D]">$840 / $1,250</span>
        </div>
      </div>

      {/* 2D Room Grid & Canvas */}
      <div className="my-3 grow bg-white rounded-lg border border-black/8 p-3 relative flex items-center justify-center overflow-hidden">
        {/* Floorplan Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(#0D0D0D 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Room Blueprint Boundary */}
        <div className="relative w-4/5 h-4/5 border-2 border-dashed border-[#0D0D0D]/40 rounded-md p-2 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            {/* Sofa Element */}
            <div className="bg-[#E9E6E0] border border-[#0D0D0D] rounded p-1 text-[8px] font-mono shadow-xs">
              <span className="block font-semibold">Sectional Sofa</span>
              <span className="text-[7px] text-[#77756F]">220 × 90 cm · $420</span>
            </div>

            {/* Coffee Table */}
            <div className="w-10 h-7 rounded bg-[#F4F2EE] border border-[#0D0D0D]/70 flex items-center justify-center text-[7px] font-mono">
              Table
            </div>
          </div>

          <div className="flex justify-between items-end">
            {/* Bookshelf */}
            <div className="w-16 h-4 bg-[#0D0D0D] rounded-xs text-[7px] text-white font-mono flex items-center justify-center">
              Bookshelf
            </div>

            {/* Work Desk */}
            <div className="bg-[#E9E6E0] border border-[#0D0D0D] rounded p-1 text-[8px] font-mono">
              <span className="block font-semibold">Workstation</span>
              <span className="text-[7px] text-[#77756F]">140 × 70 cm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex items-center justify-between text-[9px] font-mono text-[#77756F] pt-2 border-t border-black/8">
        <span>Drag & Drop Canvas (React.js)</span>
        <span className="uppercase font-semibold text-[#0D0D0D]">Illustrative UI</span>
      </div>
    </div>
  );
}

export function GlobalMaxIllustration() {
  return (
    <div className="w-full h-full bg-[#F4F2EE] p-4 text-[#0D0D0D] font-sans flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0D0D0D] flex items-center justify-center text-[10px] text-white font-mono font-bold">
            G
          </div>
          <span className="text-xs font-semibold tracking-tight">Global Max Networks</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-[#77756F]">
          <span>Enterprise Portal</span>
        </div>
      </div>

      {/* Services Showcase Cards */}
      <div className="my-3 grow grid grid-cols-3 gap-2">
        <div className="bg-white p-2.5 rounded-lg border border-black/8 flex flex-col justify-between">
          <div>
            <div className="w-5 h-5 rounded bg-[#F4F2EE] border border-black/10 flex items-center justify-center mb-1.5 text-[10px] font-bold">
              01
            </div>
            <h6 className="text-[11px] font-bold text-[#0D0D0D]">Cloud Routing</h6>
            <p className="text-[9px] text-[#77756F] mt-1 leading-tight">
              Multi-region traffic orchestration.
            </p>
          </div>
          <span className="text-[8px] font-mono text-[#0D0D0D] bg-[#F4F2EE] px-1 py-0.5 rounded text-center">
            99.9% Uptime
          </span>
        </div>

        <div className="bg-white p-2.5 rounded-lg border border-black/8 flex flex-col justify-between">
          <div>
            <div className="w-5 h-5 rounded bg-[#F4F2EE] border border-black/10 flex items-center justify-center mb-1.5 text-[10px] font-bold">
              02
            </div>
            <h6 className="text-[11px] font-bold text-[#0D0D0D]">Fiber Infrastructure</h6>
            <p className="text-[9px] text-[#77756F] mt-1 leading-tight">
              Carrier-grade broadband pipes.
            </p>
          </div>
          <span className="text-[8px] font-mono text-[#0D0D0D] bg-[#F4F2EE] px-1 py-0.5 rounded text-center">
            Low Latency
          </span>
        </div>

        <div className="bg-white p-2.5 rounded-lg border border-black/8 flex flex-col justify-between">
          <div>
            <div className="w-5 h-5 rounded bg-[#F4F2EE] border border-black/10 flex items-center justify-center mb-1.5 text-[10px] font-bold">
              03
            </div>
            <h6 className="text-[11px] font-bold text-[#0D0D0D]">Security Suite</h6>
            <p className="text-[9px] text-[#77756F] mt-1 leading-tight">
              DDoS mitigation and SOC monitoring.
            </p>
          </div>
          <span className="text-[8px] font-mono text-[#0D0D0D] bg-[#F4F2EE] px-1 py-0.5 rounded text-center">
            24/7 Ops
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[9px] font-mono text-[#77756F] pt-2 border-t border-black/8">
        <span>Corporate Portal · Next.js / Tailwind</span>
        <span className="uppercase font-semibold text-[#0D0D0D]">Illustrative UI</span>
      </div>
    </div>
  );
}

export function FoodieDropIllustration() {
  return (
    <div className="w-full h-full bg-[#F4F2EE] p-4 text-[#0D0D0D] font-sans flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0D0D0D] flex items-center justify-center text-[10px] text-white font-mono font-bold">
            F
          </div>
          <span className="text-xs font-semibold tracking-tight">Foodie Drop</span>
        </div>
        <div className="text-[10px] font-mono text-[#77756F]">
          API: <span className="text-emerald-700 font-bold">200 OK</span>
        </div>
      </div>

      {/* Food items & Checkout Drawer */}
      <div className="grid grid-cols-12 gap-2.5 my-3 grow items-stretch">
        <div className="col-span-7 bg-white p-2.5 rounded-lg border border-black/8 flex flex-col justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-1.5 rounded bg-[#F4F2EE]">
              <div>
                <span className="text-[10px] font-bold block">Artisan Burger</span>
                <span className="text-[8px] text-[#77756F]">Brioche, aged cheddar</span>
              </div>
              <span className="text-[10px] font-mono font-bold">$11.50</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-[#F4F2EE]">
              <div>
                <span className="text-[10px] font-bold block">Avocado Bowl</span>
                <span className="text-[8px] text-[#77756F]">Quinoa, citrus glaze</span>
              </div>
              <span className="text-[10px] font-mono font-bold">$9.00</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-[#77756F] pt-1">
            Endpoint: GET /api/v1/menu
          </div>
        </div>

        <div className="col-span-5 bg-white p-2.5 rounded-lg border border-black/8 flex flex-col justify-between">
          <div>
            <span className="text-[9px] font-mono uppercase text-[#77756F] block">
              Cart Summary
            </span>
            <div className="mt-1 space-y-0.5 text-[10px]">
              <div className="flex justify-between">
                <span>Items (2)</span>
                <span className="font-mono">$20.50</span>
              </div>
              <div className="flex justify-between text-[#77756F]">
                <span>Delivery</span>
                <span className="font-mono">$2.50</span>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-black/5">
            <div className="flex justify-between text-[11px] font-bold">
              <span>Total</span>
              <span className="font-mono">$23.00</span>
            </div>
            <div className="mt-1.5 py-1 rounded bg-[#0D0D0D] text-white text-[9px] text-center font-medium">
              Checkout
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[9px] font-mono text-[#77756F] pt-2 border-t border-black/8">
        <span>RESTful API Architecture</span>
        <span className="uppercase font-semibold text-[#0D0D0D]">Illustrative UI</span>
      </div>
    </div>
  );
}

export function CareerHubIllustration() {
  return (
    <div className="w-full h-full bg-[#F4F2EE] p-4 text-[#0D0D0D] font-sans flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0D0D0D] flex items-center justify-center text-[10px] text-white font-mono font-bold">
            H
          </div>
          <span className="text-xs font-semibold tracking-tight">Internship & Career Hub</span>
        </div>
        <div className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-black/10">
          Role: Student Candidate
        </div>
      </div>

      {/* Listings & Application Pipeline */}
      <div className="my-3 grow grid grid-cols-12 gap-2.5">
        <div className="col-span-7 bg-white p-2.5 rounded-lg border border-black/8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                Verified Listing
              </span>
              <span className="text-[9px] font-mono text-[#77756F]">Colombo / Remote</span>
            </div>
            <h6 className="text-[11px] font-bold text-[#0D0D0D] mt-1">
              Associate Software Engineer Intern
            </h6>
            <p className="text-[9px] text-[#77756F] mt-0.5">
              Requirements: React, TypeScript, MySQL foundations.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2 pt-1 border-t border-black/5 text-[9px] font-mono">
            <span className="text-[#0D0D0D] font-semibold">MySQL Relational Sync</span>
          </div>
        </div>

        <div className="col-span-5 bg-white p-2.5 rounded-lg border border-black/8 flex flex-col justify-between">
          <span className="text-[9px] font-mono uppercase text-[#77756F] block">
            Status Tracker
          </span>
          <div className="space-y-1 my-1">
            <div className="flex items-center gap-1.5 text-[9px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Applied (May 12)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Resume Reviewed</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Technical Interview</span>
            </div>
          </div>
          <span className="text-[8px] font-mono text-[#77756F] block">
            Auth: JWT Sessions
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[9px] font-mono text-[#77756F] pt-2 border-t border-black/8">
        <span>Web Architecture + MySQL Integration</span>
        <span className="uppercase font-semibold text-[#0D0D0D]">Illustrative UI</span>
      </div>
    </div>
  );
}

export function TaskPlatformIllustration() {
  return (
    <div className="w-full h-full bg-[#F4F2EE] p-4 text-[#0D0D0D] font-sans flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0D0D0D] flex items-center justify-center text-[10px] text-white font-mono font-bold">
            T
          </div>
          <span className="text-xs font-semibold tracking-tight">Sprint & Task Platform</span>
        </div>
        <div className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-black/10">
          Sprint 04 · 78% Done
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="my-3 grow grid grid-cols-3 gap-2">
        {/* To Do */}
        <div className="bg-[#E9E6E0]/60 p-2 rounded-lg border border-black/6 flex flex-col justify-between">
          <span className="text-[8px] font-mono uppercase text-[#77756F] font-bold">
            Backlog (2)
          </span>
          <div className="bg-white p-1.5 rounded border border-black/8 text-[9px] my-1">
            <span className="font-semibold block">Database Migrations</span>
            <span className="text-[8px] text-[#77756F]">P2 · Backend</span>
          </div>
          <span className="text-[8px] font-mono text-[#77756F]">Role: Member</span>
        </div>

        {/* In Progress */}
        <div className="bg-[#E9E6E0]/60 p-2 rounded-lg border border-black/6 flex flex-col justify-between">
          <span className="text-[8px] font-mono uppercase text-[#77756F] font-bold">
            In Progress (1)
          </span>
          <div className="bg-white p-1.5 rounded border border-black/8 text-[9px] my-1">
            <span className="font-semibold block">Dashboard Analytics</span>
            <span className="text-[8px] text-emerald-700">P1 · Active</span>
          </div>
          <span className="text-[8px] font-mono text-[#77756F]">Role: Lead</span>
        </div>

        {/* Completed */}
        <div className="bg-[#E9E6E0]/60 p-2 rounded-lg border border-black/6 flex flex-col justify-between">
          <span className="text-[8px] font-mono uppercase text-[#77756F] font-bold">
            Completed (5)
          </span>
          <div className="bg-white p-1.5 rounded border border-black/8 text-[9px] my-1">
            <span className="font-semibold block">Role Auth Guard</span>
            <span className="text-[8px] text-[#77756F]">Verified</span>
          </div>
          <span className="text-[8px] font-mono text-emerald-700">Merged</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[9px] font-mono text-[#77756F] pt-2 border-t border-black/8">
        <span>Role-Based Dashboards & DB Integration</span>
        <span className="uppercase font-semibold text-[#0D0D0D]">Illustrative UI</span>
      </div>
    </div>
  );
}

export function ProjectIllustration({ concept }: { concept: string }) {
  switch (concept) {
    case "event":
      return <EventlyIllustration />;
    case "room":
      return <RoomifyIllustration />;
    case "corporate":
      return <GlobalMaxIllustration />;
    case "food":
      return <FoodieDropIllustration />;
    case "career":
      return <CareerHubIllustration />;
    case "task":
      return <TaskPlatformIllustration />;
    default:
      return <EventlyIllustration />;
  }
}
