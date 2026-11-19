// Traduzioni dell'app (Dove vado + Diario). La lingua viene dal browser o dal selettore,
// salvata in localStorage. Le note degli spot restano come le ha scritte l'utente.
const I18N = {
  it: {
    _name: "Italiano", _locale: "it-IT", _compass: ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"],
    nav_diary: "Diario", nav_forecast: "Dove vado", brand_sub: "surf forecast · litorale romano", loading: "Carico le previsioni…",
    alternatives: "Alternative", scroll: "scorri →", detail: "Dettaglio", detail_sub: "voto nella giornata · confronto modelli",
    foot: "Voto 0–5 dalla media di tutti i modelli (onde: ECMWF, Copernicus, MeteoFrance, DWD, GFS · vento: ICON, AROME, HARMONIE, ECMWF, AIFS, ARPEGE, UKMO, GFS) e dalle regole di ogni spot, tarato sulle sessioni del diario. Costa © OpenStreetMap.",
    prev_day: "Giorno prima", prev_hour: "Ora prima", next_hour: "Ora dopo", next_day: "Giorno dopo", now: "Adesso",
    tl_best: "Altezza barra = voto migliore tra gli spot · tratteggio = notte · giallo = temporali", tl_spot: "Voto di {name} ora per ora · tratteggio = notte",
    tl_until: "previsioni fino a {d}", best_hourly: "★ Migliore ora per ora", at_hour: "ore", day: "☀ giorno", night_light: "☾ notte · luce dalle {h}",
    best_spot: "Lo spot migliore", least_bad: "Il meno peggio", nothing_surfable: "A quest'ora nessuno spot è surfabile", tr_down: "in scaduta", tr_down_title: "Il mare cala dopo una mareggiata più grossa nelle 36 ore prima", level: "Livello", lv_principiante: "Principiante", lv_intermedio: "Intermedio", lv_esperto: "Esperto", too_big_level: "grosso per il tuo livello", surf_yes: "Surfabile", surf_maybe: "Al limite", surf_no: "Non surfabile", chosen_spot: "Spot scelto · {r}° su {n}",
    v_flat: "Molto scarso", v_poor: "Scarso",
    why_flat: "Flat o quasi", why_small: "Troppo piccolo", why_big: "Troppo grosso", why_onshore: "Mare attivo, vento da mare",
    why_windy: "Troppo vento", why_short: "Mare corto e disordinato", why_settling: "Ancora formato dopo la mareggiata", why_blocked: "La swell non entra", why_angle: "Direzione poco favorevole", v_fair: "Surfabile", v_good: "Buono", v_epic: "Epico",
    wind: "Vento", wave: "Onda", period: "Periodo", swell: "Swell", models_range: "modelli {a}–{b} {u}",
    p_long: "lungo, buona energia", p_mid: "medio", p_short: "corto, mare vivo", from: "{p} s da {d}", gusts: "raff. {g}",
    agree_high: "Modelli d'accordo", agree_mid: "Modelli in parte d'accordo", agree_low: "Modelli in disaccordo", agree_count: "media di {a} modelli onda e {b} vento", wind_range: "vento {a}–{b} {u}", wind_sea: "mare da vento",
    night_note: "È notte: le condizioni valgono per quell'ora, ma serve luce per entrare.", no_forecast: "Nessuna previsione per quest'ora.",
    show_best: "← Mostra il migliore", map_swell: "SWELL", map_wind: "VENTO", legend_swell: "swell", legend_wind: "vento",
    per_model_swell: "Swell per modello", per_model_wind: "Vento per modello",
    cmp_wave: "Onda totale · {u} · periodo", cmp_swell: "Swell primario · {u} · periodo", cmp_wind: "Vento · {u} · raffiche",
    cmp_hour: "ora", cmp_loading: "Carico il confronto modelli…", wind_word: "vento",
    diary_title: "Diario sessioni", new_session: "Nuova sessione", edit_session: "Modifica sessione", spot: "Spot", date: "Data",
    time_start: "Ora (inizio)", duration: "Durata (min)", kind: "Tipo", kind_surf: "Surfata", kind_check: "Solo vista",
    height: "Altezza percepita ({u})", quality: "Voto del mare", sea_hint: "Vota il mare, non la tua session: le onde che vedi, le pareti e come surfano gli altri.", sea_unset: "Non votato: sposta il cursore", sea_0: "Flat o non surfabile", sea_1: "Ci si alza a fatica", sea_2: "Ci si alza, ma niente manovre", sea_25: "I più bravi fanno una manovra già alla prima onda", sea_3: "Una manovra pulita a onda", sea_35: "Due manovre o più di 5 secondi di surfata", sea_4: "Tre manovre o più", sea_45: "Pareti lunghe, tante manovre", sea_5: "Questo è oceano", q_flat: "Flat", q_epic: "5 epica", wind_on_spot: "Vento sullo spot",
    wind_strength: "Intensità vento", w_assente: "Assente", w_offshore: "Offshore", w_cross: "Cross", w_onshore: "Onshore",
    s_assente: "Assente", s_debole: "Debole", s_medio: "Medio", s_forte: "Forte", notes: "Note",
    notes_ph: "Com'era? Set, frequenza, marea, folla, tavola...", photo: "Foto (facoltativa)", save: "Salva", cancel_edit: "Annulla modifica",
    models_then: "Cosa dicevano i modelli a quell'ora", no_model_data: "Nessun dato dei modelli per quest'ora nell'archivio.",
    th_waves: "Onde", th_total: "Totale", th_swell2: "Swell 2", th_windsea: "Mare da vento", th_mean: "Media", th_gusts: "Raffiche",
    th_from: "Da", th_onspot: "Sullo spot", sessions: "Sessioni ({n})",
    no_sessions: "Ancora nessuna sessione. Puoi inserire anche quelle passate che ricordi: le condizioni dei modelli ci sono da novembre 2024.",
    chip_check: "solo vista", chip_flat: "flat", chip_wind: "vento {w}", models_line: "Modelli", edit: "Modifica", delete: "Elimina",
    confirm_delete: "Eliminare questa sessione?", save_failed: "Salvataggio non riuscito", wind_n: "vento {s} {u} {d}", windsea_n: "mare da vento {h} {u}",
    language: "Lingua", out_of5: "SU 5", photo_choose: "📷 Scegli foto", storm_warn: "⚡ Possibili temporali: li prevedono {n} modelli su {t}", history_btn: "Visualizza storico ({n})", history_title: "Storico · {name}", close: "Chiudi", route_parking: "Itinerario al parcheggio", route_spot: "Itinerario allo spot", air: "Aria", water: "Acqua", suit: "Muta", suit_none: "costume o lycra", suit_shorty: "shorty o 2 mm", suit_32: "3/2", suit_43: "4/3", suit_54: "5/4 e calzari", suit_54h: "5/4 con calzari e cappuccio", name_opt: "Nome (facoltativo)", report_sent: "Grazie! Segnalazione inviata.", q_conditions: "condizioni", q_spot: "qualità spot", q_btn: "Qualità spot", nav_quiz: "Allenala", q_title: "Qualità degli spot", q_intro: "Quanto è bella l'onda di ogni spot quando funziona, secondo te. Cambia la classifica dello spot migliore e resta solo su questo browser.", q_default: "predefinita", q_reset: "Torna al valore predefinito", q_reset_all: "Ripristina tutti", q_mine: "tua", report_btn: "+ Aggiungi segnalazione", report_title: "Segnalazione · {name}", report_save: "Salva segnalazione", report_login: "Per lasciare una segnalazione devi aver fatto l'accesso a claude.ai.", report_error: "Non sono riuscito a salvare: riprova tra poco.", report_from_page: "dalla pagina", unit_height: "Unità altezza", unit_wind: "Unità vento", knots: "nodi",
  },
  en: {
    _name: "English", _locale: "en-GB", _compass: ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],
    nav_diary: "Logbook", nav_forecast: "Where to surf", brand_sub: "surf forecast · Rome coast", loading: "Loading forecast…",
    alternatives: "Alternatives", scroll: "scroll →", detail: "Detail", detail_sub: "score through the day · model comparison",
    foot: "0–5 score from the average of all models (waves: ECMWF, Copernicus, MeteoFrance, DWD, GFS · wind: ICON, AROME, HARMONIE, ECMWF, AIFS, ARPEGE, UKMO, GFS) and each spot's rules, calibrated on logged sessions. Coastline © OpenStreetMap.",
    prev_day: "Previous day", prev_hour: "Previous hour", next_hour: "Next hour", next_day: "Next day", now: "Now",
    tl_best: "Bar height = best score across spots · hatched = night · yellow = storms", tl_spot: "{name} score hour by hour · hatched = night",
    tl_until: "forecast until {d}", best_hourly: "★ Best hour by hour", at_hour: "at", day: "☀ day", night_light: "☾ night · light from {h}",
    best_spot: "Best spot", least_bad: "Least bad", nothing_surfable: "Nothing is surfable at this hour", tr_down: "dropping swell", tr_down_title: "The sea is dropping after a bigger swell in the previous 36 hours", level: "Level", lv_principiante: "Beginner", lv_intermedio: "Intermediate", lv_esperto: "Expert", too_big_level: "big for your level", surf_yes: "Surfable", surf_maybe: "Marginal", surf_no: "Not surfable", chosen_spot: "Selected spot · #{r} of {n}",
    v_flat: "Very poor", v_poor: "Poor",
    why_flat: "Flat", why_small: "Too small", why_big: "Too big", why_onshore: "Active sea, onshore wind",
    why_windy: "Too windy", why_short: "Short, messy sea", why_settling: "Still unsettled after the storm", why_blocked: "Swell doesn't reach it", why_angle: "Unfavourable swell direction", v_fair: "Surfable", v_good: "Good", v_epic: "Epic",
    wind: "Wind", wave: "Wave", period: "Period", swell: "Swell", models_range: "models {a}–{b} {u}",
    p_long: "long, good energy", p_mid: "medium", p_short: "short, choppy", from: "{p} s from {d}", gusts: "gusts {g}",
    agree_high: "Models agree", agree_mid: "Models partly agree", agree_low: "Models disagree", agree_count: "average of {a} wave and {b} wind models", wind_range: "wind {a}–{b} {u}", wind_sea: "wind sea",
    night_note: "It's night: conditions apply to that hour, but you need daylight to paddle out.", no_forecast: "No forecast for this hour.",
    show_best: "← Show the best", map_swell: "SWELL", map_wind: "WIND", legend_swell: "swell", legend_wind: "wind",
    per_model_swell: "Swell by model", per_model_wind: "Wind by model",
    cmp_wave: "Total wave · {u} · period", cmp_swell: "Primary swell · {u} · period", cmp_wind: "Wind · {u} · gusts",
    cmp_hour: "hour", cmp_loading: "Loading model comparison…", wind_word: "wind",
    diary_title: "Session logbook", new_session: "New session", edit_session: "Edit session", spot: "Spot", date: "Date",
    time_start: "Start time", duration: "Duration (min)", kind: "Type", kind_surf: "Surfed", kind_check: "Checked only",
    height: "Wave height seen ({u})", quality: "Sea rating", sea_hint: "Rate the sea, not your own session: the waves you see, the walls and how the others surf.", sea_unset: "Not rated: move the slider", sea_0: "Flat or unsurfable", sea_1: "Hard to even stand up", sea_2: "You stand up, but no turns", sea_25: "Good surfers do a turn on their first wave", sea_3: "One clean turn per wave", sea_35: "Two turns or a ride longer than 5 seconds", sea_4: "Three turns or more", sea_45: "Long walls, lots of turns", sea_5: "This is ocean", q_flat: "Flat", q_epic: "5 epic", wind_on_spot: "Wind at the spot",
    wind_strength: "Wind strength", w_assente: "None", w_offshore: "Offshore", w_cross: "Cross", w_onshore: "Onshore",
    s_assente: "None", s_debole: "Light", s_medio: "Moderate", s_forte: "Strong", notes: "Notes",
    notes_ph: "How was it? Sets, frequency, tide, crowd, board...", photo: "Photo (optional)", save: "Save", cancel_edit: "Cancel edit",
    models_then: "What the models said at that hour", no_model_data: "No model data for this hour in the archive.",
    th_waves: "Waves", th_total: "Total", th_swell2: "Swell 2", th_windsea: "Wind sea", th_mean: "Mean", th_gusts: "Gusts",
    th_from: "From", th_onspot: "At the spot", sessions: "Sessions ({n})",
    no_sessions: "No sessions yet. You can also add past ones you remember: model data goes back to November 2024.",
    chip_check: "checked only", chip_flat: "flat", chip_wind: "wind {w}", models_line: "Models", edit: "Edit", delete: "Delete",
    confirm_delete: "Delete this session?", save_failed: "Save failed", wind_n: "wind {s} {u} {d}", windsea_n: "wind sea {h} {u}",
    language: "Language", out_of5: "OUT OF 5", photo_choose: "📷 Choose photo", storm_warn: "⚡ Thunderstorms possible: {n} of {t} models expect them", history_btn: "View history ({n})", history_title: "History · {name}", close: "Close", route_parking: "Directions to parking", route_spot: "Directions to the spot", air: "Air", water: "Water", suit: "Wetsuit", suit_none: "boardshorts or lycra", suit_shorty: "shorty or 2 mm", suit_32: "3/2", suit_43: "4/3", suit_54: "5/4 and booties", suit_54h: "5/4 with booties and hood", name_opt: "Name (optional)", report_sent: "Thanks! Report sent.", q_conditions: "conditions", q_spot: "spot quality", q_btn: "Spot quality", nav_quiz: "Train it", q_title: "Spot quality", q_intro: "How good each spot's wave is when it works, in your opinion. It changes the best-spot ranking and stays only in this browser.", q_default: "default", q_reset: "Back to default", q_reset_all: "Reset all", q_mine: "yours", report_btn: "+ Add a report", report_title: "Report · {name}", report_save: "Save report", report_login: "Sign in to claude.ai to leave a report.", report_error: "Couldn't save it: try again in a moment.", report_from_page: "from the page", unit_height: "Height unit", unit_wind: "Wind unit", knots: "knots",
  },
  es: {
    _name: "Español", _locale: "es-ES", _compass: ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"],
    nav_diary: "Diario", nav_forecast: "Dónde surfear", brand_sub: "surf forecast · costa de Roma", loading: "Cargando la previsión…",
    alternatives: "Alternativas", scroll: "desliza →", detail: "Detalle", detail_sub: "nota durante el día · comparación de modelos",
    foot: "Nota 0–5 a partir de la media de todos los modelos (olas: ECMWF, Copernicus, MeteoFrance, DWD, GFS · viento: ICON, AROME, HARMONIE, ECMWF, AIFS, ARPEGE, UKMO, GFS) y de las reglas de cada spot, calibrada con las sesiones del diario. Costa © OpenStreetMap.",
    prev_day: "Día anterior", prev_hour: "Hora anterior", next_hour: "Hora siguiente", next_day: "Día siguiente", now: "Ahora",
    tl_best: "Altura de la barra = mejor nota entre los spots · rayado = noche", tl_spot: "Nota de {name} hora a hora · rayado = noche",
    tl_until: "previsión hasta {d}", best_hourly: "★ El mejor hora a hora", at_hour: "a las", day: "☀ día", night_light: "☾ noche · luz desde las {h}",
    best_spot: "El mejor spot", least_bad: "El menos malo", nothing_surfable: "A esta hora ningún spot es surfeable", tr_down: "mar bajando", tr_down_title: "El mar baja tras un temporal más grande en las 36 horas anteriores", level: "Nivel", lv_principiante: "Principiante", lv_intermedio: "Intermedio", lv_esperto: "Experto", too_big_level: "grande para tu nivel", surf_yes: "Surfeable", surf_maybe: "Al límite", surf_no: "No surfeable", chosen_spot: "Spot elegido · {r}º de {n}",
    v_flat: "Muy flojo", v_poor: "Flojo",
    why_flat: "Plano", why_small: "Demasiado pequeño", why_big: "Demasiado grande", why_onshore: "Mar activo, viento de mar",
    why_windy: "Demasiado viento", why_short: "Mar corto y desordenado", why_settling: "Aún revuelto tras el temporal", why_blocked: "El swell no entra", why_angle: "Dirección poco favorable", v_fair: "Surfeable", v_good: "Bueno", v_epic: "Épico",
    wind: "Viento", wave: "Ola", period: "Periodo", swell: "Swell", models_range: "modelos {a}–{b} {u}",
    p_long: "largo, buena energía", p_mid: "medio", p_short: "corto, mar picado", from: "{p} s del {d}", gusts: "rachas {g}",
    agree_high: "Modelos de acuerdo", agree_mid: "Modelos en parte de acuerdo", agree_low: "Modelos en desacuerdo", agree_count: "media de {a} modelos de olas y {b} de viento", wind_range: "viento {a}–{b} {u}", wind_sea: "mar de viento",
    night_note: "Es de noche: las condiciones valen para esa hora, pero necesitas luz para entrar.", no_forecast: "No hay previsión para esta hora.",
    show_best: "← Ver el mejor", map_swell: "SWELL", map_wind: "VIENTO", legend_swell: "swell", legend_wind: "viento",
    per_model_swell: "Swell por modelo", per_model_wind: "Viento por modelo",
    cmp_wave: "Ola total · {u} · periodo", cmp_swell: "Swell principal · {u} · periodo", cmp_wind: "Viento · {u} · rachas",
    cmp_hour: "hora", cmp_loading: "Cargando la comparación de modelos…", wind_word: "viento",
    diary_title: "Diario de sesiones", new_session: "Nueva sesión", edit_session: "Editar sesión", spot: "Spot", date: "Fecha",
    time_start: "Hora de inicio", duration: "Duración (min)", kind: "Tipo", kind_surf: "Surfeada", kind_check: "Solo vista",
    height: "Altura percibida ({u})", quality: "Nota del mar", sea_hint: "Valora el mar, no tu sesión: las olas que ves, las paredes y cómo surfean los demás.", sea_unset: "Sin nota: mueve el cursor", sea_0: "Plano o no surfeable", sea_1: "Cuesta ponerse de pie", sea_2: "Te pones de pie, pero sin maniobras", sea_25: "Los buenos hacen una maniobra ya en la primera ola", sea_3: "Una maniobra limpia por ola", sea_35: "Dos maniobras o más de 5 segundos de ola", sea_4: "Tres maniobras o más", sea_45: "Paredes largas, muchas maniobras", sea_5: "Esto es océano", q_flat: "Plano", q_epic: "5 épica", wind_on_spot: "Viento en el spot",
    wind_strength: "Intensidad del viento", w_assente: "Nada", w_offshore: "Offshore", w_cross: "Cross", w_onshore: "Onshore",
    s_assente: "Nada", s_debole: "Flojo", s_medio: "Medio", s_forte: "Fuerte", notes: "Notas",
    notes_ph: "¿Cómo estaba? Series, frecuencia, marea, gente, tabla...", photo: "Foto (opcional)", save: "Guardar", cancel_edit: "Cancelar edición",
    models_then: "Lo que decían los modelos a esa hora", no_model_data: "No hay datos de modelos para esta hora en el archivo.",
    th_waves: "Olas", th_total: "Total", th_swell2: "Swell 2", th_windsea: "Mar de viento", th_mean: "Media", th_gusts: "Rachas",
    th_from: "De", th_onspot: "En el spot", sessions: "Sesiones ({n})",
    no_sessions: "Todavía no hay sesiones. También puedes añadir las pasadas que recuerdes: hay datos de modelos desde noviembre de 2024.",
    chip_check: "solo vista", chip_flat: "plano", chip_wind: "viento {w}", models_line: "Modelos", edit: "Editar", delete: "Eliminar",
    confirm_delete: "¿Eliminar esta sesión?", save_failed: "No se pudo guardar", wind_n: "viento {s} {u} {d}", windsea_n: "mar de viento {h} {u}",
    language: "Idioma", out_of5: "DE 5", photo_choose: "📷 Elegir foto", storm_warn: "⚡ Posibles tormentas: las prevén {n} de {t} modelos", history_btn: "Ver historial ({n})", history_title: "Historial · {name}", close: "Cerrar", route_parking: "Cómo llegar al aparcamiento", route_spot: "Cómo llegar al spot", air: "Aire", water: "Agua", suit: "Neopreno", suit_none: "bañador o lycra", suit_shorty: "shorty o 2 mm", suit_32: "3/2", suit_43: "4/3", suit_54: "5/4 y escarpines", suit_54h: "5/4 con escarpines y capucha", name_opt: "Nombre (opcional)", report_sent: "¡Gracias! Parte enviado.", q_conditions: "condiciones", q_spot: "calidad del spot", q_btn: "Calidad spot", nav_quiz: "Entrénala", q_title: "Calidad de los spots", q_intro: "Lo buena que es la ola de cada spot cuando funciona, según tú. Cambia la clasificación del mejor spot y se queda solo en este navegador.", q_default: "predeterminada", q_reset: "Volver al valor predeterminado", q_reset_all: "Restablecer todos", q_mine: "tuya", report_btn: "+ Añadir un parte", report_title: "Parte · {name}", report_save: "Guardar parte", report_login: "Inicia sesión en claude.ai para dejar un parte.", report_error: "No se pudo guardar: inténtalo de nuevo en un momento.", report_from_page: "desde la página", unit_height: "Unidad de altura", unit_wind: "Unidad de viento", knots: "nudos",
  },
};

const LANG = (() => {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* storage non disponibile */ }
  const browser = (navigator.language || "it").slice(0, 2);
  return I18N[saved] ? saved : I18N[browser] ? browser : "it";
})();
const LOCALE = I18N[LANG]._locale;

// Unità di misura scelte dall'utente: i dati restano in metri e nodi, si converte solo per mostrarli.
const UNITS = (() => {
  let u = {};
  try { u = JSON.parse(localStorage.getItem("units") || "{}"); } catch (e) { /* storage non disponibile */ }
  return { h: u.h === "ft" ? "ft" : "m", w: u.w === "kmh" ? "kmh" : "kn" };
})();
const H_UNIT = UNITS.h, W_UNIT = UNITS.w === "kmh" ? "km/h" : "kn";
const toH = v => v == null ? null : UNITS.h === "ft" ? v * 3.28084 : v;   // metri -> unità scelta
const fromH = v => v == null ? null : UNITS.h === "ft" ? v / 3.28084 : v; // unità scelta -> metri
const toW = v => v == null ? null : UNITS.w === "kmh" ? v * 1.852 : v;    // nodi -> unità scelta
const fmtNum = (v, d) => v == null || isNaN(v) ? "–" : Number(v).toFixed(d);
const fH = (v, d = 1) => fmtNum(toH(v), d);   // altezza formattata (senza unità)
const fW = v => fmtNum(toW(v), 0);            // vento formattato (senza unità)

function t(key, vars = {}) {
  const s = I18N[LANG][key] ?? I18N.it[key] ?? key;
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
}

// Voto del mare (0-5, mezzi punti): si vota il mare, non la propria session. Scala decisa da chi surfa:
// 2.5 = i più bravi fanno una manovra già alla prima onda, 3.5 = due manovre o più di 5 s di surfata,
// 4 = tre manovre o più, 5 = oceano.
const SEA_SCALE = [[0.5, "sea_0"], [1.5, "sea_1"], [2.5, "sea_2"], [3, "sea_25"], [3.5, "sea_3"],
                   [4, "sea_35"], [4.5, "sea_4"], [5, "sea_45"], [Infinity, "sea_5"]];
const seaText = q => t(SEA_SCALE.find(([limit]) => q < limit)[1]);
// Stelle con il mezzo punto: 2.5 -> ★★½☆☆
function seaStars(q) {
  const full = Math.floor(q), half = q - full >= 0.5 ? 1 : 0;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - half);
}
// Slider del voto: parte "non votato" finché non si tocca; mostra sotto il significato del valore.
function seaRange(id, value = null) {
  return `<div class="sea-range"><input type="range" id="${id}" min="0" max="5" step="0.5"
      value="${value ?? 2.5}" class="${value == null ? "unset" : ""}" aria-describedby="${id}-text">
    <output id="${id}-text">${value == null ? t("sea_unset") : `<b>${value}</b> · ${seaText(value)}`}</output></div>`;
}
function bindSeaRange(id) {
  const input = document.getElementById(id), out = document.getElementById(id + "-text");
  input.addEventListener("input", () => {
    input.classList.remove("unset");
    out.innerHTML = `<b>${Number(input.value)}</b> · ${seaText(Number(input.value))}`;
  });
}
const seaValue = id => { const el = document.getElementById(id); return el.classList.contains("unset") ? null : Number(el.value); };

// Testi statici: data-i18n (testo), data-i18n-title, data-i18n-placeholder; più il selettore lingua.
function applyI18n() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-title]").forEach(el => el.title = t(el.dataset.i18nTitle));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  // Interruttori a pillola (al posto dei menù a tendina nativi): lingua e unità
  const pill = (label, options, current, onPick) => {
    const el = document.createElement("span");
    el.className = "seg-pill";
    el.setAttribute("role", "group");
    el.setAttribute("aria-label", label);
    el.innerHTML = options.map(([value, text]) =>
      `<button type="button" data-v="${value}" class="${value === current ? "on" : ""}" aria-pressed="${value === current}">${text}</button>`).join("");
    el.onclick = e => { const b = e.target.closest("button"); if (b && b.dataset.v !== current) onPick(b.dataset.v); };
    return el;
  };
  const store = (key, value) => { try { localStorage.setItem(key, value); } catch (e) { /* ignora */ } location.reload(); };
  const lang = document.getElementById("lang");
  if (lang) {
    lang.replaceChildren(pill(t("language"), Object.keys(I18N).map(k => [k, k.toUpperCase()]), LANG, v => store("lang", v)));
  }
  const units = document.getElementById("units");
  if (units) {
    const save = (h, w) => store("units", JSON.stringify({ h, w }));
    units.replaceChildren(
      pill(t("unit_height"), [["m", "m"], ["ft", "ft"]], UNITS.h, v => save(v, UNITS.w)),
      pill(t("unit_wind"), [["kn", "kn"], ["kmh", "km/h"]], UNITS.w, v => save(UNITS.h, v)));
  }
}
