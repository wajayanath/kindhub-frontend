 <template>
	<div class="container">
		<h2>All Registered Students</h2>
		<hr/>
		<div class="row">
            <div class="items col-xs-12 col-sm-6 col-md-6 col-lg-6 clearfix"
				 v-for="record in records">
               <div class="info-block block-info clearfix">
                    <h4>Name: {{ record.first_name }} {{ record.last_name }}</h4>
                    <h4>Gender : {{ record.gender }} | year : {{ record.joined_year }}</h4>

                </div>
				<div>
					<router-link class="btn btn-primary" :to="'/edit/'+record.id">Edit</router-link>
					<a class="btn btn-danger"
						@click="deleteRecord($event)"
						v-bind:id="record.id">Delete</a>
				</div>
				<hr/>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			records: []
		}
	},
	created() {
		this.$http.get("http://kind_hub.test/api/students")
			.then(function (response) {
				this.records = response.body.students
			})
	},
	methods: {
		deleteRecord(event) {
			this.$http.delete("http://kind_hub.test/api/students/"+event.target.id)
			.then(function (response) {
				var position = this.records.findIndex(function (element) {
					return element.id == event.target.id;
				});
				this.records.splice(position, 1)
			})
		}
	}
}
</script>
