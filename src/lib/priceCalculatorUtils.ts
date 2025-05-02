const calculateExtraCharge = (extraWeight: number) => {
  const tier1 = Math.min(20, extraWeight)
  const tier2 = Math.min(20, Math.max(0, extraWeight - 20))
  const tier3 = Math.max(0, extraWeight - 40)
  return tier1 * 1 + tier2 * 1.5 + tier3 * 2
}
const ILLUSTRATIONS = [
  { max: 20, image: '/basket-levels/level-1.jpg' },
  { max: 40, image: '/basket-levels/level-2.jpg' },
  { max: 60, image: '/basket-levels/level-3.jpg' },
  { max: 80, image: '/basket-levels/level-4.jpg' },
  { max: 100, image: '/basket-levels/level-5.jpg' },
]

export { calculateExtraCharge, ILLUSTRATIONS }
