// A's SAT Words: deployment settings. Leave supabaseUrl empty to run in local demo mode.
window.AS_CONFIG = {
  supabaseUrl: "https://hlwqsddmuoxmhvhoqrwo.supabase.co",
  supabaseAnonKey: "sb_publishable_uSjRP0MfZAMjJq12fYo_7g_3nVjldnz", // publishable (public) key

  paddleEnv: "sandbox",       // "sandbox" while testing, "production" when live
  paddleClientToken: "test_963cc0b8697690ae5efdb3e4198", // Paddle > Developer tools > Authentication > client-side token
  priceProgram: "pri_01m3sgvynzp2t918q4355ayk6m",         // pri_... (3-month program; add a KRW price override in Paddle)
  priceExtension: "pri_01m3sh040y3hqvn21pp4bfytbg",         // pri_... (30-day review pass)

  // Labels shown in the app. Paddle checkout always shows the exact local price and tax.
  displayPrices: {
    en: { program: "$29 launch price (reg. $39)", extension: "$7.99" },
    ko: { program: "39,000원 출시가 (정가 49,000원)", extension: "9,900원" }
  }
};
