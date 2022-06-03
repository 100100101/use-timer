type TUseTimerArgs = [color?: any, startLogValue?: any]

type TUseTimer = (...args: TUseTimerArgs) => (finishLogValue: any) => void
const msInOneS = 1000
const startLogSymbol = '🏁 '
const finishLogSymbol = '⏱️ '
const logSpaceIndent = '        '
const startLogIdentification = `${logSpaceIndent}${startLogSymbol}`
const finishLogIdentification = `${logSpaceIndent}${finishLogSymbol}`
const logDefaultStyles = 'border: 1px solid #333;'
export const useTimer: TUseTimer = (color, startLogValue) => {
    const isFirstArgString = typeof color === 'string'
    const isFirstArgColor = isFirstArgString && color.charAt(0) === '#'
    const dateNowStart = Date.now()
    let logStyles = logDefaultStyles
    if (isFirstArgColor) {
        logStyles = `${logStyles}color: ${color};`
    }
    startLogValue = startLogValue || (!isFirstArgColor && color)
    if (startLogValue) {
        const isStartLogValueText = typeof startLogValue === 'string'
        if (isStartLogValueText) {
            console.log(
                `%c${startLogIdentification}${startLogValue}`,
                logStyles
            )
        } else {
            console.log(startLogIdentification, startLogValue)
        }
    }
    return finishLogValue => {
        const dateNowFinish = Date.now()
        const timeDiff = dateNowFinish - dateNowStart
        const timeInS = timeDiff / msInOneS

        const isFinishLogValueText = typeof finishLogValue === 'string'
        const timeMessage = `(${timeInS}s)`
        if (isFinishLogValueText) {
            console.log(
                `%c${finishLogIdentification}${finishLogValue}`,
                logStyles,
                timeMessage
            )
            return
        }

        console.log(finishLogIdentification, finishLogValue, timeMessage)
    }
}

// require('./test.ts')
