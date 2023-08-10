import { AnimatePresence } from "framer-motion";

interface iLocationProviderProps {
    children:any;
}

function LocationProvider(props:iLocationProviderProps) {
    return(
        <AnimatePresence>{props.children}</AnimatePresence>
    )
}

export default LocationProvider