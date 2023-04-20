import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Job from 'App/Models/Job'

export async function getJobs({ response }: HttpContextContract) {
    const jobs = await Job.all()

    // console.log(jobs);
    return response.json(jobs)
}

export async function jobDetails({ params }: HttpContextContract) {
    const jobDetails = await Job.find(params.id)

    if (!jobDetails) {
        return 'Job not found'
    }

    return jobDetails
}

export async function addJob({ request, response }: HttpContextContract) {
    try {
        const jobData = request.only(['job_title', 'jobDescription', 'clothingType', 'jobBudget', 'active', 'user_id'])

        const job = new Job();
        job.title = jobData.job_title;
        job.description = jobData.jobDescription;
        job.category = jobData.clothingType;
        job.budget = jobData.jobBudget;
        job.user_id = jobData.user_id;

        await job.save()
        console.log(job);
        return response.status(201).json(job)
    } catch (error) {
        return response.status(500).json({ message: 'Server error' })
    }

}

export async function update({ params, request, response }: HttpContextContract) {
    const job = await Job.findOrFail(params.id)

    const data = request.only(['title', 'description', 'category', 'budget', 'active'])
    job.merge(data)
    await job.save()

    return response.json(job)
}

export async function destroy({ params, response }: HttpContextContract) {
    const job = await Job.findOrFail(params.id)
    await job.delete()

    return response.json({ message: 'Job deleted successfully' })
}