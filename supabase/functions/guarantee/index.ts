// 44-day completion promise. Called by the app (signed-in user) after day 44 of the program.
// Rule: if all 350 words are not yet started AND the student studied on >= 30 of the first 44 days,
// add one free month (once). Deploy: supabase functions deploy guarantee
import { createClient } from "npm:@supabase/supabase-js@2";

const URL = Deno.env.get("SUPABASE_URL")!;
const admin = createClient(URL, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
const PROMISE_DAYS = 44, MIN_STUDY_DAYS = 30, EXTRA_DAYS = 30, DAY = 86_400_000;
const WORDS = new Set<string>(["unimportant", "comparable", "recognizable", "infallible", "inspect", "elevate", "reciprocate", "tedious", "lucrative", "atypical", "generalization", "intrigue", "surpass", "distraction", "circulate", "disengage", "cultivate", "unintelligible", "conclusive", "conceive", "elaborate", "inaccessible", "vigorous", "communicative", "depict", "speculate", "accumulate", "consequential", "assert", "abstraction", "exemplify", "inference", "articulate", "confine", "contaminate", "indifference", "simplify", "turbulent", "influential", "deceive", "complication", "mitigate", "migrate", "classify", "intriguing", "antiquity", "contentious", "contradictory", "obtain", "contradiction", "grammatical", "estimation", "revolutionize", "dispense", "plausible", "utterance", "profound", "prominent", "persevere", "generalize", "innate", "spontaneous", "divergence", "deviation", "variance", "susceptible", "logical", "demonstrative", "validate", "simulate", "prevalent", "comprehension", "accelerate", "coherent", "resentment", "rationality", "contradict", "illustrate", "essence", "undermine", "similarity", "definite", "disturbance", "volition", "compensate", "accumulation", "substitution", "tolerate", "proponent", "approximate", "trivial", "dependence", "implicit", "mediate", "initiation", "buttress", "devotion", "thrive", "dictate", "affirm", "comparative", "approximation", "converge", "conceptualize", "confound", "ponder", "denote", "arbitrary", "conception", "competent", "incoherent", "indulgent", "irritable", "tolerable", "resolute", "unspeakable", "momentary", "irritate", "inseparable", "destitute", "instantaneous", "sympathize", "mischievous", "unsatisfactory", "proportionate", "instinctive", "apprehensive", "innumerable", "incomprehensible", "incessant", "desolate", "intolerable", "precede", "consequent", "grievous", "empirical", "agreeable", "complacent", "exaggerate", "strenuous", "humiliate", "objectionable", "impenetrable", "inconceivable", "superfluous", "absorption", "observant", "resultant", "eloquent", "suggestive", "objection", "competence", "scripture", "occurrence", "frivolous", "repulsive", "theorize", "virtuous", "diligent", "systematic", "corollary", "courteous", "indiscriminate", "superstitious", "conscientious", "hospitable", "infectious", "philosophical", "monotonous", "perilous", "aristocratic", "meditate", "unmistakable", "harmonious", "venerable", "manipulate", "expectant", "prodigious", "numerical", "improbable", "emphatic", "inexplicable", "tumultuous", "attentive", "considerate", "illuminate", "reassure", "inquisitive", "tyrannical", "inanimate", "palpable", "dissolve", "uneventful", "habitable", "unscrupulous", "circumstantial", "treacherous", "annihilate", "submissive", "sensible", "corroborate", "vindictive", "reconstruct", "preclude", "advisable", "deficient", "friction", "luminous", "differentiate", "indignant", "benevolent", "indispensable", "involuntary", "figurative", "preposterous", "reiterate", "audacious", "scandalous", "prevalence", "concede", "advantageous", "metaphysical", "illustrious", "uncontrollable", "ingenious", "unavoidable", "conspicuous", "affectionate", "languish", "intervene", "withstand", "subjective", "alienate", "connotation", "impulsive", "poignant", "prophetic", "meditative", "indescribable", "rebellious", "practicable", "justification", "observable", "momentous", "delirious", "temperate", "malignant", "stagnant", "proverbial", "pronounce", "triumphant", "originate", "tenacious", "designation", "intensify", "conceivable", "unsuitable", "impartial", "argumentative", "explanatory", "philanthropic", "ferocious", "frustrate", "incredulous", "whimsical", "erroneous", "consummate", "obscure", "allowable", "precarious", "imaginable", "proposition", "correspondence", "extravagant", "aggravate", "conceal", "sumptuous", "exorbitant", "inflexible", "ludicrous", "indefinite", "spacious", "capricious", "obliterate", "industrious", "persuasive", "contemplate", "morality", "dispose", "persist", "retaliate", "wondrous", "nonsensical", "justifiable", "disperse", "complimentary", "negligent", "pernicious", "insatiable", "diversify", "insurmountable", "methodical", "liberate", "likewise", "exemplary", "flagrant", "inexcusable", "laborious", "expressive", "intelligible", "unfathomable", "miraculous", "unattainable", "unprofitable", "irrelevant", "distinguishable", "attainable", "pleasurable", "periodical", "persecute", "indifferent", "indestructible", "projection", "differentiation", "assimilate", "fracture", "vigilant", "boisterous", "predominant", "appreciative", "fantastical", "insidious", "facilitate", "oppressive", "preparatory", "populous", "enviable", "conform", "conditional", "infrequent", "apologetic", "liable", "instability", "insolent", "authoritative", "instructive", "oblivious", "prudential", "symbolic", "reinstate"]);
const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" };
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const userClient = createClient(URL, anon, { global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } } });
  const { data: { user } } = await userClient.auth.getUser();
  if (!user) return json({ error: "not signed in" }, 401);

  const { data: ent } = await admin.from("entitlements").select("*").eq("user_id", user.id).maybeSingle();
  if (!ent?.program_start) return json({ status: null });
  if (ent.guarantee_status) return json({ status: ent.guarantee_status });
  const start = new Date(ent.program_start), end = new Date(start.getTime() + PROMISE_DAYS * DAY);
  if (Date.now() < end.getTime()) return json({ status: "pending" });

  const { data: prog } = await admin.from("progress").select("state").eq("user_id", user.id).maybeSingle();
  const st: any = prog?.state ?? {};
  const learned = Object.keys(st.srs ?? {}).filter((w) => WORDS.has(w)).length;
  // log keys are the student's local dates (YYYY-MM-DD); allow one day of timezone slack at each end
  const from = new Date(start.getTime() - DAY).toISOString().slice(0, 10);
  const to = new Date(end.getTime() + DAY).toISOString().slice(0, 10);
  const studyDays = Object.entries(st.log ?? {}).filter(([k, v]: [string, any]) =>
    k >= from && k < to && ((v?.a ?? 0) > 0 || (v?.n ?? 0) > 0)).length;

  let status: string, expires_at = ent.expires_at;
  if (learned >= WORDS.size) status = "completed";
  else if (studyDays >= MIN_STUDY_DAYS) {
    status = "extended";
    expires_at = new Date(Math.max(Date.now(), new Date(ent.expires_at).getTime()) + EXTRA_DAYS * DAY).toISOString();
  } else status = "not_eligible";

  await admin.from("entitlements").update({ guarantee_status: status, expires_at, updated_at: new Date().toISOString() }).eq("user_id", user.id);
  return json({ status, studyDays, learned });
});
