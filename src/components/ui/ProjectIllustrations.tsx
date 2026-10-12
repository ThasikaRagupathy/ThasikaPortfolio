import React from "react";

export function EventlyIllustration() {
  return (
    <div className="flex h-full w-full select-none flex-col justify-between bg-warm-bg p-4 font-sans text-primary">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-primary font-mono text-[10px] font-bold text-white">
            E
          </div>
          <span className="text-xs font-semibold tracking-tight">
            Evently Campus
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="font-mono text-[10px] text-muted">Active Feed</span>
        </div>
      </div>

      {/* Event Details & Campus Map */}
      <div className="my-3 grid grow grid-cols-12 items-stretch gap-3">
        <div className="col-span-7 flex flex-col justify-between rounded-lg border border-black/10 bg-white p-3">
          <div>
            <div className="flex items-center justify-between gap-1">
              <span className="rounded bg-soft px-1.5 py-0.5 font-mono text-[9px] text-primary">
                Annual Symposium
              </span>
              <span className="font-mono text-[9px] text-muted">
                Auditorium A
              </span>
            </div>
            <h5 className="mt-1.5 line-clamp-1 text-xs font-bold text-primary">
              Tech Innovation Summit 2026
            </h5>
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between gap-1 rounded bg-warm-bg px-2 py-1 text-[10px] text-secondary">
                <span>09:30 AM · Keynote</span>
                <span className="font-mono text-[9px] text-muted">Hall</span>
              </div>
              <div className="flex items-center justify-between gap-1 rounded bg-warm-bg px-2 py-1 text-[10px] text-secondary">
                <span>11:00 AM · Project Demos</span>
                <span className="font-mono text-[9px] text-muted">Lab 03</span>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between gap-1 border-t border-black/5 pt-2 text-[10px]">
            <span className="font-mono text-[9px] text-emerald-700">
              Digital Reg: Open
            </span>
            <span className="font-semibold text-primary">320 Registered</span>
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-2">
          {/* QR Ticket */}
          <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white p-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary p-1">
              <div className="grid h-full w-full grid-cols-4 gap-0.5 bg-white p-0.5">
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="bg-black" />
                <div className="bg-black" />
                <div className="bg-black" />
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="bg-black" />
              </div>
            </div>
            <div className="min-w-0 overflow-hidden">
              <span className="block font-mono text-[9px] uppercase text-muted">
                QR Ticket
              </span>
              <span className="block truncate text-[10px] font-bold text-primary">
                #EV-2026-981
              </span>
            </div>
          </div>

          {/* Campus Map */}
          <div className="relative flex grow flex-col justify-between overflow-hidden rounded-lg border border-black/10 bg-soft p-2">
            <span className="z-10 block font-mono text-[9px] uppercase text-muted">
              Campus Map
            </span>
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 100 60"
              preserveAspectRatio="none"
            >
              <path
                d="M 10 30 Q 50 10 90 40"
                stroke="#0D0D0D"
                strokeWidth="2"
                fill="none"
                strokeDasharray="3 3"
              />
              <rect x="25" y="15" width="20" height="15" fill="#0D0D0D" />
              <rect x="65" y="25" width="25" height="20" fill="#0D0D0D" />
            </svg>
            <div className="z-10 mt-auto flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-[9px] text-primary">
                Auditorium Pin
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-black/10 pt-2 font-mono text-[9px] text-muted">
        <span>Framework: Next.js + Tailwind</span>
        <span className="font-semibold uppercase text-primary">
          Illustrative UI
        </span>
      </div>
    </div>
  );
}

export function RoomifyIllustration() {
  return (
    <div className="flex h-full w-full select-none flex-col justify-between bg-warm-bg p-4 font-sans text-primary">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-primary font-mono text-[10px] font-bold text-white">
            R
          </div>
          <span className="text-xs font-semibold tracking-tight">
            Roomify Planner
          </span>
        </div>
        <div className="rounded border border-black/10 bg-white px-2 py-0.5 font-mono text-[10px]">
          Budget: <span className="font-bold text-primary">$840 / $1,250</span>
        </div>
      </div>

      {/* Room Planner Canvas */}
      <div className="relative my-3 flex grow items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-white p-3">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(#0D0D0D 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />

        <div className="relative flex h-4/5 w-4/5 flex-col justify-between rounded-md border-2 border-dashed border-primary/40 p-2">
          <div className="flex items-start justify-between gap-2">
            <div className="rounded border border-primary bg-soft p-1 font-mono text-[8px] shadow-sm">
              <span className="block font-semibold">Sectional Sofa</span>
              <span className="text-[7px] text-muted">220 × 90 cm · $420</span>
            </div>
            <div className="flex h-7 w-10 items-center justify-center rounded border border-primary/70 bg-warm-bg font-mono text-[7px]">
              Table
            </div>
          </div>

          <div className="flex items-end justify-between gap-2">
            <div className="flex h-4 w-16 items-center justify-center rounded-xs bg-primary font-mono text-[7px] text-white">
              Bookshelf
            </div>
            <div className="rounded border border-primary bg-soft p-1 font-mono text-[8px]">
              <span className="block font-semibold">Workstation</span>
              <span className="text-[7px] text-muted">140 × 70 cm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-black/10 pt-2 font-mono text-[9px] text-muted">
        <span>Drag & Drop Canvas (React.js)</span>
        <span className="font-semibold uppercase text-primary">
          Illustrative UI
        </span>
      </div>
    </div>
  );
}

export function GlobalMaxIllustration() {
  const services = [
    {
      number: "01",
      title: "Cloud Routing",
      description: "Multi-region traffic orchestration.",
      status: "99.9% Uptime",
    },
    {
      number: "02",
      title: "Fiber Infrastructure",
      description: "Carrier-grade broadband pipes.",
      status: "Low Latency",
    },
    {
      number: "03",
      title: "Security Suite",
      description: "DDoS mitigation and SOC monitoring.",
      status: "24/7 Ops",
    },
  ];

  return (
    <div className="flex h-full w-full select-none flex-col justify-between bg-warm-bg p-4 font-sans text-primary">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-primary font-mono text-[10px] font-bold text-white">
            G
          </div>
          <span className="text-xs font-semibold tracking-tight">
            Global Max Networks
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted">
          Enterprise Portal
        </span>
      </div>

      {/* Services */}
      <div className="my-3 grid grow grid-cols-3 gap-2">
        {services.map((service) => (
          <div
            key={service.number}
            className="flex flex-col justify-between rounded-lg border border-black/10 bg-white p-2.5"
          >
            <div>
              <div className="mb-1.5 flex h-5 w-5 items-center justify-center rounded border border-black/10 bg-warm-bg text-[10px] font-bold">
                {service.number}
              </div>
              <h6 className="text-[11px] font-bold text-primary">
                {service.title}
              </h6>
              <p className="mt-1 text-[9px] leading-tight text-muted">
                {service.description}
              </p>
            </div>
            <span className="mt-2 rounded bg-warm-bg px-1 py-0.5 text-center font-mono text-[8px] text-primary">
              {service.status}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-black/10 pt-2 font-mono text-[9px] text-muted">
        <span>Corporate Portal · Next.js / Tailwind</span>
        <span className="font-semibold uppercase text-primary">
          Illustrative UI
        </span>
      </div>
    </div>
  );
}

export function FoodieDropIllustration() {
  return (
    <div className="flex h-full w-full select-none flex-col justify-between bg-warm-bg p-4 font-sans text-primary">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-primary font-mono text-[10px] font-bold text-white">
            F
          </div>
          <span className="text-xs font-semibold tracking-tight">
            Foodie Drop
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted">
          API: <span className="font-bold text-emerald-700">200 OK</span>
        </span>
      </div>

      {/* Menu & Checkout */}
      <div className="my-3 grid grow grid-cols-12 items-stretch gap-2.5">
        <div className="col-span-7 flex flex-col justify-between rounded-lg border border-black/10 bg-white p-2.5">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2 rounded bg-warm-bg p-1.5">
              <div>
                <span className="block text-[10px] font-bold">
                  Artisan Burger
                </span>
                <span className="text-[8px] text-muted">
                  Brioche, aged cheddar
                </span>
              </div>
              <span className="font-mono text-[10px] font-bold">$11.50</span>
            </div>
            <div className="flex items-center justify-between gap-2 rounded bg-warm-bg p-1.5">
              <div>
                <span className="block text-[10px] font-bold">
                  Avocado Bowl
                </span>
                <span className="text-[8px] text-muted">
                  Quinoa, citrus glaze
                </span>
              </div>
              <span className="font-mono text-[10px] font-bold">$9.00</span>
            </div>
          </div>
          <div className="pt-2 font-mono text-[9px] text-muted">
            Endpoint: GET /api/v1/menu
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-between rounded-lg border border-black/10 bg-white p-2.5">
          <div>
            <span className="block font-mono text-[9px] uppercase text-muted">
              Cart Summary
            </span>
            <div className="mt-1 space-y-0.5 text-[10px]">
              <div className="flex justify-between gap-1">
                <span>Items (2)</span>
                <span className="font-mono">$20.50</span>
              </div>
              <div className="flex justify-between gap-1 text-muted">
                <span>Delivery</span>
                <span className="font-mono">$2.50</span>
              </div>
            </div>
          </div>
          <div className="border-t border-black/5 pt-2">
            <div className="flex justify-between gap-1 text-[11px] font-bold">
              <span>Total</span>
              <span className="font-mono">$23.00</span>
            </div>
            <div className="mt-1.5 rounded bg-primary py-1 text-center text-[9px] font-medium text-white">
              Checkout
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-black/10 pt-2 font-mono text-[9px] text-muted">
        <span>RESTful API Architecture</span>
        <span className="font-semibold uppercase text-primary">
          Illustrative UI
        </span>
      </div>
    </div>
  );
}

export function CareerHubIllustration() {
  return (
    <div className="flex h-full w-full select-none flex-col justify-between bg-warm-bg p-4 font-sans text-primary">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-primary font-mono text-[10px] font-bold text-white">
            H
          </div>
          <span className="text-xs font-semibold tracking-tight">
            Internship & Career Hub
          </span>
        </div>
        <span className="rounded border border-black/10 bg-white px-2 py-0.5 font-mono text-[10px]">
          Role: Student Candidate
        </span>
      </div>

      {/* Listings & Pipeline */}
      <div className="my-3 grid grow grid-cols-12 gap-2.5">
        <div className="col-span-7 flex flex-col justify-between rounded-lg border border-black/10 bg-white p-2.5">
          <div>
            <div className="flex items-center justify-between gap-1">
              <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[9px] text-emerald-800">
                Verified Listing
              </span>
              <span className="font-mono text-[9px] text-muted">
                Colombo / Remote
              </span>
            </div>
            <h6 className="mt-1 text-[11px] font-bold text-primary">
              Associate Software Engineer Intern
            </h6>
            <p className="mt-1 text-[9px] text-muted">
              Requirements: React, TypeScript, MySQL foundations.
            </p>
          </div>
          <div className="mt-2 border-t border-black/5 pt-1 font-mono text-[9px]">
            <span className="font-semibold text-primary">
              MySQL Relational Sync
            </span>
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-between rounded-lg border border-black/10 bg-white p-2.5">
          <span className="block font-mono text-[9px] uppercase text-muted">
            Status Tracker
          </span>
          <div className="my-1 space-y-1">
            <div className="flex items-center gap-1.5 text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Applied (May 12)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Resume Reviewed</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Technical Interview</span>
            </div>
          </div>
          <span className="block font-mono text-[8px] text-muted">
            Auth: JWT Sessions
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-black/10 pt-2 font-mono text-[9px] text-muted">
        <span>Web Architecture + MySQL Integration</span>
        <span className="font-semibold uppercase text-primary">
          Illustrative UI
        </span>
      </div>
    </div>
  );
}

export function TaskPlatformIllustration() {
  const columns = [
    {
      title: "Backlog (2)",
      task: "Database Migrations",
      detail: "P2 · Backend",
      footer: "Role: Member",
      completed: false,
    },
    {
      title: "In Progress (1)",
      task: "Dashboard Analytics",
      detail: "P1 · Active",
      footer: "Role: Lead",
      completed: false,
    },
    {
      title: "Completed (5)",
      task: "Role Auth Guard",
      detail: "Verified",
      footer: "Merged",
      completed: true,
    },
  ];

  return (
    <div className="flex h-full w-full select-none flex-col justify-between bg-warm-bg p-4 font-sans text-primary">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-primary font-mono text-[10px] font-bold text-white">
            T
          </div>
          <span className="text-xs font-semibold tracking-tight">
            TaskFlow
          </span>
        </div>
        <div className="rounded border border-black/10 bg-white px-2 py-0.5 font-mono text-[10px]">
          Sprint 04 · 78% Done
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="my-3 grid grow grid-cols-3 gap-2">
        {columns.map((column) => (
          <div
            key={column.title}
            className="flex min-w-0 flex-col justify-between rounded-lg border border-black/10 bg-soft/60 p-2"
          >
            <span className="font-mono text-[8px] font-bold uppercase text-muted">
              {column.title}
            </span>

            <div className="my-2 rounded border border-black/10 bg-white p-1.5 text-[9px]">
              <span className="block wrap-break-word font-semibold">
                {column.task}
              </span>
              <span
                className={`text-[8px] ${
                  column.completed
                    ? "text-emerald-700"
                    : column.title.startsWith("In Progress")
                      ? "text-emerald-700"
                      : "text-muted"
                }`}
              >
                {column.detail}
              </span>
            </div>

            <span
              className={`font-mono text-[8px] ${
                column.completed ? "text-emerald-700" : "text-muted"
              }`}
            >
              {column.footer}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 border-t border-black/10 pt-2 font-mono text-[9px] text-muted">
        <span>Role-Based Dashboards & DB Integration</span>
        <span className="font-semibold uppercase text-primary">
          Illustrative UI
        </span>
      </div>
    </div>
  );
}

export function ProjectIllustration({
  concept,
}: {
  concept: string;
}) {
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