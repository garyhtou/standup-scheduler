# Standup Scheduler

Send automated standup reminders to your team via Microsoft Teams at specified
intervals (daily, MWF, etc).

## Usage

1. `git clone https://github.com/garyhtou/standup-scheduler.git`
2. Set environment variables
	- `RECCURENCE`: A cron expression (see [`node-cron` docs](https://github.com/node-cron/node-cron#cron-syntax))
	- `ENDPOINT`: A Microsoft Teams [**Incoming Webhook**](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook) endpoint
3. `yarn install`
4. `yarn start`

Or, deploy with Docker (preferred option).
