import { ChannelDetailForm } from "@/components";
import { channelDetailsFormdata } from "@/types";

async function handleChannelDetailsForm(data: channelDetailsFormdata) {
	"use server";
	console.log(data);
	setTimeout(() => {
		console.log("Data saved");
	}, 2000);
}

export default async function Details() {
	return (
		<div className="pt-32 pb-24 px-24 flex justify-center items-center">
			<ChannelDetailForm
				handleChannelDetailsForm={handleChannelDetailsForm}
			/>
		</div>
	);
}
