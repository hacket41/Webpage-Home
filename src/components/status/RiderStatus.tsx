import React from 'react';

const RiderStatus: React.FC = () => (
    <div className="px-4 py-4 bg-green-50 text-green-800 flex items-center gap-3">
        <span className ="text-2xl">🚴‍♂️</span>
        <div>
            <p className='font-semibold'>Your rider's nearby</p>
            <p className='text-sm'>They're almost there - get ready!</p>
        </div>
    </div>
)
export default RiderStatus;
