import '../App.css'
import './Changelog.css'

export default function Changelog()
{
    return (
        <div className="Changelog">
            <h3>ChangeLog</h3>
            <div type="Separator" />
            <RawChangelog />

        </div>
    )
}

export function RawChangelog()
{
    return (
        <div>
            <h3>v0.2.0</h3>
            <h3>Added config Sidebar</h3>
            <h3>Added Config System</h3>
            <h3>Added Translation system (Actually not working)</h3>
            <h3>v0.1.0</h3>
            <h3>Added new UI Change system</h3>
            <h3>Added notification system</h3>
            <h3>Added log system</h3>
            <h3>v0.0.0</h3>
            <h3>Added LoadingScreen</h3>
            <h3>Added Game Download/Play button</h3>
        </div>
    )
}