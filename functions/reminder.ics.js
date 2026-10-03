// GET /reminder.ics?t=HHMM&d=YYYYMMDD
// A daily study reminder as a calendar file (Cloudflare Pages Function).
// iPhones only show the "Add to Calendar" sheet for a calendar file served over https,
// so the app links here instead of building the file in the page. Nothing is stored.
const DAYS = 44; // covers the 44-day promise window (the plan itself is 35 days)

export function onRequestGet({ request }) {
  const u = new URL(request.url);
  const t = u.searchParams.get("t") || "";
  const d = u.searchParams.get("d") || "";
  const okTime = /^([01]\d|2[0-3])[0-5]\d$/.test(t);
  const okDate = /^20\d\d(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/.test(d);
  if (!okTime || !okDate) return new Response("Bad request", { status: 400 });

  const app = u.origin + "/app/";
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//A's SAT Words//Reminder//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:as-sat-" + d + t + "-" + stamp + "@sat.weenu.com",
    "DTSTAMP:" + stamp,
    "DTSTART:" + d + "T" + t + "00", // floating time: fires at this clock time wherever the student is
    "DURATION:PT15M",
    "RRULE:FREQ=DAILY;COUNT=" + DAYS,
    "SUMMARY:A's SAT Words: 15 minutes",
    "DESCRIPTION:Today's words are ready. " + app,
    "URL:" + app,
    "TRANSP:TRANSPARENT", // a to-do style reminder, not busy time
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "DESCRIPTION:Time for today's SAT words",
    "TRIGGER:PT0M",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n") + "\r\n";

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="as-sat-words-reminder.ics"',
      "Cache-Control": "no-store",
    },
  });
}
