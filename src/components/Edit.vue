<template>
    	<div class="container">
		<h2>Edit Student Details</h2>
		<hr/>
		<form class="form-horizontal" @submit.prevent="updateData" >
			<div class="form-group">
				<label class="col-sm-4 control-label">First Name</label>
				<div class="col-sm-6">
					<input type="text"
								 name="firstName"
                                 v-model="record.first_name"
					             class="form-control"
								 v-validate="'required'"
								 placeholder="First Name"
								 autofocus>
					<div v-show="errors.has('firstName')"  class="help block alert alert-danger">
						{{ errors.first('firstName') }}
					</div>
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-4 control-label">Last Name</label>
				<div class="col-sm-6">
					<input type="text"
								 name="lastName"
                                 v-model="record.last_name"
					             class="form-control"
								 v-validate="'required'"
								 placeholder="Last Name">
					<div v-show="errors.has('lastName')"  class="help block alert alert-danger">
						{{ errors.first('lastName') }}
					</div>
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-4 control-label">Gender</label>
				<div class="col-sm-6">
					<select class="form-control"
									name="gender"
                                    v-model="record.gender">
							<option>M</option>
							<option>F</option>
						</select>
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-4 control-label">Year</label>
				<div class="col-sm-6">
					<select class="form-control"
                             v-model="record.joined_year">
							<option>2019</option>
							<option>2018</option>
							<option>2017</option>
						</select>
				</div>
			</div>

			<div class="form-group">
				<div class="col-sm-offset-4 col-sm-6">
					<button type="submit"
									class="btn btn-default"
									>Update</button>
				</div>
			</div>

		</form>
	</div>
</template>

<script>
export default {
    created() {
        this.getData();
    },
    data() {
        return {
            record: {
            }
        }
    },
    methods: {
        getData() {
            this.$http.get("http://kind_hub.test/api/students/"+this.$route.params.id+"/edit")
			.then(function (response) {
				this.record = response.body.student;
			})
		},
		updateData() {
			this.$http.put("http://kind_hub.test/api/students/"+this.$route.params.id, this.record)
			.then(function (response) {
				this.$router.push('/list')
			})
		}
    }
}
</script>
