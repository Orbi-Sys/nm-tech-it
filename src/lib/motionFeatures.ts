// Wird von MotionProvider erst nach dem ersten Rendern nachgeladen, damit die
// Animations-Engine nicht im kritischen Ladepfad der Seite liegt.
import { domMax } from "framer-motion";

export default domMax;
