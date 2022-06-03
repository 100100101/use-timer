import { useTimer } from './'

const timer1 = useTimer()
timer1('timer string message')
//
const timer2 = useTimer('#330e2e')
timer2('timer string message colored')
//
const timer3 = useTimer()
timer3({ objectMessage: true })
//
const timer4 = useTimer('#00ff40')
timer4({ tryObjectMessageColored: true })
//
const timer5 = useTimer('Start message without color')
timer5('Finish message')
//
const timer6 = useTimer('#6a00ff', 'Start message with color')
timer6('Finish message with color')
//
const timer7 = useTimer('#ddff00', { tryStartObjectColored: true })
timer7({ tryFinishObjectColored: true })

export default null
