import React, { useMemo } from "react"
import { useAppState } from "../../../001_provider/001_AppStateProvider"

export type CrossFadeEndRateRowProps = {
}

export const CrossFadeEndRateRow = (_props: CrossFadeEndRateRowProps) => {
    const appState = useAppState()

    const crossFadeEndRateRow = useMemo(() => {
        return (
            <div className="body-row split-3-7 left-padding-1 guided">
                <div className="body-item-title left-padding-1">Cross Fade End Rate</div>
                <div className="body-input-container">
                    <input type="number" min={0} max={1} step={0.1} value={appState.serverSetting.serverSetting.crossFadeEndRate} onChange={(e) => {
                        appState.serverSetting.updateServerSettings({ ...appState.serverSetting.serverSetting, crossFadeEndRate: Number(e.target.value) })
                    }} />
                </div>
            </div>
        )
    }, [appState.serverSetting.serverSetting, appState.serverSetting.updateServerSettings])

    return crossFadeEndRateRow
}