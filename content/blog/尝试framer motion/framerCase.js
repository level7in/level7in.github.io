/*
 * @Author: level7in
 * @Date: 2021-04-06 16:52:40
 * @LastEditTime: 2021-04-07 15:49:05
 * @LastEditors: level7in
 * @Description:
 * @FilePath: /level7in.github.io/content/blog/尝试framer motion/framerCase.js
 */
import React, { useState } from "react"
import { motion } from "framer-motion"
export function SpringCase(params) {
  // 持续时间
  const [duration, setDuration] = useState(0.8)
  // 反弹，0没有弹跳，1非常有弹力。
  const [damping, setDamping] = useState(0)
  // 阻尼
  const [mass, setMass] = useState(10)
  // 刚度，较高的值将产生更多的突然运动
  const [stiffness, setStiffness] = useState(100)
  // 速度，弹簧的初始速度
  const [velocity, setVelocity] = useState(2)
  const [restSpeed, setRestSpeed] = useState(0.01)
  const [restDelta, setRestDelta] = useState(0.01)
  return (
    <div>
      <motion.div
        style={{
          width: "15px",
          height: "15px",
          background: "red",
          borderRadius: "50%",
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 300 }}
        transition={{
          type: "spring",
          duration,
          damping,
          mass,
          stiffness,
          velocity,
          restSpeed,
          restDelta,
        }}
      />
      <Range
        name="duration"
        min={0}
        max={100}
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        step={0.1}
      />
      <Range
        name="damping"
        min={0}
        max={100}
        value={damping}
        onChange={(e) => setDamping(e.target.value)}
        step={0.1}
      />
      <Range
        name="mass"
        min={0}
        max={1}
        value={mass}
        onChange={(e) => setMass(e.target.value)}
        step={0.1}
      />
      <Range
        name="stiffness"
        min={0}
        max={100}
        value={stiffness}
        onChange={(e) => setStiffness(e.target.value)}
        step={1}
      />
      <Range
        name="velocity"
        min={0}
        max={100}
        value={velocity}
        onChange={(e) => setVelocity(e.target.value)}
        step={1}
      />
      <Range
        name="restSpeed"
        min={0}
        max={100}
        value={restSpeed}
        onChange={(e) => setRestSpeed(e.target.value)}
        step={0.1}
      />
      <Range
        name="restDelta"
        min={0}
        max={100}
        value={restDelta}
        onChange={(e) => setRestDelta(e.target.value)}
        step={0.1}
      />
    </div>
  )
}
function Range(props) {
  return (
    <>
      <input type="range" {...props} onChange={props.onChange} />
      <label htmlFor={props.name}>
        {props.name} {props.value}
      </label>
      <br />
    </>
  )
}
