import React from "react"
import PinsAnalogLabel from "./PinsAnalogLabel"
import PinsAnalogItem from "./PinsAnalogItem"
import { useSimulatorContext } from "../contexts/SimulatorContext"
import { isMega, isNano } from "../../src/utils/service"

const PinsAnalogBar = () => {
  const {
    analogPin0,
    analogPin1,
    analogPin2,
    analogPin3,
    analogPin4,
    analogPin5,
    analogPin6,
    analogPin7,
    analogPin8,
    analogPin9,
    analogPin10,
    analogPin11,
    analogPin12,
    analogPin13,
    analogPin14,
    boardType,
  } = useSimulatorContext()

  const isMegaBoard = isMega(boardType)
  const isNanoBoard = isNano(boardType)

  return (
    <div style={styles.container}>
      <div style={styles.noScrollbar}>
        <div style={{ width: isMegaBoard ? "850px" : "550px", ...styles.wrapper }}>
          <PinsAnalogLabel />
          <PinsAnalogItem value={analogPin0} />
          <PinsAnalogItem value={analogPin1} />
          <PinsAnalogItem value={analogPin2} />
          <PinsAnalogItem value={analogPin3} />
          <PinsAnalogItem value={analogPin4} />
          <PinsAnalogItem value={analogPin5} />
          {(isMegaBoard || isNanoBoard) && (
            <>
              <PinsAnalogItem value={analogPin6} />
              <PinsAnalogItem value={analogPin7} />
            </>
          )}
          {isMegaBoard && (
            <>
              <PinsAnalogItem value={analogPin8} />
              <PinsAnalogItem value={analogPin9} />
              <PinsAnalogItem value={analogPin10} />
              <PinsAnalogItem value={analogPin11} />
              <PinsAnalogItem value={analogPin12} />
              <PinsAnalogItem value={analogPin13} />
              <PinsAnalogItem value={analogPin14} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "26px",
    overflowY: "hidden",
  },
  noScrollbar: {
    overflowX: "scroll",
    overflowY: "hidden",
    outline: "none",
    height: "80px",
  },
  wrapper: {
    float: "left",
  },
}

export default PinsAnalogBar
