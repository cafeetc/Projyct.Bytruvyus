/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-[#262822]">
      <iframe
        src="/puppyt.html"
        title="Bitruvius Puppyt FK Pose & Rig Studio"
        className="w-full h-full border-0 flex-1"
      />
    </div>
  );
}
